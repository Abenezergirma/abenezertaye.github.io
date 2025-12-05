import { Rocket, Battery, Cpu, Zap, ExternalLink } from 'lucide-react';
import Image from 'next/image';

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
      image: "/images/research/auv.jpg",
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
      image: "/images/research/auv.jpg",
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
      image: "/images/research/auv.jpg",
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
      image: "/images/research/auv.jpg",
      links: [
        {
          name: "Publication",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:Tyk-4Ss8FVUC"
        },
        {
          name: "Conference Paper",
          url: "https://www.researchgate.net/profile/Abenezer-Taye-2/publication/384222839_Energy_Demand_Analysis_for_eVTOL_Charging_Stations_in_Urban_Air_Mobility/links/6707286affe5b728123dfb8b/Energy-Demand-Analysis-for-eVTOL-Charging-Stations-in-Urban-Air-Mobility.pdf"
        }
      ]
    }
  ];

  const testingPlatforms = [
    {
      name: "eVTOL simulators",
      description: "High-fidelity simulation environments for electric vertical takeoff and landing aircraft",
      image: "/images/research/roo.png"
    },
    {
      name: "sUAS hardware flight testing", 
      description: "Real-world testing with small unmanned aerial systems",
      image: "/images/research/roo.png"
    },
    {
      name: "Battery digital twins",
      description: "Virtual replicas of battery systems for predictive maintenance and optimization",
      image: "/images/research/roo.png"
    },
    {
      name: "UAM/UAS transportation networks",
      description: "Network simulation and optimization for urban air mobility systems",
      image: "/images/research/roo.png"
    }
  ];

  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research & Projects</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Cutting-edge research in Advanced Air Mobility, autonomous systems, and energy-efficient aviation solutions.
        </p>
        <a 
          href="https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-green-800 hover:text-green-900 font-medium mt-3"
        >
          View Google Scholar Profile
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Main Projects */}
      <div className="space-y-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row">
              {/* Project Image */}
              <div className="lg:w-2/5">
                <div className="h-64 lg:h-full relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4">
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

              {/* Project Content */}
              <div className="lg:w-3/5 p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-green-50 rounded-xl">
                    <project.icon className="h-6 w-6 text-green-800" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="font-medium text-green-800">{project.role}</span>
                      <span>•</span>
                      <span>{project.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{project.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-md text-sm border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors text-sm font-medium"
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
      <section className="mt-16 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Testing Platforms & Infrastructure</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            State-of-the-art platforms used for validating and testing novel AAM concepts and technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testingPlatforms.map((platform, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={platform.image}
                  alt={platform.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Impact Section */}
      <section className="mt-16 max-w-6xl mx-auto">
        <div className="bg-green-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Research Impact</h2>
              <p className="text-lg text-gray-600 mb-6">
                My research contributes to safer, more efficient, and sustainable aviation through advanced autonomous systems and energy optimization.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors font-medium"
                >
                  Explore All Publications
                  <ExternalLink className="h-5 w-5" />
                </a>
                <a
                  href="/publications"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-800 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-green-800"
                >
                  View Publications Page
                </a>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-xl border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-6 text-center">Key Metrics</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-green-800">$2.5M+</p>
                    <p className="text-sm text-gray-600">NASA Funding</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-800">5+</p>
                    <p className="text-sm text-gray-600">Projects</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-800">33×</p>
                    <p className="text-sm text-gray-600">Speedup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}