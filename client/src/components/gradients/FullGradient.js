import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeGradient } from "../../actions/gradientAction";

const FullGradient = () => {
  const dispatch = useDispatch();
  const gradient = useSelector((state) => state.gradient.gradient);
  const { colors } = gradient;
  return (
    <div
      className="gradient-full animate__animated animate__zoomIn"
      style={{
        background: `linear-gradient(${colors.direction},${colors.start}, ${colors.end})`,
      }}
      onClick={() => dispatch(removeGradient())}
    ></div>
  );
};

export default FullGradient;
