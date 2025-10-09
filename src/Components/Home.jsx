import React from 'react';

const Home = () => {
  // Dummy project data
  const projectStats = {
    total: 42,
    pending: 12,
    completed: 30,
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-800 text-white">
        <div className="p-5">
          <h1 className="text-2xl font-bold">CLMS Admin</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="px-5 py-3 hover:bg-indigo-700 cursor-pointer">
              Dashboard
            </li>
            <li className="px-5 py-3 hover:bg-indigo-700 cursor-pointer">
              Clients
            </li>
            <li className="px-5 py-3 hover:bg-indigo-700 cursor-pointer">
              Leads
            </li>
            <li className="px-5 py-3 hover:bg-indigo-700 cursor-pointer">
              Staff
            </li>
            <li className="px-5 py-3 hover:bg-indigo-700 cursor-pointer">
              Settings
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Dashboard</h2>
          <p className="text-gray-500">Welcome back, Admin!</p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Projects */}
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
            <h3 className="text-gray-500 text-sm font-medium">Total Projects</h3>
            <p className="text-3xl font-bold mt-2 text-gray-800">{projectStats.total}</p>
          </div>

          {/* Pending Projects */}
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
            <h3 className="text-gray-500 text-sm font-medium">Pending Projects</h3>
            <p className="text-3xl font-bold mt-2 text-gray-800">{projectStats.pending}</p>
          </div>

          {/* Completed Projects */}
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <h3 className="text-gray-500 text-sm font-medium">Completed Projects</h3>
            <p className="text-3xl font-bold mt-2 text-gray-800">{projectStats.completed}</p>
          </div>
        </div>

        {/* Optional: Recent Activity or Charts */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <p className="text-gray-600">No recent updates.</p>
        </div>
      </main>
    </div>
  );
};

export default Home;