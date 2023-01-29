import { CREATE_NEW_NUMBERS } from "../action/lottoNumber";

const defaultState = {
  currentNumber: [],
  history: [],
};

export const lottoNumberReducers = (state = defaultState, action) => {
  if (action.type === CREATE_NEW_NUMBERS) {
    const date = new Date();
    return {
      ...state,
      currentNumber: action.numbers,
      history: state.history.concat([
        {
          date: `${date.getFullYear()}. ${date.getMonth()}. ${date.getDay()} ${date.getHours()} ${date.getMinutes()}`,
          numbers: action.numbers,
        },
      ]),
    };
  }
  return {
    ...state,
  };
};
