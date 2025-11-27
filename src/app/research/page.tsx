import { Rocket, Battery, Cpu, Zap, ExternalLink } from 'lucide-react';

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
      status: "Active",
      links: [
        {
          name: "NASA Project Details",
          url: "https://www.nasa.gov/aeroresearch/system-wide-safety"
        },
        {
          name: "Related Publication",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:u5HHmVD_uO8C"
        }
      ]
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
      status: "Active",
      links: [
        {
          name: "Publication",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:2osOgNQ5qMEC"
        }
      ]
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
      status: "Completed",
      links: [
        {
          name: "Journal Paper",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:qjMakFHDy7sC"
        },
        {
          name: "Conference Paper",
          url: "https://arxiv.org/pdf/2306.11647"
        }
      ]
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
      status: "Completed",
      links: [
        {
          name: "Publication",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:Tyk-4Ss8FVUC"
        },
        {
          name:"coference paper",
          url:" https://www.researchgate.net/profile/Abenezer-Taye-2/publication/384222839_Energy_Demand_Analysis_for_eVTOL_Charging_Stations_in_Urban_Air_Mobility/links/6707286affe5b728123dfb8b/Energy-Demand-Analysis-for-eVTOL-Charging-Stations-in-Urban-Air-Mobility.pdf"
        }
      ]
    },
    {
      title: "Flight Mission Feasibility Assessment for UAM Operations",
      role: "Technical Lead",
      period: "2022 - 2023",
      description: "Developed real-time flight mission feasibility assessment framework integrating battery constraints and environmental factors.",
      achievements: [
        "Integrated battery state-of-charge predictions with weather impact analysis",
        "Enabled real-time go/no-go decisions for drone operations",
        "Validated framework using real-world package delivery scenarios"
      ],
      technologies: ["Python", "Battery Prognostics", "Uncertainty Quantification", "Real-time Systems"],
      icon: Rocket,
      status: "Completed",
      links: [
        {
          name: "Journal Paper",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:d1gkVwhDpl0C"
        },
        {
          name: "Conference Paper",
          url: "https://arxiv.org/pdf/2211.02147"
        }
      ]
    }
  ];

  const testingPlatforms = [
    {
      name: "eVTOL simulators",
      description: "High-fidelity simulation environments for electric vertical takeoff and landing aircraft"
    },
    {
      name: "sUAS hardware flight testing", 
      description: "Real-world testing with small unmanned aerial systems"
    },
    {
      name: "Battery digital twins",
      description: "Virtual replicas of battery systems for predictive maintenance and optimization"
    },
    {
      name: "UAM/UAS transportation networks",
      description: "Network simulation and optimization for urban air mobility systems"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-700 mb-4">Research & Projects</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Cutting-edge research in Advanced Air Mobility, autonomous systems, and energy-efficient aviation solutions.
            <br />
            <a 
              href="https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 mt-2"
            >
              View Google Scholar Profile
              <ExternalLink className="h-4 w-4" />
            </a>
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

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white text-secondary-700 rounded-md text-sm border border-secondary-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  {project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                        >
                          {link.name}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testingPlatforms.map((platform, index) => (
              <div key={index} className="bg-white border border-secondary-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-primary-600 font-semibold text-lg mb-2">{platform.name}</h3>
                <p className="text-secondary-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Impact Section */}
        <section className="mt-20 text-center">
          <div className="bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Research Impact</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              My research contributes to safer, more efficient, and sustainable aviation through advanced autonomous systems and energy optimization.
            </p>
            <a
              href="https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Explore All Publications
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}