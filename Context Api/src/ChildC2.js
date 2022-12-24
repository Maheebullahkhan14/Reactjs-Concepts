import React from "react";
import { data } from "./App";

function ChildC2(){
    return(
        <>
            <data.Consumer>
                {
                    (name)=>{
                        return (
                            <h1>my Name is {name}</h1>
                        )
                    }
                }
            </data.Consumer>
        </>
    )
}

export default ChildC2;