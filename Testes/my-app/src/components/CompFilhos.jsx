import React from 'react'

function CompFilhos(props){
    return(
    <div>
        <h2>Os filhos: </h2>
        <div>
            {props.children}
        </div>
    </div>
    )
}


export default CompFilhos