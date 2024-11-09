import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const alertStyles = {
  success: {
    bg: 'bg-green-100',
    text: 'text-green-900',
    border: 'border-green-400',
  },
  error: {
    bg: 'bg-red-100',
    text: 'text-red-900',
    border: 'border-red-400',
  },
  warning: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-900',
    border: 'border-yellow-400',
  },
  info: {
    bg: 'bg-blue-100',
    text: 'text-blue-900',
    border: 'border-blue-400',
  },
};

const Alert = ({ type, message, duration }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  const { bg, text, border } = alertStyles[type] || alertStyles.info;

  return (
    <div
      className={`flex items-center p-2 z-10 rounded-lg border ${border} ${bg} shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105  `}
    >
      <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
        {type === 'success' && (
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12.414L6.586 10 5 11.586l5 5 9-9-1.414-1.414-7.586 7.586z" />
        )}
        {type === 'error' && (
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11h-2v2h2v-2zm0-6h-2v4h2V7z" />
        )}
        {type === 'warning' && (
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11h-2v2h2v-2zm0-6h-2v4h2V7z" />
        )}
        {type === 'info' && (
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11h-2v2h2v-2zm0-6h-2v4h2V7z" />
        )}
      </svg>
      <span className={`text-sm ${text}`}>{message}</span>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  message: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired, // Duration in milliseconds
};

export default Alert;
