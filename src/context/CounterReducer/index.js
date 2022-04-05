import {DECREASE_COUNTER, INCREASE_COUNTER} from '../../constants'

const counterReducer = (state, action) => {
    switch(action.type){
        case INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

export default counterReducer