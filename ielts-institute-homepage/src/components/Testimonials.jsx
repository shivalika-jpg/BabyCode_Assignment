import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      country: "Canada",
      score: "8.5",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      text: "IELTS Pro transformed my preparation completely! The AI-powered speaking practice helped me overcome my anxiety, and I achieved my target score of 8.5 in just 3 months.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      country: "UAE",
      score: "8.0",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      text: "The mock tests were incredibly realistic and the detailed feedback helped me identify my weak areas. The expert guidance was invaluable for my writing improvement.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      country: "India",
      score: "9.0",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      text: "I was amazed by the accuracy of the band score predictor! It gave me confidence and helped me focus on the right areas. Highly recommend this platform.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            What Our <span className="gradient-text">Students</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from thousands of students who have 
            achieved their dream IELTS scores with our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Quote Icon */}
                <div className="text-secondary-green mb-6">
                  <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>

                {/* Review Text */}
                <p className="text-gray-600 mb-8 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Student Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-primary-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.country} • Band Score: {testimonial.score}
                    </div>
                  </div>
                </div>

                {/* Score Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-green text-white px-3 py-1 rounded-full text-sm font-bold">
                    {testimonial.score}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-dark rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary-green mb-2">10,000+</div>
              <div className="text-gray-300">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-green mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-green mb-2">8.5</div>
              <div className="text-gray-300">Average Band Score</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary-green mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-gray-300 mb-8">
              Start your IELTS journey today and become our next success story.
            </p>
            <button className="bg-gradient-green hover:bg-primary-green text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;