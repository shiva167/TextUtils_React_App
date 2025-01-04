import React, { useState } from 'react';

export default function Feedback(props) {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted successfully!", "success");
    setFeedback('');
  };
  let mystyle = {
    color:props.mode==='dark'?'white':'#042749',  
    backgroundColor:props.mode==='dark'?'#a33323':'#c7c9c9',
    border:'2px solid grey',
    borderColor:props.mode=='dark'?'#f3f3f2':'#042749'
  }
  return (
    <div className="container" style={mystyle}>
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-control my-3"
          value={feedback} style={mystyle}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback here..."
          rows="8"
        ></textarea>
        <button className="btn btn-success m-4" style={mystyle} type="submit">Submit</button>
      </form>
    </div>
  );
}
