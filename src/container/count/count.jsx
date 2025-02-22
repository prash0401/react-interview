import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, getData } from "./countSlice";
import { useEffect, useState } from "react";
import useApi from "../../utils/customFetchMethod";

const Counter = () => {
  const count = useSelector((state) => state.count.count);
  // const data = useSelector((state) => state.count.data);
  const { data } = useApi("https://jsonplaceholder.typicode.com/posts");

  const dispatch = useDispatch();
  const limitPerPage = 4;
  const totalPage = [];
  const page = Math.ceil(data?.length) / limitPerPage;
  for (let i = 0; i < page; i++) {
    totalPage.push(i);
  }
  const [pageNumber, setPageNumber] = useState(0);
  const handlePageNumber = (ele) => {
    const selectedPageNum = Number(ele.target.textContent) - 1;
    setPageNumber(selectedPageNum * limitPerPage);
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((res) => dispatch(getData(res)));
  // }, []);
  return (
    <>
      <div>
        {/* <CustomFetch url="https://jsonplaceholder.typicode.com/posts" /> */}
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <div style={{ display: "flex" }}>
          {data?.slice(pageNumber, pageNumber + limitPerPage).map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: "#ffcaca",
                  padding: "5px",
                  margin: "5px",
                }}
              >
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
        <div>
          {totalPage.map((item) => {
            return (
              <>
                <button key={item} onClick={handlePageNumber}>
                  {item + 1}
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Counter;
