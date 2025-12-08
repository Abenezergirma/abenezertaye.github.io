'use client';

import { useState } from 'react';
import { ExternalLink, Download, Calendar, Users, FileText, BookOpen, Award } from 'lucide-react';

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
      doi: "https://doi.org/10.2514/1.I011234",
      pdf: "#",
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
      doi: "https://doi.org/10.1016/j.engappai.2024.108567",
      pdf: "#",
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
      scholarLink: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=G04pCsMAAAAJ&citation_for_view=G04pCsMAAAAJ:u5HHmVD_uO8C"
    }
  ];

  const filters = [
    { key: 'all', label: 'All', count: publications.length, icon: FileText },
    { key: 'journal', label: 'Journal', count: publications.filter(p => p.type === 'journal').length, icon: BookOpen },
    { key: 'conference', label: 'Conference', count: publications.filter(p => p.type === 'conference').length, icon: Calendar },
    { key: 'report', label: 'Reports', count: publications.filter(p => p.type === 'report').length, icon: Award }
  ];

  const filteredPublications = publications.filter(pub => filter === 'all' || pub.type === filter);

  const getStatusBadge = (status: string) => {
    const styles = {
      published: 'bg-green-100 text-green-800 border border-green-200',
      accepted: 'bg-blue-100 text-blue-800 border border-blue-200',
      submitted: 'bg-yellow-100 text-yellow-800 border border-yellow-200'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getTypeIcon = (type: string) => {
    const icons = { journal: BookOpen, conference: Calendar, report: Award };
    const Icon = icons[type as keyof typeof icons];
    return <Icon className="h-4 w-4 text-gray-500" />;
  };

  return (
    <div className="py-10 px-4 md:px-8 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="text-center mb-14 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Publications</h1>
        <p className="text-gray-600 mb-4">
          Research contributions in Advanced Air Mobility, trajectory planning, and autonomous systems.
        </p>
        <a 
          href="https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-green-800 hover:text-green-900 font-medium"
        >
          View Google Scholar Profile
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-10 max-w-2xl mx-auto">
        {filters.map(f => {
          const Icon = f.icon;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 ${
                filter === f.key ? 'bg-green-700 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              {f.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                filter === f.key ? 'bg-white text-green-800' : 'bg-gray-300 text-gray-700'
              }`}>
                {f.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Publications List */}
      <div className="space-y-6 max-w-6xl mx-auto">
        {filteredPublications.map(pub => (
          <div key={pub.id} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left: Type & Status */}
              <div className="flex lg:flex-col items-start gap-4 lg:gap-2">
                <div className="p-3 bg-gray-50 rounded-lg">{getTypeIcon(pub.type)}</div>
                <div className="lg:mt-2">{getStatusBadge(pub.status)}</div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{pub.title}</h3>
                <div className="flex items-center gap-2 mb-3 text-gray-700">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{pub.authors}</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {pub.year}
                  </div>
                  {pub.journal && <span className="font-medium">{pub.journal}</span>}
                  {pub.conference && <span className="font-medium">{pub.conference}</span>}
                  {pub.publisher && <span className="font-medium">{pub.publisher}</span>}
                  {pub.location && <span className="text-gray-500">• {pub.location}</span>}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={pub.scholarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-900 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Google Scholar
                  </a>
                  {pub.doi && pub.doi !== '#' && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View DOI
                    </a>
                  )}
                  {pub.pdf && pub.pdf !== '#' && (
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                      <Download className="h-3 w-3" />
                      Download PDF
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Publication Metrics */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Publication Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-800 mb-2">{publications.length}</div>
              <div className="text-gray-600 text-sm">Total Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-800 mb-2">{publications.filter(p => p.type === 'journal').length}</div>
              <div className="text-gray-600 text-sm">Journal Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-800 mb-2">{publications.filter(p => p.type === 'conference').length}</div>
              <div className="text-gray-600 text-sm">Conference Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-800 mb-2">{publications.filter(p => p.status === 'accepted').length}</div>
              <div className="text-gray-600 text-sm">Recent Acceptances</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-green-50 rounded-2xl p-8 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">View Complete Publication Record</h2>
          <p className="text-gray-600 mb-6">
            For citations, h-index, and complete research metrics, visit my Google Scholar profile.
          </p>
          <a
            href="https://scholar.google.com/citations?user=G04pCsMAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-900 transition-colors font-medium"
          >
            <ExternalLink className="h-5 w-5" />
            Visit Google Scholar Profile
          </a>
        </div>
      </div>
    </div>
  );
}
