
import React, { useState } from 'react';
import SubFilho from './SubFilho'



function SuperPai(props) {

    const [texto, setTexto] = useState('Gerar')
    const [num, setNum] = useState(0)

    function QuandoClicar(valorGerado, texto) {
        return (
            setNum(valorGerado),
            setTexto(texto)
        )
    }
    return (
        <div>
            <h4>{texto}:{num}</h4>
            <SubFilho onClicke={QuandoClicar}></SubFilho>
        </div>
    )

}


export default SuperPai