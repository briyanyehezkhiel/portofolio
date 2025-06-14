import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang Saya</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mahasiswa ilmu komputer yang berdedikasi dengan passion untuk menciptakan solusi inovatif
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <GraduationCap className="mr-3 text-blue-600" />
                Pendidikan
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{education.degree}</h4>
                  <p className="text-gray-600">{education.university}</p>
                  <p className="text-sm text-gray-500">Perkiraan Kelulusan: {education.expectedGraduation}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 px-4 py-2 rounded-lg">
                    <span className="text-blue-800 font-semibold">IPK: {education.gpa}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <BookOpen className="mr-3 text-blue-600" />
              Mata Kuliah Relevan
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {education.relevantCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-blue-50 px-4 py-3 rounded-lg transition-colors duration-200 border border-gray-200 hover:border-blue-200"
                >
                  <span className="text-gray-700 font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Fokus Akademik Full Width Centered */}
        <div className="mt-8 flex justify-center">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white text-center max-w-2xl w-full">
            <h4 className="text-lg font-semibold mb-2 flex items-center justify-center">
              <Award className="mr-2" />
              Fokus Akademik
            </h4>
            <p className="text-blue-100">
              Spesialisasi dalam rekayasa perangkat lunak, struktur data, dan teknologi emerging 
              dengan pengalaman hands-on dalam pengembangan full-stack dan aplikasi machine learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;