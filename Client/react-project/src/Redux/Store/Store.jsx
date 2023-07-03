// import UserReducer from "../Reducers/UserReducer";
import rootReducer from "../Reducer/RootReducer";
import { createStore,applyMiddleware } from "redux";
// import { createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'



const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store;
