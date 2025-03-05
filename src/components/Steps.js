import React, { useState, useEffect } from "react";

function Steps({ hasFiles }) {
  return (
    <div className="bg-primary flex justify-center rounded-lg my-8 p-4 text-white lg:w-[650px] md:w-[300px] sm:w-[250px]">
      <ul className="steps steps-vertical lg:steps-horizontal lg:flex lg:w-full lg:justify-center">
        <li className="step step-success w-full">បញ្ចូលឯកសារ</li>
        <li className={`step ${hasFiles ? 'step-success' : ''} w-full`}>រួចរាល់</li>
        <li className="step w-full">បញ្ចប់</li>
      </ul>
    </div>
  );
}

export default Steps;