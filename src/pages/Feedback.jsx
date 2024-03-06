import {useState} from "react";
import React from "react";

function Feedback()
{
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
  };
    return(
       <>
        <div className="bg-teal-800 text-white p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Feedback Form</h2>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            Your Feedback:
            <textarea
              className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              cols={50}
            />
          </label>
          <button
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
       </>
    )
}

export default Feedback