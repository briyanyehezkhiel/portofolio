import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience: React.FC = () => {
  const { experience, certifications } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Pengalaman & Sertifikasi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pengalaman profesional dan pembelajaran berkelanjutan melalui sertifikasi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              Pengalaman Kerja
            </h3>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{exp.position}</h4>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mt-2 sm:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-700 mb-2">Tanggung Jawab Utama:</h5>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              Sertifikasi & Kursus
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-800">{cert.name}</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">ID Kredensial: {cert.credentialId}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pembelajaran Berkelanjutan Full Width */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="p-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl text-white text-center">
            <h4 className="text-lg font-semibold mb-3">Pembelajaran Berkelanjutan</h4>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Saya berkomitmen untuk tetap mengikuti perkembangan teknologi dan praktik terbaik industri. 
              Saat ini sedang berusaha mempelajari machine learning juga teknologi lain untuk 
              meningkatkan keahlian teknis saya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;