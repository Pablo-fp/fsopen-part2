import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')


  const addPerson = (event) => {
    event.preventDefault()

    if(persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else{
      const personObject = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const personsToShow = persons.filter((person) => {
    return person.name.toLowerCase().includes(searchName.toLowerCase());
});
  

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearchName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
        <div>filter shown with: &nbsp;  
          <input
            type="text"
            value={searchName}
            onChange={handleSearchChange}
            placeholder="Search names"
          />  
        </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:&nbsp;&nbsp;&nbsp;<input value={newName} onChange={handleNameChange} required/>
        </div>
        <div>
          number:<input value={newNumber} onChange={handleNumberChange} required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person, index) => (
            <li key={index}>{person.name} {person.number}</li>
          ))}
               
                    
      </ul>
    </div>
  )
}

export default App
