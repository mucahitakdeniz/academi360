import { useEffect, useState } from "react";
import "./App.css";
import DataTable from "./component/DataTable";
import { data } from "./helper/data";
import axios from "axios";

function App() {
  const ds_link = "denemeapi.com";
  const [first, setFirst] = useState([]);

  // const getData = async () => {
  //   try {
  //     const response = await axios.get(ds_link);
  //     setFirst(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    // getData();
    setFirst(data)
  });

  return (
    <div className="App">
      <h1>Academi 360</h1>

      <DataTable data={first} ds_link={ds_link} />
    </div>
  );
}

export default App;
