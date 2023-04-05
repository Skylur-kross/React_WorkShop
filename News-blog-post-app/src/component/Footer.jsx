import React,{useState,useEffect} from 'react'
import styled from "styled-components"
const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap:20px;
  margin-top:20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #2f2e30;
 `;
 const Button = styled.button`
 background-color: #2f2e30;
 color: white
 `;

function Footer(props) {
    let {showPerPage,PaginationChange}=props;
    
    // console.log(showPerPage,"showPerPage")
    let [counter, setCounter]=useState(1)
    
    useEffect(()=>{
    let value = showPerPage * counter
    // console.log(value-showPerPage ,"value-showPerPage")
    // console.log(value ,"value")
    PaginationChange(value-showPerPage,value)
    },[counter,console.log(counter,"counter")])


    // Function for next Button
    let FunctionForPre=(data)=>{
    if(data==="Previous"  ){
        if(counter===1){
            setCounter(1)
        }else{
            setCounter(counter-1)
        }
    }
    else if(data ==="Next" ||1 ||2||3||4||5||6||7||8||9){
    if(counter===9){
        setCounter(9)
    }else{
        setCounter(counter+1)
    }
   }

    }

  return (
    <Flex>
      <Button onClick={()=>FunctionForPre("Previous")} >Previous</Button>
      <Button onClick={()=>FunctionForPre("1")}>1 </Button>
      <Button onClick={()=>FunctionForPre("2")}>2 </Button>
      <Button onClick={()=>FunctionForPre("3")}>3 </Button>
      <Button onClick={()=>FunctionForPre("4")}>4 </Button>
      <Button onClick={()=>FunctionForPre("5")}>5 </Button>
      <Button onClick={()=>FunctionForPre("6")}>6 </Button>
      <Button onClick={()=>FunctionForPre("7")}>7 </Button>
      <Button onClick={()=>FunctionForPre("8")}>8 </Button>
      <Button onClick={()=>FunctionForPre("Next")}>Next</Button>
    </Flex>
  )
}

export default Footer