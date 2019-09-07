import * as React from 'react';
import { ReduxContext, ReducerOneActionType, ReducerTwoActionType } from './hooks/useRedux';
import { useContext } from 'react';

const App: React.FC = () => {
    const redux = useContext(ReduxContext);

    return (
        <>
            <div>Reducer one: {redux.state.reducerOne.booleanData ? 'True' : 'False'}</div>
            <div>Reducer two: {redux.state.reducerTwo.stringData || 'No data yet'}</div>

            <div>
                <button
                    onClick={() => redux.dispatch({
                        type: ReducerOneActionType.SET_REDUCER_ONE_DATA,
                        payload: !redux.state.reducerOne.booleanData,
                    })}
                >
                        Toggle reducer one
                    </button>
            </div>

            <div>
                <button
                    onClick={() => redux.dispatch({
                        type: ReducerTwoActionType.SET_REDUCER_TWO_DATA,
                        payload: `Timestamp: ${Date.now()}`,
                    })}
                >
                    Toggle reducer two
                </button>
            </div>
        </>
    );
};

export default App;