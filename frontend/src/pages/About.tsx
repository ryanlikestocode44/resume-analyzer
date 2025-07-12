// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">About CVision</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>CVision</strong> is an intelligent resume analyzer built using modern web technologies
        like React, Flask, and NLP. It helps job seekers improve their resumes by providing personalized
        skill recommendations, scoring, and relevant video resources.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This platform leverages natural language processing to extract information from uploaded PDF resumes
        and offers insights based on industry standards and trends.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Developed with ❤️ for students, fresh graduates, and professionals aiming to enhance their career opportunities.
      </p>
    </div>
  );
};

export default About;
