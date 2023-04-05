import React,{useState} from 'react';
import styled from 'styled-components';
const FlexDiv=styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:5px;u
padding:20px;
margin-top:55px;
border:1px solid silver;
width:320px;
background-color:white;

`

 const MainDiv=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between
`

 const Img=styled.img`
width:309px;
height:300px
object-fit:cover`

 const TitleDiv=styled.div`
height:20px`
const CardChild = (props) => {
  let { title,author,content,description,urlToImage,url } = props.data;
          
    
  return (
   
    <FlexDiv>
        <TitleDiv style={{overflow:'auto'}}><strong>Title : {title}</strong> </TitleDiv>
      
      <div><strong>Author: - </strong>{author}</div>
      
      
      <Img src={urlToImage} alt="Image logo" />
      <br />
      <div style={{overflow:'auto'}}><strong>content : -{content} </strong></div>
      {/* <div><strong>description : -</strong>  {description}</div> */}
      <a href={url}>Read more</a>
    </FlexDiv>
   
   
    
  );
};

export default CardChild;