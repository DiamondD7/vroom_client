import React from "react";

import "../../styles/experiencestyles.css";

const ExperienceContent = () => {
  return (
    <div>
      <form>
        <h1 className="feedback-header">Feedback</h1>
        <div className="personal-contact-div">
          <label htmlFor="nameid">Name</label>
          <br />
          <input id="nameid" type="text" />
          <br />
          <label htmlFor="numid">Contact number</label>
          <br />
          <input id="numid" type="text" />
          <br />
          <label htmlFor="emailid">Email</label>
          <br />
          <input id="emailid" type="text" />
          <br />
          <label htmlFor="regoid">Vehicle Registration Number</label>
          <br />
          <input id="regoid" type="text" />
          <br />
          <label>Branch</label>
          <br />
          <select className="selection">
            <option></option>
            <option>Pakuranga-VRM</option>
            <option>Botany-VRM</option>
            <option>Albany-VRM</option>
          </select>
        </div>

        <div className="textarea-div">
          <div>
            <br />
            <label>What I like the most?</label>
            <br />
            <textarea className="textarea-1"></textarea>
          </div>
          <div>
            <br />
            <label>What I do not like the most?</label>
            <br />
            <textarea className="textarea-2"></textarea>
          </div>
        </div>

        <div className="btn-div">
          <button className="btn-sub">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ExperienceContent;
