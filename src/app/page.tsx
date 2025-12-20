import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Minimal padding since body already has padding-top */}
      <section className="pt-4 pb-6">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              {/* Mobile: Show image first on mobile */}
              <div className="lg:w-2/5 flex justify-center order-first lg:order-last">
                <div className="w-48 h-48 md:w-52 md:h-52">
                  <div className="w-full h-full rounded-full overflow-hidden border border-gray-300">
                    <Image 
                      src="/images/image.jpg" 
                      alt="Abenezer Taye"
                      width={208}
                      height={208}
                      className="w-full h-full object-cover"
                       style={{ 
                        objectPosition: 'center center',
                        transform: 'scale(1.2)'
                      }}
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Desktop: Text first */}
              <div className="lg:w-3/5 order-last lg:order-first">
                <div className="space-y-2">
                  <p className='text-xl md:text-2xl font-semibold text-gray-900'>
                    Post-Doctoral Research Scholar
                  </p>
                  <p className="text-gray-900">
                  By contributing to the intersection of flight control, battery prognostics, multi-agent systems and machine learning, I develop autonomous systems and decision support tools for aviation, air transportation, and aerial vehicles. My research expertise blends in both learning-based and model-based approaches for flight mechanics (both fixed-wing and rotorcraft) and control, aviation electrification and battery prognostics, and ensuring that new aircraft types such as small unmanned aerial systems (UAS) and electrical take-off and landing (eVTOL) vehicles operate safely and energy-efficiently in complex environments, e.g. high-density airspaces under winds.                  <p className="text-gray-900 font-semibold">Vanderbilt University</p>
                </div>

                {/* Contact Links */}
                <div className="flex flex-wrap gap-4 mt-4">
                  <a 
                    href="mailto:abenezertaye@gvu.edu" 
                    className="text-green-800 hover:text-green-900 hover:underline"
                  >
                    Email
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/abenezer-taye/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-800 hover:text-green-900 hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/Abenezergirma" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-800 hover:text-green-900 hover:underline"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-800 hover:text-green-900 hover:underline"
                  >
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-6">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 pb-2 border-b-2 border-gray-200 mb-6">
              Research Interests
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-800 leading-relaxed">
                My research focuses on developing <span className="font-semibold text-green-800">safe and efficient autonomous systems</span> for Advanced Air Mobility (AAM). Specifically, I work on <span className="font-semibold text-green-800">real-time trajectory planning frameworks</span> for dense urban airspace, <span className="font-semibold text-green-800">battery prognostics and energy management</span> using Neural ODEs for eVTOL aircraft, and <span className="font-semibold text-green-800">scalable safety verification systems</span> for heterogeneous AAM operations. My approach combines machine learning with aerospace engineering to create practical solutions for urban air transportation challenges, with applications in NASA-funded projects for system-wide safety management.
              </p>

              <div className="pt-2">
                <a 
                  href="/research" 
                  className="text-green-800 hover:text-green-900 hover:underline"
                >
                  View detailed research projects →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
            {/* News Section */}
      <section className="py-6">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 pb-2 border-b-2 border-gray-200 mb-6">
              News
            </h2>
            
            {/* Scrollable News Container */}
            <div className="relative">
              <div className="overflow-y-auto max-h-[400px] pr-4 news-scroll">
                <div className="space-y-6">
                  <div className="flex">
                    <div className="shrink-0 w-20">
                      <span className="text-sm text-gray-500">2024</span>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2">
                        <span className="font-medium text-gray-900">Paper accepted to AIAA SciTech 2025</span> – &quot;Energy-Aware Strategic Traffic Management for Urban Air Mobility&quot; accepted for presentation.
                      </p>
                      <a href="#" className="text-green-800 hover:text-green-900 hover:underline text-sm">
                        Read paper →
                      </a>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="shrink-0 w-20">
                      <span className="text-sm text-gray-500">2024</span>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium text-gray-900">Journal paper published in AIAA JAIS</span> – &quot;Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility&quot; published.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="shrink-0 w-20">
                      <span className="text-sm text-gray-500">2024</span>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium text-gray-900">Presented at AIAA Aviation 2024</span> – Presented research on Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="shrink-0 w-20">
                      <span className="text-sm text-gray-500">2024</span>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2">
                        <span className="font-medium text-gray-900">NASA System-Wide Safety Project</span> – Started as Technical Thrust Lead on $2.5M NASA-funded project for AAM safety systems.
                      </p>
                      <a href="/research" className="text-green-800 hover:text-green-900 hover:underline text-sm">
                        View project →
                      </a>
                    </div>
                  </div>

                  {/* Additional news items for scrolling effect */}
                  <div className="flex">
                    <div className="shrink-0 w-20">
                      <span className="text-sm text-gray-500">2023</span>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium text-gray-900">Best Paper Award</span> – Received Best Paper Award at AIAA Aviation 2023 conference.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="shrink-0 w-20">
                      <span className="text-sm text-gray-500">2023</span>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2">
                        <span className="font-medium text-gray-900">Research Fellowship</span> – Awarded prestigious research fellowship for AAM safety systems.
                      </p>
                      <a href="#" className="text-green-800 hover:text-green-900 hover:underline text-sm">
                        Details →
                      </a>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="shrink-0 w-20">
                      <span className="text-sm text-gray-500">2022</span>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium text-gray-900">Conference Presentation</span> – Presented at International Conference on Autonomous Systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="shrink-0 w-20">
                      <span className="text-sm text-gray-500">2022</span>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium text-gray-900">New Research Grant</span> – Secured funding for advanced trajectory planning research.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="shrink-0 w-20">
                      <span className="text-sm text-gray-500">2022</span>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-medium text-gray-900">Workshop Organization</span> – Organized workshop on Urban Air Mobility at IEEE Conference.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="shrink-0 w-20">
                      <span className="text-sm text-gray-500">2021</span>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2">
                        <span className="font-medium text-gray-900">PhD Defense</span> – Successfully defended PhD dissertation on Autonomous Systems for AAM.
                      </p>
                      <a href="#" className="text-green-800 hover:text-green-900 hover:underline text-sm">
                        Dissertation →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Scroll gradient indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
            </div>

            <div className="pt-4">
              <a 
                href="/publications" 
                className="text-green-800 hover:text-green-900 hover:underline"
              >
                View all publications →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-8">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 pb-2 border-b-2 border-gray-200 mb-6">
              Presentations & Videos
            </h2>
            
            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {/* Video 1 */}
              <div className="space-y-2">
                <div className="aspect-video bg-gray-100 rounded overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/s3weilPKDdQ"
                    title="AIAA Aviation 2024 Presentation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="text-sm text-gray-500">2024</div>
                <h3 className="text-base font-medium text-gray-900">
                  AIAA Aviation 2024 Presentation
                </h3>
                <p className="text-sm text-gray-700">
                  Energy Demand Analysis for eVTOL Charging Stations
                </p>
              </div>

              {/* Video 2 */}
              <div className="space-y-2">
                <div className="aspect-video bg-gray-100 rounded overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/s3weilPKDdQ"
                    title="Research Overview Presentation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="text-sm text-gray-500">2023</div>
                <h3 className="text-base font-medium text-gray-900">
                  Research Overview Presentation
                </h3>
                <p className="text-sm text-gray-700">
                  Trajectory planning and battery prognostics research
                </p>
              </div>

              {/* Video 3 */}
              <div className="space-y-2">
                <div className="aspect-video bg-gray-100 rounded overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/s3weilPKDdQ"
                    title="AAM Safety Systems"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="text-sm text-gray-500">2024</div>
                <h3 className="text-base font-medium text-gray-900">
                  AAM Safety Systems Overview
                </h3>
                <p className="text-sm text-gray-700">
                  NASA-funded project overview
                </p>
              </div>

              {/* Video 4 */}
              <div className="space-y-2">
                <div className="aspect-video bg-gray-100 rounded overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/s3weilPKDdQ"
                    title="Trajectory Planning Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="text-sm text-gray-500">2023</div>
                <h3 className="text-base font-medium text-gray-900">
                  Trajectory Planning Demo
                </h3>
                <p className="text-sm text-gray-700">
                  Real-time planning framework demonstration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}