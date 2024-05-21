import React, { useState } from "react";

function BasicForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [basicInfoData, setBasicInfoData] = useState([]);

  function AddFormData() {
    let tempObj = {
      "First Name": firstName,
      "Last Name": lastName,
      Email: emailId,
    };
    let tempArr = [...basicInfoData];
    tempArr.push(tempObj);
    setBasicInfoData(tempArr);
    setFirstName("");
    setLastName("");
    setEmailId("");
  }
  console.log("basicInfoData", basicInfoData, firstName);
  return (
    <>
      <div className="flex space-x-4 items-center p-5">
        <input
          value={firstName}
          type="text"
          className="border border-indigo-600 rounded h-9 pl-1"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          value={lastName}
          type="text"
          className="border border-indigo-600 rounded h-9 pl-1"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          value={emailId}
          type="email"
          className="border border-indigo-600 rounded h-9 pl-1"
          placeholder="Email"
          onChange={(e) => {
            setEmailId(e.target.value);
          }}
        />
        <button
          type="button"
          className="bg-green-600 text-white px-3 h-9 rounded"
          onClick={AddFormData}
        >
          Add
        </button>
      </div>
      <div className="grid justify-center">
        <table className=" text-center">
          <thead>
            <tr>
              <th className="border ">Action</th>
              <th className="border ">First Name</th>
              <th className="border ">Last Name</th>
              <th className="border ">Email</th>
            </tr>
          </thead>
          <tbody>
            {basicInfoData &&
              basicInfoData.map((list, index) => {
                return (
                  <tr className="border " key={index}>
                    <td className="flex space-x-2">
                        <button type="button" onClick={()=>{
                            console.log("selected Row is",list);
                        }}>Edit</button>
                        <button>Delete</button>
                    </td>
                    <td className="border ">{list["First Name"]}</td>
                    <td className="border ">{list["Last Name"]}</td>
                    <td className="border ">{list["Email"]}</td>
                  </tr>
                );
              })}

            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BasicForm;
