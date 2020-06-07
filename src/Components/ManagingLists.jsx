import React, {useState} from 'react'
import shortId from 'shortid'
import NameTag from './NameTags'

  


  const initialNames = [
    { id: shortId.generate(), firstName: "John", lastName: "Johnson" },
    { id: shortId.generate(), firstName: "Peter", lastName: "Peterson" },
    { id: shortId.generate(), firstName: "Jill", lastName: "Jillson" },
    { id: shortId.generate(), firstName: "Mary", lastName: "Kate" },
  ];
  console.log(initialNames);
function ManagingLists() {
    const [names, setNames] = useState(initialNames);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="name title">Name Lists</h1>
          {names.map((v) => {
            return (
              <NameTag
                key={v.id}
                firstName={v.firstName}
                lastName={v.lastName}
              />
            );
          })}
        </header>
      </div>
    );
  }

export default ManagingLists;

{
  /* <NameTag
  id={names[0].id}
  firstName={names[0].firstName}
  lastName={names[0].lastName}
/>
<NameTag
  id={names[1].id}
  firstName={names[1].firstName}
  lastName={names[1].lastName}
/>
<NameTag
  id={names[2].id}
  firstName={names[2].firstName}
  lastName={names[2].lastName}
/> */
}