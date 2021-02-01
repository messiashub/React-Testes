import React from 'react';
import Filho from './Filho'



function Pai(props){
    return(
    <div>
        <Filho sobrenome='Messias'><strong>Claudinei</strong></Filho>
        <Filho sobrenome='da Silva Sauro'>Maria</Filho>
        <Filho sobrenome='Bartoz'>Pedro</Filho>
    </div>
)

}


export default Pai