import React, { useState } from 'react';
import axios from 'axios';

const CombineRules = () => {
    const [ruleId1, setRuleId1] = useState('');
    const [ruleId2, setRuleId2] = useState('');
    const [combinationOperator, setCombinationOperator] = useState('AND');
    const [combinedRule, setCombinedRule] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://ruleengineast-backend.onrender.com/rules/combine', {
                ruleId1,
                ruleId2,
                operator: combinationOperator,
            });
            setCombinedRule(res.data);
            setError('');
        } catch (err) {
            console.error(err);
            setError('Failed to combine rules. Please check the rule IDs and try again.');
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-gradient-to-r from-white to-blue-100 shadow-2xl rounded-lg px-12 py-8 mb-6 border border-gray-300"> {/* Consistent Styling */}
            <h2 className="text-2xl font-extrabold mb-6 text-indigo-800">Combine Rules</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-indigo-900 text-sm font-semibold mb-3" htmlFor="ruleId1">
                            Rule ID 1
                        </label>
                        <input
                            id="ruleId1"
                            type="text"
                            value={ruleId1}
                            onChange={(e) => setRuleId1(e.target.value)}
                            className="shadow appearance-none border border-indigo-400 rounded-lg w-full py-3 px-4 bg-indigo-50 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:shadow-outline"
                            placeholder="Enter Rule ID 1"
                        />
                    </div>
                    <div>
                        <label className="block text-indigo-900 text-sm font-semibold mb-3" htmlFor="ruleId2">
                            Rule ID 2
                        </label>
                        <input
                            id="ruleId2"
                            type="text"
                            value={ruleId2}
                            onChange={(e) => setRuleId2(e.target.value)}
                            className="shadow appearance-none border border-indigo-400 rounded-lg w-full py-3 px-4 bg-indigo-50 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:shadow-outline"
                            placeholder="Enter Rule ID 2"
                        />
                    </div>
                </div>

                <div className="mb-5 mt-6 relative">
                    <label className="block text-indigo-900 text-sm font-semibold mb-3" htmlFor="operator">
                        Combination Operator
                    </label>
                    <select
                        id="operator"
                        value={combinationOperator}
                        onChange={(e) => setCombinationOperator(e.target.value)}
                        className="block appearance-none w-full bg-indigo-50 border border-indigo-400 hover:border-indigo-500 px-4 py-3 pr-8 rounded-lg shadow-md leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:shadow-outline"
                    >
                        <option value="AND">AND</option>
                        <option value="OR">OR</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-5 rounded-lg focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Combine
                    </button>
                </div>
            </form>

            {combinedRule && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold text-green-600">Combined Rule:</h3>
                    <p className="text-gray-700">Rule ID: {combinedRule.id}</p>
                    <p className="text-gray-700">Rule Name: {combinedRule.ruleName}</p>
                    <p className="text-gray-700">AST: {combinedRule.ruleAST}</p>
                </div>
            )}

            {error && (
                <div className="mt-4 text-red-500">{error}</div>
            )}
        </div>
    );
};

export default CombineRules;
