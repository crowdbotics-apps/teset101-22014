import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp12163485Reducer from '../features/SignUp12163485/redux/reducers'
import SignIn13163484Reducer from '../features/SignIn13163484/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp12163485: SignUp12163485Reducer,
SignIn13163484: SignIn13163484Reducer,

});