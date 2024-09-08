'use client';

import React, { useState } from 'react';
import TimeSelector from './TimeSelector';
import StatisticsGrid from './StatisticsGrid';

const CRMStatsPage = () => {
  const [selectedTimeWindow, setSelectedTimeWindow] = useState('1d');

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <header className="bg-indigo-600 text-white p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold">CRM Statistics</h1>
        </header>
        <main className="p-4 md:p-6">
          <TimeSelector 
            selectedTimeWindow={selectedTimeWindow} 
            onSelectTimeWindow={setSelectedTimeWindow} 
          />
          <div className="mt-6 h-[calc(100vh-250px)] overflow-y-auto">
            <StatisticsGrid timeWindow={selectedTimeWindow} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CRMStatsPage;