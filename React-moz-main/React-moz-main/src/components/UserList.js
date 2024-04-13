import React, {useState, useEffect} from 'react'

const UserList = (props) => {
  const [users, setUsers ] = useState([
    // {
    //   name: "Ervin",
    //   email: "ervin@mail.com"
    // }
  ])

  useEffect(()=>{
    const fetchUsers = async ()=>{
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok){
          throw new Error('Failed to fetch users')
        }
        const data = await response.json()

        setUsers(data) 
     }
      catch(error){
        console.error('error fetching data:', error)
      }
    }
    fetchUsers()
  },[])
  
  return (
    <div className='user-list-container'>
      <div className='list-title'>User List</div>
        <ul className='user-list'>
          {
            users.map((user,idx) => {
              return(
                <li key={idx} className='user-item' >
                  <strong>{user.name}</strong> - {user.email}
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default UserList