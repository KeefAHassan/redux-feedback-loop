import logger from "redux-logger";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";


const feedback = (state = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comment: "",
}, action) => {
    if (action.type === "ADD_FEELING") {
        return { ...state, feeling: action.payload };
    }
    if (action.type === "ADD_UNDERSTANDING") {
        return { ...state, understanding: action.payload };
    }
    if (action.type === "ADD_SUPPORT") {
        return { ...state, support: action.payload };
    } 
    if (action.type === "ADD_COMMENT") {
        return { ...state, comment: action.payload };
    }


    return state;
};

/** Create store */

export const storeInstance = createStore(
    combineReducers({
        feedback,
    }),
    // Tell Redux that we want to use our logger.
    // apply middlewear: hey, this thing... let it snoop.
    // In this case, the thing we let snoop is our logger.
    applyMiddleware(logger)
);
