import React from "react";


const Title = ({Title,color})=>{


    return(
        <h1 className={`text-${color} mb-5 mt-3` } > {Title} </h1>
    );
}

export default Title;