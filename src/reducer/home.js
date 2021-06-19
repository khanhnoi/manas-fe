import { HOME_REQUEST } from "../constants/actionType"

const home = (state = {}, action) => {
    switch (action.type) {
        case HOME_REQUEST:
            return { ...state, data: action.payload}
      default:
        return state
    }
  }
  
  export default home