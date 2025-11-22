import { Rocket, Battery, Cpu, Zap } from 'lucide-react';

export default function Research() {
  const projects = [
    {
      title: "NASA System-Wide Safety: In-Time Learning-Based Safety Management",
      role: "Technical Thrust Lead",
      period: "2022 - Present",
      description: "Leading the first thrust of a $2.5M NASA-funded project to develop a scalable, data-driven safety management system for heterogeneous Advanced Air Mobility (AAM) operations.",
      achievements: [
        "Designed mission feasibility assessment framework integrating battery prognostics with uncertainty quantification",
        "Evaluated impact of adverse weather (wind) on flight safety",
        "Demonstrated framework effectiveness in real-world scenarios including drone package delivery and urban air taxi services"
      ],
      technologies: ["Python", "TensorFlow", "Reinforcement Learning", "MDP"],
      icon: Rocket,
      status: "Active"
    },
    {
      title: "Learning-based Li-ion Battery Modeling for Online Decision Making",
      role: "Technical Lead",
      period: "Sept 2022 - Present",
      description: "Developed real-time predictive models for Li-ion batteries powering drones using Neural ODEs and Physics-Informed Neural Networks.",
      achievements: [
        "Achieved 33× speedup in battery state prediction compared to model-based approaches",
        "Enabled mission feasibility assessment and mid-flight replanning",
        "Maintained prediction accuracy while addressing computational limitations of traditional electrochemical models"
      ],
      technologies: ["PyTorch", "Neural ODEs", "Physics-Informed Neural Networks", "Python"],
      icon: Battery,
      status: "Active"
    },
    {
      title: "Safe, Scalable, and Energy-Efficient Trajectory Planner for AAM Operations",
      role: "Technical Lead",
      period: "2021 - 2024",
      description: "Developed real-time, multi-agent trajectory planner for AAM operations to ensure both safety and scalability in dense urban airspace environments.",
      achievements: [
        "Integrated data-driven reachability analysis module with scalable MDP framework",
        "Enhanced safety through action-shielding and reward-shaping strategies",
        "Optimized for energy efficiency using aircraft powertrain modeling and wind-aware planning"
      ],
      technologies: ["Python", "OpenAI Gym", "Reachability Analysis", "Multi-Agent Systems"],
      icon: Cpu,
      status: "Completed"
    },
    {
      title: "Energy Demand Analysis for eVTOL Aircraft in Urban Air Mobility",
      role: "Technical Lead",
      period: "2023 - 2024",
      description: "Developed predictive framework to forecast charging demand for electric vertical takeoff and landing (eVTOL) aircraft in urban air mobility operations.",
      achievements: [
        "Integrated energy consumption models with aircraft specifications and wind forecasts",
        "Estimated aggregated power demand at vertiports",
        "Enabled proactive energy planning and infrastructure optimization for UAM networks"
      ],
      technologies: ["Python", "Data Analysis", "Energy Modeling", "Forecasting"],
      icon: Zap,
      status: "Completed"
    }
  ];

  const testingPlatforms = [
    "eVTOL simulators",
    "sUAS hardware flight testing", 
    "Battery digital twins",
    "UAM/UAS transportation networks"
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-700 mb-4">Research & Projects</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Cutting-edge research in Advanced Air Mobility, autonomous systems, and energy-efficient aviation solutions.
          </p>
        </div>

        {/* Main Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary-100 rounded-xl">
                      <project.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-secondary-900">{project.title}</h2>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-primary-600 font-semibold">{project.role}</span>
                        <span className="text-secondary-500">{project.period}</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-secondary-700 mb-6 text-lg">{project.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-secondary-900 mb-3">Key Achievements:</h3>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-secondary-700">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white text-secondary-700 rounded-md text-sm border border-secondary-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testing Platforms Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Testing Platforms & Infrastructure</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              State-of-the-art platforms used for validating and testing novel AAM concepts and technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingPlatforms.map((platform, index) => (
              <div key={index} className="bg-white border border-secondary-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-primary-600 font-semibold">{platform}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}