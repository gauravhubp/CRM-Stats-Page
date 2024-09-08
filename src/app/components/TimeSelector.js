'use client';

import React from 'react';

const TimeSelector = ({ selectedTimeWindow, onSelectTimeWindow }) => {
  const timeWindows = [
    { value: '1d', label: '1 Day' },
    { value: '1w', label: '1 Week' },
    { value: '1m', label: '1 Month' },
    { value: '3m', label: '3 Months' },
    { value: '1y', label: 'Year' },
  ];

  return (
    <div className="flex items-center">
      <label htmlFor="time-window" className="mr-3 text-sm font-medium text-gray-700">
        Time Window:
      </label>
      <select
        id="time-window"
        value={selectedTimeWindow}
        onChange={(e) => onSelectTimeWindow(e.target.value)}
        className="block w-full max-w-xs pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {timeWindows.map((window) => (
          <option key={window.value} value={window.value}>
            {window.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSelector;