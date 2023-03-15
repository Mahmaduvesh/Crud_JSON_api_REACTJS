import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
  const { empid } = useParams();

  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
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
  }, []);

  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Employee Detail</h2>
        </div>
        {empData && (
          <div>
            <h1>
              The Employee Name Is : {empData.name} [{empData.id}]
            </h1>
            <h3>Contact Details :</h3>
            <h5>Email Is :- {empData.email}</h5>
            <h5>Phone Is :- {empData.phone}</h5>
            <Link className="btn btn-danger" to="/">
              Back To Home{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmpDetail;
