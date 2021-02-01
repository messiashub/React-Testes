import React from 'react'
import "./Card.css"

function Cards(props){
    return(
        <div className="Card"style={{borderColor:props.color}}> 
            <div className="Conteudo">
                {props.children}
            </div>
            <div className="Footer" style={{backgroundColor:props.color}}>
                {props.titulo}
            </div>

        </div>

    )
}

export default Cards