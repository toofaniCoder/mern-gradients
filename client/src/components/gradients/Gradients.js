import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGradients } from "../../actions/gradientAction";
import Gradient from "./Gradient";
import FullGradient from "./FullGradient";

const Gradients = () => {
  const dispatch = useDispatch();
  const gradients = useSelector((state) => state.gradient.gradients);
  const gradient = useSelector((state) => state.gradient.gradient);

  useEffect(() => {
    dispatch(getGradients());
  }, []);

  return (
    <Fragment>
      {gradient && <FullGradient />}
      <div className="columns is-multiline">
        {gradients.map((gradient) => (
          <Gradient key={gradient._id} gradient={gradient} />
        ))}
      </div>
    </Fragment>
  );
};

export default Gradients;
