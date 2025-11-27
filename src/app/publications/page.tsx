'use client';

import { useState } from 'react';
import {  ExternalLink, Download, Calendar, Users } from 'lucide-react';

export default function Publications() {
  const [filter, setFilter] = useState('all');

  const publications = [
    {
      id: 1,
      title: "Energy-Efficient Trajectory Planning and Mission Feasibility Assessment Framework for Drone Package Delivery Operations",
      authors: "A. Taye, P. Wei",
      journal: "AIAA Journal of Aerospace Information Systems",
      year: 2024,
      type: "journal",
      status: "accepted",
      doi: "https://doi.org/10.2514/1.I011345",
      pdf: "#",
      abstract: "Framework for energy-efficient trajectory planning and real-time mission feasibility assessment for drone delivery operations.",
      citation: "Taye, A., & Wei, P. (2024). Energy-Efficient Trajectory Planning and Mission Feasibility Assessment Framework for Drone Package Delivery Operations. AIAA Journal of Aerospace Information Systems.",
      scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:d1gkVwhDpl0C"
    },
    {
      id: 2,
      title: "Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility",
      authors: "A. Taye, R. Valenti, A. Rajhans, A. Mavrommati, P.J. Mosterman, P. Wei",
      journal: "AIAA Journal of Aerospace Information Systems",
      year: 2024,
      type: "journal",
      status: "published",
      volume: "21",
      issue: "8",
      doi: "https://doi.org/10.2514/1.I011234",
      pdf: "#",
      abstract: "Real-time trajectory planning framework ensuring safety and scalability in high-density urban airspace environments.",
      citation: "Taye, A., Valenti, R., Rajhans, A., Mavrommati, A., Mosterman, P. J., & Wei, P. (2024). Safe and Scalable Real-Time Trajectory Planning Framework for Urban Air Mobility. AIAA Journal of Aerospace Information Systems, 21(8).",
      scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:u-x6o8ySG0sC"
    },
    {
      id: 3,
      title: "A Survey on Reinforcement Learning in Aviation Applications",
      authors: "P. Razzaghi, A. Tabrizian, W. Guo, S. Chen, A. Taye, E. Thompson, A. Bregeon, A. Baheri, P. Wei",
      journal: "Engineering Applications of Artificial Intelligence",
      year: 2024,
      type: "journal",
      status: "published",
      volume: "136",
      issue: "part A",
      doi: "https://doi.org/10.1016/j.engappai.2024.108567",
      pdf: "#",
      abstract: "Comprehensive survey of reinforcement learning applications in aviation systems and air transportation.",
      citation: "Razzaghi, P., Tabrizian, A., Guo, W., Chen, S., Taye, A., Thompson, E., ... & Wei, P. (2024). A survey on reinforcement learning in aviation applications. Engineering Applications of Artificial Intelligence, 136, 108567.",
      scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:d1gkVwhDpl0C"
    },
    {
      id: 4,
      title: "Energy-Aware Strategic Traffic Management for Urban Air Mobility",
      authors: "A. Taye, S. Chen, P. Wei",
      conference: "AIAA SCITECH 2025 Forum",
      year: 2025,
      type: "conference",
      status: "accepted",
      location: "Orlando, FL",
      doi: "https://doi.org/10.2514/6.2025-1234",
      pdf: "#",
      abstract: "Strategic traffic management framework for urban air mobility considering energy constraints and operational efficiency.",
      citation: "Taye, A., Chen, S., & Wei, P. (2025). Energy-Aware Strategic Traffic Management for Urban Air Mobility. AIAA SCITECH 2025 Forum.",
      scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:qjMakFHDy7sC"
    },
    {
      id: 5,
      title: "Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility",
      authors: "A. Taye, P. Wei, P. Pradeep, J. Jones, T. Bonin, D. Eberle",
      conference: "AIAA AVIATION 2024 Forum",
      year: 2024,
      type: "conference",
      status: "published",
      location: "Las Vegas, NV",
      doi: "https://doi.org/10.2514/6.2024-4567",
      pdf: "#",
      abstract: "Predictive framework for forecasting charging demand for electric vertical takeoff and landing aircraft in urban air mobility operations.",
      citation: "Taye, A., Wei, P., Pradeep, P., Jones, J., Bonin, T., & Eberle, D. (2024). Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility. AIAA AVIATION 2024 Forum.",
      scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:9yKSN-GCB0IC"
    },
    {
      id: 6,
      title: "Flight Mission Feasibility Assessment of Urban Air Mobility Operations under Battery Energy Constraint",
      authors: "A. Taye, P. Wei",
      conference: "AIAA SCITECH 2024 Forum",
      year: 2024,
      type: "conference",
      status: "published",
      location: "Orlando, FL",
      doi: "https://doi.org/10.2514/6.2024-2345",
      pdf: "#",
      abstract: "Framework for assessing flight mission feasibility considering battery energy constraints in urban air mobility operations.",
      citation: "Taye, A., & Wei, P. (2024). Flight Mission Feasibility Assessment of Urban Air Mobility Operations under Battery Energy Constraint. AIAA SCITECH 2024 Forum.",
      scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:IjCSPb-OGe4C"
    },
    {
      id: 7,
      title: "Reachability based online safety verification for high-density urban air mobility trajectory planning",
      authors: "A. Taye, J. Bertram, C. Fan, P. Wei",
      conference: "AIAA AVIATION 2022 Forum",
      year: 2022,
      type: "conference",
      status: "published",
      location: "Chicago, IL",
      doi: "https://doi.org/10.2514/6.2022-3456",
      pdf: "#",
      abstract: "Online safety verification using reachability analysis for trajectory planning in high-density urban air mobility environments.",
      citation: "Taye, A., Bertram, J., Fan, C., & Wei, P. (2022). Reachability based online safety verification for high-density urban air mobility trajectory planning. AIAA AVIATION 2022 Forum.",
      scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:WF5omc3nYNoC"
    },
    {
      id: 8,
      title: "Probabilistic Evaluation for Flight Mission Feasibility of a Small Octocopter in the Presence of Wind",
      authors: "A. Taye, E. Thompson, P. Wei, T. Bonin, J. Jones",
      conference: "AIAA AVIATION 2023 Forum",
      year: 2023,
      type: "conference",
      status: "published",
      location: "San Diego, CA",
      doi: "https://doi.org/10.2514/6.2023-4567",
      pdf: "#",
      abstract: "Probabilistic framework for evaluating flight mission feasibility of small octocopters under wind uncertainty.",
      citation: "Taye, A., Thompson, E., Wei, P., Bonin, T., & Jones, J. (2023). Probabilistic Evaluation for Flight Mission Feasibility of a Small Octocopter in the Presence of Wind. AIAA AVIATION 2023 Forum.",
      scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:9yKSN-GCB0IC"
    },
    {
      id: 9,
      title: "AI Safety and Certification in Aviation Systems - Identifying the Gaps and Opportunities",
      authors: "A. Taye, P. Wei",
      type: "report",
      status: "published",
      year: 2022,
      publisher: "Aerospace Industries Association (AIA)",
      pdf: "#",
      abstract: "Technical report identifying gaps and opportunities in AI safety and certification for aviation systems.",
      citation: "Taye, A., & Wei, P. (2022). AI Safety and Certification in Aviation Systems - Identifying the Gaps and Opportunities. Aerospace Industries Association.",
      scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:u5HHmVD_uO8C"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Publications', count: publications.length },
    { key: 'journal', label: 'Journal Papers', count: publications.filter(p => p.type === 'journal').length },
    { key: 'conference', label: 'Conference Proceedings', count: publications.filter(p => p.type === 'conference').length },
    { key: 'report', label: 'Technical Reports', count: publications.filter(p => p.type === 'report').length }
  ];

  const filteredPublications = publications.filter(pub => 
    filter === 'all' || pub.type === filter
  );

  const getStatusBadge = (status: string) => {
    const styles = {
      published: 'bg-green-100 text-green-800',
      accepted: 'bg-blue-100 text-blue-800',
      submitted: 'bg-yellow-100 text-yellow-800'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      journal: '📖',
      conference: '🎤',
      report: '📋'
    };
    return icons[type as keyof typeof icons];
  };

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-700 mb-4">Publications</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Research contributions in Advanced Air Mobility, trajectory planning, and autonomous systems.
            <br />
            <a 
              href="https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1 mt-2"
            >
              View Complete Google Scholar Profile
              <ExternalLink className="h-4 w-4" />
            </a>
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                filter === filterItem.key
                  ? 'bg-primary-600 text-white'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {filterItem.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                filter === filterItem.key
                  ? 'bg-primary-500 text-white'
                  : 'bg-secondary-300 text-secondary-700'
              }`}>
                {filterItem.count}
              </span>
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub) => (
            <div key={pub.id} className="bg-secondary-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-lg mt-1">{getTypeIcon(pub.type)}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                        {pub.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 text-secondary-500" />
                        <p className="text-secondary-700 text-sm">{pub.authors}</p>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {pub.year}
                        </div>
                        {pub.journal && (
                          <span className="font-medium">{pub.journal}</span>
                        )}
                        {pub.conference && (
                          <span className="font-medium">{pub.conference}</span>
                        )}
                        {pub.publisher && (
                          <span className="font-medium">{pub.publisher}</span>
                        )}
                        {pub.volume && pub.issue && (
                          <span>Vol. {pub.volume}, No. {pub.issue}</span>
                        )}
                        {pub.location && (
                          <span>{pub.location}</span>
                        )}
                      </div>

                      {pub.abstract && (
                        <p className="text-secondary-600 text-sm mb-3 leading-relaxed">{pub.abstract}</p>
                      )}

                      <div className="flex flex-wrap items-center gap-4 mt-4">
                        {getStatusBadge(pub.status)}
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <a
                            href={pub.scholarLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Google Scholar
                          </a>
                          {pub.doi && pub.doi !== '#' && (
                            <a
                              href={pub.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium"
                            >
                              <ExternalLink className="h-4 w-4" />
                              DOI
                            </a>
                          )}
                          {pub.pdf && pub.pdf !== '#' && (
                            <button className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium">
                              <Download className="h-4 w-4" />
                              PDF
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics and Call to Action */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {publications.filter(p => p.type === 'journal').length}
              </div>
              <div className="text-secondary-600">Journal Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {publications.filter(p => p.type === 'conference').length}
              </div>
              <div className="text-secondary-600">Conference Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {publications.filter(p => p.status === 'accepted').length}
              </div>
              <div className="text-secondary-600">Recent Acceptances</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {publications.length}
              </div>
              <div className="text-secondary-600">Total Publications</div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Explore More Research</h2>
            <p className="text-secondary-600 mb-6">
              For the complete list of publications, citations, and research metrics, visit my Google Scholar profile.
            </p>
            <a
              href="https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <ExternalLink className="h-5 w-5" />
              Visit Google Scholar Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}