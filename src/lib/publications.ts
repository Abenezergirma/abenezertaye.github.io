// Explicit title -> PDF mapping for files in public/papers.
// Every entry was checked against the first page of the PDF itself.
// Papers without a local PDF fall back to their publisher URL.
const PAPER_PDFS: Record<string, string> = {
  'Remote ID Spoofing-Aware Trajectory Planning for Small Unmanned Aerial Systems':
    'remote-id-spoofing-aware-trajectory-planning.pdf',
  'Networked Simulation for Cybersecurity Evaluation of Small Unmanned Aircraft Systems in Dense Urban Environments':
    'diaz-gonzalez-et-al-2026-networked-simulation-for-cybersecurity-evaluation-of-small-unmanned-aircraft-systems-in-dense.pdf',
  'Remote ID Spoofing Attacks and Defenses':
    'remote-id-spoofing-attacks-and-defenses-2026.pdf',
  'A Survey of Security Challenges and Solutions for Advanced Air Mobility and eVTOL Aircraft':
    'a-survey-of-security-challenges-and-solutions-for-advanced-air-mobility-and-evtol-aircraft-2026.pdf',
  'A Survey of Security Challenges and Solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS)':
    'a-survey-of-security-challenges-and-solutions-for-uas-traffic-management-utm-and-small-unmanned-aerial-systems-suas-2026.pdf',
  'Energy-Efficient Trajectory Planning and Feasibility Assessment Framework for Drone Package Delivery':
    'energy-efficient-trajectory-planning-and-feasibility-assessment-framework-for-drone-package-delivery-2025.pdf',
  'Small UAS Landing Site Detection with ArUco Markers and Deep Learning Based Computer Vision':
    'small-uas-landing-site-detection-with-aruco-markers-and-deep-learning-based-computer-vision-2025.pdf',
  'Transformer or CNN? Benchmarking Real-Time Detection Transformer and YOLOv8 for Small UAS Autonomous Landing':
    'transformer-or-cnn-benchmarking-real-time-detection-transformer-and-yolov8-for-small-uas-autonomous-landing.pdf',
  'Synthetic Data Generation for Computer Vision Based Autonomous Landing for Small UAS Package Delivery':
    'synthetic-data-generation-for-computer-vision-based-autonomous-landing-for-small-uas-package-delivery.pdf',
  'Safe to Fly? Real-Time Flight Mission Feasibility Assessment for Drone Package Delivery Operations':
    'safe-to-fly-real-time-flight-mission-feasibility-assessment-for-drone-package-delivery-operations-2025.pdf',
  'Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility':
    'safe-and-scalable-real-time-trajectory-planning-framework-for-urban-air-mobility.pdf',
  'Using Large Language Models to Automate Flight Planning Under Wind Hazards':
    'using-large-language-models-to-automate-flight-planning-under-wind-hazards-2024.pdf',
  'A Survey on Reinforcement Learning in Aviation Applications':
    'a-survey-on-reinforcement-learning-in-aviation-applications-2024.pdf',
  'Flight Mission Feasibility Assessment of Urban Air Mobility Operations Under Battery Energy Constraint':
    'flight-mission-feasibility-assessment-of-urban-air-mobility-operations-under-battery-energy-constraint-2024.pdf',
  'Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility':
    'energy-demand-analysis-for-evtol-charging-stations-in-urban-air-mobility-2024.pdf',
  'Probabilistic Evaluation for Flight Mission Feasibility of a Small Octocopter in the Presence of Wind':
    'probabilistic-evaluation-for-flight-mission-feasibility-of-a-small-octocopter-in-the-presence-of-wind-2023.pdf',
  'Reachability based Online Safety Verification for High-Density Urban Air Mobility Trajectory Planning':
    'reachability-based-online-safety-verification-for-high-density-urban-air-mobility-trajectory-planning-2022.pdf',
  'A Survey of eVTOL Aircraft and AAM Operation Hazards':
    'a-survey-of-evtol-aircraft-and-aam-operation-hazards-2022.pdf',
};

export function paperPdf(title: string): string | null {
  const file = PAPER_PDFS[title];
  return file ? `/papers/${file}` : null;
}

// Conference locations and months, keyed by year
const SCITECH: Record<string, string> = {
  '2024': 'Orlando, FL, Jan.',
  '2025': 'Orlando, FL, Jan.',
  '2026': 'Orlando, FL, Jan.',
};
const AVIATION: Record<string, string> = {
  '2022': 'Chicago, IL, Jun.',
  '2023': 'San Diego, CA, Jun.',
  '2024': 'Las Vegas, NV, Jul.',
  '2025': 'Las Vegas, NV, Jul.',
};
const DASC: Record<string, string> = {
  '2024': 'San Diego, CA, Sep.',
};

function withPlace(name: string, place: string | undefined, year: string) {
  return place ? `${name}, ${place} ${year}` : `${name}, ${year}`;
}

export function formatVenue(venue: string, year?: string) {
  const v = venue || '';
  const y = year || '';
  const lower = v.toLowerCase();

  // If the venue string already includes a 4-digit year, don't append the year again
  if (/\b\d{4}\b/.test(v)) {
    return v;
  }

  if (lower.includes('scitech') || lower.includes('science and technology')) {
    return withPlace('AIAA SciTech Forum', SCITECH[y], y);
  }
  if (lower.includes('aviation')) {
    return withPlace('AIAA Aviation Forum', AVIATION[y], y);
  }
  if (lower.includes('dasc') || lower.includes('digital avionics')) {
    return withPlace('AIAA/IEEE Digital Avionics Systems Conference (DASC)', DASC[y], y);
  }

  return y ? `${v}, ${y}` : v;
}
