import React from 'react';

const memArtContext = React.createContext({
    urlMem: '',
    setUrlMem: (fox:string) => { }
});

export default memArtContext;