import React from 'react';
import { Download, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero: React.FC = () => {
  const { personal, education } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Halo, Saya{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-gray-600 mb-6 font-light">
              {personal.title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              {personal.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
                <MapPin size={18} />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600">
                <Calendar size={18} />
                <span>Lulus {education.expectedGraduation}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://app.kinobi.ai/resume/676f9e9e6c5539001db88edc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Unduh CV</span>
              </a>
              <a
                href="https://github.com/briyanyehezkhiel"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
              >
                Lihat Proyek
              </a>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Ketersediaan Saat Ini</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">📍</span>
                  Terbuka untuk peluang magang Musim Panas 2025
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">🎓</span>
                  Tersedia untuk posisi part-time selama tahun akademik
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">💼</span>
                  Tertarik dengan posisi full-time mulai Mei 2026
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                <img
                  src="/public/briyan.png"
                  alt={personal.name}
                  className="w-64 h-64 rounded-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 left-10 bg-white p-3 rounded-lg shadow-lg animate-bounce">
              <span className="text-2xl">💻</span>
            </div>
            <div className="absolute top-20 right-10 bg-white p-3 rounded-lg shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
              <span className="text-2xl">🚀</span>
            </div>
            <div className="absolute bottom-20 left-20 bg-white p-3 rounded-lg shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
              <span className="text-2xl">⚡</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;