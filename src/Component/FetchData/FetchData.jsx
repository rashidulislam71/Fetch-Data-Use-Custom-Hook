/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import FetchedData from "../FetchedData/FetchedData";
import "./FetchData.css";
import { useFetchData } from "../../useCustomHook/useFetchHook";

const FetchData = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const url2 = "https://jsonplaceholder.typicode.com/todos";
  const { fetchData, err } = useFetchData(url);
  const { fetchData: fetchData2, err: err2 } = useFetchData(url2);
  console.log(fetchData2);
  return (
    <>
      <div className="fetchedData" >
        <FetchedData fetchData={fetchData} fetchData2={fetchData2} />
      </div>
    </>
  );
};

export default FetchData;
