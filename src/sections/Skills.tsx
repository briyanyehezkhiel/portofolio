import React from 'react';
import { Code, Database, Cloud, Brain } from 'lucide-react';
import SkillCard from '../components/SkillCard';
import { portfolioData } from '../data/portfolio';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const getIcon = (iconName: string) => {
    return (LucideIcons as any)[iconName] || Code;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Keahlian Teknis</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gambaran komprehensif keahlian teknis saya di berbagai domain
          </p>
        </div>

        <div className="space-y-12">
          {/* Intermediate Level */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Tingkat Menengah</h3>
                <p className="text-gray-600">Teknologi yang saya gunakan secara reguler</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.intermediate.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  icon={getIcon(skill.icon)}
                  level="intermediate"
                />
              ))}
            </div>
          </div>

          {/* Learning */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-amber-100 p-3 rounded-lg mr-4">
                <Brain className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Sedang Dipelajari</h3>
                <p className="text-gray-600">Teknologi yang sedang saya eksplorasi</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.beginner.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  icon={getIcon(skill.icon)}
                  level="beginner"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Pengembangan Frontend</h4>
            <p className="text-gray-600">Aplikasi React modern dengan TypeScript dan desain responsif</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-emerald-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Pengembangan Backend</h4>
            <p className="text-gray-600">Pengembangan API, desain database, dan teknologi server-side</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Cloud & DevOps</h4>
            <p className="text-gray-600">Deployment cloud, containerization, dan praktik CI/CD</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;