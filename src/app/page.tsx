import Image from 'next/image';
import { Github, Linkedin, GraduationCap, Mail } from 'lucide-react';
import ResearchItem from '../components/ResearchItem';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Main Content Section */}
      <section className="pt-16 pb-16">
        <div className="container-custom">

          <div className="clearfix">
            {/* Image Column - Floated Left */}
            <div className="float-left w-full md:w-[35%] mr-0 md:mr-10 mb-2.5 mt-1">
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
              <div className="mt-3 text-[13px] text-black font-serif flex flex-col items-center">
                <div className="flex items-center justify-center gap-1 mb-2 whitespace-nowrap text-[12px]">
                  <Mail size={14} className="text-[#0B6A6C] shrink-0" aria-label="Email" />
                  <span className="text-[#0B6A6C]">abenezer [dot] taye [at] vanderbilt [dot] edu</span>
                </div>
                <div className="flex items-center gap-4 font-medium whitespace-nowrap">
                  <a href="https://github.com/Abenezergirma" target="_blank" rel="noopener noreferrer" className="text-[#0B6A6C] hover:text-green-900" title="GitHub" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/abenezer-taye/" target="_blank" rel="noopener noreferrer" className="text-[#0B6A6C] hover:text-green-900" title="LinkedIn" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-[#0B6A6C] hover:text-green-900" title="Google Scholar" aria-label="Google Scholar">
                    <GraduationCap size={20} />
                  </a>
                  <a href="/pdf/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0B6A6C] font-bold hover:text-green-900 hover:underline">CV</a>
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

              {/* Bio Paragraphs */}
              <div className="prose prose-lg text-black leading-relaxed text-justify max-w-none">
                <p className="mb-4">
                  I&rsquo;m a postdoctoral scholar at the <a href="https://www.isis.vanderbilt.edu/" className="text-[#0B6A6C] underline hover:text-green-900">Institute for Software Integrated Systems</a> at Vanderbilt University, where I work with <a href="https://my.vanderbilt.edu/bryancward/" className="text-[#0B6A6C] underline hover:text-green-900">Prof. Bryan C. Ward</a> and <a href="https://my.vanderbilt.edu/gautambiswas/" className="text-[#0B6A6C] underline hover:text-green-900">Prof. Gautam Biswas</a>. I received my Ph.D. in Aerospace Engineering from The George Washington University, advised by <a href="https://web.seas.gwu.edu/pwei/" className="text-[#0B6A6C] underline hover:text-green-900">Prof. Peng Wei</a>, where I studied safety and decision-making in autonomous aircraft operations. My research sits at the intersection of control theory, optimization, and artificial intelligence, with a focus on developing algorithms that enable safe, secure, and reliable next-generation air transportation systems.
                </p>
                <p className="mb-4">
                  During my time at GW, I was part of <a href="https://www.nasa.gov/directorates/armd/aosp/sws/" className="text-[#0B6A6C] underline hover:text-green-900">NASA&rsquo;s System-Wide Safety program</a>, contributing to research on the safe integration of autonomous aircraft into the national airspace. In addition, I served as a Teaching Assistant for <a href="https://bulletin.gwu.edu/courses/mae/" className="text-[#0B6A6C] underline hover:text-green-900">MAE 4182: Electromechanical Controls</a>. I also completed two research internships at <a href="https://www.mathworks.com/" className="text-[#0B6A6C] underline hover:text-green-900">MathWorks</a>, where I worked on multi-agent perception and trajectory planning.
                </p>
                <p>
                  Currently, my work focuses on securing aerospace systems. I develop methods to identify vulnerabilities in autonomous aviation platforms and design defense strategies against cyberattacks, with the goal of building autonomy that is safe and trustworthy.
                </p>
              </div>
            </div>
          </div>

          {/* Selected Research / Theses Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold font-serif text-black">Selected Research</h2>
            <div className="double-line-separator mb-8" />

            <div className="space-y-12">
              <ResearchItem
                title={"Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility"}
                authors={"<strong>A. Taye</strong>, R. Valenti, A. Rajhans, A. Mavrommati, P. J. Mosterman, P. Wei"}
                venue={"Journal of Aerospace Information Systems"}
                year={"2024"}
                imageSrc={"/images/research/snapshot_029.png"}
                pdfPath={"/papers/safe-and-scalable-real-time-trajectory-planning-framework-for-urban-air-mobility.pdf"}
              />

              <ResearchItem
                title={"Energy-Efficient Trajectory Planning and Feasibility Assessment Framework for Drone Package Delivery"}
                authors={"<strong>A. Taye</strong>, P. Wei"}
                venue={"Journal of Aerospace Information Systems"}
                year={"2025"}
                imageSrc={"/images/research/energy_efficient.png"}
                pdfPath={"/papers/energy-efficient-trajectory-planning-and-feasibility-assessment-framework-for-drone-package-delivery-2025.pdf"}
                codeUrl={"https://github.com/Abenezergirma"}
              />

              <ResearchItem
                title={"Remote ID Spoofing Attacks and Defenses"}
                authors={"B. Bjorkman, S. Zheng, A. Coursey, C. Lemieux-Mack, S. Gonzalez, A. Diaz-Gonzalez, N. W. Dahle, N. Koroma, R. E. Canady, X. Koutsoukos, G. Biswas, <strong>A. Taye</strong>, B. Ward"}
                venue={"AIAA SciTech"}
                year={"2026"}
                imageSrc={"/images/research/RID_spoof.png"}
                pdfPath={"/papers/remote-id-spoofing-attacks-and-defenses-2026.pdf"}
                codeUrl={"https://github.com/Abenezergirma"}
              />

              <ResearchItem
                title={"Safe to Fly? Real-Time Flight Mission Feasibility Assessment for Drone Package Delivery Operations"}
                authors={"<strong>A. Taye</strong>, A. Coursey, M. Quinones-Grueiro, C. Hu, G. Biswas, P. Wei"}
                venue={"36th International Conference on Principles of Diagnosis and Resilient Systems (DX 2025)"}
                imageSrc={"/images/research/neural_ode.png"}
                pdfPath={"/papers/safe-to-fly-real-time-flight-mission-feasibility-assessment-for-drone-package-delivery-operations-2025.pdf"}
              />

              <ResearchItem
                title={"Energy-Aware Strategic Traffic Management for Urban Air Mobility"}
                authors={"<strong>A. Taye</strong>, S. Chen, P. Wei"}
                venue={"AIAA SciTech"}
                year={"2025"}
                imageSrc={"/images/research/energy_aware.png"}
                pdfPath={"https://arc.aiaa.org/doi/abs/10.2514/6.2025-0580"}
              />

              <ResearchItem
                title={"Using Large Language Models to Automate Flight Planning Under Wind Hazards"}
                authors={"A. Tabrizian, P. Gupta, <strong>A. Taye</strong>, J. Jones, E. Thompson, S. Chen, T. Bonin, D. Eberle, P. Wei"}
                venue={"Digital Avionics Systems Conference (DASC)"}
                year={"2024"}
                imageSrc={"/images/research/LLM_fig.png"}
                pdfPath={"/papers/using-large-language-models-to-automate-flight-planning-under-wind-hazards-2024.pdf"}
              />

              <ResearchItem
                title={"Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility"}
                authors={"<strong>A. Taye</strong>, P. Pradeep, P. Wei, J. C. Jones, T. Bonin, D. Eberle"}
                venue={"AIAA Aviation"}
                year={"2024"}
                imageSrc={"/images/research/energy_demand.png"}
                pdfPath={"/papers/energy-demand-analysis-for-evtol-charging-stations-in-urban-air-mobility-2024.pdf"}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}