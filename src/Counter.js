import React , {useState} from 'react'
//import { render } from 'react-dom';



//função para adicionar um número , somar +1 , diminuir -1, Dobrar valor *2, ou conforme sua necessidade.
function Example (){
  const [count, setCount] = useState (0)


  return (
    <div className="text">
        <p>You clicked : </p>
        <p className='number'>{count}</p> 
        <p>times</p>
        <button onClick={()=> setCount (count +1 )}>
            More
        </button>
        <br></br>
        <button onClick={()=> setCount (count - 1 )}>
            Minus 
        </button>
        <br>
        </br>
        <button onClick={()=> setCount (count * 2 )}>
            Double
        </button>
    </div>
);

}


export default Example;