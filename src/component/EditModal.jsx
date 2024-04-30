import axios from "axios";
import React from "react";

const EditModal = ({ data, setData, ds_link }) => {
  const handlaChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${ds_link}/${data.id}/edit`, data);
      alert("Edit Successful");
    } catch (error) {
      console.log(error);
      alert("Error in Edit Operation");
    }
  };

  return (
    <div className="editmodal">
      <h3>Edit Modal</h3>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={data?.name}
        name="name"
        onChange={handlaChange}
      />

      <label htmlFor="age">Age</label>
      <input
        type="number"
        value={data?.age}
        name="age"
        onChange={handlaChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={data?.email}
        name="email"
        onChange={handlaChange}
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        value={data?.city}
        name="city"
        title="City"
        onChange={handlaChange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EditModal;
