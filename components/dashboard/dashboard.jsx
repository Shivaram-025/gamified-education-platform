'use client';

import { useState } from 'react';
import Navbar from '@/components/navigation/navbar';
import DashboardPage from './dashboard-page';
import QuizzesPage from '@/components/quizzes/quizzes-page';
import LeaderboardPage from '@/components/leaderboard/leaderboard-page';
import JoinGamePage from '@/components/join-game/join-game-page';

export default function Dashboard({ user, onLogout }) {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage user={user} />;
      case 'quizzes':
        return <QuizzesPage user={user} />;
      case 'leaderboard':
        return <LeaderboardPage />;
      case 'join-game':
        return <JoinGamePage user={user} />;
      default:
        return <DashboardPage user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={user} onLogout={onLogout} currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
    </div>
  );
}
