import React from 'react';

const confirmReviewContext = React.createContext({
    confirmState: false,
    setConfirmState: (fox:boolean) => { },
    promptIdMarket: '',
    setPromptIdMarket: (fox1: string) => {}
});

export default confirmReviewContext;