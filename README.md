"# git.code" 
Here’s the **complete direct React code** for a **Smart City webpage** — just copy it into your `App.jsx` file and run it:

```jsx
import React from "react";

function App() {
  const features = [
    "Smart Traffic Management",
    "IoT-Based Energy Systems",
    "AI-Powered Waste Management",
    "Digital Governance",
    "Sustainable Urban Planning",
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <header className="bg-blue-600 text-white py-5 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <h1 className="text-2xl font-bold">🌆 Smart City</h1>
          <nav className="space-x-4 mt-2 md:mt-0">
            <a href="#intro" className="hover:text-yellow-300">About</a>
            <a href="#features" className="hover:text-yellow-300">Features</a>
            <a href="#benefits" className="hover:text-yellow-300">Benefits</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>
        </div>
      </header>

      <section id="intro" className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">What is a Smart City?</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          A Smart City uses data and technology to enhance quality of life,
          improve public services, and promote sustainability.
        </p>
      </section>

      <section id="features" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700">{feature}</h3>
              <p className="mt-2 text-gray-600">
                Innovative technology improving sustainability and efficiency.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="benefits" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Benefits of Smart Cities</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
          Smart Cities improve connectivity, reduce pollution, and create
          sustainable environments for future generations.
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2018/03/13/08/50/smart-city-3224872_1280.jpg"
          alt="Smart City"
          className="rounded-2xl shadow-lg mx-auto max-w-3xl"
        />
      </section>

      <footer id="contact" className="bg-blue-900 text-white py-6 text-center mt-12">
        <p className="text-lg">📧 Contact us: info@smartcity.com</p>
        <p className="text-sm mt-2">© 2025 Smart City Initiative</p>
      </footer>
    </div>
  );
}

export default App;
```
