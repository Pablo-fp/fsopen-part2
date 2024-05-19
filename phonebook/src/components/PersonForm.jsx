import React from 'react';

const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name:&nbsp;&nbsp;&nbsp;
        <input value={newName} onChange={handleNameChange} required />
      </div>
      <div>
        number:
        <input value={newNumber} onChange={handleNumberChange} required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
