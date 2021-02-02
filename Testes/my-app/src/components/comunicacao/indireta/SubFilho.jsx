
import React from 'react';



function SubFilho(props){
   
    return(
        <div>
            
            <button onClick={()=>{
                props.onClicke(Math.random(),"Gerado ")
            }}>Alterar</button>
        </div>
    );
};


export default SubFilho