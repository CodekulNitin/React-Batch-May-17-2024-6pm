import React from "react";
import TrustedBy from "./TrustedBy";
import AnimationComponent from "./AnimationComponent";

function HomePage() {
  return (
    <div className="text-center py-24">
      <h1 className="text-[100px]">
        <span className="text-[#006adc]">Exceptional</span>
        <br />
        <span>Webflow sites.</span>
      </h1>
      <p className="text-gray-600 text-lg">
        High-end Webflow development for design-driven companies <br /> where
        attention to detail and passionate dedication matter.
      </p>

      <h1 className="text-indigo-600 text-lg my-10">Start a project request</h1>
      <div className="flex justify-center">
        <TrustedBy />
      </div>

      <AnimationComponent />
    </div>
  );
}

export default HomePage;
