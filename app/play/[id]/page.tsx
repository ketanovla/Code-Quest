'use client';

import { useState, use, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { levels } from '@/lib/levels';
import { useGame } from '@/lib/game-context';
import { CodeEditor } from '@/components/CodeEditor';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Play, Lightbulb, CheckCircle2, XCircle, Terminal, Sparkles, HelpCircle, ArrowRight, RotateCcw, Map, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';
import { CodingContent, QuizContent } from '@/lib/levels/types';

export default function PlayLevel({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const levelId = parseInt(resolvedParams.id, 10);
  const level = levels.find(l => l.id === levelId);
  const router = useRouter();
  const { completeLevel, completedLevels, selectedLanguage } = useGame();

  const [code, setCode] = useState('');
  const [output, setOutput] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  
  const [aiHint, setAiHint] = useState<string | null>(null);
  const [isAskingAi, setIsAskingAi] = useState(false);

  // Quiz state
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    if (!selectedLanguage) {
      router.push('/');
    } else if (level && level.type === 'coding') {
      const content = level.content as Record<string, CodingContent>;
      setCode(content[selectedLanguage]?.startingCode || '');
    }
  }, [selectedLanguage, level, router]);

  if (!level || !selectedLanguage) {
    return <div className="p-8 text-center text-zinc-400">Loading level...</div>;
  }

  const isQuiz = level.type === 'quiz';
  const quizContent = isQuiz ? (level.content as QuizContent) : null;
  const codingContent = !isQuiz ? (level.content as Record<string, CodingContent>)[selectedLanguage] : null;

  const availableLevels = levels.filter(l => l.type === 'quiz' || (l.content as any)[selectedLanguage]);
  const currentIndex = availableLevels.findIndex(l => l.id === levelId);
  const nextLevel = currentIndex >= 0 && currentIndex < availableLevels.length - 1 ? availableLevels[currentIndex + 1] : null;
  const prevLevel = currentIndex > 0 ? availableLevels[currentIndex - 1] : null;

  if (!isQuiz && !codingContent) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans p-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white mb-4">Level Not Available</h1>
        <p className="text-zinc-400 mb-8">This level is not yet available for {selectedLanguage.toUpperCase()}.</p>
        <Link href="/" className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-white font-medium transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  const runCode = async () => {
    if (!codingContent) return;
    setIsRunning(true);
    setOutput('');
    setIsSuccess(null);
    setAiHint(null);

    try {
      let finalOutput = '';

      if (selectedLanguage === 'javascript') {
        const logs: string[] = [];
        const originalLog = console.log;
        console.log = (...args) => {
          logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
        };
        try {
          const fn = new Function(code);
          fn();
          finalOutput = logs.join('\n');
        } catch (error: any) {
          finalOutput = `Error: ${error.message}`;
        } finally {
          console.log = originalLog;
        }
      } else {
        // Execute non-JS code using Gemini
        if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
          throw new Error("API key missing. Cannot execute non-JS languages.");
        }
        const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `You are a strict code execution environment for ${selectedLanguage}. 
          Execute the following code and return ONLY the standard output. 
          If there is a compilation or runtime error, return ONLY the error message starting with "Error:". 
          Do not explain. Do not use markdown formatting. Do not output anything else.
          
          Code to execute:
          ${code}`,
          config: {
            temperature: 0.0,
          }
        });
        finalOutput = response.text || '';
      }

      setOutput(finalOutput || 'Code executed successfully, but nothing was printed.');
      
      const expected = codingContent.expectedOutput;
      const success = finalOutput.trim() === expected.trim();

      setIsSuccess(success);
      if (success) {
        completeLevel(level.id, level.xpReward);
      }

    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
      setIsSuccess(false);
    } finally {
      setIsRunning(false);
    }
  };

  const askAiTutor = async () => {
    if (!codingContent) return;
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      setAiHint("AI Tutor is currently sleeping (API key missing).");
      return;
    }
    
    setIsAskingAi(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a friendly, encouraging AI coding tutor for absolute beginners playing a game called CodeQuest.
        The user is learning ${selectedLanguage} on level "${level.title}".
        Task: "${codingContent.task}"
        Their current code:
        \`\`\`${selectedLanguage}
        ${code}
        \`\`\`
        Output/Error they got: ${output}
        
        Provide a short, gentle hint to help them understand what's wrong or what to do next. 
        DO NOT give them the exact code solution. Explain the concept simply. Keep it under 3 sentences. Format with markdown if needed.`,
      });
      setAiHint(response.text || "I'm not sure how to help with that, try looking closely at the lesson!");
    } catch (error) {
      console.error(error);
      setAiHint("Oops, my magical connection was interrupted. Try asking again!");
    } finally {
      setIsAskingAi(false);
    }
  };

  const handleQuizSubmit = () => {
    if (selectedOption === null || !quizContent) return;
    
    const success = selectedOption === quizContent.correctAnswerIndex;
    setIsSuccess(success);
    setShowExplanation(true);
    
    if (success) {
      completeLevel(level.id, level.xpReward);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-zinc-950">
      <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-1">
            {prevLevel ? (
              <Link href={`/play/${prevLevel.id}`} className="p-1.5 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors" title="Previous Level">
                <ChevronLeft className="w-5 h-5" />
              </Link>
            ) : (
              <div className="p-1.5 text-zinc-800"><ChevronLeft className="w-5 h-5" /></div>
            )}
            {nextLevel ? (
              <Link href={`/play/${nextLevel.id}`} className="p-1.5 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors" title="Next Level">
                <ChevronRight className="w-5 h-5" />
              </Link>
            ) : (
              <div className="p-1.5 text-zinc-800"><ChevronRight className="w-5 h-5" /></div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">Level {level.id}</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">{level.difficulty}</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 capitalize">{isQuiz ? 'Quiz' : selectedLanguage}</span>
            </div>
            <h1 className="text-xl font-bold text-zinc-100 mt-1">{level.title}</h1>
          </div>
        </div>
        {!isQuiz && (
          <div className="flex items-center gap-4">
            <button 
              onClick={askAiTutor}
              disabled={isAskingAi}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/20 transition-colors font-medium text-sm disabled:opacity-50"
            >
              {isAskingAi ? <Sparkles className="w-4 h-4 animate-spin" /> : <Lightbulb className="w-4 h-4" />}
              Ask AI Tutor
            </button>
            <button 
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center gap-2 px-6 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold transition-colors disabled:opacity-50"
            >
              {isRunning ? <Sparkles className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
              {isRunning ? 'Running...' : 'Run Code'}
            </button>
          </div>
        )}
      </header>

      <div className="flex flex-1 overflow-hidden">
        <div className={`${isQuiz ? 'w-full max-w-3xl mx-auto' : 'w-1/3 min-w-[350px] border-r border-zinc-800'} bg-zinc-900/30 overflow-y-auto p-6 flex flex-col gap-8`}>
          <section>
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">The Story</h2>
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 leading-relaxed">
              {level.story}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">The Lesson</h2>
            <div className="prose prose-invert prose-sm max-w-none">
              <ReactMarkdown>{isQuiz ? quizContent!.lesson : codingContent!.lesson}</ReactMarkdown>
            </div>
          </section>

          {!isQuiz && (
            <section className="mt-auto">
              <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">Your Task</h2>
                <p className="text-emerald-100/90 font-medium">{codingContent!.task}</p>
              </div>
            </section>
          )}

          {isQuiz && quizContent && (
            <section className="mt-4">
              <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                <h2 className="text-lg font-bold text-zinc-100 mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-indigo-400" />
                  {quizContent.question}
                </h2>
                
                <div className="flex flex-col gap-3">
                  {quizContent.options.map((option, index) => {
                    const isSelected = selectedOption === index;
                    const isCorrect = index === quizContent.correctAnswerIndex;
                    const showStatus = showExplanation;
                    
                    let buttonClass = "text-left p-4 rounded-lg border transition-all ";
                    
                    if (showStatus) {
                      if (isCorrect) {
                        buttonClass += "bg-emerald-500/20 border-emerald-500/50 text-emerald-100";
                      } else if (isSelected && !isCorrect) {
                        buttonClass += "bg-red-500/20 border-red-500/50 text-red-100";
                      } else {
                        buttonClass += "bg-zinc-800/50 border-zinc-700/50 text-zinc-400 opacity-50";
                      }
                    } else {
                      if (isSelected) {
                        buttonClass += "bg-indigo-500/20 border-indigo-500/50 text-indigo-100";
                      } else {
                        buttonClass += "bg-zinc-800/50 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 text-zinc-300";
                      }
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => !showExplanation && setSelectedOption(index)}
                        disabled={showExplanation}
                        className={buttonClass}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {showStatus && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                          {showStatus && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-400" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {!showExplanation ? (
                  <button
                    onClick={handleQuizSubmit}
                    disabled={selectedOption === null}
                    className="mt-6 w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold transition-colors disabled:opacity-50 disabled:hover:bg-emerald-500"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-6 p-4 rounded-lg border ${isSuccess ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}
                  >
                    <h3 className={`font-bold mb-2 ${isSuccess ? 'text-emerald-400' : 'text-red-400'}`}>
                      {isSuccess ? 'Correct!' : 'Not quite right.'}
                    </h3>
                    <p className="text-zinc-300 text-sm">{quizContent.explanation}</p>
                    
                    {isSuccess && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {nextLevel ? (
                          <Link 
                            href={`/play/${nextLevel.id}`}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold transition-colors"
                          >
                            Next Level <ArrowRight className="w-4 h-4" />
                          </Link>
                        ) : (
                          <Link 
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold transition-colors"
                          >
                            Finish Journey <Trophy className="w-4 h-4" />
                          </Link>
                        )}
                        <button
                          onClick={() => {
                            setShowExplanation(false);
                            setSelectedOption(null);
                            setIsSuccess(null);
                          }}
                          className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-bold transition-colors"
                        >
                          <RotateCcw className="w-4 h-4" /> Replay
                        </button>
                        <Link 
                          href="/"
                          className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-bold transition-colors"
                        >
                          <Map className="w-4 h-4" /> Map
                        </Link>
                      </div>
                    )}
                    {!isSuccess && (
                      <button
                        onClick={() => {
                          setShowExplanation(false);
                          setSelectedOption(null);
                          setIsSuccess(null);
                        }}
                        className="mt-4 inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-bold transition-colors"
                      >
                        Try Again
                      </button>
                    )}
                  </motion.div>
                )}
              </div>
            </section>
          )}
        </div>

        {!isQuiz && (
          <div className="flex-1 flex flex-col min-w-0">
            <div className="flex-1 p-4">
              <CodeEditor code={code} onChange={setCode} />
            </div>

            <AnimatePresence>
              {aiHint && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mx-4 mb-4 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 relative"
                >
                  <button onClick={() => setAiHint(null)} className="absolute top-2 right-2 text-indigo-400/50 hover:text-indigo-400">
                    <XCircle className="w-5 h-5" />
                  </button>
                  <div className="flex gap-3">
                    <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div className="prose prose-invert prose-sm prose-indigo max-w-none">
                      <ReactMarkdown>{aiHint}</ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="h-64 border-t border-zinc-800 bg-[#1e1e1e] flex flex-col">
              <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-[#252526]">
                <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
                  <Terminal className="w-4 h-4" />
                  Console Output
                </div>
                {isSuccess !== null && (
                  <div className={`flex items-center gap-1.5 text-sm font-medium ${isSuccess ? 'text-emerald-400' : 'text-red-400'}`}>
                    {isSuccess ? (
                      <><CheckCircle2 className="w-4 h-4" /> Success!</>
                    ) : (
                      <><XCircle className="w-4 h-4" /> Not quite right</>
                    )}
                  </div>
                )}
              </div>
              <div className="flex-1 p-4 overflow-y-auto font-mono text-sm whitespace-pre-wrap text-zinc-300">
                {output || <span className="text-zinc-600 italic">Run your code to see output here...</span>}
              </div>
              
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-6 right-6 flex items-center gap-3"
                  >
                    <Link 
                      href="/"
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-bold shadow-lg transition-all hover:scale-105"
                    >
                      <Map className="w-5 h-5" /> Map
                    </Link>
                    <button 
                      onClick={() => { setIsSuccess(null); setOutput(''); }}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-bold shadow-lg transition-all hover:scale-105"
                    >
                      <RotateCcw className="w-5 h-5" /> Replay
                    </button>
                    {nextLevel ? (
                      <Link 
                        href={`/play/${nextLevel.id}`}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
                      >
                        Next Level <ArrowRight className="w-5 h-5" />
                      </Link>
                    ) : (
                      <Link 
                        href="/"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
                      >
                        Finish Journey <Trophy className="w-5 h-5" />
                      </Link>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

