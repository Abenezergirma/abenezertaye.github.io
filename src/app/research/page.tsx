import Image from 'next/image';

export default function Research() {
  return (
    <div className="container-custom pt-24 pb-12">
      <h1 className="text-3xl font-serif font-bold text-black">
        Research
      </h1>
      <div className="double-line-separator mb-12" />

      <div className="space-y-16">
        {/* Research Item 1: Safe and Scalable Trajectory Planner */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-black underline decoration-gray-300 underline-offset-4">
            Safe and Scalable Trajectory Planner for AAM Operations
          </h2>

          <div className="prose prose-lg text-black font-serif leading-relaxed text-justify">
            <p>
              Developing a trajectory planning algorithm that scales to a high number of aircraft while maintaining safety guarantees is critical for high-density airspace. This work introduces a correct-by-construction approach that combines reachability analysis and Markov decision processes to achieve safe and scalable real-time trajectory planning.
            </p>
          </div>

          <div className="my-6">
            <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2">
              <div className="aspect-[16/9] relative bg-white rounded overflow-hidden">
                <Image
                  src="/abenezertaye.github.io/images/research/safe.png"
                  alt="Safe and Scalable Trajectory Planner for AAM Operations"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded text-sm text-black font-serif space-y-3">
            <div className="flex gap-2">
              <span className="font-semibold text-black">[1]</span>
              <div>
                <span className="font-bold">A. G. Taye</span>, J. Bertram, C. Fan, P. Wei. &quot;Reachability based Online Safety Verification for High-Density Urban Air Mobility Trajectory Planning&quot;.
                <span className="italic"> AIAA AVIATION 2022 Forum</span>, 2022.
                <div className="mt-2 flex gap-3">
                  <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2022-3542" target="_blank" className="inline-flex items-center gap-1 text-black hover:text-green-800 cursor-pointer text-xs uppercase font-bold tracking-wider">
                    [PDF]
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-black">[2]</span>
              <div>
                <span className="font-bold">A. G. Taye</span>, R. Valenti, A. Rajhans, A. Mavrommati, P. J. Mosterman, P. Wei. &quot;Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility&quot;.
                <span className="italic"> Journal of Aerospace Information Systems (JAIS), 21 (8), 641-650</span>, 2024.
                <div className="mt-2 flex gap-3">
                  <a href="https://arc.aiaa.org/doi/abs/10.2514/1.I011381" target="_blank" className="inline-flex items-center gap-1 text-black hover:text-green-800 cursor-pointer text-xs uppercase font-bold tracking-wider">
                    [PDF]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Item 2: In-Time Safety Management */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-black underline decoration-gray-300 underline-offset-4">
            In-Time Safety Management of AAM Operations
          </h2>

          <div className="prose prose-lg text-black font-serif leading-relaxed text-justify">
            <p>
              Ensuring the safety of AAM operations requires assessing hazards that affect the safety of the flight mission pre-departure. This project introduces an energy-efficient trajectory planner and a model-based prognostics approach to assess the risk that arises from insufficient battery energy and other environmental factors such as winds.
            </p>
          </div>

          <div className="my-6">
            <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2">
              <div className="aspect-[16/9] relative bg-white rounded overflow-hidden">
                <Image
                  src="/abenezertaye.github.io/images/research/actual_aircraft.png"
                  alt="In-Time Safety Management of AAM Operations"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded text-sm text-black font-serif space-y-3">
            <div className="flex gap-2">
              <span className="font-semibold text-black">[1]</span>
              <div>
                <span className="font-bold">A. Taye</span>, E. L. Thompson, P. Wei, T. Bonin, J. C. Jones. &quot;Probabilistic Evaluation for Flight Mission Feasibility of a Small Octocopter in the Presence of Wind&quot;.
                <span className="italic"> AIAA AVIATION 2023 Forum</span>, 2023.
                <div className="mt-2 flex gap-3">
                  <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2023-3964" target="_blank" className="inline-flex items-center gap-1 text-black hover:text-green-800 cursor-pointer text-xs uppercase font-bold tracking-wider">
                    [PDF]
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-black">[2]</span>
              <div>
                <span className="font-bold">A. G. Taye</span>, P. Wei. &quot;Flight Mission Feasibility Assessment of Urban Air Mobility Operations Under Battery Energy Constraint&quot;.
                <span className="italic"> AIAA SCITECH 2024 Forum</span>, 2024.
                <div className="mt-2 flex gap-3">
                  <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2024-0532" target="_blank" className="inline-flex items-center gap-1 text-black hover:text-green-800 cursor-pointer text-xs uppercase font-bold tracking-wider">
                    [PDF]
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-black">[3]</span>
              <div>
                E. L. Thompson, <span className="font-bold">A. G. Taye</span>, W. Guo, P. Wei, M. Quinones, I. Ahmed, G. Biswas, J. Quattrociocchi, S. Carr, U. Topcu, J. C. Jones, M. W. Brittain. &quot;A Survey of eVTOL Aircraft and AAM Operation Hazards&quot;.
                <span className="italic"> AIAA Aviation 2022 Forum</span>, 2022.
                <div className="mt-2 flex gap-3">
                  <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2022-3539" target="_blank" className="inline-flex items-center gap-1 text-black hover:text-green-800 cursor-pointer text-xs uppercase font-bold tracking-wider">
                    [PDF]
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-black">[4]</span>
              <div>
                <span className="font-bold">A. G. Taye</span>, P. Wei. &quot;Energy-Efficient Trajectory Planning and Feasibility Assessment Framework for Drone Package Delivery&quot;.
                <span className="italic"> Journal of Aerospace Information Systems</span>, 2025.
                <div className="mt-2 flex gap-3">
                  <a href="https://arc.aiaa.org/doi/abs/10.2514/1.I011594" target="_blank" className="inline-flex items-center gap-1 text-black hover:text-green-800 cursor-pointer text-xs uppercase font-bold tracking-wider">
                    [PDF]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Item 3: Securing High-Density Urban Airspaces */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-black underline decoration-gray-300 underline-offset-4">
            Securing High-Density Urban Airspaces
          </h2>

          <div className="prose prose-lg text-black font-serif leading-relaxed text-justify">
            <p>
              As AAM operations become increasingly networked and autonomous, cybersecurity emerges as a fundamental safety concern. In this work, I develop methods and algorithms to identify vulnerabilities in AAM systems and design defense strategies against cyberattacks to improve system-level resilience and security.
            </p>
          </div>

          <div className="my-6">
            <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2">
              <div className="aspect-[16/9] relative bg-white rounded overflow-hidden">
                <Image
                  src="/abenezertaye.github.io/images/research/workflow.png"
                  alt="Securing High-Density Urban Airspaces"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded text-sm text-black font-serif space-y-3">
            <div className="flex gap-2">
              <span className="font-semibold text-black">[1]</span>
              <div>
                M. Ghazanfari, I. Sharifi, P. Wei, <span className="font-bold">A. Taye</span>, A. Diaz-Gonzalez, A. Coursey, B. Bjorkman, R. E. Canady, B. Ward, G. Biswas, X. Koutsoukos. &quot;A Survey of Security Challenges and Solutions for Advanced Air Mobility and eVTOL Aircraft&quot;.
                <span className="italic"> AIAA SCITECH 2026 Forum</span>, 2026.
                <div className="mt-2 flex gap-3">
                  <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2026-2891" target="_blank" className="inline-flex items-center gap-1 text-black hover:text-green-800 cursor-pointer text-xs uppercase font-bold tracking-wider">
                    [PDF]
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-black">[2]</span>
              <div>
                I. Sharifi, M. Ghazanfari, <span className="font-bold">A. Taye</span>, P. Wei, A. Diaz-Gonzalez, A. Coursey, B. Bjorkman, R. E. Canady, B. Ward, G. Biswas, X. Koutsoukos. &quot;A Survey of Security Challenges and Solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS)&quot;.
                <span className="italic"> AIAA SCITECH 2026 Forum</span>, 2026.
                <div className="mt-2 flex gap-3">
                  <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2026-2892" target="_blank" className="inline-flex items-center gap-1 text-black hover:text-green-800 cursor-pointer text-xs uppercase font-bold tracking-wider">
                    [PDF]
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-black">[3]</span>
              <div>
                A. Diaz-Gonzalez, A. Coursey, B. Bjorkman, D. Shatokhin, C. Lemieux-Mack, N. W. Dahle, R. E. Canady, <span className="font-bold">A. Taye</span>, X. Koutsoukos, G. Biswas, B. Ward. &quot;Networked Simulation for Cybersecurity Evaluation of Small Unmanned Aircraft Systems in Dense Urban Environments&quot;.
                <span className="italic"> AIAA SCITECH 2026 Forum</span>, 2026.
                <div className="mt-2 flex gap-3">
                  <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2026-1797" target="_blank" className="inline-flex items-center gap-1 text-black hover:text-green-800 cursor-pointer text-xs uppercase font-bold tracking-wider">
                    [PDF]
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-black">[4]</span>
              <div>
                N. W. Dahle, R. E. Canady, A. Coursey, A. Diaz-Gonzalez, C. Lemieux-Mack, B. Bjorkman, <span className="font-bold">A. Taye</span>, B. Ward, G. Biswas, X. Koutsoukos. &quot;Detection of Compromised UAVs using Graph Machine Learning&quot;.
                <span className="italic"> AIAA SCITECH 2026 Forum</span>, 2026.
                <div className="mt-2 flex gap-3">
                  <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2026-2667" target="_blank" className="inline-flex items-center gap-1 text-black hover:text-green-800 cursor-pointer text-xs uppercase font-bold tracking-wider">
                    [PDF]
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-black">[5]</span>
              <div>
                B. Bjorkman, S. Zheng, A. Coursey, C. Lemieux-Mack, S. Gonzalez, A. Diaz-Gonzalez, N. W. Dahle, N. Koroma, R. E. Canady, X. Koutsoukos, G. Biswas, <span className="font-bold">A. Taye</span>, B. Ward. &quot;Remote ID Spoofing Attacks and Defenses&quot;.
                <span className="italic"> AIAA SCITECH 2026 Forum</span>, 2026.
                <div className="mt-2 flex gap-3">
                  <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2026-2665" target="_blank" className="inline-flex items-center gap-1 text-black hover:text-green-800 cursor-pointer text-xs uppercase font-bold tracking-wider">
                    [PDF]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Item 4: Real-Time Flight Mission Feasibility Assessment */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-black underline decoration-gray-300 underline-offset-4">
            Real-Time Flight Mission Feasibility Assessment
          </h2>

          <div className="prose prose-lg text-black font-serif leading-relaxed text-justify">
            <p>
              Ensuring flight safety for small unmanned aerial systems (sUAS) requires continuous in-flight monitoring and decision-making, as unexpected events can occur during flight. In this work, we present an online feasibility assessment and contingency management framework that continuously monitors the aircraft's battery state and the energy required to complete the flight in real-time.
            </p>
          </div>

          <div className="my-6">
            <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2">
              <div className="aspect-[16/9] relative bg-white rounded overflow-hidden">
                <Image
                  src="/abenezertaye.github.io/images/research/safetofly.png"
                  alt="Real-Time Flight Mission Feasibility Assessment"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded text-sm text-black font-serif space-y-3">
            <div className="flex gap-2">
              <span className="font-semibold text-black">[1]</span>
              <div>
                <span className="font-bold">A. Taye</span>, A. Coursey, M. Quinones-Grueiro, C. Hu, G. Biswas, P. Wei. &quot;Safe to Fly? Real-Time Flight Mission Feasibility Assessment for Drone Package Delivery Operations&quot;.
                <span className="italic"> 36th International Conference on Principles of Diagnosis and Resilient Systems (DX 2025)</span>, 2025.
                <div className="mt-2 flex gap-3">
                  <a href="https://drops.dagstuhl.de/entities/document/10.4230/OASIcs.DX.2025.8" target="_blank" className="inline-flex items-center gap-1 text-black hover:text-green-800 cursor-pointer text-xs uppercase font-bold tracking-wider">
                    [PDF]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Item 5: Energy-Aware Strategic Traffic Management for UAM */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-black underline decoration-gray-300 underline-offset-4">
            Energy-Aware Strategic Traffic Management for UAM
          </h2>

          <div className="prose prose-lg text-black font-serif leading-relaxed text-justify">
            <p>
              We propose a strategic traffic management framework that explicitly accounts for the energy constraints of electric vertical take-off and landing (eVTOL) vehicles. By integrating energy consumption models into the traffic flow management process, we ensure that flights are not only de-conflicted but also operate within safe energy margins.
            </p>
          </div>

          <div className="my-6">
            <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2">
              <div className="aspect-[16/9] relative bg-white rounded overflow-hidden">
                <Image
                  src="/abenezertaye.github.io/images/research/traffic_management.png"
                  alt="Energy-Aware Strategic Traffic Management for Urban Air Mobility"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded text-sm text-black font-serif space-y-3">
            <div className="flex gap-2">
              <span className="font-semibold text-black">[1]</span>
              <div>
                <span className="font-bold">A. G. Taye</span>, S. Chen, P. Wei. &quot;Energy-Aware Strategic Traffic Management for Urban Air Mobility&quot;.
                <span className="italic"> AIAA SCITECH 2025 Forum</span>, 2025.
                <div className="mt-2 flex gap-3">
                  <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2025-0580" target="_blank" className="inline-flex items-center gap-1 text-black hover:text-green-800 cursor-pointer text-xs uppercase font-bold tracking-wider">
                    [PDF]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Item 6: Energy Demand Analysis for eVTOL Charging Stations */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-black underline decoration-gray-300 underline-offset-4">
            Energy Demand Analysis for eVTOL Charging Stations in UAM
          </h2>

          <div className="prose prose-lg text-black font-serif leading-relaxed text-justify">
            <p>
              Understanding the energy infrastructure requirements is critical for the successful deployment of urban air mobility. This work analyzes the electrical load requirements for eVTOL charging stations, considering flight frequency, vehicle turnaround times, and battery characteristics to inform grid integration planning and ensure reliable operations.
            </p>
          </div>

          <div className="my-6">
            <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2">
              <div className="aspect-[16/9] relative bg-white rounded overflow-hidden">
                <Image
                  src="/abenezertaye.github.io/images/research/heatmap.png"
                  alt="Energy Demand Analysis for eVTOL Charging Stations in UAM"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded text-sm text-black font-serif space-y-3">
            <div className="flex gap-2">
              <span className="font-semibold text-black">[1]</span>
              <div>
                <span className="font-bold">A. G. Taye</span>, P. Pradeep, P. Wei, J. C. Jones, T. Bonin, D. Eberle. &quot;Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility&quot;.
                <span className="italic"> AIAA AVIATION FORUM AND ASCEND 2024</span>, 2024.
                <div className="mt-2 flex gap-3">
                  <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2024-4627" target="_blank" className="inline-flex items-center gap-1 text-black hover:text-green-800 cursor-pointer text-xs uppercase font-bold tracking-wider">
                    [PDF]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}