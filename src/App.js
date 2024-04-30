import { useEffect, useState } from "react";
import "./App.css";
import DataTable from "./component/DataTable";
// import { data } from "./helper/data";// exeplma data
import axios from "axios";

function App() {
  const ds_link = "denemeapi.com";
  const [info, setInfo] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(ds_link);
      setInfo(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    // setInfo(data) //sample data record
  });

  return (
    <div className="App">
      <h1>Academi 360</h1>

      <DataTable data={info} ds_link={ds_link} />
    </div>
  );
}

export default App;
