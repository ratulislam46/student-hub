import React from 'react';

const QuestionCmnt = ({ ForumComment }) => {
    console.log(ForumComment);
    return (
        <div>
            {ForumComment.Comment.length === 0 && <p>No comments yet.</p>}
            {ForumComment.Comment.map((c, i) => (
                <div key={i} 
                className="p-4 shadow hover:shadow-md rounded my-3 bg-gradient-to-r from-orange-200 to-orange-100 hover:from-orange-100 hover:to-orange-200">
                    <p>{c.comment}</p>
                    <small>By: {c.user} • {new Date(c.createdAt).toLocaleString()}</small>
                </div>
            ))}
        </div>
    );
};

export default QuestionCmnt;