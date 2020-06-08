import React, { useState, Fragment } from "react";
import Item from "./Item";
import shortId from "shortid";

const initList = [
  { id: shortId.generate(), name: "tomato", calorie: 20 },
  { id: shortId.generate(), name: "rice", calorie: 30 },
  { id: shortId.generate(), name: "candy", calorie: 100 },
];

function AddingEvents() {

  const [list, setList] = useState(initList);
  const [editable, setEditable] = useState(false);

  const removeItemHandle = (e) => {
    console.dir(e.target.name);

    const filterList = list.filter((v) => v.name !== e.target.name);
    setList(filterList);
    };
    
    const makeEditableHandle = () => {
        setEditable(true)
    }

  //   const removeUnhealthyHandle = (e) => {
  //     // const copyList = {...list}
  //     const filterList = list.filter((v) => v.calorie <= 50);
  //     setList(filterList);
  //   };

  return (
    <Fragment>
      <h2>Grocery list</h2>
      {list.map((v, id) => {
        return (
          <Item
            key={id}
            item={v}
            onClick={removeItemHandle}
            editable={editable}
            onDoubleClick={makeEditableHandle}
          />
        );
      })}
      {/* <button onClick={removeUnhealthyHandle} className="remove-button">
        Remove Unhealthy
      </button> */}
    </Fragment>
  );
}

export default AddingEvents;
