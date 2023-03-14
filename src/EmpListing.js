import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmpListing = () => {
  //
  const [empData, setEmpData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpData(resp);
        // console.log(resp);
      })
      .then((err) => {
        console.log(err);
      });
    return () => {};
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>

        <div className="card-body">
          <div style={{ float: "left", marginBottom: "10px" }}>
            <Link to="employee/create" className="btn btn-primary">
              {" "}
              + Add
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td> Id </td>
                <td> Name </td>
                <td> Email </td>
                <td> Phone </td>
                <td> Action </td>
              </tr>
            </thead>
            <tbody>
              {empData &&
                empData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <Link className="btn btn-secondary">Edit</Link>
                      &nbsp;&nbsp;
                      <Link className="btn btn-danger">Remove</Link>
                      &nbsp;&nbsp;
                      <Link className="btn btn-primary">Details</Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;
