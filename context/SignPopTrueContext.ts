import React from 'react';

const signPopTrueContext = React.createContext({
    isItSell: false,
    setIsItSell: (fox:boolean) => { }
});

export default signPopTrueContext;