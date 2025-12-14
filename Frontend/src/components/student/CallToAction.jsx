import React from 'react';
import assets from '../../assets/assets';

const CallToAction = () => {
  return (
    <div className="w-full bg-gray-50 flex items-center justify-center px-4 pb-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Learn anything, anytime, anywhere
        </h1>
        
        <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
            Get started
          </button>
          
          <button className="flex items-center gap-2 bg-gray-100 rounded-2xl text-gray-900 font-semibold px-8 py-3 hover:text-gray-700 transition-colors duration-200">
             Learn more <img src={assets.arrow_icon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;