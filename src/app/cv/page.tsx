'use client';

import { Download, GraduationCap,Award, FileText, Calendar, MapPin, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function CV() {
  const [isDownloading, setIsDownloading] = useState(false);

  // Extract key information from the CV
  const cvData = {
    personal: {
      name: "Abenezer Taye",
      title: "Post-Doctoral Research Scholar",
      institution: "Institute for Software Integrated Systems, Vanderbilt University",
      location: "Nashville, TN 37212",
      phone: "(336) 335-8289",
      email: "abenezertaye@gvu.edu",
      linkedin: "https://www.linkedin.com/in/abenezer-taye/",
      github: "https://github.com/Abenezergirma"
    },
    education: [
      {
        degree: "Ph.D. in Aerospace Engineering",
        institution: "George Washington University",
        period: "January 2021 - August 2025",
        location: "Washington, DC",
        details: "Advisor: Prof. Peng Wei | Dissertation: Enhancing Safety and Energy-Efficiency in Advanced Air Mobility Through Trajectory Planning and Mission Feasibility Assessment Strategies"
      },
      {
        degree: "Ph.D. in Electrical and Computer Engineering",
        institution: "North Carolina Agricultural and Technical State University",
        period: "August 2019 - December 2020",
        location: "Greensboro, North Carolina",
        details: "Transferred Before Completion"
      },
      {
        degree: "B.S. in Electro-Mechanical Engineering",
        institution: "Addis Ababa Science and Technology University",
        period: "Graduated June 2017",
        location: "Addis Ababa, Ethiopia",
        details: "Ambassador of Science and Technology of the graduation year 2017"
      }
    ],
    researchInterests: [
      "Advanced Air Mobility (AAM)",
      "Trajectory Planning & Optimization", 
      "Autonomous Systems & Robotics",
      "Multi-Agent Systems",
      "Machine Learning in Aviation",
      "Battery Prognostics & Energy Efficiency",
      "Flight Control Systems",
      "UAV/UAS Operations"
    ],
    majorProjects: [
      {
        title: "NASA System-Wide Safety: In-Time Learning-Based Safety Management",
        role: "Technical Thrust Lead",
        period: "2022 - Present",
        description: "Leading a $2.5M NASA-funded project to develop scalable safety management systems for Advanced Air Mobility operations.",
        highlights: ["Mission feasibility assessment framework", "Battery prognostics integration", "Real-world scenario validation"]
      },
      {
        title: "Learning-based Li-ion Battery Modeling for Online Decision Making",
        role: "Technical Lead",
        period: "Sept 2022 - Present",
        description: "Developed real-time predictive models using Neural ODEs and Physics-Informed Neural Networks.",
        highlights: ["33× speedup in battery state prediction", "Enabled mid-flight replanning", "Maintained accuracy under constraints"]
      },
      {
        title: "Safe, Scalable, and Energy-Efficient Trajectory Planner for AAM",
        role: "Technical Lead",
        period: "2021 - 2024",
        description: "Real-time multi-agent trajectory planner for urban air mobility operations.",
        highlights: ["Reachability analysis integration", "Action-shielding safety strategies", "Energy optimization"]
      }
    ],
    industryExperience: [
      {
        role: "Research Intern",
        company: "MathWorks",
        department: "Sensor Fusion and Tracking Toolbox",
        period: "Summer 2023",
        achievements: [
          "Accelerated tracker development cycle by 60%",
          "Built MATLAB application for multi-agent tracking analysis",
          "Enabled support for advanced tracking algorithms"
        ]
      },
      {
        role: "Research Intern",
        company: "MathWorks",
        department: "Advanced Research and Technology Office",
        period: "Summer 2022",
        achievements: [
          "Developed decentralized trajectory planning framework",
          "78% reduction in near-midair collisions in simulations",
          "Online learning algorithm for collision avoidance"
        ]
      }
    ],
    skills: {
      programming: ["Python", "MATLAB/Simulink", "C/C++"],
      frameworks: ["TensorFlow", "PyTorch", "OpenCV", "ROS"],
      standards: ["DO-178C Certification Process"]
    },
    awards: [
      "Honorable Mention Award, AIAA Young Professionals, Students, and Educators (YPSE) Conference 2022",
      "Ambassador of Science and Technology of the graduation year 2017, Ministry of Science and Technology of Ethiopia"
    ],
    affiliations: [
      "American Institute of Aeronautics and Astronautics (AIAA), Student Member",
      "Institute of Electrical and Electronic Engineers (IEEE), Student Member",
      "Institute for Operations Research and the Management Sciences (INFORMS), Student Member"
    ]
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/pdf/Taye_CV (5).pdf');
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
      alert('Failed to download CV. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Download Button */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Curriculum Vitae
              </h1>
              <p className="text-gray-600">
                Comprehensive overview of academic and professional background
              </p>
            </div>
           
          </div>
          
          {/* Personal Info Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{cvData.personal.name}</h2>
                <p className="text-green-800 font-medium text-lg mb-2">{cvData.personal.title}</p>
                <p className="text-gray-700 mb-1">{cvData.personal.institution}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {cvData.personal.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-800 font-medium">{cvData.personal.email}</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
                  <div className="space-y-2">
                    <a 
                      href={cvData.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-green-800 hover:text-green-900 text-sm"
                    >
                      LinkedIn Profile
                    </a>
                    <a 
                      href={cvData.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-green-800 hover:text-green-900 text-sm"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education Section */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-green-800" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
              </div>
              
              <div className="space-y-6">
                {cvData.education.map((edu, index) => (
                  <div key={index} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                    <p className="text-green-800 font-medium">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                    {edu.details && (
                      <p className="text-gray-700 text-sm mt-3">{edu.details}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Major Projects Section */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold text-gray-900">Major Research Projects</h2>
              </div>
              
              <div className="space-y-6">
                {cvData.majorProjects.map((project, index) => (
                  <div key={index} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm">
                      <span className="text-green-800 font-medium">{project.role}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-600">{project.period}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 shrink-0"></div>
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Industry Experience */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FileText className="h-6 w-6 text-green-800" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Industry Experience</h2>
              </div>
              
              <div className="space-y-6">
                {cvData.industryExperience.map((exp, index) => (
                  <div key={index} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{exp.role}</h3>
                    <p className="text-green-800 font-medium">{exp.company} - {exp.department}</p>
                    <div className="flex items-center gap-2 mt-2 mb-3 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Research Interests */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-green-800" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Research Interests</h2>
              </div>
              
              <div className="space-y-3">
                {cvData.researchInterests.map((interest, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></div>
                    <span className="text-sm text-gray-700">{interest}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Award className="h-6 w-6 text-green-800" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Awards & Honors</h2>
              </div>
              
              <div className="space-y-3">
                {cvData.awards.map((award, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></div>
                    <span className="text-sm text-gray-700">{award}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Affiliations */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Professional Affiliations</h2>
              
              <div className="space-y-3">
                {cvData.affiliations.map((affiliation, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></div>
                    <span className="text-sm text-gray-700">{affiliation}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Bottom Download Button */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center">
            <p className="text-gray-600 mb-4 text-center">
              Download the complete CV with detailed publications, conference presentations, and technical reports
            </p>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Download className="h-6 w-6" />
                  <span>Download Complete CV (PDF)</span>
                </>
              )}
            </button>
            <p className="text-sm text-gray-500 mt-3">
              File size: ~2MB 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}