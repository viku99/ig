import React from 'react';

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen px-6 pt-24 pb-12 md:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;