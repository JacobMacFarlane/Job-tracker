import React, { useState } from "react";

const ApplicationCard = ({ application }) => {
    const [comment, setComment] = useState('')

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    return (
        <div className="bg-white shadow rounded-lg p-4">
            <p className="font-bold">{application.companyName}</p>
            <p>{application.role}</p>
            <p>{application.date}</p>
            <a href={application.linkedInContact}>LinkedIn Network</a>
            <textarea
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                placeholder="Add a comment.."
                value={comment}
                onChange={handleCommentChange}
            />
        </div>
    )
}
export default ApplicationCard