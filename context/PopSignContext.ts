import React from 'react';

const popSignContext = React.createContext({
    popSignModel: false,
    setPopSignModel: (fox:boolean) => { }
});

export default popSignContext;