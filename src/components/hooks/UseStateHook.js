import React, { useState } from "react";

function UseStateHook() {
  const [name, setName] = useState("codekul"); // string
  const [count, setCount] = useState(0); // number
  const [showValue, setShowValue] = useState(false); // to set boolean values
  const [temObject, setTempObject] = useState(null); // object
  const [tempArr, setTempArr] = useState([]); // array

  let firstName = "codekul";

  console.log("firstName", showValue);

// The Hook Takes An inital state value as an argument  and 
// returns an updated state value whenever the setter function called

// task 1 
// show the inrement and decrement button and display the value 

  return (
    <div className="my-10 text-center">
      {showValue === true ? <h1>{count}</h1> : ""}
      <div>
        {temObject !== null && (
          <>
            <div>
              <h1>Name &nbsp; : &nbsp;{temObject.name}</h1>
              <h1>Address &nbsp; : &nbsp;{temObject.address}</h1>
              <h1>Id &nbsp; : &nbsp;{temObject.id}</h1>
            </div>
          </>
        )}
      </div>
      <button
        className="bg-green-600 text-white h-9 rounded px-3 "
        onClick={() => {
          console.log("button");
          firstName = "Hello Codekul";
          setName("Hello Codekul");
          setCount(count + 1);
        }}
      >
     +
      </button>
      <button
        className="bg-blue-600 text-white h-9 rounded px-3 "
        onClick={() => {
          setShowValue(true);
          setTempObject({
            name: "codekul",
            address: "kothrud depot pune",
            id: 1,
          });
        }}
      >
        show me
      </button>
      <h1>{firstName}</h1>
      {name}
    </div>
  );
}

export default UseStateHook;
