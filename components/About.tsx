import React from 'react';
import Card from './ui/Card';

export default function About() {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '30+', label: 'Happy Clients' },
    { number: '100%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate web developer with a love for creating digital solutions that make a difference. 
            With expertise in modern technologies and a keen eye for design, I bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">My Philosophy</h3>
                <p className="text-gray-600 leading-relaxed">
                  I believe in creating web experiences that are not just visually stunning, but also 
                  highly functional and user-friendly. Every line of code I write is crafted with 
                  purpose and precision.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Full-stack web development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    UI/UX design implementation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Performance optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Technical consulting
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}