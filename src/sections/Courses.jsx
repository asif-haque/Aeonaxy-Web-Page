import React from "react";
import CourseDiv from "../components/CourseDiv";
import H1 from "../components/H1";
import { recentWatchedCourse, recommended, watchHistory } from "../data/data";

const Courses = () => {
  return (
    <div>
      <div className="my-24 space-y-5">
        <H1>Pick up where you left off</H1>
        <CourseDiv course={recentWatchedCourse} />
      </div>
      <div className="my-24 space-y-5">
        <H1>Continue learning</H1>
        <div className="space-y-2 md:space-y-0 md:grid md:grid-cols-3 lg:grid-cols-4 gap-2">
          {watchHistory.map((el, i) => (
            <CourseDiv course={el} key={i} />
          ))}
        </div>
      </div>
      <div className="my-24 space-y-5">
        <H1>Recommended for you</H1>
        <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-2">
          {recommended.map((el, i) => (
            <CourseDiv course={el} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
