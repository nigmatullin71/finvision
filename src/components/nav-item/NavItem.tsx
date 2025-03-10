import React from 'react';

interface NavItemProps {
  text: string;
  className?: string; 
}

const NavItem: React.FC<NavItemProps> = ({ text, className }) => (
  <div className='relative'>
    <div className="flex space-x-2 cursor-pointer">
      <span className={`hover:text-light-blue active:text-blue ${className}`}>
        {text}
      </span>
    </div>
  </div>
);

export default NavItem;