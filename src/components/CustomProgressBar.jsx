import ProgressBar from "@ramonak/react-progress-bar";

const CustomProgressBar = ({ progress }) => {
  return (
    <ProgressBar
      completed={progress}
      bgColor="rgb(250 204 21)"
      height="5px"
      borderRadius="100px"
      isLabelVisible={false}
    />
  );
};

export default CustomProgressBar;
