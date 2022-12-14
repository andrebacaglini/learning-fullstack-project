// example of using redux withou tool kit and all in one file...

// action types
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";


export interface CounterState {
    data: number,
    title: string
}

const initialState: CounterState = {
    data: 42,
    title: "YARC (yet another redux counter)"
}


//action creators
export function increment(amount = 1) {
    return {
        type: INCREMENT_COUNTER,
        payload: amount
    }
}

export function decrement(amount = 1) {
    return {
        type: DECREMENT_COUNTER,
        payload: amount
    }
}

// reducer..
export default function CounterReducer(state = initialState, action: any) {

    switch (action.type) {
        case INCREMENT_COUNTER:
            //return state.data + 1; this is not allowed! best practices NEVER MUTATE STATE
            return {
                ...state,
                data: state.data + action.payload
            }
        case DECREMENT_COUNTER:
            //return state.data - 1; this is not allowed! best practices NEVER MUTATE STATE
            return {
                ...state,
                data: state.data - action.payload
            }
        default:
            return state

    }
}