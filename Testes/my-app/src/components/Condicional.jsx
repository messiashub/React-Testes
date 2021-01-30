import React from 'react'

function Condicional(props) {
    return (
        <div>
            <h2>O número é :{props.numero}</h2>
            {props.numero % 2 == 0 ? <span>par</span> : <span>impar</span>}




        </div>
    )

}

export default Condicional