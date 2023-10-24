import React from "react";

const items = [
  {
    name: "test",
    id: 1,
  },
  {
    name: "test2",
    id: 2,
  },
  {
    name: "test3",
    id: 3,
  },
];

const todos = () => {
  console.info(items);
  return <div>
    {
      items.map((item) => {
        return <div key={item.id}>
          <p>{item.name}</p>
        </div>
      })
    }
  </div>;
};

export default todos;
