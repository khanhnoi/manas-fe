
import { ABOUT_REQUEST } from "../constants/actionType"
const about = (state = {}, action) => {
    switch (action.type) {
        case ABOUT_REQUEST:
            return { ...state, data: action.payload}
      default:
        return state
    }
  }
  
  export default about