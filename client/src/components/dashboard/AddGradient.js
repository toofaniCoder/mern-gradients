import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGradients,
  createGradient,
  deleteGradient,
  updateGradient,
} from "../../actions/gradientAction";
import styled from "styled-components";

const GradientBox = styled.div`
  background-image: linear-gradient(
    ${(props) => props.direction},
    ${(props) => props.start},
    ${(props) => props.end}
  );
`;

const GradientChips = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-image: linear-gradient(
    ${(props) => props.direction},
    ${(props) => props.start},
    ${(props) => props.end}
  );
  & div {
    display: none;
  }
  &:hover div {
    display: block;
  }
`;

const AddGradient = () => {
  const dispatch = useDispatch();
  const gradients = useSelector((state) => state.gradient.gradients);
  const [name, setName] = useState("");
  const [startColor, setStartColor] = useState("");
  const [endColor, setEndColor] = useState("");
  const [direction, setDirection] = useState("");
  const [currentGradient, setCurrentGradient] = useState(null);
  const [positions, setPositions] = useState([
    "to bottom",
    "to top",
    "to left",
    "to right",
    "to top left",
    "to top right",
    "to bottom left",
    "to bottom right",
  ]);

  useEffect(() => {
    dispatch(getGradients());
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const gradient = {
      name: name,
      colors: {
        direction: direction,
        start: startColor,
        end: endColor,
      },
    };
    if (currentGradient == null) {
      dispatch(createGradient(gradient));
      setName("");
      setDirection("");
      setStartColor("");
      setEndColor("");
    } else {
      dispatch(updateGradient(Object.assign(currentGradient, gradient)));
    }
    setCurrentGradient(null);
  };

  const editGradient = (gradient) => {
    setCurrentGradient(gradient);
  };

  useEffect(() => {
    if (currentGradient != null) {
      setName(currentGradient.name);
      setDirection(currentGradient.colors.direction);
      setStartColor(currentGradient.colors.start);
      setEndColor(currentGradient.colors.end);
    } else {
      setName("");
      setDirection("");
      setStartColor("");
      setEndColor("");
    }
  }, [currentGradient]);
  return (
    <div className="container py-4">
      <div className="columns">
        <div className="column is-8">
          <div className="columns is-multiline">
            {gradients.map((gradient) => (
              <div className="column is-3" key={gradient._id}>
                <GradientChips
                  direction={gradient.colors.direction}
                  start={gradient.colors.start}
                  end={gradient.colors.end}
                  className="box"
                >
                  <div class="buttons">
                    <button
                      className="button is-rounded is-white is-small"
                      onClick={() => editGradient(gradient)}
                    >
                      edit
                    </button>
                    <button
                      className="button is-rounded is-white is-small"
                      onClick={() => dispatch(deleteGradient(gradient._id))}
                    >
                      delete
                    </button>
                  </div>
                </GradientChips>
              </div>
            ))}
          </div>
        </div>
        <div className="column is-4">
          <div className="box">
            <form onSubmit={onSubmit}>
              <div class="field">
                <label class="label">Gradient Name</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Enter your gradient name...."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">First Color</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Enter your first color"
                    value={startColor}
                    onChange={(e) => setStartColor(e.target.value)}
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Last Color</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Enter your last color"
                    value={endColor}
                    onChange={(e) => setEndColor(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="columns is-multiline">
                  {startColor &&
                    endColor &&
                    positions.map((position) => (
                      <div className="column is-6">
                        <GradientBox
                          direction={position}
                          start={startColor}
                          end={endColor}
                          className="box has-text-white has-text-centered"
                          onClick={() => setDirection(position)}
                        >
                          {position}
                        </GradientBox>
                      </div>
                    ))}
                </div>
              </div>
              <div class="field">
                <div class="control">
                  {currentGradient ? (
                    <Fragment>
                      {" "}
                      <button class="button is-warning is-fullwidth mb-2">
                        Update Gradient
                      </button>
                      <button
                        class="button is-dark is-fullwidth"
                        onClick={() => setCurrentGradient(null)}
                      >
                        Cancel
                      </button>
                    </Fragment>
                  ) : (
                    <button class="button is-primary is-fullwidth">
                      Create Gradient
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGradient;
