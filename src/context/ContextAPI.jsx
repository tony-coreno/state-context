import React, { useState } from "react";

const stateStore = React.createContext();

const ProviderStore = ({children}) => {

    const [item, setItem] = useState([]);

    return ( 
        <stateStore.Provider value={{item, setItem}} >
            {children}
        </stateStore.Provider>
     );
}
 
export { stateStore, ProviderStore };