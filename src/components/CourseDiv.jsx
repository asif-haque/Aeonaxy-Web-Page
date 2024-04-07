import React from "react";
import CustomProgressBar from "./CustomProgressBar";
import { CiPlay1 } from "react-icons/ci";

const CourseDiv = ({ course }) => {
  return (
    <div
      className={`p-4 shadow rounded ${
        course.currentLessonDesc && `md:flex`
      } gap-16 hover:scale-[101%] transition-all cursor-pointer`}
    >
      <div className="rounded-lg overflow-hidden flex-[0.6] max-h-[40vh]">
        <img
          src={course.thumbnail}
          alt="course thumbnail"
          className="size-full object-cover"
        />
      </div>
      <div className="flex-1 text">
        <p className="text-sm my-3 line-clamp-1">
          {course.courseName} &middot; Lesson {course.currentLesson} of{" "}
          {course.lessons}
        </p>
        <h3 className="text-xl font-bold my-3">{course.currentLessonName}</h3>
        {course.currentLessonDesc && (
          <>
            <p className="text-neutral-500 mb-7">{course.currentLessonDesc}</p>
            <button className="bg-neutral-950 text-white px-4 py-2 rounded flex items-center gap-1 mb-7">
              <CiPlay1 /> Resume course
            </button>
          </>
        )}
        {course.currentLessonProgress !== undefined ? (
          <CustomProgressBar progress={course.currentLessonProgress} />
        ) : null}
      </div>
    </div>
  );
};

export default CourseDiv;
