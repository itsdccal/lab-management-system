import React from 'react';
import PropTypes from 'prop-types';

/**
 * ActivityItem Component
 * @param {Object} props - Component props
 * @param {Object} props.activity - Activity data object
 * @param {string} props.activity.text - Activity description
 * @param {string} props.activity.time - Time when activity occurred
 * @param {string} props.activity.type - Activity type
 * @param {Function} [props.onClick] - Optional click handler
 */
const ActivityItem = ({ activity, onClick }) => {
  const getTypeColor = (type) => {
    const typeColors = {
      assignment: 'bg-red-500',
      attendance: 'bg-green-500', 
      upload: 'bg-blue-500',
      user: 'bg-green-500',
      session: 'bg-blue-500',
      maintenance: 'bg-red-500',
      course: 'bg-yellow-500'
    };
    return typeColors[type] || 'bg-slate-500';
  };

  const handleClick = () => {
    if (onClick) {
      onClick(activity);
    }
  };

  return (
    <div 
      className={`flex items-start gap-3 ${onClick ? 'cursor-pointer hover:bg-slate-700/20 p-2 rounded-lg transition-colors duration-200' : ''}`}
      onClick={handleClick}
    >
      <div className={`w-2 h-2 rounded-full mt-2 ${getTypeColor(activity.type)}`}></div>
      <div className="flex-1">
        <p className="text-sm text-white">{activity.text}</p>
        <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
      </div>
    </div>
  );
};

ActivityItem.propTypes = {
  activity: PropTypes.shape({
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['assignment', 'attendance', 'upload', 'user', 'session', 'maintenance', 'course']).isRequired
  }).isRequired,
  onClick: PropTypes.func
};

ActivityItem.defaultProps = {
  onClick: null
};

export default ActivityItem;