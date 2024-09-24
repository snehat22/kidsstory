
//hook useState
import {useState} from 'react'
import {Button} from'react-bootstrap'
function Addition(){
    //useState variable
    const[num1,setNum1]=useState(0)
    const[num2,setNum2]=useState(0)
    return(
    <>
    <h1 className='bg-primary'></h1>
            <form>
            <h1>calculator</h1>
                <label>Fullname:</label>
                <input type="text" name="name" id="name" placeholder="name" 
                onChange={
                    (e)=>{setNum1(e.target.value)
                 }
                  }></input>
                  {num1}
                   <label>Lastname:</label>
                   <input type="text" name="name" id="name" placeholder="name"
                   onChange={
                    (e)=>{ setNum2(e.target.value)

                    }
                   }></input>
                   {num2}
                 <Button variant='danger'
                  onClick={()=>{
                   let sum
                   sum=Number(num1)+Number(num2)
                   alert(sum)
                 }}>
                    Add
                 </Button>
        </form>
        </>
    )
}
export default Addition