'use client';

import {ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function Research() {
  const projects = [
    {
      title: "NASA System-Wide Safety: In-Time Learning-Based Safety Management",
      role: "Technical Thrust Lead",
      period: "2022 - Present",
      description: "Leading a NASA-funded project to develop a scalable, data-driven safety management system for Advanced Air Mobility operations.",
      achievements: [
        "Designed mission feasibility framework integrating battery prognostics",
        "Evaluated impact of adverse weather on flight safety",
        "Demonstrated framework in drone delivery and urban air taxi scenarios"
      ],
      technologies: ["Python", "TensorFlow", "Reinforcement Learning", "MDP"],
      image: "/images/research/auv.jpg",
      imageDimensions: { width: 400, height: 250 },
      links: [
        { name: "NASA Project Details", url: "https://www.nasa.gov/aeroresearch/system-wide-safety" },
        { name: "Related Publication", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:u5HHmVD_uO8C" }
      ]
    },
    {
      title: "Learning-based Li-ion Battery Modeling for Online Decision Making",
      role: "Technical Lead",
      period: "Sept 2022 - Present",
      description: "Developed real-time predictive models for Li-ion batteries using Neural ODEs and Physics-Informed Neural Networks.",
      achievements: [
        "33× speedup in battery state prediction",
        "Enabled mission feasibility assessment and mid-flight replanning",
        "Maintained accuracy under computational constraints"
      ],
      technologies: ["PyTorch", "Neural ODEs", "Physics-Informed Neural Networks", "Python"],
      image: "/images/research/auv.jpg",
      imageDimensions: { width: 400, height: 250 },
      links: [
        { name: "Publication", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:2osOgNQ5qMEC" }
      ]
    },
    {
      title: "Safe, Scalable, and Energy-Efficient Trajectory Planner for AAM Operations",
      role: "Technical Lead",
      period: "2021 - 2024",
      description: "Developed a real-time multi-agent trajectory planner for urban air mobility operations.",
      achievements: [
        "Integrated reachability analysis with scalable MDP framework",
        "Enhanced safety with action-shielding and reward shaping",
        "Optimized energy efficiency using aircraft modeling"
      ],
      technologies: ["Python", "OpenAI Gym", "Reachability Analysis", "Multi-Agent Systems"],
      image: "/images/research/auv.jpg",
      imageDimensions: { width: 400, height: 250 },
      links: [
        { name: "Journal Paper", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:qjMakFHDy7sC" },
        { name: "Conference Paper", url: "https://arxiv.org/pdf/2306.11647" }
      ]
    },
    {
      title: "Energy Demand Analysis for eVTOL Aircraft in Urban Air Mobility",
      role: "Technical Lead",
      period: "2023 - 2024",
      description: "Forecasting charging demand for electric vertical takeoff and landing aircraft in urban air mobility.",
      achievements: [
        "Integrated energy consumption models with wind forecasts",
        "Estimated aggregated power demand at vertiports",
        "Enabled proactive energy planning and infrastructure optimization"
      ],
      technologies: ["Python", "Data Analysis", "Energy Modeling", "Forecasting"],
      image: "/images/research/auv.jpg",
      imageDimensions: { width: 400, height: 250 },
      links: [
        { name: "Publication", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:Tyk-4Ss8FVUC" }
      ]
    }
  ];
  
  const testingPlatforms = [
    {
      name: "eVTOL simulators",
      description: "High-fidelity simulation environments for electric vertical takeoff and landing aircraft",
      image: "/images/research/roo.png",
      imageDimensions: { width: 400, height: 250 }
    },
    {
      name: "sUAS hardware flight testing", 
      description: "Real-world testing with small unmanned aerial systems",
      image: "/images/research/roo.png",
      imageDimensions: { width: 400, height: 250 }
    },
    {
      name: "Battery digital twins",
      description: "Virtual replicas of battery systems for predictive maintenance and optimization",
      image: "/images/research/roo.png",
      imageDimensions: { width: 400, height: 250 }
    },
    {
      name: "UAM/UAS transportation networks",
      description: "Network simulation and optimization for urban air mobility systems",
      image: "/images/research/roo.png",
      imageDimensions: { width: 400, height: 250 }
    }
  ];

  return (
    <div className="py-10 px-4 md:px-8 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="text-center mb-14 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Research & Projects</h1>
        <p className="text-gray-600 mb-4">
          Cutting-edge research in Advanced Air Mobility, autonomous systems, and energy-efficient aviation solutions.
        </p>
        <a 
          href="https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-green-800 hover:text-green-900 font-medium"
        >
          View Google Scholar Profile
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Research Projects */}
      <div className="space-y-10 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row">
              {/* Project Image - Fixed to maintain aspect ratio */}
              <div className="lg:w-2/5 relative h-auto min-h-[250px]">
                <div className="relative w-full h-full">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={project.imageDimensions.width}
                    height={project.imageDimensions.height}
                    className="object-cover w-full h-full"
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-3/5 p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h2>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium text-green-800">{project.role}</span> • {project.period}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{project.description}</p>

                <ul className="mb-4 space-y-1">
                  {project.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-1.5"></div>
                      {ach}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-50 border border-gray-200 text-gray-700 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-green-800 text-white text-xs rounded hover:bg-green-900 transition"
                    >
                      {link.name} <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testing Platforms */}
      <section className="mt-16 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Testing Platforms & Infrastructure</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            State-of-the-art platforms used for validating and testing novel AAM concepts and technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testingPlatforms.map((platform, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              {/* Platform Image - Fixed to maintain aspect ratio */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image 
                  src={platform.image} 
                  alt={platform.name}
                  width={platform.imageDimensions.width}
                  height={platform.imageDimensions.height}
                  className="object-cover w-full h-full"
                  style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
              <div className="p-6 grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600 text-sm">{platform.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Impact */}
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