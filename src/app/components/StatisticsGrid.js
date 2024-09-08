'use client';

import React, { useEffect, useState } from 'react';
import PieChartCard from './PieChartCard';
import LineChartCard from './LineChartCard';
import StatCard from './StatCard';

const StatisticsGrid = ({ timeWindow }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating API call with dummy data
    const fetchData = async () => {
      // In a real application, you would fetch data from an API here
      const dummyData = {
        pieChartData: [
          { name: 'Group A', value: 400 },
          { name: 'Group B', value: 300 },
          { name: 'Group C', value: 300 },
          { name: 'Group D', value: 200 },
        ],
        lineChartData: [
          { name: 'Jan', value: 4000 },
          { name: 'Feb', value: 3000 },
          { name: 'Mar', value: 2000 },
          { name: 'Apr', value: 2780 },
          { name: 'May', value: 1890 },
          { name: 'Jun', value: 2390 },
        ],
        statCardData: [
          { title: 'Total Customers', value: 1234 },
          { title: 'New Leads', value: 56 },
          { title: 'Conversion Rate', value: '12.5%' },
        ],
      };
      setData(dummyData);
    };

    fetchData();
  }, [timeWindow]);

  if (!data) return <div className="text-center py-4">Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PieChartCard data={data.pieChartData} title="Customer Distribution" />
      <LineChartCard data={data.lineChartData} title="Sales Trend" />
      {data.statCardData.map((stat, index) => (
        <StatCard key={index} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
};

export default StatisticsGrid;