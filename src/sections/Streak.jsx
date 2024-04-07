import React, { useEffect, useState } from "react";
import { AiFillThunderbolt, AiOutlineThunderbolt } from "react-icons/ai";
import { completedLessons, longestStreak, streak } from "../data/data";

const Streak = () => {
  const initilState = [
    { name: "Su", active: false, streak: false },
    { name: "M", active: false, streak: false },
    { name: "Tu", active: false, streak: false },
    { name: "W", active: false, streak: false },
    { name: "Th", active: false, streak: false },
    { name: "F", active: false, streak: false },
    { name: "Sa", active: false, streak: false },
  ];

  const [days, setDays] = useState(initilState);

  let activeStreak = streak;

  useEffect(() => {
    let date = new Date();
    let todayIndex = date.getDay();

    setDays(
      days.map((day, index) =>
        index === todayIndex
          ? { ...day, active: true }
          : { ...day, active: false }
      )
    );
    setDays((days) =>
      days.map((day, index) => {
        if (activeStreak > 0) {
          if (index > todayIndex - activeStreak && index <= todayIndex) {
            return { ...day, streak: true };
          } else return { ...day, streak: false };
        } else return { ...day, streak: false };
      })
    );
  }, [streak]);
  return (
    <div className="space-y-5 md:flex md:space-y-0">
      <div className="flex gap-2 items-center justify-center md:justify-start flex-1 md:border-r">
        <div className="relative p-1">
          {streak > 0 && (
            <>
              <div className="size-1 bg-yellow-500 absolute right-2 top-2" />
              <div className="size-1 bg-yellow-500 absolute bottom-4 left-0" />
              <div className="size-[6px] bg-yellow-500 absolute bottom-1" />
            </>
          )}
          <div
            className={`flex items-center justify-center text-xl font-bold size-[70px] border-[5px] ${
              streak ? `border-yellow-500` : `border-neutral-300`
            } rounded-full`}
          >
            {streak}
            {streak ? (
              <AiFillThunderbolt className="text-yellow-400" />
            ) : (
              <AiFillThunderbolt className="text-neutral-300" />
            )}
          </div>
        </div>
        <div className="">
          <p>You're on a {streak}-day streak!</p>
          <div className="flex gap-2 text-xs text-neutral-600 justify-between">
            <p className="">
              <b>{longestStreak}</b> Longest streak
            </p>
            <p className="">
              <b>{completedLessons}</b> Lessons completed
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between md:w-[80%] ml-auto">
          {days.map((day) => (
            <div
              key={day.name}
              className={`text-sm ${
                day.active && `border`
              } rounded-[200px] border-yellow-500 py-3 px-1`}
            >
              {day.name}
              {day.streak ? (
                <AiFillThunderbolt className="text-yellow-400" />
              ) : (
                <AiFillThunderbolt className="text-neutral-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Streak;
