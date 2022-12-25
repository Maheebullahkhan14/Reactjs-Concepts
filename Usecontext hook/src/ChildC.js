import React, { useContext } from "react";
import {data,data1} from './App'

function ChildC(){
    const name = useContext(data)
    const Age = useContext(data1)
    return(
        <h1>my name is {name} and Age is{Age}</h1>
    )
}

export default ChildC;