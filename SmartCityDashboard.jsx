import React from "react";

export default function SmartCityDashboard() {
  const stats = [
    { title: "Population", value: "2.4M", change: "+2.3%", positive: true },
    { title: "Energy Usage", value: "500 GWh", change: "-5.2%", positive: false },
    { title: "Water Usage", value: "1625 ML", change: "-1.8%", positive: false },
    { title: "Traffic Flow", value: "85%", change: "+3.1%", positive: true },
  ];

  const alerts = [
    { type: "warning", text: "High traffic congestion in Central District", time: "10 min ago" },
    { type: "info", text: "Scheduled maintenance: Water pipeline - North area", time: "1 hour ago" },
    { type: "success", text: "Energy efficiency improved by 5% this month", time: "2 hours ago" },
  ];

  const typeStyles = {
    warning: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <header className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-600 text-white flex items-center justify-center rounded-lg text-lg font-bold">
            SC
          </div>
          <div>
            <h1 className="text-lg font-semibold">Smart City Management</h1>
            <p className="text-sm text-gray-500">
              Intelligent Urban Infrastructure Platform
            </p>
          </div>
        </div>

        <nav className="flex gap-4 text-sm">
          <button className="px-3 py-1.5 rounded-full bg-indigo-600 text-white">
            Dashboard
          </button>
          <button className="px-3 py-1.5 rounded-full hover:bg-gray-100">
            Infrastructure
          </button>
          <button className="px-3 py-1.5 rounded-full hover:bg-gray-100">
            Services
          </button>
          <button className="px-3 py-1.5 rounded-full hover:bg-gray-100">
            Reports
          </button>
        </nav>
      </header>

      {/* Stats Cards */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {stats.map((s) => (
          <div
            key={s.title}
            className="bg-white p-5 rounded-xl shadow-sm flex flex-col justify-between"
          >
            <h3 className="text-gray-500 text-sm">{s.title}</h3>
            <div className="flex items-end justify-between mt-2">
              <span className="text-2xl font-semibold">{s.value}</span>
              <span
                className={`text-sm ${
                  s.positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {s.change}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Alerts */}
      <section className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">⚠️</span>
          <div>
            <h2 className="font-semibold">Recent Alerts</h2>
            <p className="text-sm text-gray-500">
              Real-time notifications from city systems
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {alerts.map((a, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-slate-50 p-4 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium ${typeStyles[a.type]}`}
                >
                  {a.type}
                </span>
                <div>
                  <p className="font-medium text-sm">{a.text}</p>
                  <p className="text-xs text-gray-500">{a.time}</p>
                </div>
              </div>
              <button className="text-sm text-indigo-600 hover:underline">
                View
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
