import React from 'react';
import Image from 'next/image';
import PubLink from '../../components/PubLink';

function renderVenue(v: string, y: string) {
  if (/\b\d{4}\b/.test(v)) {
    return <span className="italic">{v}</span>;
  }
  return <><span className="italic">{v}</span>, {y}</>;
}

export default function Research() {
  return (
    <div className="container-custom pt-24 pb-12">
      <h1 className="text-3xl font-serif font-bold text-black">Research</h1>
      <div className="double-line-separator mb-12" />

      <div className="space-y-16">
        <section className="space-y-4">
          <h2 className="text-xl font-serif font-bold text-black">Safe and Scalable Trajectory Planner for AAM Operations</h2>
          <div className="h-px bg-gray-200 my-3" />

          <div className="prose text-sm md:text-base text-black font-serif leading-relaxed text-justify">
            <p>
              Developing a trajectory planning algorithm that scales to a high number of aircraft while maintaining safety guarantees is critical for high-density airspace. This work introduces a correct-by-construction approach that combines reachability analysis and Markov decision processes to achieve safe and scalable real-time trajectory planning.
            </p>
          </div>

          <div className="my-6">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg w-full">
              <Image src="/images/research/safe.png" alt="Safe and Scalable Trajectory Planner for AAM Operations" fill className="object-contain rounded" />
            </div>
          </div>

          <div className="relative bg-gray-50 border border-gray-200 text-sm text-black font-serif space-y-3 rounded-lg overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300" />
              <div className="pl-6 p-4">
                <ol className="list-decimal ml-6 space-y-2 text-sm">
                  <li>
                    <span className="font-bold">A. G. Taye</span>, J. Bertram, C. Fan, P. Wei. <PubLink title="Reachability based Online Safety Verification for High-Density Urban Air Mobility Trajectory Planning" url="https://arc.aiaa.org/doi/abs/10.2514/6.2022-3542">"Reachability based Online Safety Verification for High-Density Urban Air Mobility Trajectory Planning"</PubLink>.{' '}{renderVenue('AIAA AVIATION 2022 Forum', '2022')}.
                  </li>
                  <li>
                    <span className="font-bold">A. G. Taye</span>, R. Valenti, A. Rajhans, A. Mavrommati, P. J. Mosterman, P. Wei. <PubLink title="Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility" url="https://arc.aiaa.org/doi/abs/10.2514/1.I011381">"Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility"</PubLink>.{' '}{renderVenue('Journal of Aerospace Information Systems (JAIS), 21 (8), 641-650', '2024')}.
                  </li>
                </ol>
              </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-serif font-bold text-black">In-Time Safety Management of AAM Operations</h2>
          <div className="h-px bg-gray-200 my-3" />

          <div className="prose text-sm md:text-base text-black font-serif leading-relaxed text-justify">
            <p>
              Ensuring the safety of AAM operations requires assessing hazards that affect the safety of the flight mission pre-departure. This project introduces an energy-efficient trajectory planner and a model-based prognostics approach to assess the risk that arises from insufficient battery energy and other environmental factors such as winds.
            </p>
          </div>

          <div className="my-6">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg w-full">
              <Image src="/images/research/actual_aircraft.png" alt="In-Time Safety Management of AAM Operations" fill className="object-contain rounded" />
            </div>
          </div>

          <div className="relative bg-gray-50 border border-gray-200 text-sm text-black font-serif space-y-3 rounded-lg overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300" />
            <div className="pl-6 p-4">
              <ol className="list-decimal ml-6 space-y-2 text-sm">
                  <li>
                  <span className="font-bold">A. Taye</span>, E. L. Thompson, P. Wei, T. Bonin, J. C. Jones. <PubLink title="Probabilistic Evaluation for Flight Mission Feasibility of a Small Octocopter in the Presence of Wind" url="https://arc.aiaa.org/doi/abs/10.2514/6.2023-3964">"Probabilistic Evaluation for Flight Mission Feasibility of a Small Octocopter in the Presence of Wind"</PubLink>.{' '}{renderVenue('AIAA AVIATION 2023 Forum', '2023')}.
                </li>
                <li>
                  <span className="font-bold">A. G. Taye</span>, P. Wei. <PubLink title="Flight Mission Feasibility Assessment of Urban Air Mobility Operations Under Battery Energy Constraint" url="https://arc.aiaa.org/doi/abs/10.2514/6.2024-0532">"Flight Mission Feasibility Assessment of Urban Air Mobility Operations Under Battery Energy Constraint"</PubLink>.{' '}{renderVenue('AIAA SCITECH 2024 Forum', '2024')}.
                </li>
                <li>
                  E. L. Thompson, <span className="font-bold">A. G. Taye</span>, W. Guo, P. Wei, M. Quinones, I. Ahmed, G. Biswas, J. Quattrociocchi, S. Carr, U. Topcu, J. C. Jones, M. W. Brittain. <PubLink title="A Survey of eVTOL Aircraft and AAM Operation Hazards" url="https://arc.aiaa.org/doi/abs/10.2514/6.2022-3539">"A Survey of eVTOL Aircraft and AAM Operation Hazards"</PubLink>.{' '}{renderVenue('AIAA Aviation 2022 Forum', '2022')}.
                </li>
                <li>
                  <span className="font-bold">A. G. Taye</span>, P. Wei. <PubLink title="Energy-Efficient Trajectory Planning and Feasibility Assessment Framework for Drone Package Delivery" url="https://arc.aiaa.org/doi/abs/10.2514/1.I011594">"Energy-Efficient Trajectory Planning and Feasibility Assessment Framework for Drone Package Delivery"</PubLink>.{' '}{renderVenue('Journal of Aerospace Information Systems', '2025')}.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-serif font-bold text-black">Securing High-Density Urban Airspaces</h2>
          <div className="h-px bg-gray-200 my-3" />

          <div className="prose text-sm md:text-base text-black font-serif leading-relaxed text-justify">
            <p>
              As AAM operations become increasingly networked and autonomous, cybersecurity emerges as a fundamental safety concern. In this work, I develop methods and algorithms to identify vulnerabilities in AAM systems and design defense strategies against cyberattacks to improve system-level resilience and security.
            </p>
          </div>

          <div className="my-6">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg w-full">
              <Image src="/images/research/workflow.png" alt="Securing High-Density Urban Airspaces" fill className="object-contain rounded" />
            </div>
          </div>

          <div className="relative bg-gray-50 border border-gray-200 text-sm text-black font-serif space-y-3 rounded-lg overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300" />
            <div className="pl-6 p-4">
              <ol className="list-decimal ml-6 space-y-2 text-sm">
                <li>
                  M. Ghazanfari, I. Sharifi, P. Wei, <span className="font-bold">A. Taye</span>, A. Diaz-Gonzalez, A. Coursey, B. Bjorkman, R. E. Canady, B. Ward, G. Biswas, X. Koutsoukos. <PubLink title="A Survey of Security Challenges and Solutions for Advanced Air Mobility and eVTOL Aircraft" url="https://arc.aiaa.org/doi/abs/10.2514/6.2026-2891">"A Survey of Security Challenges and Solutions for Advanced Air Mobility and eVTOL Aircraft"</PubLink>.
                  {renderVenue('AIAA SCITECH 2026 Forum', '2026')}.
                </li>
                <li>
                  I. Sharifi, M. Ghazanfari, <span className="font-bold">A. Taye</span>, P. Wei, A. Diaz-Gonzalez, A. Coursey, B. Bjorkman, R. E. Canady, B. Ward, G. Biswas, X. Koutsoukos. <PubLink title="A Survey of Security Challenges and Solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS)" url="https://arc.aiaa.org/doi/abs/10.2514/6.2026-2892">"A Survey of Security Challenges and Solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS)"</PubLink>.
                   {renderVenue('AIAA SCITECH 2026 Forum', '2026')}.
                </li>
                <li>
                  A. Diaz-Gonzalez, A. Coursey, B. Bjorkman, D. Shatokhin, C. Lemieux-Mack, N. W. Dahle, R. E. Canady, <span className="font-bold">A. Taye</span>, X. Koutsoukos, G. Biswas, B. Ward. <PubLink title="Networked Simulation for Cybersecurity Evaluation of Small Unmanned Aircraft Systems in Dense Urban Environments" url="https://arc.aiaa.org/doi/abs/10.2514/6.2026-1797">"Networked Simulation for Cybersecurity Evaluation of Small Unmanned Aircraft Systems in Dense Urban Environments"</PubLink>.
                  {renderVenue('AIAA SCITECH 2026 Forum', '2026')}.
                </li>
                <li>
                  N. W. Dahle, R. E. Canady, A. Coursey, A. Diaz-Gonzalez, C. Lemieux-Mack, B. Bjorkman, <span className="font-bold">A. Taye</span>, B. Ward, G. Biswas, X. Koutsoukos. <PubLink title="Detection of Compromised UAVs using Graph Machine Learning" url="https://arc.aiaa.org/doi/abs/10.2514/6.2026-2667">"Detection of Compromised UAVs using Graph Machine Learning"</PubLink>.{' '}{renderVenue('AIAA SCITECH 2026 Forum', '2026')}.
                </li>
                <li>
                  B. Bjorkman, S. Zheng, A. Coursey, C. Lemieux-Mack, S. Gonzalez, A. Diaz-Gonzalez, N. W. Dahle, N. Koroma, R. E. Canady, X. Koutsoukos, G. Biswas, <span className="font-bold">A. Taye</span>, B. Ward. <PubLink title="Remote ID Spoofing Attacks and Defenses" url="https://arc.aiaa.org/doi/abs/10.2514/6.2026-2665">"Remote ID Spoofing Attacks and Defenses"</PubLink>.{' '}{renderVenue('AIAA SCITECH 2026 Forum', '2026')}.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-serif font-bold text-black">Real-Time Flight Mission Feasibility Assessment</h2>
          <div className="h-px bg-gray-200 my-3" />

          <div className="prose text-sm md:text-base text-black font-serif leading-relaxed text-justify">
            <p>
              Ensuring flight safety for small unmanned aerial systems (sUAS) requires continuous in-flight monitoring and decision-making, as unexpected events can occur during flight. In this work, we present an online feasibility assessment and contingency management framework that continuously monitors the aircraft's battery state and the energy required to complete the flight in real-time.
            </p>
          </div>

          <div className="my-6">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg w-full">
              <Image src="/images/research/safetofly.png" alt="Real-Time Flight Mission Feasibility Assessment" fill className="object-contain rounded" />
            </div>
          </div>

          <div className="relative bg-gray-50 border border-gray-200 text-sm text-black font-serif space-y-3 rounded-lg overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300" />
            <div className="pl-6 p-4">
              <ol className="list-decimal ml-6 space-y-2 text-sm">
                <li>
                  <span className="font-bold">A. Taye</span>, A. Coursey, M. Quinones-Grueiro, C. Hu, G. Biswas, P. Wei. <PubLink title="Safe to Fly? Real-Time Flight Mission Feasibility Assessment for Drone Package Delivery Operations" url="https://drops.dagstuhl.de/entities/document/10.4230/OASIcs.DX.2025.8">"Safe to Fly? Real-Time Flight Mission Feasibility Assessment for Drone Package Delivery Operations"</PubLink>.
                  {renderVenue('36th International Conference on Principles of Diagnosis and Resilient Systems (DX 2025)', '2025')}.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-serif font-bold text-black">Energy-Aware Strategic Traffic Management for UAM</h2>
          <div className="h-px bg-gray-200 my-3" />

          <div className="prose text-sm md:text-base text-black font-serif leading-relaxed text-justify">
            <p>
              We propose a strategic traffic management framework that explicitly accounts for the energy constraints of electric vertical take-off and landing (eVTOL) vehicles. By integrating energy consumption models into the traffic flow management process, we ensure that flights are not only de-conflicted but also operate within safe energy margins.
            </p>
          </div>

          <div className="my-6">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg w-full">
              <Image src="/images/research/traffic_management.png" alt="Energy-Aware Strategic Traffic Management for Urban Air Mobility" fill className="object-contain rounded" />
            </div>
          </div>

          <div className="relative bg-gray-50 border border-gray-200 text-sm text-black font-serif space-y-3 rounded-lg overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300" />
            <div className="pl-6 p-4">
              <ol className="list-decimal ml-6 space-y-2 text-sm">
                <li>
                  <span className="font-bold">A. G. Taye</span>, S. Chen, P. Wei. <PubLink title="Energy-Aware Strategic Traffic Management for Urban Air Mobility" url="https://arc.aiaa.org/doi/abs/10.2514/6.2025-0580">"Energy-Aware Strategic Traffic Management for Urban Air Mobility"</PubLink>.
                  {' '}{renderVenue('AIAA SCITECH 2025 Forum', '2025')}.
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-serif font-bold text-black">Energy Demand Analysis for eVTOL Charging Stations in UAM</h2>
          <div className="h-px bg-gray-200 my-3" />

          <div className="prose text-sm md:text-base text-black font-serif leading-relaxed text-justify">
            <p>
              Understanding the energy infrastructure requirements is critical for the successful deployment of urban air mobility. This work analyzes the electrical load requirements for eVTOL charging stations, considering flight frequency, vehicle turnaround times, and battery characteristics to inform grid integration planning and ensure reliable operations.
            </p>
          </div>

          <div className="my-6">
            <div className="aspect-[16/9] relative overflow-hidden rounded-lg w-full">
              <Image src="/images/research/heatmap.png" alt="Energy Demand Analysis for eVTOL Charging Stations in UAM" fill className="object-contain rounded" />
            </div>
          </div>

          <div className="relative bg-gray-50 border border-gray-200 text-sm text-black font-serif space-y-3 rounded-lg overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300" />
            <div className="pl-6 p-4">
              <ol className="list-decimal ml-6 space-y-2 text-sm">
                <li>
                  <span className="font-bold">A. G. Taye</span>, P. Pradeep, P. Wei, J. C. Jones, T. Bonin, D. Eberle. <PubLink title="Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility" url="https://arc.aiaa.org/doi/abs/10.2514/6.2024-4627">"Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility"</PubLink>.
                  {renderVenue('AIAA AVIATION FORUM AND ASCEND 2024', '2024')}.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
