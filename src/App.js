import { useEffect, useState } from "react";
import "./App.css";
import DataTable from "./component/DataTable";
import { data } from "./helper/data";
import NoFounds from "./component/NoFounds";

function App() {
  const [first, setFirst] = useState([]);
  useEffect(() => {
    setFirst(data);
  });

  return (
    <div className="App">
      <h1>Academi 360</h1>

      {first != [] ? <DataTable data={first} /> : <NoFounds />}
    </div>
  );
}

export default App;
