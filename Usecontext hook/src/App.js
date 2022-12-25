import React, { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext()
const data1 = createContext()
function App(){
    const name='KMaheeb'
    const Age = 22

    return(
        <>
            <data.Provider value={name}>
                <data1.Provider value={Age}>
                    <ChildA/>
                </data1.Provider>
            </data.Provider>
        </>
    )

}

export default App;
export {data,data1}