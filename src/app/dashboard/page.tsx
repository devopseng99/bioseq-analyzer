'use client';

import { useState } from 'react';
import Link from 'next/link';

const stats = [
  { label: 'Active Analyses', value: '24', change: '+3 today', color: 'text-teal-600', bg: 'bg-teal-50' },
  { label: 'Completed', value: '1,847', change: '+127 this week', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Sequences Processed', value: '2.5M', change: '+45K today', color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { label: 'Storage Used', value: '342 GB', change: '68% of quota', color: 'text-amber-600', bg: 'bg-amber-50' },
];

const recentAnalyses = [
  { id: 'BSA-2847', type: 'Variant Calling', samples: 150, status: 'Running', progress: 67, organism: 'Human (GRCh38)', submitted: '2024-01-15' },
  { id: 'BSA-2846', type: 'Sequence Alignment', samples: 500, status: 'Completed', progress: 100, organism: 'Mouse (GRCm39)', submitted: '2024-01-14' },
  { id: 'BSA-2845', type: 'Phylogenetic Analysis', samples: 80, status: 'Completed', progress: 100, organism: 'SARS-CoV-2', submitted: '2024-01-14' },
  { id: 'BSA-2844', type: 'Batch Pipeline', samples: 1200, status: 'Running', progress: 34, organism: 'E. coli (K-12)', submitted: '2024-01-13' },
  { id: 'BSA-2843', type: 'Annotation Browser', samples: 12, status: 'Queued', progress: 0, organism: 'Drosophila', submitted: '2024-01-13' },
  { id: 'BSA-2842', type: 'Variant Calling', samples: 300, status: 'Completed', progress: 100, organism: 'Human (GRCh38)', submitted: '2024-01-12' },
  { id: 'BSA-2841', type: 'Sequence Alignment', samples: 45, status: 'Failed', progress: 89, organism: 'Zebrafish', submitted: '2024-01-12' },
];

const sidebarLinks = [
  { label: 'Overview', active: true },
  { label: 'My Analyses', active: false },
  { label: 'Datasets', active: false },
  { label: 'Reports', active: false },
  { label: 'Pipelines', active: false },
  { label: 'Team', active: false },
  { label: 'Settings', active: false },
];

const statusColors: Record<string, string> = {
  Running: 'bg-blue-100 text-blue-700',
  Completed: 'bg-green-100 text-green-700',
  Queued: 'bg-amber-100 text-amber-700',
  Failed: 'bg-red-100 text-red-700',
};

const chartBars = [
  { day: 'Mon', value: 65 },
  { day: 'Tue', value: 82 },
  { day: 'Wed', value: 45 },
  { day: 'Thu', value: 93 },
  { day: 'Fri', value: 70 },
  { day: 'Sat', value: 30 },
  { day: 'Sun', value: 18 },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 bg-teal-500 text-white p-3 rounded-full shadow-lg"
        aria-label="Toggle sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 pt-6 transition-transform`}>
        <div className="px-4 mb-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Dashboard</h2>
        </div>
        <nav className="space-y-1 px-3">
          {sidebarLinks.map((link) => (
            <button
              key={link.label}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                link.active ? 'bg-teal-50 text-teal-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="mt-8 mx-4 p-4 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl text-white">
          <h3 className="font-semibold text-sm mb-1">Upgrade to Pro</h3>
          <p className="text-xs text-teal-100 mb-3">Unlock batch analysis and priority processing.</p>
          <Link href="/pricing" className="inline-block bg-white text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-lg">
            View Plans
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6 lg:p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-sm text-gray-500 mt-1">Welcome back. Here&apos;s what&apos;s happening with your analyses.</p>
          </div>
          <Link href="/booking" className="hidden sm:inline-flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            New Analysis
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-500">{stat.label}</span>
                <div className={`w-8 h-8 ${stat.bg} rounded-lg`} />
              </div>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-8">
          <h3 className="text-sm font-semibold text-gray-900 mb-6">Analyses This Week</h3>
          <div className="flex items-end justify-between gap-3 h-40">
            {chartBars.map((bar) => (
              <div key={bar.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-teal-100 rounded-t-md relative" style={{ height: `${bar.value}%` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-md" />
                </div>
                <span className="text-xs text-gray-500">{bar.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent analyses table */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900">Recent Analyses</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="text-left p-4 text-xs font-semibold text-gray-500 uppercase">ID</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-500 uppercase">Type</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-500 uppercase">Organism</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-500 uppercase">Samples</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                  <th className="text-left p-4 text-xs font-semibold text-gray-500 uppercase">Progress</th>
                </tr>
              </thead>
              <tbody>
                {recentAnalyses.map((a) => (
                  <tr key={a.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="p-4 text-sm font-medium text-teal-600">{a.id}</td>
                    <td className="p-4 text-sm text-gray-700">{a.type}</td>
                    <td className="p-4 text-sm text-gray-500">{a.organism}</td>
                    <td className="p-4 text-sm text-gray-700">{a.samples.toLocaleString()}</td>
                    <td className="p-4">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[a.status]}`}>
                        {a.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-teal-500 rounded-full" style={{ width: `${a.progress}%` }} />
                        </div>
                        <span className="text-xs text-gray-500">{a.progress}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
