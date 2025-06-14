import React from 'react';
import { Trophy, Star, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  const getIcon = (index: number) => {
    const icons = [Trophy, Star, Award, Star];
    const Icon = icons[index % icons.length];
    return Icon;
  };

  const getColorScheme = (index: number) => {
    const schemes = [
      { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-200' },
      { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
      { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    ];
    return schemes[index % schemes.length];
  };

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-yellow-100 p-3 rounded-lg mr-4">
              <Trophy className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800">Prestasi & Penghargaan</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pengakuan atas keunggulan akademik dan pencapaian teknis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = getIcon(index);
            const colorScheme = getColorScheme(index);
            
            return (
              <div
                key={index}
                className={`group p-6 bg-white rounded-xl shadow-sm border-2 ${colorScheme.border} hover:shadow-lg hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${colorScheme.bg} group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`w-6 h-6 ${colorScheme.text}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{achievement.title}</h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">3.92</div>
            <div className="text-gray-600 font-semibold">IPK</div>
            <div className="text-sm text-gray-500 mt-1">Indeks Prestasi Kumulatif</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl">
            <div className="text-3xl font-bold text-emerald-600 mb-2">6</div>
            <div className="text-gray-600 font-semibold">Semester</div>
            <div className="text-sm text-gray-500 mt-1">Saat Ini</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Siap Memberikan Dampak</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Saya bersemangat untuk memanfaatkan teknologi dalam memecahkan masalah dunia nyata dan 
              berkontribusi pada proyek-proyek inovatif yang membuat perbedaan.
            </p>
            <a
              href="#contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
            >
              Mari Terhubung
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;