import React from "react";

function Steps({ hasFiles, submissionComplete }) {
  return (
    <div className="bg-primary flex justify-center rounded-lg my-8 p-4 max-w-4xl mx-auto text-white w-full">
      <ul className="steps steps-vertical lg:steps-horizontal lg:flex lg:w-full lg:justify-center">
        <li className="step step-success w-full">បញ្ចូលឯកសារ</li>
        <li className={`step ${hasFiles ? 'step-success' : ''} w-full`}>រួចរាល់</li>
        <li className={`step ${submissionComplete ? 'step-success' : ''} w-full`}>បញ្ចប់</li>
      </ul>
    </div>
  );
}

export default Steps;
