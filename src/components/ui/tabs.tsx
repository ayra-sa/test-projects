import React, { useState } from 'react';
import { Card, CardContent } from './card';

interface TabProps {
  label: string;
  content: React.ReactNode;
}

const Tabs: React.FC<{ tabs: TabProps[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium transition ${
              activeTab === index
                ? 'text-primary border-b-2 border-primary'
                : 'hover:text-primary'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <Card className='pt-5'>
        <CardContent>
            {tabs[activeTab]?.content}
        </CardContent>
      </Card>
    </div>
  );
};

export default Tabs;
