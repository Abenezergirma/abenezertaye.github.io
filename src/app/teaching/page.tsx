'use client';

import { Calendar, Users, BookOpen, Award, GraduationCap, Briefcase, Code, Cpu } from 'lucide-react';
import SidebarLayout from '@/components/layout/SidebarLayout';
import { ReactElement } from 'react';

interface TeachingExperience {
  role: string;
  course: string;
  institution: string;
  period: string;
  responsibilities: string[];
  skills: string[];
}

interface ResearchArea {
  title: string;
  icon: ReactElement;
  projects: string[];
}

interface StudentProject {
  title: string;
  description: string;
  outcome: string;
  technologies: string[];
}

export default function Teaching() {
  const teachingExperience: TeachingExperience[] = [
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

  const researchAreas: ResearchArea[] = [
    {
      title: "Trajectory Planning & Optimization",
      icon: <Code className="h-5 w-5" />,
      projects: ["Multi-agent systems", "Urban Air Mobility", "Energy-efficient routing"]
    },
    {
      title: "Battery Prognostics",
      icon: <Cpu className="h-5 w-5" />,
      projects: ["Li-ion battery modeling", "Neural ODEs", "Physics-informed neural networks"]
    },
    {
      title: "Autonomous Systems",
      icon: <Briefcase className="h-5 w-5" />,
      projects: ["UAS operations", "eVTOL simulations", "Safety management systems"]
    }
  ];

  const studentProjects: StudentProject[] = [
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

  return (
    <SidebarLayout>
      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-linear-to-br from-blue-100 to-indigo-100 rounded-xl">
            <GraduationCap className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Teaching & Mentorship</h1>
            <p className="text-lg text-gray-600 mt-2">
              Guiding the next generation of aerospace engineers through hands-on learning and research
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">5</div>
            <div className="text-sm text-gray-600">Undergraduate Researchers Mentored</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">2+</div>
            <div className="text-sm text-gray-600">Years Teaching Experience</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Student Publication Rate</div>
          </div>
        </div>
      </div>

      {/* Teaching Experience */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <BookOpen className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Teaching Experience</h2>
        </div>

        <div className="space-y-8">
          {teachingExperience.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-lg text-green-800 font-medium">{exp.course}</p>
                  <p className="text-gray-600">{exp.institution}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600 font-medium">{exp.period}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wider">Responsibilities</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0"></div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wider">Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-50 text-green-700 rounded-md text-sm font-medium"
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
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-lg">
            <Users className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Student Research Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              </div>

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

      {/* Research Areas */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Award className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Research Mentorship Areas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  {area.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{area.title}</h3>
              </div>

              <div className="space-y-2">
                {area.projects.map((project, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 shrink-0"></div>
                    <span className="text-sm text-gray-700">{project}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mentorship Philosophy */}
      <section className="bg-linear-to-br from-green-50 to-indigo-50 rounded-lg shadow-sm border border-green-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Mentorship Philosophy</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="font-semibold text-gray-900">Hands-on Learning</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Students learn best through practical application of concepts in real-world projects and research scenarios.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="font-semibold text-gray-900">Research Integration</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Teaching is integrated with current research to expose students to cutting-edge developments in the field.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="font-semibold text-gray-900">Career Development</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Focus on developing skills that prepare students for successful careers in academia and industry.
            </p>
          </div>
        </div>
      </section>
    </SidebarLayout>
  );
}
