import React from 'react';

const QuizList = ({ allQuesAndAns }) => {
    return (
        <div>
            <div className="max-w-3xl mx-auto p-4">
                {allQuesAndAns.map((q, qIndex) => (
                    <div key={qIndex} className="mb-6 p-4 border rounded">
                        {/* question */}
                        <h3 className="text-lg font-semibold mb-3">
                            {qIndex + 1}. {q.text}
                        </h3>

                        {/* option list */}
                        <div className="grid gap-2">
                            {q.options.map((opt, index) => (
                                <button
                                    key={index}
                                    className="p-2 text-left rounded bg-gray-100 hover:bg-blue-200"
                                >
                                    {String.fromCharCode(65 + index)}. {opt.text}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default QuizList;