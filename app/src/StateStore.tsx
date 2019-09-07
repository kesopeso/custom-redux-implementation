import * as React from 'react';
import useRedux, { ReduxContext } from './hooks/useRedux';

const StateStore: React.FC = (props) => {
    const [state, dispatch] = useRedux();

    return (
        <ReduxContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ReduxContext.Provider>
    );
};

export default StateStore;