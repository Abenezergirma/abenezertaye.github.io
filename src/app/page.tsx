import Image from 'next/image';
import { FileText, Github } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Main Content Section */}
      <section className="pt-24 pb-16">
        <div className="container-custom">

          <div className="clearfix">
            {/* Image Column - Floated Left */}
            <div className="float-left w-full md:w-[35%] mr-0 md:mr-10 mb-8 mt-2">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/images/image.jpg"
                  alt="Abenezer Taye"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center top',
                  }}
                  priority
                />
              </div>

              {/* Contact Info below image - Optimized for single line */}
              <div className="mt-4 text-[13px] text-black font-serif border-t border-gray-100 pt-4 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-black">Email:</span>
                  <a href="mailto:abenezertaye@gwu.edu" className="text-[#0B6A6C] underline hover:text-green-900">abenezertaye@gwu.edu</a>
                </div>
                <div className="flex items-center gap-3 font-medium whitespace-nowrap">
                  <a href="https://github.com/Nati-darse" className="text-[#0B6A6C] underline hover:text-green-900">GitHub</a>
                  <span className="text-gray-600">|</span>
                  <a href="https://www.linkedin.com/in/abenezer-taye/" className="text-[#0B6A6C] underline hover:text-green-900">LinkedIn</a>
                  <span className="text-gray-600">|</span>
                  <a href="https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en" className="text-[#0B6A6C] underline hover:text-green-900">Google Scholar</a>
                  <span className="text-gray-600">|</span>
                  <a href="/pdf/cv.pdf" target="_blank" className="text-[#0B6A6C] underline hover:text-green-900">CV</a>
                </div>
              </div>
            </div>

            {/* Text Content - Flows around floated image */}
            <div className="font-serif text-black">
              {/* Branding - Centered within column, smaller font */}
              <div className="mb-6 text-center md:text-left">
                <h1 className="text-3xl font-bold text-black mb-6 leading-tight md:text-center w-full">
                  Abenezer G. Taye
                </h1>
              </div>

              {/* Bio Pargraphs */}
              <div className="prose prose-lg text-black leading-relaxed text-justify max-w-none">
                <p className="mb-4">
                  I&rsquo;m a postdoctoral scholar at the <a href="https://www.isis.vanderbilt.edu/" className="text-[#0B6A6C] underline hover:text-green-900">Institute for Software Integrated Systems</a> at Vanderbilt University, where I work with <a href="https://my.vanderbilt.edu/bryancward/" className="text-[#0B6A6C] underline hover:text-green-900">Prof. Bryan C. Ward</a> and <a href="https://my.vanderbilt.edu/gautambiswas/" className="text-[#0B6A6C] underline hover:text-green-900">Prof. Gautam Biswas</a>. I received my Ph.D. in Aerospace Engineering from George Washington University, advised by <a href="https://web.seas.gwu.edu/pwei/" className="text-[#0B6A6C] underline hover:text-green-900">Prof. Peng Wei</a>, where I studied safety and decision-making in autonomous aircraft operations. My research sits at the intersection of control theory, optimization, and artificial intelligence, with a focus on developing algorithms that enable safe, secure, and reliable next-generation air transportation systems.
                </p>
                <p className="mb-4">
                  During my time at GW, I was part of <a href="https://www.nasa.gov/directorates/armd/aosp/sws/" className="text-[#0B6A6C] underline hover:text-green-900">NASA&rsquo;s System-Wide Safety program</a>, contributing to research on the safe integration of autonomous aircraft into the national airspace. In addition, I served as a Teaching Assistant for <a href="https://bulletin.gwu.edu/courses/mae/" className="text-[#0B6A6C] underline hover:text-green-900">MAE 4182 - Electromechanical Controls</a>. I also completed two research internships at <a href="https://www.mathworks.com/" className="text-[#0B6A6C] underline hover:text-green-900">MathWorks</a>, where I worked on multi-agent perception and trajectory planning.
                </p>
                <p>
                  Currently, my work focuses on securing aerospace systems. I develop methods to identify vulnerabilities in autonomous aviation platforms and design defense strategies against cyber attacks, with the goal of building autonomy that is safe and trustworthy.
                </p>
              </div>
            </div>
          </div>

          {/* Selected Research / Theses Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold font-serif text-black">Selected Research</h2>
            <div className="double-line-separator mb-8" />

            <div className="space-y-12">
              {/* ITEM 1: JAIS 2024 Trajectory Planning */}
              <div className="flex gap-6 md:gap-8">
                <div className="shrink-0 w-32 md:w-64">
                  <div className="w-full aspect-[4/3] relative bg-white border border-gray-100 rounded-sm overflow-hidden">
                    <Image
                      src="/images/research/snapshot_029.png"
                      alt="Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1 font-serif">
                  <div className="flex flex-wrap items-center gap-x-2 mb-1">
                    <h3 className="text-base font-bold text-black leading-snug">
                      <a href="https://arc.aiaa.org/doi/abs/10.2514/1.I011381" target="_blank" className="hover:text-green-800 hover:underline">
                        Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility
                      </a>
                    </h3>
                    <div className="flex items-center gap-2">
                      <a href="https://arc.aiaa.org/doi/abs/10.2514/1.I011381" target="_blank" className="text-black/60 hover:text-green-800 transition-colors" title="PDF">
                        <FileText size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="text-black text-sm mb-1">
                    <span className="font-bold">A. Taye</span>, R. Valenti, A. Rajhans, A. Mavrommati, P. J. Mosterman, P. Wei
                  </div>

                  <div className="text-black text-sm italic">
                    AIAA Journal of Aerospace Information Systems (JAIS), 21 (8), 641-650, 2024.
                  </div>
                </div>
              </div>

              {/* ITEM 2: Energy-Efficient Trajectory Planning */}
              <div className="flex gap-6 md:gap-8">
                <div className="shrink-0 w-32 md:w-64">
                  <div className="w-full aspect-[4/3] relative bg-white border border-gray-100 rounded-sm overflow-hidden">
                    <Image
                      src="/images/research/energy_efficient.png"
                      alt="Energy-Efficient Trajectory Planning and Feasibility Assessment Framework for Drone Package Delivery"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1 font-serif">
                  <div className="flex flex-wrap items-center gap-x-2 mb-1">
                    <h3 className="text-base font-bold text-black leading-snug">
                      <a href="https://arc.aiaa.org/doi/abs/10.2514/1.I011594" target="_blank" className="hover:text-green-800 hover:underline">
                        Energy-Efficient Trajectory Planning and Feasibility Assessment Framework for Drone Package Delivery
                      </a>
                    </h3>
                    <div className="flex items-center gap-2">
                      <a href="https://arc.aiaa.org/doi/abs/10.2514/1.I011594" target="_blank" className="text-black/60 hover:text-green-800 transition-colors" title="PDF">
                        <FileText size={18} />
                      </a>
                      <a href="#" className="hover:opacity-80 transition-opacity flex items-center" title="Code">
                        <Image
                          src="/images/icons/github_standard.png"
                          alt="Github"
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="text-black mb-1">
                    <span className="font-bold">A. Taye</span>, P. Wei
                  </div>

                  <div className="text-black italic">
                    Journal of Aerospace Information Systems, pp. 1-12, 2025.
                  </div>
                </div>
              </div>

              {/* ITEM 3: Remote ID Spoofing */}
              <div className="flex gap-6 md:gap-8">
                <div className="shrink-0 w-32 md:w-64">
                  <div className="w-full aspect-[4/3] relative bg-white border border-gray-100 rounded-sm overflow-hidden">
                    <Image
                      src="/images/research/RID_spoof.png"
                      alt="Remote ID Spoofing Attacks and Defenses"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1 font-serif">
                  <div className="flex flex-wrap items-center gap-x-2 mb-1">
                    <h3 className="text-base font-bold text-black leading-snug">
                      <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2026-2665" target="_blank" className="hover:text-green-800 hover:underline">
                        Remote ID Spoofing Attacks and Defenses
                      </a>
                    </h3>
                    <div className="flex items-center gap-2">
                      <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2026-2665" target="_blank" className="text-black/60 hover:text-green-800 transition-colors" title="PDF">
                        <FileText size={18} />
                      </a>
                      <a href="#" className="hover:opacity-80 transition-opacity flex items-center" title="Code">
                        <Image
                          src="/images/icons/github_standard.png"
                          alt="Github"
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="text-black mb-1">
                    B. Bjorkman, S. Zheng, A. Coursey, C. Lemieux-Mack, S. Gonzalez, A. Diaz-Gonzalez, N. W. Dahle, N. Koroma, R. E. Canady, X. Koutsoukos, G. Biswas, <span className="font-bold">A. Taye</span>, B. Ward
                  </div>

                  <div className="text-black italic">
                    AIAA SCITECH 2026 Forum, 2026.
                  </div>
                </div>
              </div>

              {/* ITEM 4: Safe to Fly? */}
              <div className="flex gap-6 md:gap-8">
                <div className="shrink-0 w-32 md:w-64">
                  <div className="w-full aspect-[4/3] relative bg-white border border-gray-100 rounded-sm overflow-hidden">
                    <Image
                      src="/images/research/neural_ode.png"
                      alt="Safe to Fly? Real-Time Flight Mission Feasibility Assessment for Drone Package Delivery Operations"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1 font-serif">
                  <div className="flex flex-wrap items-center gap-x-2 mb-1">
                    <h3 className="text-base font-bold text-black leading-snug">
                      <a href="https://drops.dagstuhl.de/entities/document/10.4230/OASIcs.DX.2025.8" target="_blank" className="hover:text-green-800 hover:underline">
                        Safe to Fly? Real-Time Flight Mission Feasibility Assessment for Drone Package Delivery Operations
                      </a>
                    </h3>
                    <div className="flex items-center gap-2">
                      <a href="https://drops.dagstuhl.de/entities/document/10.4230/OASIcs.DX.2025.8" target="_blank" className="text-black/60 hover:text-green-800 transition-colors" title="PDF">
                        <FileText size={18} />
                      </a>
                      <a href="#" className="hover:opacity-80 transition-opacity flex items-center" title="Code">
                        <Image
                          src="/images/icons/github_standard.png"
                          alt="Github"
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="text-black mb-1">
                    <span className="font-bold">A. Taye</span>, A. Coursey, M. Quinones-Grueiro, C. Hu, G. Biswas, P. Wei
                  </div>

                  <div className="text-black italic">
                    36th International Conference on Principles of Diagnosis and Resilient Systems (DX 2025).
                  </div>
                </div>
              </div>

              {/* ITEM 5: Energy-Aware Strategic Traffic Management */}
              <div className="flex gap-6 md:gap-8">
                <div className="shrink-0 w-32 md:w-64">
                  <div className="w-full aspect-[4/3] relative bg-white border border-gray-100 rounded-sm overflow-hidden">
                    <Image
                      src="/images/research/energy_aware.png"
                      alt="Energy-Aware Strategic Traffic Management for Urban Air Mobility"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1 font-serif">
                  <div className="flex flex-wrap items-center gap-x-2 mb-1">
                    <h3 className="text-base font-bold text-black leading-snug">
                      <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2025-0580" target="_blank" className="hover:text-green-800 hover:underline">
                        Energy-Aware Strategic Traffic Management for Urban Air Mobility
                      </a>
                    </h3>
                    <div className="flex items-center gap-2">
                      <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2025-0580" target="_blank" className="text-black/60 hover:text-green-800 transition-colors" title="PDF">
                        <FileText size={18} />
                      </a>
                      <a href="#" className="hover:opacity-80 transition-opacity flex items-center" title="Code">
                        <Image
                          src="/images/icons/github_standard.png"
                          alt="Github"
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="text-black mb-1">
                    <span className="font-bold">A. Taye</span>, S. Chen, P. Wei
                  </div>

                  <div className="text-black italic">
                    AIAA SCITECH 2025 Forum, 0580, 2025.
                  </div>
                </div>
              </div>

              {/* ITEM 6: Using LLMs */}
              <div className="flex gap-6 md:gap-8">
                <div className="shrink-0 w-32 md:w-64">
                  <div className="w-full aspect-[4/3] relative bg-white border border-gray-100 rounded-sm overflow-hidden">
                    <Image
                      src="/images/research/LLM_fig.png"
                      alt="Using Large Language Models to Automate Flight Planning Under Wind Hazards"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1 font-serif">
                  <div className="flex flex-wrap items-center gap-x-2 mb-1">
                    <h3 className="text-base font-bold text-black leading-snug">
                      <a href="https://ieeexplore.ieee.org/abstract/document/10749512/" target="_blank" className="hover:text-green-800 hover:underline">
                        Using Large Language Models to Automate Flight Planning Under Wind Hazards
                      </a>
                    </h3>
                    <div className="flex items-center gap-2">
                      <a href="https://ieeexplore.ieee.org/abstract/document/10749512/" target="_blank" className="text-black/60 hover:text-green-800 transition-colors" title="PDF">
                        <FileText size={18} />
                      </a>
                      <a href="#" className="hover:opacity-80 transition-opacity flex items-center" title="Code">
                        <Image
                          src="/images/icons/github_standard.png"
                          alt="Github"
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="text-black mb-1">
                    A. Tabrizian, P. Gupta, <span className="font-bold">A. Taye</span>, J. Jones, E. Thompson, S. Chen, T. Bonin, D. Eberle, P. Wei
                  </div>

                  <div className="text-black italic">
                    2024 AIAA DATC/IEEE 43rd Digital Avionics Systems Conference (DASC).
                  </div>
                </div>
              </div>

              {/* ITEM 7: Energy Demand Analysis */}
              <div className="flex gap-6 md:gap-8">
                <div className="shrink-0 w-32 md:w-64">
                  <div className="w-full aspect-[4/3] relative bg-white border border-gray-100 rounded-sm overflow-hidden">
                    <Image
                      src="/images/research/energy_demand.png"
                      alt="Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1 font-serif">
                  <div className="flex flex-wrap items-center gap-x-2 mb-1">
                    <h3 className="text-base font-bold text-black leading-snug">
                      <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2024-4627" target="_blank" className="hover:text-green-800 hover:underline">
                        Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility
                      </a>
                    </h3>
                    <div className="flex items-center gap-2">
                      <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2024-4627" target="_blank" className="text-black/60 hover:text-green-800 transition-colors" title="PDF">
                        <FileText size={18} />
                      </a>
                      <a href="#" className="hover:opacity-80 transition-opacity flex items-center" title="Code">
                        <Image
                          src="/images/icons/github_standard.png"
                          alt="Github"
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="text-black mb-1">
                    <span className="font-bold">A. Taye</span>, P. Pradeep, P. Wei, J. C. Jones, T. Bonin, D. Eberle
                  </div>

                  <div className="text-black italic">
                    AIAA AVIATION FORUM AND ASCEND 2024, 4627, 2024.
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