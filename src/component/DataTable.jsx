import React, { useState, useRef, useEffect } from "react";
import EditModal from "./EditModal";
import axios from "axios";
import NoFounds from "./NoFounds";

const DataTable = ({ data, ds_link }) => {
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickEdit = (id) => {
    setOpenModal(true);
    setEditData(data[id - 1]);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${ds_link}/${id}`);
      alert("Delete Successful");
    } catch (error) {
      console.log(error);
      alert("Error in delete Operation");
    }
  };

  return (
    <div className="datatablecontainer">
      {openModal && (
        <div ref={modalRef}>
          <EditModal data={editData} setData={setEditData} ds_link={ds_link} />
        </div>
      )}
      <h2>Data Table</h2>
      <table className="datatable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {data && data.length > 0 ? (
          <tbody className="datatable">
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>
                <td>
                  <button
                    className="editbutton"
                    onClick={() => handleClickEdit(item.id)}
                  >
                    EDIT
                  </button>
                </td>
                <td>
                  <button
                    className="deletebutton"
                    onClick={() => handleDelete(item.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <NoFounds />
        )}
      </table>
    </div>
  );
};

export default DataTable;
