import React from "react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl mx-auto text-center">
        <span className="text-2xl font-bold">Welcome to Chatbot AI</span>
        <p className="mt-2 text-sm">Empowering your business through smart conversations.</p>
      </div>

      <div className="mt-12">
        <h2 className="text-center text-2xl font-bold">Features</h2>
        <div className="flex space-x-4">
          <div className="p-4 bg-white rounded-lg">
            <h3>Fast Response</h3>
            <p>Our chatbots reply in milliseconds.</p>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <h3>Intelligent</h3>
            <p>Capable of understanding natural language.</p>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <h3>24/7 Support</h3>
            <p>Our chatbots are available 24/7.</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-center text-2xl font-bold">Pricing</h2>
        <div className="flex space-x-4">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3>Basic</h3>
            <p>$10/month</p>
          </div>
          <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md">
            <h3>Pro</h3>
            <p>$20/month</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3>Enterprise</h3>
            <p>$30/month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
