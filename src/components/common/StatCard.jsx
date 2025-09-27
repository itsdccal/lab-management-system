import React from 'react';
import { TrendingUp } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * StatCard Component
 * @param {Object} props - Component props
 * @param {React.ComponentType} props.icon - Lucide icon component
 * @param {string} props.title - Card title
 * @param {string|number} props.value - Main value to display
 * @param {string} props.subtitle - Subtitle text
 * @param {string} props.gradient - CSS gradient classes
 * @param {string} [props.trend] - Optional trend text with percentage
 */
const StatCard = ({ 
  icon: Icon, 
  title, 
  value, 
  subtitle, 
  gradient,
  trend 
}) => {
  return (
    <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-xl ${gradient}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
      <p className="text-gray-300 text-sm font-medium">{title}</p>
      <p className="text-gray-400 text-xs">{subtitle}</p>
      {trend && (
        <div className="flex items-center gap-1 mt-2">
          <TrendingUp className="w-3 h-3 text-green-400" />
          <span className="text-xs text-green-400">{trend}</span>
        </div>
      )}
    </div>
  );
};

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subtitle: PropTypes.string.isRequired,
  gradient: PropTypes.string.isRequired,
  trend: PropTypes.string
};

StatCard.defaultProps = {
  trend: null
};

export default StatCard;