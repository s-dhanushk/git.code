import React, { useState } from "react";
import { Edit2, Trash2, Plus, MapPin } from "lucide-react"; // icon import

export default function InfrastructurePage() {
  const [search, setSearch] = useState("");

  // Static data (you can later connect to API or backend)
  const infrastructures = [
    {
      name: "Central Water Treatment Plant",
      type: "Water",
      location: "Central District",
      status: "operational",
      health: 95,
      lastMaintenance: "2025-10-15",
    },
    {
      name: "North Power Station",
      type: "Energy",
      location: "North District",
      status: "operational",
      health: 88,
      lastMaintenance: "2025-09-20",
    },
    {
      name: "East Traffic Control Center",
      type: "Traffic",
      location: "East District",
      status: "maintenance",
      health: 72,
      lastMaintenance: "2025-11-01",
    },
    {
      name: "South Waste Management Facility",
      type: "Waste",
      location: "South District",
      status: "operational",
      health: 91,
      lastMaintenance: "2025-10-28",
    },
    {
      name: "West Communication Tower",
      type: "Telecom",
      location: "West District",
      status: "offline",
      health: 45,
      lastMaintenance: "2025-08-12",
    },
  ];

  // Filter search results
  const filtered = infrastructures.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Color badges
  const getStatusClass = (status) => {
    switch (status) {
      case "operational":
        return "bg-green-100 text-green-700";
      case "maintenance":
        return "bg-yellow-100 text-yellow-700";
      case "offline":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen p-6">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Infrastructure Assets
          </h2>
          <p className="text-gray-500 text-sm">
            Manage and monitor city infrastructure
          </p>
        </div>

        <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          <Plus size={18} />
          Add Infrastructure
        </button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search infrastructure..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">Location</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Health</th>
              <th className="px-6 py-3 text-left">Last Maintenance</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((infra, idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-3 flex items-center gap-2">
                  ⚙️ {infra.name}
                </td>
                <td className="px-6 py-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                    {infra.type}
                  </span>
                </td>
                <td className="px-6 py-3 flex items-center gap-1 text-gray-600">
                  <MapPin size={14} /> {infra.location}
                </td>
                <td className="px-6 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(
                      infra.status
                    )}`}
                  >
                    {infra.status}
                  </span>
                </td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-indigo-600 rounded-full"
                        style={{ width: `${infra.health}%` }}
                      ></div>
                    </div>
                    <span>{infra.health}%</span>
                  </div>
                </td>
                <td className="px-6 py-3">{infra.lastMaintenance}</td>
                <td className="px-6 py-3 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="text-gray-700 hover:text-indigo-600">
                      <Edit2 size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No infrastructure found.
          </div>
        )}
      </div>
    </div>
  );
}
