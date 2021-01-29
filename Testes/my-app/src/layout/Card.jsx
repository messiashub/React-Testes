import React from 'react'
import "./Card.css"

function Cards(props){
    return(
        <div className="Card">
            <div className="Conteudo">
                {props.children}
            </div>
            <div className="Footer">
                {props.titulo}
            </div>

        </div>

    )
}

export default Cards