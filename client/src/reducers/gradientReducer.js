import {
  GET_GRADIENTS,
  CREATE_GRADIENT,
  UPDATE_GRADIENT,
  DELETE_GRADIENT,
  SET_GRADIENT,
  REMOVE_GRADIENT,
  DOWNLOAD_GRADIENT,
} from "../constants/types";

const intialState = {
  gradients: [],
  gradient: null,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case GET_GRADIENTS:
      return {
        ...state,
        gradients: action.payload,
      };
    case CREATE_GRADIENT:
      return {
        ...state,
        gradients: [action.payload, ...state.gradients],
      };
    case UPDATE_GRADIENT:
      return {
        ...state,
        gradients: state.gradients.map((gradient) =>
          gradient._id == action.payload._id ? action.payload : gradient
        ),
      };
    case DELETE_GRADIENT:
      return {
        ...state,
        gradients: state.gradients.filter(
          (gradient) => gradient._id != action.payload
        ),
      };
    case DOWNLOAD_GRADIENT:
      return {
        ...state,
        gradients: state.gradients.map((gradient) =>
          gradient.name == action.payload
            ? Object.assign(gradient, { downloads: gradient.downloads + 1 })
            : gradient
        ),
      };

    case SET_GRADIENT:
      return {
        ...state,
        gradient: action.payload,
      };
    case REMOVE_GRADIENT:
      return {
        ...state,
        gradient: null,
      };
    default:
      return state;
  }
};
