import React from 'react';
import PureComponent from './Pure';
import ImpureComponent from './ImPure';

const App = () => {
    return (
        <div>
            <PureComponent name="John" />
            <ImpureComponent />
        </div>
    );
};

export default App;
