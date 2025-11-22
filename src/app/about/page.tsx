import { Calendar, MapPin, Award } from 'lucide-react';

export default function About() {
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

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-700 mb-4">About Me</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Post-Doctoral Research Scholar passionate about advancing autonomous systems 
            and creating safer, more efficient air transportation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Education Timeline */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-8">Education</h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary-200">
                    <div className="absolute -left-2 mt-1 w-4 h-4 bg-primary-600 rounded-full"></div>
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold text-secondary-900">{edu.degree}</h3>
                      <p className="text-primary-600 font-medium">{edu.school}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                    <p className="text-secondary-700 text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Research Interests */}
            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Research Interests</h2>
              <div className="flex flex-wrap gap-3">
                {researchInterests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills & Technologies */}
            <section className="bg-secondary-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Skills & Technologies</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-secondary-700 mb-2">Programming</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-white text-secondary-700 rounded-md text-sm border border-secondary-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-700 mb-2">Tools & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool, index) => (
                      <span key={index} className="px-3 py-1 bg-white text-secondary-700 rounded-md text-sm border border-secondary-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-700 mb-2">Concepts & Standards</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.concepts.map((concept, index) => (
                      <span key={index} className="px-3 py-1 bg-white text-secondary-700 rounded-md text-sm border border-secondary-200">
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Affiliations */}
            <section className="bg-secondary-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Professional Affiliations</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary-600" />
                  <span className="text-secondary-700">American Institute of Aeronautics and Astronautics (AIAA)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary-600" />
                  <span className="text-secondary-700">Institute of Electrical and Electronic Engineers (IEEE)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary-600" />
                  <span className="text-secondary-700">Institute for Operations Research and the Management Sciences (INFORMS)</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}