import React from 'react';
import { Users, Play } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * SessionCard Component
 * @param {Object} props - Component props
 * @param {Object} props.session - Session data object
 * @param {string} props.session.subject - Subject name
 * @param {string} props.session.class - Class information
 * @param {string} props.session.time - Session time
 * @param {string} props.session.topic - Session topic
 * @param {number} props.session.studentsCount - Number of students
 * @param {Function} [props.onStartSession] - Optional start session handler
 */
const SessionCard = ({ session, onStartSession }) => {
  const handleStartSession = () => {
    if (onStartSession) {
      onStartSession(session);
    }
  };

  return (
    <div className="p-4 bg-slate-700/30 border border-slate-600/30 rounded-xl hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="font-semibold text-white text-sm">{session.subject}</span>
        </div>
        <span className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded">{session.time}</span>
      </div>
      
      <h3 className="text-sm font-medium text-slate-300 mb-1">{session.class}</h3>
      <p className="text-xs text-slate-400 mb-3 line-clamp-2">{session.topic}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3 text-slate-400" />
          <span className="text-xs text-slate-400">{session.studentsCount} students</span>
        </div>
        <button 
          className="flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 hover:border-blue-500/50 transition-all duration-300 text-xs"
          onClick={handleStartSession}
        >
          <Play className="w-3 h-3" />
          Start Session
        </button>
      </div>
    </div>
  );
};

SessionCard.propTypes = {
  session: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    studentsCount: PropTypes.number.isRequired
  }).isRequired,
  onStartSession: PropTypes.func
};

SessionCard.defaultProps = {
  onStartSession: null
};

export default SessionCard;