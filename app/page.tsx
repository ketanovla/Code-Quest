'use client';

import { useGame, Language } from '@/lib/game-context';
import { levels } from '@/lib/levels';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Code2, Trophy, Star, Lock, Unlock, Play, RotateCcw, Terminal, Coffee, Cpu, Box, Sparkles, ChevronRight, ArrowLeft, HelpCircle } from 'lucide-react';

export default function Home() {
  const { xp, completedLevels, selectedLanguage, resetProgress, setLanguage } = useGame();

  if (!selectedLanguage) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center min-h-screen relative overflow-hidden bg-zinc-950">
        <header className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <Code2 className="w-6 h-6 text-emerald-400" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-zinc-100">CodeQuest</h1>
          </div>
        </header>

        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/codequest/1920/1080?blur=10')] opacity-5 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 to-zinc-950" />

        <div className="relative z-10 max-w-6xl w-full flex flex-col items-center gap-16 py-12 px-6 mt-16">
          <div className="text-center space-y-6 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-sm mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Welcome to CodeQuest
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tight leading-tight"
            >
              Master Coding.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Play the Game.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-lg md:text-xl leading-relaxed"
            >
              Start from super basic concepts and level up to advanced algorithms. 
              Choose your preferred programming language below to begin your adventure!
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full"
          >
            <div className="flex items-center justify-between mb-6 px-2">
              <h2 className="text-2xl font-bold text-zinc-100">Select a Language</h2>
              <button onClick={() => setLanguage('javascript')} className="text-sm font-medium text-zinc-500 hover:text-emerald-400 transition-colors flex items-center gap-1">
                Skip & use JavaScript <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <LanguageCard 
                id="c" 
                name="C" 
                desc="The foundation. Learn memory and low-level concepts." 
                icon={<Cpu className="w-8 h-8 text-teal-400" />} 
                onClick={() => setLanguage('c')} 
              />
              <LanguageCard 
                id="javascript" 
                name="JavaScript" 
                desc="The language of the web. Great for interactive sites." 
                icon={<Code2 className="w-8 h-8 text-yellow-400" />} 
                onClick={() => setLanguage('javascript')} 
              />
              <LanguageCard 
                id="python" 
                name="Python" 
                desc="Simple, readable. Perfect for beginners and AI." 
                icon={<Terminal className="w-8 h-8 text-blue-400" />} 
                onClick={() => setLanguage('python')} 
              />
              <LanguageCard 
                id="java" 
                name="Java" 
                desc="Object-oriented and widely used in enterprise." 
                icon={<Coffee className="w-8 h-8 text-red-400" />} 
                onClick={() => setLanguage('java')} 
              />
              <LanguageCard 
                id="cpp" 
                name="C++" 
                desc="High performance. Used in game engines." 
                icon={<Cpu className="w-8 h-8 text-indigo-400" />} 
                onClick={() => setLanguage('cpp')} 
              />
              <LanguageCard 
                id="csharp" 
                name="C#" 
                desc="Versatile and structured. Great for games." 
                icon={<Box className="w-8 h-8 text-purple-400" />} 
                onClick={() => setLanguage('csharp')} 
              />
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  const playerLevel = Math.floor(xp / 500) + 1;

  return (
    <main className="flex-1 max-w-5xl mx-auto w-full p-6 flex flex-col gap-8">
      <header className="flex items-center justify-between py-6 border-b border-zinc-800">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLanguage(null)} 
            className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors"
            title="Back to Language Selection"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <Code2 className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-zinc-100">CodeQuest</h1>
              <p className="text-sm text-zinc-400 capitalize">Path: {selectedLanguage}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Player Level</span>
            <span className="text-xl font-bold text-emerald-400">Lvl {playerLevel}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Total XP</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-xl font-bold text-amber-400">{xp}</span>
            </div>
          </div>
          <button 
            onClick={() => {
              if (window.confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
                resetProgress();
              }
            }} 
            className="p-2 hover:bg-red-500/10 rounded-lg text-zinc-500 hover:text-red-400 transition-colors" 
            title="Reset All Progress"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {levels.filter(level => level.type === 'quiz' || (level.content as any)[selectedLanguage]).map((level, index, filteredLevels) => {
          const isCompleted = completedLevels.includes(level.id);
          const isUnlocked = index === 0 || completedLevels.includes(filteredLevels[index - 1].id);
          const isQuiz = level.type === 'quiz';

          return (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={isUnlocked ? `/play/${level.id}` : '#'} className={`block h-full ${!isUnlocked ? 'cursor-not-allowed opacity-60' : ''}`}>
                <div className={`relative h-full flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                  isCompleted 
                    ? 'bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40' 
                    : isUnlocked 
                      ? 'bg-zinc-900 border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800/50' 
                      : 'bg-zinc-900/50 border-zinc-800/50'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg ${isCompleted ? 'bg-emerald-500/20 text-emerald-400' : isUnlocked ? (isQuiz ? 'bg-indigo-500/20 text-indigo-400' : 'bg-zinc-800 text-zinc-300') : 'bg-zinc-800/50 text-zinc-600'}`}>
                      {isCompleted ? <Trophy className="w-5 h-5" /> : isUnlocked ? (isQuiz ? <HelpCircle className="w-5 h-5" /> : <Unlock className="w-5 h-5" />) : <Lock className="w-5 h-5" />}
                    </div>
                    <div className="flex gap-2">
                      {isQuiz && (
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-400">
                          Quiz
                        </span>
                      )}
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-zinc-800 text-zinc-400">
                        {level.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-zinc-100 mb-2">{level.id}. {level.title}</h3>
                  <p className="text-sm text-zinc-400 flex-1 mb-6">{level.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
                    <span className="text-sm font-medium text-amber-400 flex items-center gap-1">
                      <Star className="w-4 h-4" /> {level.xpReward} XP
                    </span>
                    {isUnlocked && !isCompleted && (
                      <span className="flex items-center gap-1 text-sm font-medium text-emerald-400">
                        Play <Play className="w-4 h-4" />
                      </span>
                    )}
                    {isCompleted && (
                      <span className="text-sm font-medium text-emerald-500">Completed</span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}

function LanguageCard({ name, desc, icon, onClick }: { id: string, name: string, desc: string, icon: React.ReactNode, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800/50 transition-all duration-300 group h-full"
    >
      <div className="p-4 bg-zinc-950 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-zinc-100 mb-2">{name}</h3>
      <p className="text-sm text-zinc-400">{desc}</p>
    </button>
  );
}
