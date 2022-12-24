import React, { createContext } from "react";
import ChildA2 from "./ChildA2";

const data = createContext()

function App(){
    
    const name = 'MrXen0987'
    return(
        <data.Provider value={name}>
            <ChildA2 ></ChildA2>
        </data.Provider>
        
    )
}

export  default App;
export {data}

