import React, { useState, useEffect } from 'react'
import './Button.css'

function Button() {
  const [users, setUsers] = useState({})

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUsers(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  return (
    <div>
      <button className='button' onClick={() => fetchUsers()}>
        Show Users
      </button>
      {users.length > 0 && (
        <div>
          <h2>Users:</h2>
          <ol>
            {users.map(user => {
              return (
                <li key={user.id}>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                </li>
              )
            })
            }
          </ol>
        </div>
      )}
    </div>
  )
}

export default Button
