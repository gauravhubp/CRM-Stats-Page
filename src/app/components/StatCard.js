import React from 'react';

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-3xl font-bold text-indigo-600">{value}</p>
    </div>
  );
};

export default StatCard;