import React from "react";

const TrialButton = ({ classes = "" }) => {
  return (
    <button
      className={`px-4 lg:px-7 py-2 border border-emerald-600 rounded-lg transition-all text-emerald-600 text-sm tracking-wider min-w-fit ${classes} hover:bg-emerald-600 hover:text-white`}
    >
      START TRIAL
    </button>
  );
};

export default TrialButton;
