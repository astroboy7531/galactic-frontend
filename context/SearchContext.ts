import React from 'react';

const searchContext = React.createContext({
    queryFilter: '',
    setQueryFilter: (fox: string) => { }
});

export default searchContext;