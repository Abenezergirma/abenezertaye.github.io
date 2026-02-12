"use client";

import { FileText, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface PubItem {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  url: string;
  bibtex: string;
}

const publications: PubItem[] = [
  {
    id: "1",
    title: "Networked Simulation for Cybersecurity Evaluation of Small Unmanned Aircraft Systems in Dense Urban Environments",
    authors: "Abel Diaz-Gonzalez, Austin Coursey, Bryce Bjorkman, Daniil Shatokhin, Cailani Lemieux-Mack, Noah W. Dahle, Robert E. Canady, <strong>A. Taye</strong>, Xenofon Koutsoukos, Gautam Biswas, Bryan Ward",
    venue: "AIAA Science and Technology Forum and Exposition (SciTech)",
    year: "2026",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2026-1797",
    bibtex: `@inproceedings{diaz2026networked,
  title={Networked Simulation for Cybersecurity Evaluation of Small Unmanned Aircraft Systems in Dense Urban Environments},
  author={Diaz-Gonzalez, Abel and Coursey, Austin and Bjorkman, Bryce and Shatokhin, Daniil and Lemieux-Mack, Cailani and Dahle, Noah W and Taye, A and Canady, Robert E and Koutsoukos, Xenofon and Biswas, Gautam and others},
  booktitle={AIAA SCITECH 2026 Forum},
  pages={1797},
  year={2026}
}`
  },
  {
    id: "2",
    title: "Remote ID Spoofing Attacks and Defenses",
    authors: "Bryce Bjorkman, Stanley Zheng, Austin Coursey, Cailani Lemieux-Mack, Samuel Gonzalez, Abel Diaz-Gonzalez, Noah W. Dahle, Neils Koroma, Robert E. Canady, Xenofon Koutsoukos, Gautam Biswas, <strong>A. Taye</strong>, Bryan Ward",
    venue: "AIAA Science and Technology Forum and Exposition (SciTech)",
    year: "2026",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2026-2665",
    bibtex: `@inproceedings{bjorkman2026remote,
  title={Remote ID Spoofing Attacks and Defenses},
  author={Bjorkman, Bryce and Zheng, Stanley and Coursey, Austin and Lemieux-Mack, Cailani and Gonzalez, Samuel and Diaz-Gonzalez, Abel and Dahle, Noah W and Koroma, Neils and Canady, Robert E and Koutsoukos, Xenofon and others},
  booktitle={AIAA SCITECH 2026 Forum},
  pages={2665},
  year={2026}
}`
  },
  {
    id: "3",
    title: "Detection of Compromised UAVs using Graph Machine Learning",
    authors: "Noah W. Dahle, Robert E. Canady, Austin Coursey, Abel Diaz-Gonzalez, Cailani Lemieux-Mack, Bryce Bjorkman, <strong>A. Taye</strong>, Bryan Ward, Gautam Biswas, Xenofon Koutsoukos",
    venue: "AIAA Science and Technology Forum and Exposition (SciTech)",
    year: "2026",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2026-2667",
    bibtex: `@inproceedings{dahle2026detection,
  title={Detection of Compromised UAVs using Graph Machine Learning},
  author={Dahle, Noah W and Canady, Robert E and Coursey, Austin and Diaz-Gonzalez, Abel and Lemieux-Mack, Cailani and Bjorkman, Bryce and Taye, A and Ward, Bryan and Biswas, Gautam and Koutsoukos, Xenofon},
  booktitle={AIAA SCITECH 2026 Forum},
  pages={2667},
  year={2026}
}`
  },
  {
    id: "4",
    title: "A Survey of Security Challenges and Solutions for Advanced Air Mobility and eVTOL Aircraft",
    authors: "Mahyar Ghazanfari, Iman Sharifi, Peng Wei, <strong>A. Taye</strong>, Abel Diaz-Gonzalez, Austin Coursey, Bryce Bjorkman, Robert E. Canady, Bryan Ward, Gautam Biswas, Xenofon Koutsoukos",
    venue: "AIAA Science and Technology Forum and Exposition (SciTech)",
    year: "2026",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2026-2891",
    bibtex: `@inproceedings{ghazanfari2026survey,
  title={A Survey of Security Challenges and Solutions for Advanced Air Mobility and eVTOL Aircraft},
  author={Ghazanfari, Mahyar and Sharifi, Iman and Wei, Peng and Taye, A and Diaz-Gonzalez, Abel and Coursey, Austin and Bjorkman, Bryce and Canady, Robert E and Ward, Bryan and Biswas, Gautam and others},
  booktitle={AIAA SCITECH 2026 Forum},
  pages={2891},
  year={2026}
}`
  },
  {
    id: "5",
    title: "A Survey of Security Challenges and Solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS)",
    authors: "Iman Sharifi, Mahyar Ghazanfari, <strong>A. Taye</strong>, Peng Wei, Abel Diaz-Gonzalez, Austin Coursey, Bryce Bjorkman, Robert E. Canady, Bryan Ward, Gautam Biswas, Xenofon Koutsoukos",
    venue: "AIAA Science and Technology Forum and Exposition (SciTech)",
    year: "2026",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2026-2892",
    bibtex: `@inproceedings{sharifi2026survey,
  title={A Survey of Security Challenges and Solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS)},
  author={Sharifi, Iman and Ghazanfari, Mahyar and Taye, A and Wei, Peng and Diaz-Gonzalez, Abel and Coursey, Austin and Bjorkman, Bryce and Canady, Robert E and Ward, Bryan and Biswas, Gautam and others},
  booktitle={AIAA SCITECH 2026 Forum},
  pages={2892},
  year={2026}
}`
  },
  {
    id: "6",
    title: "Energy-Efficient Trajectory Planning and Feasibility Assessment Framework for Drone Package Delivery",
    authors: "<strong>A. G. Taye</strong>, Peng Wei",
    venue: "Journal of Aerospace Information Systems (JAIS)",
    year: "2025",
    url: "https://arc.aiaa.org/doi/abs/10.2514/1.I011594",
    bibtex: `@article{taye2025energy,
  title={Energy-Efficient Trajectory Planning and Feasibility Assessment Framework for Drone Package Delivery},
  author={Taye, Abenezer Girma and Wei, Peng},
  journal={Journal of Aerospace Information Systems},
  year={2025},
  publisher={American Institute of Aeronautics and Astronautics}
}`
  },
  {
    id: "7",
    title: "Small UAS Landing Site Detection with ArUco Markers and Deep Learning Based Computer Vision",
    authors: "Jadon Xu, Can X. Vu, <strong>A. Taye</strong>, Amin Tabrizian, Peng Wei",
    venue: "AIAA AVIATION FORUM AND ASCEND",
    year: "2025",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2025-3522",
    bibtex: `@inproceedings{xu2025small,
  title={Small UAS Landing Site Detection with ArUco Markers and Deep Learning Based Computer Vision},
  author={Xu, Jadon and Vu, Can X and Taye, A and Tabrizian, Amin and Wei, Peng},
  booktitle={AIAA AVIATION FORUM AND ASCEND 2025},
  pages={3522},
  year={2025}
}`
  },
  {
    id: "8",
    title: "Energy-Aware Strategic Traffic Management for Urban Air Mobility",
    authors: "<strong>A. G. Taye</strong>, Shulu Chen, Peng Wei",
    venue: "AIAA Science and Technology Forum and Exposition (SciTech)",
    year: "2025",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2025-0580",
    bibtex: `@inproceedings{taye2025energy,
  title={Energy-Aware Strategic Traffic Management for Urban Air Mobility},
  author={Taye, Abenezer Girma and Chen, Shulu and Wei, Peng},
  booktitle={AIAA SCITECH 2025 Forum},
  pages={0580},
  year={2025}
}`
  },
  {
    id: "9",
    title: "Transformer or CNN? Benchmarking Real-Time Detection Transformer and YOLOv8 for Small UAS Autonomous Landing",
    authors: "Can X. Vu, Mahyar Ghazanfari, Kevin Dong, <strong>A. Taye</strong>, Amin Tabrizian, Peng Wei",
    venue: "AIAA AVIATION FORUM AND ASCEND",
    year: "2025",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2025-3521",
    bibtex: `@inproceedings{vu2025transformer,
  title={Transformer or CNN? Benchmarking Real-Time Detection Transformer and YOLOv8 for Small UAS Autonomous Landing},
  author={Vu, Can X and Ghazanfari, Mahyar and Dong, Kevin and Taye, A and Tabrizian, Amin and Wei, Peng},
  booktitle={AIAA AVIATION FORUM AND ASCEND 2025},
  pages={3521},
  year={2025}
}`
  },
  {
    id: "10",
    title: "Synthetic Data Generation for Computer Vision Based Autonomous Landing for Small UAS Package Delivery",
    authors: "Daniel Ding, Can X. Vu, <strong>A. Taye</strong>, Amin Tabrizian, Peng Wei, Zhenhao Zhao",
    venue: "AIAA AVIATION FORUM AND ASCEND",
    year: "2025",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2025-3713",
    bibtex: `@inproceedings{ding2025synthetic,
  title={Synthetic Data Generation for Computer Vision Based Autonomous Landing for Small UAS Package Delivery},
  author={Ding, Daniel and Vu, Can X and Taye, A and Tabrizian, Amin and Wei, Peng and Zhao, Zhenhao},
  booktitle={AIAA AVIATION FORUM AND ASCEND 2025},
  pages={3713},
  year={2025}
}`
  },
  {
    id: "11",
    title: "Safe to Fly? Real-Time Flight Mission Feasibility Assessment for Drone Package Delivery Operations",
    authors: "<strong>A. Taye</strong>, Austin Coursey, Marcos Quinones-Grueiro, Chao Hu, Gautam Biswas, Peng Wei",
    venue: "36th International Conference on Principles of Diagnosis and Resilient Systems (DX 2025)",
    year: "2025",
    url: "https://drops.dagstuhl.de/entities/document/10.4230/OASIcs.DX.2025.8",
    bibtex: `@inproceedings{taye2025safe,
  title={Safe to Fly? Real-Time Flight Mission Feasibility Assessment for Drone Package Delivery Operations},
  author={Taye, Abenezer and Coursey, Austin and Quinones-Grueiro, Marcos and Hu, Chao and Biswas, Gautam and Wei, Peng},
  booktitle={36th International Conference on Principles of Diagnosis and Resilient Systems (DX 2025)},
  year={2025},
  organization={Schloss Dagstuhl-Leibniz-Zentrum f{\\\"u}r Informatik}
}`
  },
  {
    id: "12",
    title: "Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility",
    authors: "<strong>A. G. Taye</strong>, Roberto Valenti, Akshay Rajhans, Anastasia Mavrommati, Pieter J. Mosterman, Peng Wei",
    venue: "Journal of Aerospace Information Systems (JAIS), 21 (8), 641-650",
    year: "2024",
    url: "https://arc.aiaa.org/doi/abs/10.2514/1.I011381",
    bibtex: `@article{taye2024safe,
  title={Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility},
  author={Taye, Abenezer Girma and Valenti, Roberto and Rajhans, Akshay and Mavrommati, Anastasia and Mosterman, Pieter J and Wei, Peng},
  journal={Journal of Aerospace Information Systems},
  volume={21},
  number={8},
  pages={641--650},
  year={2024},
  publisher={American Institute of Aeronautics and Astronautics}
}`
  },
  {
    id: "13",
    title: "Using Large Language Models to Automate Flight Planning Under Wind Hazards",
    authors: "Amin Tabrizian, Pranav Gupta, <strong>A. Taye</strong>, James Jones, Ellis Thompson, Shulu Chen, Timothy Bonin, Derek Eberle, Peng Wei",
    venue: "2024 AIAA DATC/IEEE 43rd Digital Avionics Systems Conference (DASC)",
    year: "2024",
    url: "https://ieeexplore.ieee.org/abstract/document/10749512/",
    bibtex: `@inproceedings{tabrizian2024using,
  title={Using Large Language Models to Automate Flight Planning Under Wind Hazards},
  author={Tabrizian, Amin and Gupta, Pranav and Taye, A and Jones, James and Thompson, Ellis and Chen, Shulu and Bonin, Timothy and Eberle, Derek and Wei, Peng},
  booktitle={2024 AIAA DATC/IEEE 43rd Digital Avionics Systems Conference (DASC)},
  pages={1--9},
  year={2024},
  organization={IEEE}
}`
  },
  {
    id: "14",
    title: "A Survey on Reinforcement Learning in Aviation Applications",
    authors: "Pouria Razzaghi, Amin Tabrizian, Wei Guo, Shulu Chen, <strong>A. Taye</strong>, Ellis Thompson, Alexis Bregeon, Ali Baheri, Peng Wei",
    venue: "Engineering Applications of Artificial Intelligence",
    year: "2024",
    url: "https://www.sciencedirect.com/science/article/pii/S0952197624010698",
    bibtex: `@article{razzaghi2024survey,
  title={A Survey on Reinforcement Learning in Aviation Applications},
  author={Razzaghi, Pouria and Tabrizian, Amin and Guo, Wei and Chen, Shulu and Taye, A and Thompson, Ellis and Bregeon, Alexis and Baheri, Ali and Wei, Peng},
  journal={Engineering Applications of Artificial Intelligence},
  volume={137},
  pages={109059},
  year={2024},
  publisher={Elsevier}
}`
  },
  {
    id: "15",
    title: "Flight Mission Feasibility Assessment of Urban Air Mobility Operations Under Battery Energy Constraint",
    authors: "<strong>A. G. Taye</strong>, Peng Wei",
    venue: "AIAA Science and Technology Forum and Exposition (SciTech)",
    year: "2024",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2024-0532",
    bibtex: `@inproceedings{taye2024flight,
  title={Flight Mission Feasibility Assessment of Urban Air Mobility Operations Under Battery Energy Constraint},
  author={Taye, Abenezer Girma and Wei, Peng},
  booktitle={AIAA SCITECH 2024 Forum},
  pages={0532},
  year={2024}
}`
  },
  {
    id: "16",
    title: "Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility",
    authors: "<strong>A. G. Taye</strong>, Priyank Pradeep, Peng Wei, James C. Jones, Timothy Bonin, Derek Eberle",
    venue: "AIAA AVIATION FORUM AND ASCEND",
    year: "2024",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2024-4627",
    bibtex: `@inproceedings{taye2024energy,
  title={Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility},
  author={Taye, Abenezer Girma and Pradeep, Priyank and Wei, Peng and Jones, James C and Bonin, Timothy and Eberle, Derek},
  booktitle={AIAA AVIATION FORUM AND ASCEND 2024},
  pages={4627},
  year={2024}
}`
  },
  {
    id: "17",
    title: "Probabilistic Evaluation for Flight Mission Feasibility of a Small Octocopter in the Presence of Wind",
    authors: "<strong>A. Taye</strong>, Ellis L. Thompson, Peng Wei, Timothy Bonin, James C. Jones",
    venue: "AIAA AVIATION Forum",
    year: "2023",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2023-3964",
    bibtex: `@inproceedings{taye2023probabilistic,
  title={Probabilistic Evaluation for Flight Mission Feasibility of a Small Octocopter in the Presence of Wind},
  author={Taye, A and Thompson, Ellis L and Wei, Peng and Bonin, Timothy and Jones, James C},
  booktitle={AIAA AVIATION 2023 Forum},
  pages={3964},
  year={2023}
}`
  },
  {
    id: "18",
    title: "Reachability based Online Safety Verification for High-Density Urban Air Mobility Trajectory Planning",
    authors: "<strong>A. G. Taye</strong>, Josh Bertram, Chuchu Fan, Peng Wei",
    venue: "AIAA AVIATION Forum",
    year: "2022",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2022-3542",
    bibtex: `@inproceedings{taye2022reachability,
  title={Reachability based Online Safety Verification for High-Density Urban Air Mobility Trajectory Planning},
  author={Taye, Abenezer Girma and Bertram, Josh and Fan, Chuchu and Wei, Peng},
  booktitle={AIAA AVIATION 2022 Forum},
  pages={3542},
  year={2022}
}`
  },
  {
    id: "19",
    title: "A Survey of eVTOL Aircraft and AAM Operation Hazards",
    authors: "Ellis L. Thompson, <strong>A. G. Taye</strong>, Wei Guo, Peng Wei, Marcos Quinones, Ibrahim Ahmed, Gautam Biswas, Jesse Quattrociocchi, Steven Carr, Ufuk Topcu, James C. Jones, Marc W. Brittain",
    venue: "AIAA Aviation Forum",
    year: "2022",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2022-3539",
    bibtex: `@inproceedings{thompson2022survey,
  title={A Survey of eVTOL Aircraft and AAM Operation Hazards},
  author={Thompson, Ellis L and Taye, Abenezer Girma and Guo, Wei and Wei, Peng and Quinones, Marcos and Ahmed, Ibrahim and Biswas, Gautam and Quattrociocchi, Jesse and Carr, Steven and Topcu, Ufuk and others},
  booktitle={AIAA AVIATION 2022 Forum},
  pages={3539},
  year={2022}
}`
  }
];

function PublicationItem({ item, index }: { item: PubItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-4">
      <span className="text-black font-mono text-sm pt-1 shrink-0">[{index}]</span>
      <div className="flex-1 space-y-1">
        <div className="flex items-start justify-between gap-4">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black hover:text-green-800 hover:underline leading-snug"
          >
            {item.title}
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black/40 hover:text-green-800 transition-colors pt-1"
            title={isOpen ? "Hide details" : "Show details"}
          >
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        <p className="text-black text-sm" dangerouslySetInnerHTML={{ __html: item.authors }} />

        <p className="text-black text-sm italic">
          {item.venue}, {item.year}
        </p>

        {isOpen && (
          <div className="mt-3 p-4 bg-gray-50 border border-gray-100 rounded-sm text-sm space-y-4 animate-in fade-in slide-in-from-top-1 duration-200">
            <div>
              <p className="font-bold text-black mb-2 uppercase text-[10px] tracking-widest">BibTeX</p>
              <pre className="text-black leading-relaxed font-mono text-xs bg-white p-3 rounded border border-gray-200 overflow-x-auto whitespace-pre-wrap">{item.bibtex}</pre>
            </div>
            <div>
              <p className="font-bold text-black mb-1 uppercase text-[10px] tracking-widest">Details</p>
              <div className="flex gap-4 items-center">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-black hover:text-green-800 transition-colors"
                >
                  <FileText size={14} />
                  <span>Full Paper (Official)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Publications() {
  const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => Number(b) - Number(a));

  // Global index counter
  let globalCounter = 0;

  return (
    <div className="container-custom pt-24 pb-20">
      <h1 className="text-3xl font-serif font-bold text-black">
        Publications
      </h1>
      <div className="double-line-separator mb-12" />

      <div className="space-y-16">
        {years.map((year) => {
          const yearPubs = publications.filter((p) => p.year === year);
          return (
            <div key={year}>
              <h2 className="text-2xl font-bold text-black border-b border-gray-200 pb-2 mb-8">{year}</h2>
              <div className="space-y-8">
                {yearPubs.map((pub) => {
                  globalCounter++;
                  return <PublicationItem key={pub.id} item={pub} index={globalCounter} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
