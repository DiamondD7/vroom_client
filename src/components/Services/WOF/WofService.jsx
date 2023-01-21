import React from "react";

const WofServices = () => {
  return (
    <div>
      <h1 className="intro-opening">Warrant Of Fitness</h1>
      <p className="intro-paragraph">
        A warrant of fitness WoF is a regular check that your vehicle meets
        required safety standards at the time of inspection. It is your job to
        keep your vehicle in warrantable condition at all times. For example,
        while tyres on your vehicle may pass on the day of your warrant
        inspection, you will need to replace them as soon as the tread gets to
        the minimum depth. If you wait until the next inspection before
        replacing them, you increase your risk of having a crash or receiving a
        fine.
      </p>
      <p className="intro-paragraph">Try our WOF service today for your car</p>
      <p className="intro-paragraph">
        Call us 0800 333 9044 or just come in the store
      </p>
      <div>
        <h2 className="intro-opening servicessubheader">
          Takata Airbags - Compulsory Recall
        </h2>
        <p className="intro-paragraph">
          The government through the NZTA have issued a compulsory recall for
          all vehicles fitted with Takata alpha type Airbags. Alpha airbag
          inflators are a subset of inflators in the wider global Takata airbag
          inflator recall. Alpha type airbags may fail in a crash and explode,
          sending fragments into occupants in the vehicle, causing serious
          injury and even death. While there have not been any serious injuries
          or death in New Zealand to date, there have been overseas incidents
          which have caused New Zealand authorities to invoke a compulsory
          recall.
        </p>
        <p className="intro-paragraph">
          For more information, please click the{" "}
          <a
            href="https://www.consumerprotection.govt.nz/help-product-service/cars/takata-airbag-compulsory-recall"
            target="_blank"
            rel="noreferrer"
          >
            link
          </a>{" "}
          about this recall and share to other people
        </p>
      </div>

      <div>
        <h2 className="intro-opening">Why do you need a Warrant of Fitness?</h2>

        <ul className="intro-paragraph">
          <li>
            It is a mandatory requirement to legally operate on public roads in
            New Zealand
          </li>
          <li>
            A current WOF certifies your vehicle roadworthiness at the time of
            inspection
          </li>
          <li>
            A WOF ensures that all your vehicle's safety systems such as brakes,
            exhaust system, lights, steering, suspension and seat belts are in
            good working order
          </li>
          <li>
            A current WOF will help you avoid costly Traffic Infringement
            Notices for driving a non-warranted vehicle
          </li>
          <li>
            To comply with your vehicle's insurance policy. If your vehicle has
            no rego or WOF, your policy may be invalid
          </li>
        </ul>
      </div>
    </div>
  );
};
export default WofServices;
