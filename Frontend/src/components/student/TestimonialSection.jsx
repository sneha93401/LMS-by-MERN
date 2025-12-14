import React, { useState } from 'react';

const TestimonialCard = ({ name, title, rating, text, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-6 h-6 ${star <= rating ? 'text-red-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        {text}
      </p>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 underline cursor-pointer text-sm font-medium hover:text-blue-700 transition-colors"
      >
        Read more
      </button>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Donald Jackman",
      title: "SWE 1 @ Amazon",
      rating: 5,
      text: "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Richard Nelson",
      title: "SWE 2 @ Samsung",
      rating: 4,
      text: "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      name: "James Washington",
      title: "SWE 2 @ Google",
      rating: 4,
      text: "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our learners as they share their journeys of transformation, success,
             and how our platform has made a difference in their lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;