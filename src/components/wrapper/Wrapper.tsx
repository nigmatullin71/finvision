import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  );
};

export default Wrapper;