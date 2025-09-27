import React from 'react';
import PropTypes from 'prop-types';

/**
 * CourseCard Component
 * @param {Object} props - Component props
 * @param {Object} props.course - Course data object
 * @param {string} props.course.id - Course ID
 * @param {string} props.course.name - Course name
 * @param {string} props.course.instructor - Instructor name
 * @param {number} props.course.progress - Progress percentage (0-100)
 * @param {string} props.course.code - Course code
 * @param {string} props.course.color - Color theme
 * @param {Function} [props.onClick] - Optional click handler
 */
const CourseCard = ({ course, onClick }) => {
  const getColorClasses = (color) => {
    const colorMap = {
      purple: 'bg-purple-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      orange: 'bg-orange-500',
      red: 'bg-red-500',
      yellow: 'bg-yellow-500'
    };
    return colorMap[color] || 'bg-blue-500';
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-blue-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const handleClick = () => {
    if (onClick) {
      onClick(course);
    }
  };

  return (
    <div 
      className={`flex items-center gap-4 p-4 bg-slate-700/30 border border-slate-600/30 rounded-xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 ${onClick ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
    >
      <div className={`w-3 h-12 rounded-full ${getColorClasses(course.color)}`}></div>
      
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-white truncate mb-1">{course.name}</h3>
        <p className="text-sm text-slate-300">{course.instructor}</p>
        <p className="text-xs text-slate-400">{course.code}</p>
      </div>
      
      <div className="text-right">
        <div className="text-sm font-semibold text-white mb-2">{course.progress}% complete</div>
        <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className={`h-full ${getProgressColor(course.progress)} transition-all duration-500`}
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    code: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['purple', 'blue', 'green', 'orange', 'red', 'yellow']).isRequired
  }).isRequired,
  onClick: PropTypes.func
};

CourseCard.defaultProps = {
  onClick: null
};

export default CourseCard;