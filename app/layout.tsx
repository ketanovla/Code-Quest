import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { GameProvider } from '@/lib/game-context';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'CodeQuest',
  description: 'Learn to code through an epic adventure.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-zinc-950 text-zinc-100 font-sans antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <GameProvider>
          {children}
        </GameProvider>
      </body>
    </html>
  );
}
