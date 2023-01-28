import React, { useState } from "react";
import { API_Feedback_URI } from "../../assets/Api";

import "../../styles/experiencestyles.css";

const ExperienceContent = () => {
  const [name, setName] = useState("");
  const [cNumber, setCNumber] = useState("");
  const [email, setEmail] = useState("");
  const [rego, setRego] = useState("");
  const [branch, setBranch] = useState("");
  const [like, setLike] = useState("");
  const [dislike, setDislike] = useState("");

  const [feedbackSuccess, setFeedbackSuccess] = useState(false); //state for popups

  const addFeedback = (e) => {
    //function that adds all the input values to the api
    e.preventDefault();
    fetch(API_Feedback_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Email: email,
        ContactNumber: cNumber,
        VehicleNumber: rego,
        Branch: branch,
        Liked: like,
        NotLiked: dislike,
      }),
    })
      .then((res) => console.log(res))
      .then(() => {
        console.log("Added feedback");
        setFeedbackSuccess(true); //setting the state to true when the user submit their feedback successfully.
        setTimeout(() => {
          setFeedbackSuccess(false); //setting the state to false after 2 seconds.
          window.location.reload();
        }, 1000); //2000 because i want the popup to disappear after 2 secs.
      });
  };

  return (
    <div>
      {feedbackSuccess && (
        <div className="popup-icon-div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon-popup"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <p>Feedback Submitted</p>
        </div>
      )}

      <form onSubmit={addFeedback}>
        <h1 className="feedback-header">Feedback</h1>
        <div className="personal-contact-div">
          <label htmlFor="nameid">Name</label>
          <br />
          <input
            id="nameid"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="numid">Contact number</label>
          <br />
          <input
            id="numid"
            type="text"
            onChange={(e) => setCNumber(e.target.value)}
          />
          <br />
          <label htmlFor="emailid">Email</label>
          <br />
          <input
            id="emailid"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="regoid">Vehicle Registration Number</label>
          <br />
          <input
            id="regoid"
            type="text"
            onChange={(e) => setRego(e.target.value)}
          />
          <br />
          <label htmlFor="branchselect">Branch</label>
          <br />
          <select
            id="branchselect"
            className="selection"
            onChange={(e) => setBranch(e.target.value)}
          >
            <option></option>
            <option>Pakuranga-VRM</option>
            <option>Botany-VRM</option>
            <option>Albany-VRM</option>
          </select>
        </div>

        <div className="textarea-div">
          <div>
            <br />
            <label htmlFor="liked">What I like the most?</label>
            <br />
            <textarea
              id="liked"
              className="textarea-1"
              onChange={(e) => setLike(e.target.value)}
            ></textarea>
          </div>
          <div>
            <br />
            <label htmlFor="dislike">What I do not like the most?</label>
            <br />
            <textarea
              className="textarea-2"
              onChange={(e) => setDislike(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="btn-div">
          <button className="btn-sub">Submit</button>
          <a className="seeallfeedbacks" href="/allfeedbacks">
            See all feedback from our customers
          </a>
        </div>
      </form>
    </div>
  );
};

export default ExperienceContent;
