import React, { useState } from 'react';
import axios from 'axios';

const EvaluateRule = () => {
    const [ruleId, setRuleId] = useState("");
    const [userData, setUserData] = useState([{ key: '', value: '' }]);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const data = [...userData];
        data[index][name] = value;
        setUserData(data);
    };

    const addField = () => {
        setUserData([...userData, { key: '', value: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const transformedData = userData.reduce((acc, curr) => {
            if (curr.key) {
                acc[curr.key] = isNaN(curr.value) ? curr.value : parseFloat(curr.value);
            }
            return acc;
        }, {});

        try {
            const res = await axios.post('http://localhost:8080/rules/evaluate', {
                ruleId: parseInt(ruleId),
                userData: transformedData
            });
            setResult(res.data);
        } catch (err) {
            console.error(err);
            setError('Error evaluating rule: ' + (err.response?.data || err.message));
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-gradient-to-r from-white to-blue-100 shadow-2xl rounded-lg px-12 py-8 mb-6 border border-gray-300">
            <h2 className="text-2xl font-extrabold mb-6 text-indigo-800">Evaluate Rule</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block text-indigo-900 text-sm font-semibold mb-3" htmlFor="ruleId">
                        Rule ID
                    </label>
                    <input
                        id="ruleId"
                        type="text"
                        value={ruleId}
                        onChange={(e) => setRuleId(e.target.value)}
                        className="shadow appearance-none border border-indigo-400 rounded-lg w-full py-3 px-4 bg-indigo-50 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:shadow-outline"
                        placeholder="Enter Rule ID"
                        required
                    />
                </div>
                {userData.map((data, index) => (
                    <div className="mb-5" key={index}>
                        <label className="block text-indigo-900 text-sm font-semibold mb-3" htmlFor={`key-${index}`}>
                            Key
                        </label>
                        <input
                            id={`key-${index}`}
                            type="text"
                            name="key"
                            value={data.key}
                            onChange={(e) => handleInputChange(index, e)}
                            className="shadow appearance-none border border-indigo-400 rounded-lg w-full py-3 px-4 bg-indigo-50 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:shadow-outline"
                            placeholder="Enter parameter key (e.g., age)"
                            required
                        />
                        <label className="block text-indigo-900 text-sm font-semibold mb-3 mt-4" htmlFor={`value-${index}`}>
                            Value
                        </label>
                        <input
                            id={`value-${index}`}
                            type="text"
                            name="value"
                            value={data.value}
                            onChange={(e) => handleInputChange(index, e)}
                            className="shadow appearance-none border border-indigo-400 rounded-lg w-full py-3 px-4 bg-indigo-50 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:shadow-outline"
                            placeholder="Enter parameter value (e.g., 20)"
                            required
                        />
                    </div>
                ))}
                <div className="mb-5">
                    <button
                        type="button"
                        onClick={addField}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-2 px-5 rounded-lg focus:outline-none focus:shadow-outline"
                    >
                        Add Parameter
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-5 rounded-lg focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Evaluate
                    </button>
                </div>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {result !== null && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold text-green-600">Evaluation Result:</h3>
                    <p className="text-gray-700">{result ? "True" : "False"}</p>
                </div>
            )}
        </div>
    );
};

export default EvaluateRule;
