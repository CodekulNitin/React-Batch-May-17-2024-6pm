import React from "react";
const dataArr = [
  {
    id: 1,
    imageName: "",
  },
  {
    id: 2,
    imageName: "",
  },
  {
    id: 3,
    imageName: "",
  },
  {
    id: 3,
    imageName: "",
  },
];
export default function AnimationComponent() {
  return (
    <div className="text-center">
      <h1 className="text-[60px] font-semibold">
        A small selection
        <br /> of my work
      </h1>
      <div className="grid grid-cols-2 gap-5 px-20 ">
        {dataArr.map((list) => {
          return (
            <>
              <div className="bg-blue-600 h-[250px] rounded-2xl text-center flex justify-center align-middle py-32">
                {/* {list.id} */}
                <img src={list.imageName} alt={list.id} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
