import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


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

  

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
        <div>filter shown with: 
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search names"
          />
          <ul>
            {filteredNames.map(person => (
              <li key={person.id}>{person.name}</li>
            ))}
          </ul>  
        </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} required/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, index) => {
          return (
            <div key={index}>
              <p>{person.name} {person.number} </p>
              
            </div>
        
          )
        })}
               
                    
      </div>
    </div>
  )
}

export default App
