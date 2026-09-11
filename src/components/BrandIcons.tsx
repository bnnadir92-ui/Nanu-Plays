import React from 'react';

interface BrandIconProps {
  type: 'netflix' | 'canva' | 'capcut' | 'gemini' | 'spotify' | 'figma' | 'chatgpt' | 'youtube';
  className?: string;
}

export const BrandIcon: React.FC<BrandIconProps> = ({ type, className = 'w-6 h-6' }) => {
  switch (type) {
    case 'netflix':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.398 0v24c1.196-.216 2.392-.47 3.608-.763V8.895l4.898 13.914c1.23-.332 2.45-.694 3.696-1.077V0h-3.608v14.542L9.006 0H5.398z" fill="#E50914" />
        </svg>
      );
    case 'canva':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#00C4CC" />
          <path
            d="M16.5 13.5c-.7 2-2.3 3.5-4.8 3.5-3.2 0-5.2-2.3-5.2-5.5 0-3.3 2.1-5.5 5.5-5.5 2.1 0 3.7 1.1 4.3 2.8l-2 .8c-.4-1.1-1.3-1.7-2.3-1.7-1.8 0-3.1 1.4-3.1 3.6 0 2.1 1.2 3.6 3.1 3.6 1.4 0 2.2-.8 2.6-1.9l1.9.3z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'capcut':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#12111E" />
          <path
            d="M6 7.5L12 11.5L18 7.5M6 16.5L12 12.5L18 16.5"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'gemini':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C12 7.523 16.477 12 22 12C16.477 12 12 16.477 12 22C12 16.477 7.523 12 2 12C7.523 12 12 7.523 12 2Z"
            fill="url(#gemini-grad)"
          />
          <defs>
            <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4E82EE" />
              <stop offset="0.5" stopColor="#9B72CF" />
              <stop offset="1" stopColor="#D96570" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'spotify':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#1DB954" />
          <path
            d="M6.8 9.5C10.2 8.5 15.6 8.7 18.5 10.4M7.8 12.6C10.6 11.8 14.8 12 17.2 13.5M8.5 15.6C10.8 14.9 14.1 15.1 16.1 16.3"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'figma':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M8 2h4v5H8a2.5 2.5 0 010-5z" fill="#F24E1E" />
          <path d="M12 2h4a2.5 2.5 0 010 5h-4V2z" fill="#FF7262" />
          <path d="M8 7h4v5H8a2.5 2.5 0 010-5z" fill="#A259FF" />
          <path d="M12 7h4a2.5 2.5 0 010 5h-4V7z" fill="#1ABCFE" />
          <path d="M8 12h4v5a2.5 2.5 0 11-4-2.5V12z" fill="#0ACF83" />
        </svg>
      );
    case 'chatgpt':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#10A37F" />
          <path
            d="M12 6v12M6 12h12M7.75 7.75l8.5 8.5M16.25 7.75l-8.5 8.5"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'youtube':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="4" width="20" height="16" rx="5" fill="#FF0000" />
          <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#FFFFFF" />
        </svg>
      );
    default:
      return null;
  }
};
