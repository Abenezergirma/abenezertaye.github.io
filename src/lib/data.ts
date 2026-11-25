// Single source of truth for publications, research projects and seminar slides.
// Pages read from here; edit content in this file only.

export type PubType = 'journal' | 'conference' | 'preprint';

export interface Publication {
  id: string;
  type: PubType;
  title: string;
  /** HTML string; wrap your own name in <strong> to highlight it. */
  authors: string;
  venue: string;
  year: string;
  url: string;
  /** Public code link. */
  code?: string;
  bibtex: string;
}

export const publications: Publication[] = [
  {
    id: "0",
    type: "conference",
    title: "Remote ID Spoofing-Aware Trajectory Planning for Small Unmanned Aerial Systems",
    authors: "Jeremiah Webb, Bryce Bjorkman, Abel Diaz-Gonzalez, Austin Coursey, Noah W. Dahle, Cailani Lemieux-Mack, Filippos Fotiadis, Gautam Biswas, Bryan Ward, <strong>Abenezer Taye</strong>",
    venue: "AIAA/IEEE Digital Avionics Systems Conference (DASC)",
    year: "2026",
    url: "https://arxiv.org/abs/2607.19650",
    bibtex: `@article{webb2026remote,
  title={Remote ID Spoofing-Aware Trajectory Planning for Small Unmanned Aerial Systems},
  author={Webb, Jeremiah and Bjorkman, Bryce and Diaz-Gonzalez, Abel and Coursey, Austin and Dahle, Noah W and Lemieux-Mack, Cailani and Fotiadis, Filippos and Biswas, Gautam and Ward, Bryan C and Taye, Abenezer},
  journal={arXiv preprint arXiv:2607.19650},
  year={2026}
}`
  },
  {
    id: "1",
    type: "conference",
    title: "Networked Simulation for Cybersecurity Evaluation of Small Unmanned Aircraft Systems in Dense Urban Environments",
    authors: "Abel Diaz-Gonzalez, Austin Coursey, Bryce Bjorkman, Daniil Shatokhin, Cailani Lemieux-Mack, Noah W. Dahle, <strong>Abenezer Taye</strong>, Robert E. Canady, Xenofon Koutsoukos, Gautam Biswas, Bryan Ward",
    venue: "AIAA Science and Technology Forum and Exposition (SciTech)",
    year: "2026",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2026-1797",
    code: "https://github.com/4belito/uav-cyber-sim",
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
    type: "conference",
    title: "Remote ID Spoofing Attacks and Defenses",
    authors: "Bryce Bjorkman, Stanley Zheng, Austin Coursey, Cailani Lemieux-Mack, Samuel Gonzalez, Abel Diaz-Gonzalez, Noah W. Dahle, Neils Koroma, Robert E. Canady, Xenofon Koutsoukos, Gautam Biswas, <strong>Abenezer Taye</strong>, Bryan Ward",
    venue: "AIAA Science and Technology Forum and Exposition (SciTech)",
    year: "2026",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2026-2665",
    code: "https://github.com/brycethebjorkman/uli-net-sim",
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
    type: "conference",
    title: "Detection of Compromised UAVs using Graph Machine Learning",
    authors: "Noah W. Dahle, Robert E. Canady, Austin Coursey, Abel Diaz-Gonzalez, Cailani Lemieux-Mack, Bryce Bjorkman, <strong>Abenezer Taye</strong>, Bryan Ward, Gautam Biswas, Xenofon Koutsoukos",
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
    type: "conference",
    title: "A Survey of Security Challenges and Solutions for Advanced Air Mobility and eVTOL Aircraft",
    authors: "Mahyar Ghazanfari, Iman Sharifi, Peng Wei, <strong>Abenezer Taye</strong>, Bryan Ward, Xenofon Koutsoukos, Gautam Biswas, Mahsa Ghasemi, Vijay Gupta, Hyeong Tae Kim, Maheed Ahmed, Ufuk Topcu, Filippos Fotiadis, Alfred Chen, Junchi Lu, Isaac Amundson, Saqib Hasan, Amir Shirkhodaie, Nischal Aryal, Amer Ibrahim, Abdul Kareem Ras, Heber Herencia-Zapana, Noah W. Dahle, Abel Diaz-Gonzalez, Austin Coursey, Bryce Bjorkman, Cailani Lemieux-Mack, Robert E. Canady",
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
    type: "conference",
    title: "A Survey of Security Challenges and Solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS)",
    authors: "Iman Sharifi, Mahyar Ghazanfari, <strong>Abenezer Taye</strong>, Peng Wei, Maheed Ahmed, Hyeong Tae Kim, Mahsa Ghasemi, Vijay Gupta, Noah W. Dahle, Robert E. Canady, Abel Diaz-Gonzalez, Austin Coursey, Bryce Bjorkman, Cailani Lemieux-Mack, Bryan Ward, Xenofon Koutsoukos, Gautam Biswas, Heber Herencia-Zapana, Saqib Hasan, Isaac Amundson, Filippos Fotiadis, Ufuk Topcu, Junchi Lu, Alfred Chen, Nischal Aryal, Amer Ibrahim, Abdul Kareem Ras, Amir Shirkhodaie",
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
    type: "journal",
    title: "Energy-Efficient Trajectory Planning and Feasibility Assessment Framework for Drone Package Delivery",
    authors: "<strong>Abenezer G. Taye</strong>, Peng Wei",
    venue: "Journal of Aerospace Information Systems (JAIS)",
    year: "2025",
    url: "https://arc.aiaa.org/doi/abs/10.2514/1.I011594",
    // TODO: replace with the project repository once its link is final
    code: "https://github.com/Abenezergirma",
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
    type: "conference",
    title: "Small UAS Landing Site Detection with ArUco Markers and Deep Learning Based Computer Vision",
    authors: "Jadon Xu, Can X. Vu, <strong>Abenezer Taye</strong>, Amin Tabrizian, Peng Wei",
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
    type: "conference",
    title: "Energy-Aware Strategic Traffic Management for Urban Air Mobility",
    authors: "<strong>Abenezer G. Taye</strong>, Shulu Chen, Peng Wei",
    venue: "AIAA Science and Technology Forum and Exposition (SciTech)",
    year: "2025",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2025-0580",
    bibtex: `@inproceedings{taye2025energyaware,
  title={Energy-Aware Strategic Traffic Management for Urban Air Mobility},
  author={Taye, Abenezer Girma and Chen, Shulu and Wei, Peng},
  booktitle={AIAA SCITECH 2025 Forum},
  pages={0580},
  year={2025}
}`
  },
  {
    id: "9",
    type: "conference",
    title: "Transformer or CNN? Benchmarking Real-Time Detection Transformer and YOLOv8 for Small UAS Autonomous Landing",
    authors: "Can X. Vu, Mahyar Ghazanfari, Kevin Dong, <strong>Abenezer Taye</strong>, Amin Tabrizian, Peng Wei",
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
    type: "conference",
    title: "Synthetic Data Generation for Computer Vision Based Autonomous Landing for Small UAS Package Delivery",
    authors: "Daniel Ding, Can X. Vu, <strong>Abenezer Taye</strong>, Amin Tabrizian, Peng Wei, Zhenhao Zhao",
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
    type: "conference",
    title: "Safe to Fly? Real-Time Flight Mission Feasibility Assessment for Drone Package Delivery Operations",
    authors: "<strong>Abenezer Taye</strong>, Austin Coursey, Marcos Quinones-Grueiro, Chao Hu, Gautam Biswas, Peng Wei",
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
    type: "journal",
    title: "Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility",
    authors: "<strong>Abenezer G. Taye</strong>, Roberto Valenti, Akshay Rajhans, Anastasia Mavrommati, Pieter J. Mosterman, Peng Wei",
    venue: "Journal of Aerospace Information Systems (JAIS), 21 (8), 641–650",
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
    type: "conference",
    title: "Using Large Language Models to Automate Flight Planning Under Wind Hazards",
    authors: "Amin Tabrizian, Pranav Gupta, <strong>Abenezer Taye</strong>, James Jones, Ellis Thompson, Shulu Chen, Timothy Bonin, Derek Eberle, Peng Wei",
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
    type: "journal",
    title: "A Survey on Reinforcement Learning in Aviation Applications",
    authors: "Pouria Razzaghi, Amin Tabrizian, Wei Guo, Shulu Chen, <strong>Abenezer Taye</strong>, Ellis Thompson, Alexis Bregeon, Ali Baheri, Peng Wei",
    venue: "Engineering Applications of Artificial Intelligence, 136, 108911",
    year: "2024",
    url: "https://www.sciencedirect.com/science/article/pii/S0952197624010698",
    bibtex: `@article{razzaghi2024survey,
  title={A Survey on Reinforcement Learning in Aviation Applications},
  author={Razzaghi, Pouria and Tabrizian, Amin and Guo, Wei and Chen, Shulu and Taye, A and Thompson, Ellis and Bregeon, Alexis and Baheri, Ali and Wei, Peng},
  journal={Engineering Applications of Artificial Intelligence},
  volume={136},
  pages={108911},
  year={2024},
  publisher={Elsevier}
}`
  },
  {
    id: "15",
    type: "conference",
    title: "Flight Mission Feasibility Assessment of Urban Air Mobility Operations Under Battery Energy Constraint",
    authors: "<strong>Abenezer G. Taye</strong>, Peng Wei",
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
    type: "conference",
    title: "Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility",
    authors: "<strong>Abenezer G. Taye</strong>, Priyank Pradeep, Peng Wei, James C. Jones, Timothy Bonin, Derek Eberle",
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
    type: "conference",
    title: "Probabilistic Evaluation for Flight Mission Feasibility of a Small Octocopter in the Presence of Wind",
    authors: "Ellis L. Thompson, <strong>Abenezer Taye</strong>, James Ashby, Gerald Fattah, Peng Wei, Timothy Bonin, James C. Jones, Marcos Quinones-Grueiro, Gautam Biswas",
    venue: "AIAA AVIATION Forum",
    year: "2023",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2023-3964",
    bibtex: `@inproceedings{thompson2023probabilistic,
  title={Probabilistic Evaluation for Flight Mission Feasibility of a Small Octocopter in the Presence of Wind},
  author={Thompson, Ellis L and Taye, Abenezer and Ashby, James and Fattah, Gerald and Wei, Peng and Bonin, Timothy and Jones, James C and Quinones-Grueiro, Marcos and Biswas, Gautam},
  booktitle={AIAA AVIATION 2023 Forum},
  pages={3964},
  year={2023}
}`
  },
  {
    id: "18",
    type: "conference",
    title: "Reachability based Online Safety Verification for High-Density Urban Air Mobility Trajectory Planning",
    authors: "<strong>Abenezer G. Taye</strong>, Josh Bertram, Chuchu Fan, Peng Wei",
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
    type: "conference",
    title: "A Survey of eVTOL Aircraft and AAM Operation Hazards",
    authors: "Ellis L. Thompson, <strong>Abenezer G. Taye</strong>, Wei Guo, Peng Wei, Marcos Quinones-Grueiro, Ibrahim Ahmed, Gautam Biswas, Jesse Quattrociocchi, Steven Carr, Ufuk Topcu, James C. Jones, Marc W. Brittain",
    venue: "AIAA Aviation Forum",
    year: "2022",
    url: "https://arc.aiaa.org/doi/abs/10.2514/6.2022-3539",
    bibtex: `@inproceedings{thompson2022survey,
  title={A Survey of eVTOL Aircraft and AAM Operation Hazards},
  author={Thompson, Ellis L and Taye, Abenezer Girma and Guo, Wei and Wei, Peng and Quinones-Grueiro, Marcos and Ahmed, Ibrahim and Biswas, Gautam and Quattrociocchi, Jesse and Carr, Steven and Topcu, Ufuk and others},
  booktitle={AIAA AVIATION 2022 Forum},
  pages={3539},
  year={2022}
}`
  }
];

export function findPub(title: string): Publication {
  const p = publications.find((x) => x.title === title);
  if (!p) throw new Error(`Unknown publication title: ${title}`);
  return p;
}

export const profile = {
  name: 'Abenezer G. Taye',
  email: 'abenezer [dot] taye [at] vanderbilt [dot] edu',
  cv: '/pdf/cv.pdf',
  scholar: 'https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en',
  github: 'https://github.com/Abenezergirma',
  linkedin: 'https://www.linkedin.com/in/abenezer-taye/',
};

/* ------------------------------------------------------------------ */
/* Research projects                                                    */
/* Captions are taken from the paper each figure appeared in.           */
/* ------------------------------------------------------------------ */

export interface Figure {
  src: string;
  width: number;
  height: number;
  /** Display width in px; figures are shown at the size they read best. */
  display: number;
  alt: string;
  caption: string;
  /** If set, rendered as a video with `src` as its poster. */
  video?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  figures: Figure[];
  papers: string[];
}

export const projects: Project[] = [
  {
    slug: 'trajectory-planning',
    title: 'Safe and Scalable Trajectory Planner for AAM Operations',
    summary:
      'Developing a trajectory planning algorithm that scales to a large number of aircraft while maintaining safety guarantees is critical for high-density advanced air mobility (AAM) operations. This work introduces a correct-by-construction approach that combines reachability analysis and Markov decision processes to achieve safe and scalable real-time trajectory planning.',
    figures: [
      {
        src: '/images/site/safe.png', width: 1006, height: 544, display: 620,
        alt: 'An ownship aircraft evaluates future states against the reachable sets of two intruders on its way to a vertiport',
        caption: 'Working principle of the trajectory planner.',
      },
      {
        src: '/images/site/simulation-32.jpg', width: 1280, height: 682, display: 840,
        video: '/images/site/simulation-32.mp4',
        alt: 'Simulation of 32 aircraft flying between vertiports arranged in a circle',
        caption:
          'Simulated operation of 32 aircraft, each rendered as a red circle. The black boxes represent the vertiports, the black lines the aircraft trajectories for the next ten steps, and the blue lines the paths traveled.',
      },
    ],
    papers: [
      'Reachability based Online Safety Verification for High-Density Urban Air Mobility Trajectory Planning',
      'Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility',
    ],
  },
  {
    slug: 'in-time-safety',
    title: 'In-Time Safety Management of AAM Operations',
    summary:
      'Ensuring the safety of AAM operations requires assessing, before departure, the hazards that could jeopardize a flight mission. This project introduces an energy-efficient trajectory planner and a model-based prognostics approach to assess the risk arising from insufficient battery energy and environmental factors such as wind.',
    figures: [
      {
        src: '/images/site/actual_aircraft.jpg', width: 1006, height: 542, display: 620,
        alt: 'A multirotor aircraft in flight above a field',
        caption: 'Snapshot of an actual flight at the Poplar Ford Quinn Field test site.',
      },
    ],
    papers: [
      'Probabilistic Evaluation for Flight Mission Feasibility of a Small Octocopter in the Presence of Wind',
      'Flight Mission Feasibility Assessment of Urban Air Mobility Operations Under Battery Energy Constraint',
      'A Survey of eVTOL Aircraft and AAM Operation Hazards',
      'Energy-Efficient Trajectory Planning and Feasibility Assessment Framework for Drone Package Delivery',
    ],
  },
  {
    slug: 'security',
    title: 'Securing High-Density Urban Airspaces',
    summary:
      'As AAM operations become increasingly networked and autonomous, cybersecurity emerges as a fundamental safety concern. In this work, I develop methods and algorithms to identify vulnerabilities in AAM systems and design defense strategies against cyberattacks to improve system-level resilience and security.',
    figures: [
      {
        src: '/images/site/workflow.png', width: 555, height: 450, display: 420,
        alt: 'An adversary drone broadcasts a spoofed location in the path of a target drone',
        caption:
          'An illustrative spoofing scenario: the adversary broadcasts Remote ID claiming to be at a spoofed location directly in front of the target while actually flying on a course behind it.',
      },
    ],
    papers: [
      'A Survey of Security Challenges and Solutions for Advanced Air Mobility and eVTOL Aircraft',
      'A Survey of Security Challenges and Solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS)',
      'Networked Simulation for Cybersecurity Evaluation of Small Unmanned Aircraft Systems in Dense Urban Environments',
      'Detection of Compromised UAVs using Graph Machine Learning',
      'Remote ID Spoofing Attacks and Defenses',
      'Remote ID Spoofing-Aware Trajectory Planning for Small Unmanned Aerial Systems',
    ],
  },
  {
    slug: 'mission-feasibility',
    title: 'Real-Time Flight Mission Feasibility Assessment',
    summary:
      "Ensuring flight safety for small unmanned aerial systems (sUAS) requires continuous in-flight monitoring and decision-making, as unexpected events can occur during flight. In this work, we present an online feasibility assessment and contingency management framework that continuously monitors the aircraft's battery state and the energy required to complete the flight in real time.",
    figures: [
      {
        src: '/images/site/safetofly.png', width: 1680, height: 1044, display: 620,
        alt: 'A delivery drone over a city map, with an infeasible route to the delivery location and a feasible route to a depot',
        caption: 'Schematic of the feasibility assessment procedure.',
      },
    ],
    papers: ['Safe to Fly? Real-Time Flight Mission Feasibility Assessment for Drone Package Delivery Operations'],
  },
  {
    slug: 'traffic-management',
    title: 'Energy-Aware Strategic Traffic Management for UAM',
    summary:
      'We propose a strategic traffic management framework that explicitly accounts for the energy constraints of electric vertical take-off and landing (eVTOL) vehicles. By integrating energy consumption models into the traffic flow management process, we ensure that flights are not only deconflicted but also operate within safe energy margins.',
    figures: [
      {
        src: '/images/site/traffic_management.png', width: 1680, height: 835, display: 720,
        alt: 'Online operational inputs and offline inputs feed an energy-aware strategic traffic management block',
        caption: 'Online and offline inputs to the energy-aware strategic traffic management framework.',
      },
    ],
    papers: ['Energy-Aware Strategic Traffic Management for Urban Air Mobility'],
  },
  {
    slug: 'energy-demand',
    title: 'Energy Demand Analysis for eVTOL Charging Stations in UAM',
    summary:
      'Understanding energy infrastructure requirements is critical for the successful deployment of urban air mobility. This work analyzes the electrical load requirements for eVTOL charging stations, considering flight frequency, vehicle turnaround times, and battery characteristics to inform grid integration planning and ensure reliable operations.',
    figures: [
      {
        src: '/images/site/heatmap.png', width: 1006, height: 544, display: 720,
        alt: 'Heat map of charging demand at vertiports across the Dallas–Fort Worth area',
        caption:
          'Charging demand for each vertiport in the Dallas–Fort Worth area over a 4-hour forecasting horizon, with red indicating the highest energy demand and blue the lowest.',
      },
    ],
    papers: ['Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility'],
  },
];

/* Selected research on the home page */
export const selected: { title: string; image: string; width: number; height: number }[] = [
  { title: 'Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility', image: '/images/site/thumb-snapshot_029.png', width: 560, height: 525 },
  { title: 'Energy-Efficient Trajectory Planning and Feasibility Assessment Framework for Drone Package Delivery', image: '/images/site/thumb-energy_efficient.png', width: 560, height: 518 },
  { title: 'Remote ID Spoofing Attacks and Defenses', image: '/images/site/thumb-RID_spoof.png', width: 560, height: 536 },
  { title: 'Safe to Fly? Real-Time Flight Mission Feasibility Assessment for Drone Package Delivery Operations', image: '/images/site/thumb-neural_ode.png', width: 560, height: 521 },
  { title: 'Energy-Aware Strategic Traffic Management for Urban Air Mobility', image: '/images/site/thumb-energy_aware.png', width: 560, height: 488 },
  { title: 'Using Large Language Models to Automate Flight Planning Under Wind Hazards', image: '/images/site/thumb-LLM_fig.png', width: 560, height: 144 },
  { title: 'Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility', image: '/images/site/thumb-energy_demand.png', width: 560, height: 521 },
];

/* Seminar slides */
export const vcpsChapters = [
  { label: 'Chapters 1–2', titles: ['Introduction', 'Modeling Computation'], pdf: '/VCPS/Verfiying%20CPS%201-2.pdf' },
  { label: 'Chapter 3', titles: ['Modeling Physical Systems'], pdf: '/VCPS/Verfiying%20CPS%203-4.pdf' },
  { label: 'Chapters 4–5', titles: ['Modeling Cyberphysical Systems', 'Composing Models'], pdf: '/VCPS/Verifying%20CPS%204-5.pdf' },
  { label: 'Chapter 6', titles: ['Specifying Requirements'], pdf: '/VCPS/Verfiying%20CPS%206.pdf' },
  { label: 'Chapter 7', titles: ['Verifying Invariants'], pdf: '/VCPS/VCPS%207.pdf' },
  { label: 'Chapter 8', titles: ['Abstractions and Compositional Reasoning'], pdf: '/VCPS/VCPS%208.pdf' },
  { label: 'Chapter 9', titles: ['Reachability Analysis'], pdf: '/VCPS/VCPS%209.pdf' },
];
