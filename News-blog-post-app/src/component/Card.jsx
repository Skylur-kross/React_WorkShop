import React, { useState, useEffect } from "react";
import axios from "axios";
import CardChild from "./CardChild";
// import Footer from "./Footer";
import styled from "styled-components";
import Pagination from './pageination';
const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top:55px;
`;

const Card = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(12);
 
  
    useEffect(() => {
      const storedData = localStorage.getItem("Data");
      if (storedData) {
        //if storedata is true
        setData(JSON.parse(storedData));
      } else {
        let axiosData = axios
          .get(
            "https://newsapi.org/v2/everything?q=apple&from=2023-03-31&to=2023-03-31&sortBy=popularity&apiKey=41bd8b048bbb45e295709c4d5291bfad"
          )
          .then((res) => {
            setData(res.data.articles);
            localStorage.setItem("Data", JSON.stringify(res.data.articles));
            console.log(res);
          });
      }
    }, []);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  
    return (
      <MainDiv>
        {currentPosts.map((card , index) => {
           return <CardChild key={index} data={card} />
})}
        <Pagination
                totalPosts={data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        
      </MainDiv>
    );
  };
  
  export default Card;