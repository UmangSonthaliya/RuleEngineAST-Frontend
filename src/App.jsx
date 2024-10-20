import React from 'react';
import CreateRule from './components/CreateRule';
import CombineRules from './components/CombineRules';
import EvaluateRule from './components/EvaluateRule';

function App() {
    return (
        <div className="min-h-screen relative bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100 p-10">
            {/* Soft shapes */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute top-10 right-0 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>

            {/* Rule Engine Title */}
            <h1 className="text-6xl font-extrabold text-center mb-12 text-indigo-900 drop-shadow-lg">
                Rule Engine
            </h1>

            <div className="grid grid-cols-1 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <CreateRule />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <CombineRules />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <EvaluateRule />
                </div>
            </div>
        </div>
    );
}

export default App;
