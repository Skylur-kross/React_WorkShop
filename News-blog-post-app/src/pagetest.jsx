import { useEffect, useState } from "react";
// import './pagination.css'

function PageTest() {
    let totalPages = 100;
    const [page, setPage] = useState(0);


    const onPageClicked = (selectedPage) => {
        console.log({ selectedPage });
        setPage(selectedPage);
        renderPages(selectedPage);
      };
      

    const renderPages = (index) => {
        const pages = [];

        if(index < 5){
        for (let i = 1; i <= 10; i++) {
            if (i <= 7) {
                pages.push(
                    <button
                        disabled={page === i ? true : false}
                        onClick={() => onPageClicked(i)}
                        style={{ width: 60, height: 30 }}
                        key={i}
                    >
                        {i}
                    </button>
                );
            }
            if(i>7 && i<9){
                pages.push(
                    <button
                        disabled={page === i ? true : false}
                        onClick={() => onPageClicked(i)}
                        style={{ width: 60, height: 30 }}
                        key={i}
                    >
                        ...
                    </button>
                );
            }
            if(i>8 && i<10){
                pages.push(
                    <button
                        disabled={page === i ? true : false}
                        onClick={() => onPageClicked(totalPages)}
                        style={{ width: 60, height: 30 }}
                        key={i}
                    >
                        {totalPages}
                    </button>
                );
            }

        }
    }

        return pages;
    };
   

    return (
        <>

            <div>{renderPages(1)}</div>
        </>
    );
};

export default PageTest;