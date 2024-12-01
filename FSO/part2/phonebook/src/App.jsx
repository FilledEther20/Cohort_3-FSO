import { useState, useEffect } from "react";
import axios from "axios";
// Filter Component
const Filter = ({ value, onChange }) => {
  return (
    <div>
      filter show with: <input value={value} onChange={onChange} />
      <br />
    </div>
  );
};

// PersonForm Component
const PersonForm = ({
  newName,
  newPhone,
  handleNewName,
  handleNewPhone,
  addName,
}) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNewName} />
        <br />
        phone:{" "}
        <input type="number" value={newPhone} onChange={handleNewPhone} />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

// Display Component
const Display = ({ names, filter }) => {
  const displayNames = names.filter((val) =>
    val.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {displayNames.map((val) => (
        <li key={val.name}>
          {val.name} == {val.number}
        </li>
      ))}
    </ul>
  );
};

// App Component
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
  });

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value);
  };

  const handleNewFilter = (event) => {
    setNewFilter(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const nameObj = { name: newName, phone: newPhone };

    const nameExists = persons.some((val) => val.name === nameObj.name);
    if (!nameExists) {
      setPersons(persons.concat(nameObj));
      setNewName("");
      setNewPhone("");
    } else {
      alert(`${newName} already exists`);
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={newFilter} onChange={handleNewFilter} />
      <h2>Add New</h2>
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        handleNewName={handleNewName}
        handleNewPhone={handleNewPhone}
        addName={addName}
      />
      <h2>Numbers</h2>
      <Display names={persons} filter={newFilter} />
    </div>
  );
};

export default App;
