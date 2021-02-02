import React from 'react';
import SubFilho from './SubFilho'



function QuandoClicar(valorGerado,texto){
    console.log('Ação!!!');
    console.log(valorGerado);
    console.log(texto)
}

function SuperPai(props){

    return(
    <div>
        <h4>Valor</h4>
        <SubFilho onClicke={QuandoClicar}></SubFilho>
    </div>
)

}


export default SuperPai