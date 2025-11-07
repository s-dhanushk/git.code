import React, { useState } from "react";
import SmartCityDashboard from "./SmartCityDashboard";
import InfrastructurePage from "./InfrastructurePage";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <header className="bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-lg font-bold">
            SC
          </div>
          <div>
            <h1 className="text-lg font-semibold">Smart City Management</h1>
            <p className="text-sm text-gray-500">
              Intelligent Urban Infrastructure Platform
            </p>
          </div>
        </div>

        <nav className="flex gap-4 text-sm font-medium">
          <button
            onClick={() => setActivePage("dashboard")}
            className={`px-3 py-1.5 rounded-full ${
              activePage === "dashboard"
                ? "bg-gray-900 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActivePage("infrastructure")}
            className={`px-3 py-1.5 rounded-full ${
              activePage === "infrastructure"
                ? "bg-gray-900 text-white"
                : "hover:bg-gray-100"
            }`}
          >
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

      {/* Page Content */}
      <main className="p-6">
        {activePage === "dashboard" && <SmartCityDashboard />}
        {activePage === "infrastructure" && <InfrastructurePage />}
      </main>
    </div>
  );
}

export default App;