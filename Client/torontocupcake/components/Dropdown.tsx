"use client"
import { useState, useEffect, useRef } from 'react';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener on mount
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="flex justify-center group items-center gap-2 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#3D0C11] focus:border-transparent"
        >
          Types
          <svg
            className={`w-6 h-6 text-gray-800 dark:text-white ${isOpen ? 'transform rotate-180' : ''}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#c9c8aa] ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 text-lg">
          <div>
            <a href="#" className="block px-4 py-2 text-[#3D0C11] hover:bg-white hover:text-[#D14D72]">
              Always Available
            </a>
            <a href="#" className="block px-4 py-2 text-[#3D0C11] hover:bg-white hover:text-[#D14D72]">
              Holidays
            </a>
            <a href="#" className="block px-4 py-2 text-[#3D0C11] hover:bg-white hover:text-[#D14D72]">
              Special Events
            </a>
            <a href="#" className="block px-4 py-2 text-[#3D0C11] hover:bg-white hover:text-[#D14D72]">
              Custom
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
