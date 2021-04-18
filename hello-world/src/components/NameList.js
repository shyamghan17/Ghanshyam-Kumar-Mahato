import React from 'react'
import Person from './Person'

function NameList() {
    // const names= ['ghanshyam', 'shaunak', 'aadarsh', 'santosh', 'rinku']  
    // const nameList =names.map(name => <h2>{name}</h2>)

    const persons = [
        {
            id: 1,
            name: 'Ghanshyam',
            age: 26,
            skill: 'React'    
        },
        {
            id: 2,
            name: 'Santosh',
            age:33,
            skill: 'Java'
        },
        {
            id: 3,
            name: 'Shaunak',
            age:5,
            skill: 'Drowing'
        }
    ]
    const personList = persons.map( person => <Person key={person.id} person ={person}/>) 
    return (
        <div>
            {

              personList
            }

        </div>
    )
}

export default NameList
