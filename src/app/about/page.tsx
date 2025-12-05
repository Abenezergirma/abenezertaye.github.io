'use client';

import { Calendar, Users, BookOpen, Award, FileText, GraduationCap, Briefcase, Code, Cpu } from 'lucide-react';

export default function Teaching() {
  const teachingExperience = [
    {
      role: "Teaching Assistant",
      course: "MAE4182 - Electro-Mechanical Control Systems",
      institution: "George Washington University",
      period: "Fall 2024",
      responsibilities: [
        "Assisted in course instruction and laboratory sessions",
        "Provided guidance on control systems theory and applications",
        "Graded assignments and examinations",
        "Held weekly office hours for student consultations",
        "Developed supplementary learning materials"
      ],
      skills: ["Control Systems", "MATLAB/Simulink", "System Dynamics", "Feedback Control"]
    },
    {
      role: "Research Mentor",
      course: "Undergraduate Research Program",
      institution: "Vanderbilt University",
      period: "2022 - 2024",
      responsibilities: [
        "Mentored 5 undergraduate researchers in advanced topics",
        "Guided students in trajectory planning and optimization algorithms",
        "Supervised research on battery prognostics and energy efficiency",
        "Co-authored conference papers with student contributions",
        "Trained students in research methodologies and academic writing"
      ],
      skills: ["Research Methodology", "Trajectory Planning", "Battery Modeling", "Academic Writing"]
    }
  ];

  const researchAreas = [
    {
      title: "Trajectory Planning & Optimization",
      icon: <Code className="h-6 w-6" />,
      projects: ["Multi-agent systems", "Urban Air Mobility", "Energy-efficient routing"]
    },
    {
      title: "Battery Prognostics",
      icon: <Cpu className="h-6 w-6" />,
      projects: ["Li-ion battery modeling", "Neural ODEs", "Physics-informed neural networks"]
    },
    {
      title: "Autonomous Systems",
      icon: <Briefcase className="h-6 w-6" />,
      projects: ["UAS operations", "eVTOL simulations", "Safety management systems"]
    }
  ];

  const studentProjects = [
    {
      title: "Real-time Trajectory Planning for Urban Air Mobility",
      description: "Undergraduate research project developing scalable trajectory planners for dense urban environments",
      outcome: "Conference publication preparation",
      technologies: ["Python", "Reinforcement Learning", "MDP Framework"]
    },
    {
      title: "Battery State Prediction using Neural ODEs",
      description: "Research on real-time battery state prediction for drone operations",
      outcome: "33× speedup compared to traditional models",
      technologies: ["PyTorch", "Neural ODEs", "Real-time Systems"]
    },
    {
      title: "eVTOL Energy Demand Forecasting",
      description: "Analysis of charging demand patterns for urban air mobility networks",
      outcome: "AIAA conference presentation",
      technologies: ["MATLAB", "Energy Modeling", "Forecasting Algorithms"]
    }
  ];

  const teachingTools = {
    programming: ["Python", "MATLAB/Simulink", "C/C++"],
    frameworks: ["TensorFlow", "PyTorch", "OpenCV", "ROS"],
    simulation: ["Flight Simulators", "Battery Digital Twins", "UAS Testing Platforms"],
    standards: ["DO-178C Certification Process", "Safety Standards", "Industry Best Practices"]
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-full mb-6">
            <GraduationCap className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Teaching & Mentorship
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guiding the next generation of aerospace engineers and researchers through 
            hands-on learning, research integration, and practical application of advanced concepts.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Teaching Experience */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Teaching Experience Section */}
            <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Teaching Experience</h2>
                  <p className="text-gray-600">Formal teaching and mentoring roles</p>
                </div>
              </div>

              <div className="space-y-8">
                {teachingExperience.map((exp, index) => (
                  <div key={index} className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                        <p className="text-lg text-blue-600 font-medium">{exp.course}</p>
                        <p className="text-gray-600">{exp.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600 font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-3">Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Student Research Projects */}
            <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Student Research Projects</h2>
                  <p className="text-gray-600">Recent undergraduate research mentorship</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {studentProjects.map((project, index) => (
                  <div 
                    key={index}
                    className="bg-linear-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-green-600">Outcome: </span>
                      <span className="text-sm text-gray-700">{project.outcome}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Research Areas & Tools */}
          <div className="space-y-8">
            
            {/* Research Areas for Mentorship */}
            <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-green-600" />
                Research Mentorship Areas
              </h3>
              
              <div className="space-y-6">
                {researchAreas.map((area, index) => (
                  <div key={index} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-white rounded-lg">
                        {area.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900">{area.title}</h4>
                    </div>
                    
                    <div className="space-y-2">
                      {area.projects.map((project, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mt-2 shrink-0"></div>
                          <span className="text-sm text-gray-700">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Teaching Tools & Technologies */}
            <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tools & Technologies</h3>
              
              <div className="space-y-6">
                {Object.entries(teachingTools).map(([category, tools], index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wider">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1.5 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium border border-gray-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Mentorship Philosophy */}
            <section className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mentorship Approach</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Project-Based Learning:</span> Students engage in real research projects with tangible outcomes
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Publication Focus:</span> Guide students toward conference presentations and journal publications
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Industry Relevance:</span> Connect academic research with practical aviation and aerospace applications
                  </p>
                </div>
              </div>
            </section>

            {/* Contact for Research Opportunities */}
            <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Research Opportunities</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Interested undergraduate and graduate students are encouraged to reach out for research collaboration opportunities.
              </p>
              
              <div className="space-y-3">
                <a
                  href="mailto:abenezertaye@gvu.edu"
                  className="flex items-center justify-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <FileText className="h-5 w-5" />
                  Discuss Research Opportunities
                </a>
                <p className="text-xs text-gray-500 text-center">
                  Please include your background and research interests
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-linear-to-r from-blue-400 to-green-400 rounded-xl shadow-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-blue-100">Undergraduate Researchers Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2+</div>
              <div className="text-blue-100">Years of Teaching Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Student Research Publication Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}