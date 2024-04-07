import React from "react";
import H1 from "../components/H1";
import LearningPathDiv from "../components/LearningPathDiv";

const FeaturedLearningPaths = () => {
  return (
    <div className="space-y-5">
      <H1>Featured learning paths</H1>
      <div className="space-y-3 lg:space-y-0 lg:grid grid-cols-2 gap-2">
        <LearningPathDiv />
        <LearningPathDiv />
      </div>
    </div>
  );
};

export default FeaturedLearningPaths;
