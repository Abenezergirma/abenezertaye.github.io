'use client';

import { Calendar, MapPin, Award, Download, Mail, Linkedin, Github, FileText } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import { useState, useEffect } from 'react';

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const education = [
    {
      degree: "Ph.D. in Aerospace Engineering",
      school: "George Washington University",
      period: "January 2021 - August 2025",
      location: "Washington, DC",
      details: "Advisor: Prof. Peng Wei | Dissertation: Enhancing Safety and Energy-Efficiency in Advanced Air Mobility Through Trajectory Planning and Mission Feasibility Assessment Strategies"
    },
    {
      degree: "Ph.D. in Electrical and Computer Engineering",
      school: "North Carolina Agricultural and Technical State University",
      period: "August 2019 - December 2020",
      location: "Greensboro, North Carolina",
      details: "Transferred Before Completion"
    },
    {
      degree: "B.S. in Electro-Mechanical Engineering",
      school: "Addis Ababa Science and Technology University",
      period: "Graduated June 2017",
      location: "Addis Ababa, Ethiopia",
      details: "Ambassador of Science and Technology of the graduation year 2017"
    }
  ];

  const researchInterests = [
    "Advanced Air Mobility (AAM)",
    "Trajectory Planning & Optimization",
    "Autonomous Systems & Robotics",
    "Multi-Agent Systems",
    "Machine Learning in Aviation",
    "Battery Prognostics & Energy Efficiency",
    "Flight Control Systems",
    "UAV/UAS Operations"
  ];

  const skills = {
    programming: ["Python", "MATLAB/Simulink", "C/C++", "TensorFlow", "PyTorch"],
    tools: ["OpenCV", "Keras", "OpenAI Gym", "ROS", "Linux"],
    concepts: ["Reinforcement Learning", "MDP", "Reachability Analysis", "DO-178C Certification"]
  };

  useEffect(() => {
    // Set image URL with cache busting to prevent caching issues
    const url = `/images/image.png?t=${Date.now()}`;
    setImageUrl(url);
    console.log('Setting image URL:', url);
  }, []);

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/pdf/Taye-CV (5).pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Abenezer_Taye_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      window.open('/pdf/Taye-CV (5).pdf', '_blank');
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    console.log('✅ Image loaded successfully');
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageError(true);
    console.error('❌ Image failed to load:', e);
    console.log('Image URL that failed:', imageUrl);
  };

  return (
    <div className="py-16 bg-linear-to-br from-white to-primary-50/30">
      <div className="container-custom">
        {/* Page Header with Photo */}
        <div className="text-center mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-12">
            {/* Photo Section */}
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative">
                {/* Image Container */}
                <div className="w-90 h-110 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-gray-100">
                  {imageUrl && !imageError ? (
                    <>
                      <img 
                        src={imageUrl}
                        alt="Abenezer Taye - Post-Doctoral Research Scholar"
                        className={`w-full h-full object-cover transition-opacity duration-500 ${
                          imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        crossOrigin="anonymous"
                      />
                      {/* Loading skeleton */}
                      {!imageLoaded && (
                        <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300 animate-pulse rounded-3xl flex items-center justify-center">
                          <div className="text-center text-gray-500">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2"></div>
                            <div className="text-sm">Loading image...</div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    // Fallback when image fails to load
                    <div className="w-full h-full bg-linear-to-br from-primary-100 to-primary-200 flex items-center justify-center rounded-3xl">
                      <div className="text-center text-primary-600">
                        <div className="text-4xl font-bold mb-2">AT</div>
                        <div className="text-sm font-medium">Profile Photo</div>
                        {imageError && (
                          <div className="text-xs mt-2 text-primary-500">
                            Image failed to load
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-white/20">
                  <Award className="h-5 w-5 text-primary-600" />
                </div>
              </div>
            </div>

            {/* Header Content */}
            <div className="lg:w-3/5 text-left">
              <h1 className="text-5xl font-bold text-primary-700 mb-6 leading-tight">
                Abenezer <span className="text-accent-600">Taye</span>
              </h1>
              <p className="text-2xl text-secondary-600 mb-6 font-light">
                Post-Doctoral Research Scholar &amp; AIAA Member
              </p>
              <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                Passionate researcher advancing <span className="text-primary-600 font-semibold">autonomous systems</span> and 
                creating <span className="text-primary-600 font-semibold">safer, more efficient air transportation solutions</span>. 
                Currently developing cutting-edge trajectory planning and safety management systems for Advanced Air Mobility at Vanderbilt University.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownloadResume}
                  className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-primary-700 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  <Download className="h-5 w-5 relative z-10" />
                  <span className="relative z-10">Download My CV</span>
                </button>
                <a
                  href="/contact"
                  className="btn-secondary inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold hover:bg-secondary-300 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-secondary-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">5+</div>
                  <div className="text-sm text-secondary-600">Years Research</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">10+</div>
                  <div className="text-sm text-secondary-600">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">$2.5M</div>
                  <div className="text-sm text-secondary-600">NASA Funding</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2 space-y-12">
            {/* Education Timeline */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary-100 rounded-xl">
                  <FileText className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-secondary-900">Education</h2>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200"></div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                    
                    {/* Content */}
                    <div className="bg-linear-to-r from-white to-primary-50/50 rounded-xl p-6 border border-secondary-100 hover:shadow-md transition-shadow">
                      <div className="mb-3">
                        <h3 className="text-xl font-semibold text-secondary-900 mb-2">{edu.degree}</h3>
                        <p className="text-primary-600 font-medium text-lg">{edu.school}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-600 mb-3">
                        <div className="flex items-center gap-2 bg-secondary-100 px-3 py-1 rounded-full">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2 bg-secondary-100 px-3 py-1 rounded-full">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                      </div>
                      <p className="text-secondary-700 leading-relaxed">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Research Interests */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-accent-100 rounded-xl">
                  <Award className="h-6 w-6 text-accent-600" />
                </div>
                <h2 className="text-3xl font-bold text-secondary-900">Research Interests</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {researchInterests.map((interest, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 p-4 bg-linear-to-r from-primary-50 to-accent-50 rounded-xl border border-primary-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full group-hover:bg-accent-500 transition-colors"></div>
                    <span className="text-secondary-800 font-medium group-hover:text-primary-700 transition-colors">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="space-y-8">
            {/* Skills & Technologies */}
            <section className="bg-white rounded-2xl p-6 shadow-lg border border-secondary-100">
              <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                Skills &amp; Technologies
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-secondary-700 mb-3 text-sm uppercase tracking-wide">Programming</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-2 bg-primary-50 text-primary-800 rounded-lg text-sm font-medium border border-primary-200 hover:bg-primary-100 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-700 mb-3 text-sm uppercase tracking-wide">Tools &amp; Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-2 bg-secondary-50 text-secondary-800 rounded-lg text-sm font-medium border border-secondary-200 hover:bg-secondary-100 transition-colors cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-700 mb-3 text-sm uppercase tracking-wide">Concepts &amp; Standards</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.concepts.map((concept, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-2 bg-accent-50 text-accent-800 rounded-lg text-sm font-medium border border-accent-200 hover:bg-accent-100 transition-colors cursor-default"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Affiliations */}
            <section className="bg-white rounded-2xl p-6 shadow-lg border border-secondary-100">
              <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                Professional Affiliations
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                  <Award className="h-5 w-5 text-primary-600 shrink-0" />
                  <span className="text-secondary-700 font-medium">American Institute of Aeronautics and Astronautics (AIAA)</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors">
                  <Award className="h-5 w-5 text-secondary-600 shrink-0" />
                  <span className="text-secondary-700 font-medium">Institute of Electrical and Electronic Engineers (IEEE)</span>
                </div>
                <div className="flex items-center gap-4 p-3 bg-accent-50 rounded-lg hover:bg-accent-100 transition-colors">
                  <Award className="h-5 w-5 text-accent-600 shrink-0" />
                  <span className="text-secondary-700 font-medium">Institute for Operations Research and the Management Sciences (INFORMS)</span>
                </div>
              </div>
            </section>

            {/* Contact Card */}
            <section className="bg-linear-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Let&apos;s Connect</h3>
              <p className="text-primary-100 mb-6 text-sm">
                Interested in research collaboration or discussing Advanced Air Mobility?
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">Send Email</span>
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}