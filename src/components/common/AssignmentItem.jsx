import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * AssignmentItem Component
 * @param {Object} props - Component props
 * @param {Object} props.assignment - Assignment data object
 * @param {string} props.assignment.title - Assignment title
 * @param {string} props.assignment.course - Course name
 * @param {string} props.assignment.dueDate - Due date
 * @param {string} props.assignment.status - Status (urgent|normal|completed)
 * @param {Function} [props.onClick] - Optional click handler
 */
const AssignmentItem = ({ assignment, onClick }) => {
  const getStatusConfig = (status) => {
    const statusConfig = {
      urgent: {
        icon: AlertCircle,
        color: 'text-red-400',
        bg: 'bg-red-500/10',
        border: 'border-red-500/30',
        dot: 'bg-red-500',
        badgeBg: 'bg-red-500/20',
        text: 'Urgent'
      },
      normal: {
        icon: Clock,
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30',
        dot: 'bg-yellow-500',
        badgeBg: 'bg-yellow-500/20',
        text: 'Normal'
      },
      completed: {
        icon: CheckCircle,
        color: 'text-green-400',
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        dot: 'bg-green-500',
        badgeBg: 'bg-green-500/20',
        text: 'Completed'
      }
    };

    return statusConfig[status] || statusConfig.normal;
  };

  const config = getStatusConfig(assignment.status);
  const StatusIcon = config.icon;

  const handleClick = () => {
    if (onClick) {
      onClick(assignment);
    }
  };

  return (
    <div 
      className={`flex items-center gap-4 p-4 ${config.bg} border ${config.border} rounded-xl hover:bg-opacity-20 transition-all duration-300 ${onClick ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
    >
      <div className={`w-2 h-2 rounded-full ${config.dot}`}></div>
      
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-white truncate mb-1">{assignment.title}</h4>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">{assignment.course}</span>
          <span className="text-xs text-slate-500">•</span>
          <span className={`text-xs font-medium ${config.color}`}>
            {assignment.dueDate}
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <span className={`text-xs px-2 py-1 rounded-full ${config.badgeBg} ${config.color} border ${config.border}`}>
          {config.text}
        </span>
        <StatusIcon className={`w-4 h-4 ${config.color}`} />
      </div>
    </div>
  );
};

AssignmentItem.propTypes = {
  assignment: PropTypes.shape({
    title: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['urgent', 'normal', 'completed']).isRequired
  }).isRequired,
  onClick: PropTypes.func
};

AssignmentItem.defaultProps = {
  onClick: null
};

export default AssignmentItem;