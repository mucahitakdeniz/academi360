import React from 'react'

const DataTable = ({data}) => {
  return (
    <div className='datatablecontainer'>
    <h2>Data Table</h2>
    <table className='datatable' >
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
      <tbody className='datatable'>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
            <td>{item.city}</td>
            <td><button className='editbutton'>EDİT</button></td>
            <td><button className='deletebutton'>DELETE</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default DataTable