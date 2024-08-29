import {ValidatingSelect} from "./modules/ValidatingSelect"
import React, {useState} from "react";

function App() {

  var users = [{name:"Name1", id:1}, {name:"Name3", id:3}, {name:"Name2", id:2}]

  const [requiredUserId, setrequiredUserId] = useState(undefined);
  const [optionalUserId, setOptionalUserId] = useState(undefined);


  const handleRequiredUserSelectorChange = (e) => {
    if (e !== undefined) {
      setrequiredUserId(e.id);
    } else {
      setrequiredUserId(undefined);
    }
  }
  const handleOptionalUserSelectorChange = (e) => {
    if (e !== undefined) {
      setOptionalUserId(e.id);
    } else {
      setOptionalUserId(undefined);
    }
  }

  return (
    <div className="App">

      <div style={{margin: "2rem", maxWidth: "30%"}}>
          <ValidatingSelect
            required={true}
            inputId="RequiredUserSelector"
            getOptionLabel={option => `${option.name}`}
            getOptionValue={option => option.id}
            onChange={handleRequiredUserSelectorChange}
            options={users.length > 0 ? users : []}
            value={users.length > 0 ? users.filter(x => x.id === requiredUserId) : []}
            placeholder={"Required"}
            invalidText={"Please choose user"}
          />
      </div>
      
      <div style={{margin: "2rem", maxWidth: "30%"}}>
          <ValidatingSelect
            inputId="OptionaluserSelector"
            getOptionLabel={option => `${option.name}`}
            getOptionValue={option => option.id}
            onChange={handleOptionalUserSelectorChange}
            options={users.length > 0 ? users : []}
            value={users.length > 0 ? users.filter(x => x.id === optionalUserId) : []}
            placeholder={"Optional"}
          />
      </div>

    </div>
  );
}

export default App;
