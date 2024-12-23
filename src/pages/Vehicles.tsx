import React from 'react';
import { Rocket, Satellite, Radio, Truck } from 'lucide-react';

const vehicles = [
  {
    icon: Rocket,
    name: 'Orbital Launch Vehicle',
    description: 'Heavy-lift rocket designed for orbital payload delivery',
    specs: {
      thrust: '9,000 kN',
      payload: '25,000 kg',
      height: '70m',
    },
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Satellite,
    name: 'Communication Satellite',
    description: 'Advanced satellite for deep space communication relay',
    specs: {
      orbit: 'Geosynchronous',
      lifespan: '15 years',
      mass: '6,000 kg',
    },
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Truck,
    name: 'Mars Rover',
    description: 'Autonomous exploration vehicle for Mars surface operations',
    specs: {
      range: '50 km',
      power: 'Nuclear RTG',
      mass: '1,025 kg',
    },
    image: 'https://images.unsplash.com/photo-1614728894747-a83421789f10?auto=format&fit=crop&q=80&w=800',
  },
];

const Vehicles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Space Vehicles and Equipment
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our fleet of advanced space vehicles and equipment, each running on our
            specialized operating system designed for the challenges of space exploration.
          </p>
        </div>

        <div className="grid gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-gray-800/30 rounded-xl overflow-hidden backdrop-blur-sm 
                         border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="md:grid md:grid-cols-2 gap-8">
                <div className="h-64 md:h-auto relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <vehicle.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <h2 className="text-2xl font-bold">{vehicle.name}</h2>
                  </div>
                  <p className="text-gray-300 mb-6">{vehicle.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(vehicle.specs).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-sm text-gray-400">{key}</div>
                        <div className="font-semibold text-blue-400">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;