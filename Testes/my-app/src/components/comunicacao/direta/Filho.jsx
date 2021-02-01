import react from 'react';


function Filho(props){
    return(
        <div>
            
            <p>{props.children} - {props.sobrenome}</p>
        </div>
    )
}


export default Filho