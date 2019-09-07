import { useReducer, createContext, Reducer, Dispatch } from 'react';

// REDUCER ONE
interface ReducerOneState {
    booleanData: boolean;
}

export enum ReducerOneActionType {
    SET_REDUCER_ONE_DATA = 'SET_REDUCER_ONE_DATA',
}

type ReducerOneAction =
    | { type: ReducerOneActionType.SET_REDUCER_ONE_DATA, payload: boolean };

const reducerOne: Reducer<ReducerOneState, ReducerOneAction> = (state, action) => {
    switch (action.type) {
        case ReducerOneActionType.SET_REDUCER_ONE_DATA:
            return { ...state, booleanData: action.payload };
        default:
            return state;
    }
};

// REDUCER TWO
interface ReducerTwoState {
    stringData: string;
}

export enum ReducerTwoActionType {
    SET_REDUCER_TWO_DATA = 'SET_REDUCER_TWO_DATA',
}

type ReducerTwoAction =
    | { type: ReducerTwoActionType.SET_REDUCER_TWO_DATA, payload: string };

const reducerTwo: Reducer<ReducerTwoState, ReducerTwoAction> = (state, action) => {
    switch (action.type) {
        case ReducerTwoActionType.SET_REDUCER_TWO_DATA:
            return { ...state, stringData: action.payload };
        default:
            return state;
    }
};

// COMBINED REDUCER
interface ReduxState {
    reducerOne: ReducerOneState;
    reducerTwo: ReducerTwoState; 
}

type ReduxAction = ReducerOneAction | ReducerTwoAction;

const combinedReducer: Reducer<ReduxState, ReduxAction> = (state, action) => {
    switch (action.type) {
        case ReducerOneActionType.SET_REDUCER_ONE_DATA:
            return { ...state, reducerOne: reducerOne(state.reducerOne, action) };

        case ReducerTwoActionType.SET_REDUCER_TWO_DATA:
            return { ...state, reducerTwo: reducerTwo(state.reducerTwo, action) };

        default:
            return state;
    }
};

// USEREDUX HOOK
const initialState: ReduxState = {
    reducerOne: { booleanData: false },
    reducerTwo: { stringData: '' },
};

const useRedux = () => {
    const customReducer = useReducer(combinedReducer, initialState);
    return customReducer;
};

export default useRedux;

// REDUX CONTEXT
interface ReduxContextInterface {
    state: ReduxState;
    dispatch: Dispatch<ReduxAction>;
}

export const ReduxContext = createContext<ReduxContextInterface>({
    state: initialState,
    dispatch: () => {},
});
