import React, { useState } from 'react';
import axios from 'axios';

const CreateRule = () => {
    const [ruleName, setRuleName] = useState("");
    const [ruleString, setRuleString] = useState("");
    const [userData, setUserData] = useState([{ key: '', value: '' }]); // Initialize with one field
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const data = [...userData];
        data[index][name] = value;
        setUserData(data);
    };

    const addField = () => {
        setUserData([...userData, { key: '', value: '' }]); // Add a new field
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error before new submission

        // Transform userData into an object for the request
        const transformedData = userData.reduce((acc, curr) => {
            if (curr.key) acc[curr.key] = curr.value; // Only include non-empty keys
            return acc;
        }, {});

        try {
            const res = await axios.post('https://ruleengineast-backend.onrender.com/rules/create', {

                ruleName,
                ruleString,
                userData: JSON.stringify(transformedData) // Convert userData to a JSON string
            });
            setResult(res.data);
            setRuleName('');
            setRuleString('');
            setUserData([{ key: '', value: '' }]); // Reset fields after creation
        } catch (err) {
            console.error(err);
            setError('Error creating rule: ' + (err.response?.data || err.message));
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-gradient-to-r from-white to-blue-100 shadow-2xl rounded-lg px-12 py-8 mb-6 border border-gray-300"> {/* Stronger background and border */}
            <h2 className="text-2xl font-extrabold mb-6 text-indigo-800">Create Rule</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block text-indigo-900 text-sm font-semibold mb-3" htmlFor="ruleName">
                        Rule Name
                    </label>
                    <input
                        id="ruleName"
                        type="text"
                        value={ruleName}
                        onChange={(e) => setRuleName(e.target.value)}
                        className="shadow appearance-none border border-indigo-400 rounded-lg w-full py-3 px-4 bg-indigo-50 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:shadow-outline"
                        placeholder="Enter Rule Name"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-indigo-900 text-sm font-semibold mb-3" htmlFor="ruleString">
                        Rule String
                    </label>
                    <input
                        id="ruleString"
                        type="text"
                        value={ruleString}
                        onChange={(e) => setRuleString(e.target.value)}
                        className="shadow appearance-none border border-indigo-400 rounded-lg w-full py-3 px-4 bg-indigo-50 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:shadow-outline"
                        placeholder="Enter Rule String (e.g., age > 20)"
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
                        Create Rule
                    </button>
                </div>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {result && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold text-green-600">Rule Created:</h3>
                    <p className="text-gray-700">ID: {result.id}</p>
                    <p className="text-gray-700">Name: {result.ruleName}</p>
                    <p className="text-gray-700">AST: {result.ruleAST}</p>
                </div>
            )}
        </div>
    );
};

export default CreateRule;
