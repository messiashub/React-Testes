import React, { useState } from 'react'

function Input(props){
    let [nome, SetNome]= useState('Pedro')
    return(
        <div>
            <h3>{nome}</h3>
           <input type="text" value={nome} onChange={e=> SetNome(e.target.value)}/>
        </div>
    )

}



export default Input