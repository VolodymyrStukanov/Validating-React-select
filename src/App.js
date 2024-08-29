import {ValidatingSelect} from "./modules/ValidatingSelect"
import React, {useState} from "react";

function App() {

  var users = [{name:"Name1", id:1}, {name:"Name3", id:3}, {name:"Name2", id:2}]

  const [userId1, setUserId1] = useState(undefined);
  const [userId2, setUserId2] = useState(undefined);


  const handleUser1SelectorChange = (e) => {
    if (e !== undefined) {
      setUserId1(e.id);
    } else {
      setUserId1(undefined);
    }
  }
  const handleUser2SelectorChange = (e) => {
    if (e !== undefined) {
      setUserId2(e.id);
    } else {
      setUserId2(undefined);
    }
  }

  return (
    <div className="App">

      <div style={{margin: "2rem", maxWidth: "30%"}}>
          <ValidatingSelect
            required={true}
            inputId="userSelector2"
            getOptionLabel={option => `${option.name}`}
            getOptionValue={option => option.id}
            onChange={handleUser1SelectorChange}
            options={users.length > 0 ? users : []}
            value={users.length > 0 ? users.filter(x => x.id === userId1) : []}
            placeholder={"Select user"}
            invalidText={"Please choose user"}
          />
      </div>
      
      <div style={{margin: "2rem", maxWidth: "30%"}}>
          <ValidatingSelect
            inputId="userSelector1"
            getOptionLabel={option => `${option.name}`}
            getOptionValue={option => option.id}
            onChange={handleUser2SelectorChange}
            options={users.length > 0 ? users : []}
            value={users.length > 0 ? users.filter(x => x.id === userId2) : []}
            placeholder={"Select user"}
            invalidText={"Please choose user"}
          />
      </div>

    </div>
  );
}

export default App;
