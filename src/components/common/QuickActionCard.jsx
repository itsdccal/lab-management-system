import React from 'react';
import PropTypes from 'prop-types';

/**
 * QuickActionCard Component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Icon element
 * @param {string} props.title - Action title
 * @param {string} props.description - Action description
 * @param {Function} props.onClick - Click handler function
 * @param {boolean} [props.disabled] - Whether the action is disabled
 */
const QuickActionCard = ({ 
  icon, 
  title, 
  description, 
  onClick,
  disabled = false
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <div 
      className={`p-4 bg-slate-700/30 border border-slate-600/30 rounded-xl transition-all duration-300 group ${
        disabled 
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:bg-slate-700/50 hover:border-slate-600/50 cursor-pointer'
      }`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg transition-all duration-300 ${
          disabled
            ? 'bg-slate-600/20 text-slate-500'
            : 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 group-hover:text-blue-300'
        }`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold text-sm transition-colors duration-300 ${
            disabled
              ? 'text-slate-500'
              : 'text-white group-hover:text-blue-300'
          }`}>
            {title}
          </h3>
          <p className="text-xs text-slate-400 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

QuickActionCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

QuickActionCard.defaultProps = {
  disabled: false
};

export default QuickActionCard;