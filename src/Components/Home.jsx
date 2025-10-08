import React from "react";

const stats = [
  { title: "Total Leads", value: 247, meta: "+12% from last month" },
  { title: "Active Projects", value: 18, meta: "+3 new this week" },
  { title: "Pending Follow-ups", value: 12, meta: "Needs attention" },
  { title: "Completed Today", value: 34, meta: "On track" },
];

const activities = [
  {
    title: "Lead Follow-up",
    description: "Called John Smith regarding web development inquiry",
    user: "Sarah Johnson",
    time: "2 hours ago",
    status: "completed",
  },
  {
    title: "Client Meeting",
    description: "Project kickoff meeting with TechCorp",
    user: "Mike Chen",
    time: "4 hours ago",
    status: "completed",
  },
  {
    title: "Proposal Sent",
    description: "Sent proposal to Acme Ltd.",
    user: "Asha Rai",
    time: "1 day ago",
    status: "pending",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-100 flex flex-col">
        <div className="px-6 py-6 border-b border-slate-800">
          <div className="text-xl font-bold">ccms</div>
          <div className="text-sm text-slate-400 mt-1">Customer Lead Management</div>
        </div>

        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            <li className="bg-sky-600 text-white rounded-md px-3 py-2 font-medium">Dashboard</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800">Lead Management</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800">Projects</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800">Outreach</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800">Activities</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800">Analytics</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800">User Management</li>
            <li className="px-3 py-2 rounded-md hover:bg-slate-800">Profile</li>
          </ul>
        </nav>

        <div className="px-6 py-4 border-t border-slate-800">
          <button className="w-full text-left text-sm text-slate-200 hover:text-white">Logout</button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <div>
            <h1 className="text-2xl font-semibold">Customer Lead Management System</h1>
            <p className="text-sm text-slate-500">Centralized platform for activity tracking and lead management</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex space-x-6">
              <div className="text-center">
                <div className="text-lg font-bold">247</div>
                <div className="text-xs text-slate-500">Total Leads</div>
              </div>
            </div>

            <div className="relative">
              <button className="flex items-center space-x-2 bg-white border px-3 py-1 rounded-md shadow-sm">
                <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center">J</div>
                <div className="text-sm">
                  <div className="font-medium">John Doe</div>
                  <div className="text-xs text-slate-500">Super Admin</div>
                </div>
              </button>
            </div>
          </div>
        </header>

        <main className="p-6 overflow-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((s) => (
              <div key={s.title} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-slate-500">{s.title}</div>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-slate-400 mt-2">{s.meta}</div>
              </div>
            ))}
          </div>

          {/* Charts placeholders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6 min-h-[220px]">
              <div className="text-md font-medium mb-4">Activity Trends</div>
              <div className="flex items-center justify-center h-40 border-2 border-dashed border-slate-200 rounded-md text-slate-400">
                Chart visualization will be implemented with Chart.js
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 min-h-[220px]">
              <div className="text-md font-medium mb-4">Lead Status Distribution</div>
              <div className="flex items-center justify-center h-40 border-2 border-dashed border-slate-200 rounded-md text-slate-400">
                Pie chart showing lead status breakdown
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Activities</h3>
              <button className="text-sm text-slate-500 hover:text-slate-700">View All</button>
            </div>

            <div className="space-y-4">
              {activities.map((a) => (
                <div key={a.title} className="flex items-start gap-4 p-4 rounded-md border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5L21 8M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{a.title}</div>
                        <div className="text-sm text-slate-500">{a.description}</div>
                      </div>
                      <div className="text-xs">
                        <span className={`px-2 py-1 rounded-full text-white text-[10px] ${a.status === "completed" ? "bg-emerald-500" : "bg-amber-500"}`}>
                          {a.status}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-400 mt-3 flex items-center gap-3">
                      <span>{a.user}</span>
                      <span>•</span>
                      <span>{a.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
