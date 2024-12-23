import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Shield, Cpu, Radio } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Fault Tolerance',
    description: 'Continuous operation despite hardware or environmental failures',
  },
  {
    icon: Cpu,
    title: 'Real-Time Processing',
    description: 'Manage and process sensor data in real-time for mission decisions',
  },
  {
    icon: Radio,
    title: 'Efficient Communication',
    description: 'Reliable and secure communication with mission control on Earth',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Space Exploration Operating System
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced operating system designed for space vehicles, satellites, and rovers,
              ensuring reliable operation in the harshest environments of space.
            </p>
            <Link
              to="/vehicles"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 
                         text-white font-medium rounded-lg transition-colors"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Explore Space Vehicles
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm 
                           border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Mission Stats */}
          <div className="bg-gray-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-center">System Requirements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.999%</div>
                <div className="text-gray-400">Uptime Reliability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">&lt;10ms</div>
                <div className="text-gray-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">256GB</div>
                <div className="text-gray-400">RAM Required</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">1TB/s</div>
                <div className="text-gray-400">Data Processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;