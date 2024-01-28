import React from 'react';

const popUpContext = React.createContext({
    popUpModel: false,
    setPopUpModel: (fox:boolean) => { }
});

export default popUpContext;