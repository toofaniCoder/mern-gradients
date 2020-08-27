import React from "react";
import { downloadGradient, setGradient } from "../../actions/gradientAction";
import { useDispatch } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Gradient = (props) => {
  const dispatch = useDispatch();
  const { gradient } = props;
  const { name, colors } = gradient;
  return (
    <div className="column is-4">
      <div className="box">
        <div className="columns">
          <div className="column is-6">{name}</div>
          <div className="column is-6 has-text-right">
            <div className="buttons">
              <button
                className="button is-small is-warning"
                onClick={() => dispatch(downloadGradient(name))}
              >
                download
              </button>
              <button className="button is-primary is-small">
                <CopyToClipboard
                  text={`background-image:linear-gradient(${colors.direction}, ${colors.start}, ${colors.end})`}
                >
                  <span className="material-icons">content_copy</span>
                </CopyToClipboard>
              </button>
            </div>
          </div>
        </div>
        <div
          className="gradient mb-3"
          style={{
            backgroundImage: `linear-gradient(${gradient.colors.direction}, ${gradient.colors.start}, ${gradient.colors.end})`,
          }}
          onClick={() => dispatch(setGradient(gradient))}
        ></div>
        <div className="columns">
          <div className="column is-6">
            <span className="tag is-dark mr-2">{gradient.colors.start}</span>
            <span className="tag is-dark">{gradient.colors.end}</span>
          </div>
          <div className="column is-6 has-text-right">
            <span>{gradient.downloads} downloads</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gradient;
