import { useState, useEffect } from "react";

function FetchJson() {
  let [list, setList] = useState([]);

  useEffect(() => {
    //fetchData is an async function
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Fetching JSON file and rendering each item's title in list form</h1>
      <div>
        {list.map((item) => (
          <li key={item.id}>{`ITEM: ${item.id} ${item.title}`}</li>
        ))}
      </div>
    </>
  );
}

export default FetchJson;
