'use client';

import { useState } from 'react';
import { FileText, ExternalLink, Download, Calendar } from 'lucide-react';

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
      doi: "#",
      pdf: "#",
      abstract: "Framework for energy-efficient trajectory planning and real-time mission feasibility assessment for drone delivery operations."
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
      doi: "#",
      pdf: "#",
      abstract: "Real-time trajectory planning framework ensuring safety and scalability in high-density urban airspace environments."
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
      doi: "#",
      pdf: "#",
      abstract: "Comprehensive survey of reinforcement learning applications in aviation systems and air transportation."
    },
    {
      id: 4,
      title: "Energy-Aware Strategic Traffic Management for Urban Air Mobility",
      authors: "A. Taye, S. Chen, P. Wei",
      conference: "AIAA SCITECH 2025",
      year: 2025,
      type: "conference",
      status: "accepted",
      location: "Orlando, FL",
      doi: "#",
      pdf: "#"
    },
    {
      id: 5,
      title: "Energy Demand Analysis for eVTOL Charging Stations in Urban Air Mobility",
      authors: "A. Taye, P. Wei, P. Pradeep, J. Jones, T. Bonin, D. Eberle",
      conference: "AIAA AVIATION 2024",
      year: 2024,
      type: "conference",
      status: "published",
      location: "Las Vegas, NV",
      doi: "#",
      pdf: "#"
    },
    {
      id: 6,
      title: "Flight Mission Feasibility Assessment of Urban Air Mobility Operations under Battery Energy Constraint",
      authors: "A. Taye, P. Wei",
      conference: "AIAA SCITECH 2024",
      year: 2024,
      type: "conference",
      status: "published",
      location: "Orlando, FL",
      doi: "#",
      pdf: "#"
    },
    {
      id: 7,
      title: "AI Safety and Certification in Aviation Systems - Identifying the Gaps and Opportunities",
      authors: "A. Taye, P. Wei",
      type: "report",
      status: "published",
      year: 2022,
      publisher: "Aerospace Industries Association (AIA)",
      pdf: "#"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Publications' },
    { key: 'journal', label: 'Journal Papers' },
    { key: 'conference', label: 'Conference Proceedings' },
    { key: 'report', label: 'Technical Reports' }
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
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === filterItem.key
                  ? 'bg-primary-600 text-white'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
              }`}
            >
              {filterItem.label}
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
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-secondary-700 mb-2">{pub.authors}</p>
                      
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
                        <p className="text-secondary-600 text-sm mb-3">{pub.abstract}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    {getStatusBadge(pub.status)}
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {pub.pdf && (
                        <button className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium">
                          <Download className="h-4 w-4" />
                          PDF
                        </button>
                      )}
                      {pub.doi && (
                        <button className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium">
                          <ExternalLink className="h-4 w-4" />
                          DOI
                        </button>
                      )}
                      <button className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium">
                        <FileText className="h-4 w-4" />
                        BibTeX
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
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
          </div>
        </div>
      </div>
    </div>
  );
}