import React from 'react';

const likeAlertContext = React.createContext({
    isAlertOn: {
        promptId: '',
        userId: ''
    },
    setIsAlertOn: (fox:any) => { }
});

export default likeAlertContext;