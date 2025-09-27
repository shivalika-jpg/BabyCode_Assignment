import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-dark flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Master <span className="gradient-text">IELTS</span> with
              <br />
              <span className="text-secondary-green">Expert Guidance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Achieve your dream band score with our AI-powered learning platform, 
              expert instructors, and personalized study plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-gradient-green hover:bg-primary-green text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Start Free Trial
              </button>
              <button className="border-2 border-secondary-green text-secondary-green hover:bg-secondary-green hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-secondary-dark/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-green">95%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-green">10K+</div>
                <div className="text-gray-400 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-green">8.5</div>
                <div className="text-gray-400 text-sm">Avg. Band Score</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Hero Visual */}
              <div className="bg-gradient-green rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6">
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-primary-dark mb-2">IELTS Band Score</div>
                    <div className="text-6xl font-bold text-primary-green">8.5</div>
                  </div>
                  
                  {/* Mock test results */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Listening</span>
                      <span className="font-bold text-secondary-green">8.5</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Reading</span>
                      <span className="font-bold text-secondary-green">8.0</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Writing</span>
                      <span className="font-bold text-secondary-green">8.5</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Speaking</span>
                      <span className="font-bold text-secondary-green">9.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-secondary-green/10 rounded-3xl transform -rotate-6 -z-10"></div>
            <div className="absolute top-4 right-4 w-20 h-20 bg-secondary-green/20 rounded-full -z-10"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-primary-green/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;