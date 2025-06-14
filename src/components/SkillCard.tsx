import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  level: 'expert' | 'intermediate' | 'beginner';
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon, level }) => {
  const levelConfig = {
    expert: {
      color: 'bg-emerald-500',
      width: 'w-full',
      label: 'Ahli',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700'
    },
    intermediate: {
      color: 'bg-blue-500',
      width: 'w-3/4',
      label: 'Menengah',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    beginner: {
      color: 'bg-amber-500',
      width: 'w-1/2',
      label: 'Belajar',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700'
    }
  };

  const config = levelConfig[level];

  return (
    <div className="group p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
      <div className="flex items-center space-x-4">
        <div className={`p-3 rounded-lg ${config.bgColor} group-hover:scale-110 transition-transform duration-200`}>
          <Icon className={`w-6 h-6 ${config.textColor}`} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 mb-1">{name}</h3>
          <div className="flex items-center space-x-3">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${config.color} ${config.width}`}
              />
            </div>
            <span className={`text-xs font-medium ${config.textColor}`}>
              {config.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;