import { useEffect, useState } from "react";
const PaginationView = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  const loadUserList = () => {
    fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${limit}`
    )
      .then((data) => data.json())
      .then((data) => {
        setList(data.data);
        setTotalPages(data.totalPages);
      });
  };

  useEffect(() => {
    loadUserList();
  }, []);

  const onPageClicked = (selectedPage) => {
    console.log({ selectedPage });
    setPage(selectedPage);
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(
        <button
          disabled={page === i ? true : false}
          onClick={() => onPageClicked(i)}
          style={{ width: 60, height: 30 }}
          key={i + 1}
        >
          {i + 1}
        </button>
      );
    }

    return pages;
  };

  return (
    <>
      <p>
        My Users : Total Records: {totalPages}, Currently showing page :
        {page + 1}
      </p>
      <div>
        My Users
        <ul>
          {list.map((item) => {
            return (
              <li key={item._id}>
                {item._id} | {item.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div>{renderPages()}</div>
    </>
  );
};

export default PaginationView;
