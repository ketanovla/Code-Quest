'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'javascript' | 'python' | 'java' | 'cpp' | 'csharp' | 'c';

interface GameState {
  xp: number;
  completedLevels: number[];
  selectedLanguage: Language | null;
  setLanguage: (lang: Language | null) => void;
  completeLevel: (id: number, xpReward: number) => void;
  resetProgress: () => void;
}

const GameContext = createContext<GameState | undefined>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<Partial<Record<Language, { xp: number, completedLevels: number[] }>>>({});
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedProgress = localStorage.getItem('codequest_progress');
    const savedLanguage = localStorage.getItem('codequest_language') as Language | null;
    
    if (savedProgress) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProgress(JSON.parse(savedProgress));
    } else {
      // Migrate old data if it exists
      const oldXp = localStorage.getItem('codequest_xp');
      const oldLevels = localStorage.getItem('codequest_levels');
      if (oldXp || oldLevels) {
        const migratedProgress = {
          javascript: {
            xp: oldXp ? parseInt(oldXp, 10) : 0,
            completedLevels: oldLevels ? JSON.parse(oldLevels) : []
          }
        };
        setProgress(migratedProgress);
        localStorage.setItem('codequest_progress', JSON.stringify(migratedProgress));
      }
    }
    
    if (savedLanguage) setSelectedLanguage(savedLanguage);
    
    setIsLoaded(true);
  }, []);

  const currentProgress = selectedLanguage 
    ? (progress[selectedLanguage] || { xp: 0, completedLevels: [] })
    : { xp: 0, completedLevels: [] };

  const xp = currentProgress.xp;
  const completedLevels = currentProgress.completedLevels;

  const setLanguage = (lang: Language | null) => {
    setSelectedLanguage(lang);
    if (lang) {
      localStorage.setItem('codequest_language', lang);
    } else {
      localStorage.removeItem('codequest_language');
    }
  };

  const completeLevel = (id: number, xpReward: number) => {
    if (!selectedLanguage) return;
    
    if (!completedLevels.includes(id)) {
      const newLevels = [...completedLevels, id];
      const newXp = xp + xpReward;
      
      const newProgress = {
        ...progress,
        [selectedLanguage]: {
          xp: newXp,
          completedLevels: newLevels
        }
      };
      
      setProgress(newProgress);
      localStorage.setItem('codequest_progress', JSON.stringify(newProgress));
    }
  };

  const resetProgress = () => {
    setProgress({});
    setSelectedLanguage(null);
    localStorage.removeItem('codequest_progress');
    localStorage.removeItem('codequest_language');
    // Clean up old keys just in case
    localStorage.removeItem('codequest_xp');
    localStorage.removeItem('codequest_levels');
  };

  if (!isLoaded) return null;

  return (
    <GameContext.Provider value={{ xp, completedLevels, selectedLanguage, setLanguage, completeLevel, resetProgress }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within GameProvider');
  return context;
};
