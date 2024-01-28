import React from 'react';

const raceContext = React.createContext({
    race: '',
    setRace: (fox:string) => { }
});

export default raceContext;