// we are going to fetch a list of users from a dummy api(JsonPlaceholder) -> list of users and render them on UI


import React,{useState,useEffect} from 'react'


const UsersList = (props) => {

  const [users,setUsers] = useState([])
  
  useEffect(() => {
    //api calling logic and setUsers()
    const fetchUsers = async () => {
      try{
        //calling api
        
        const response = await fetch('http://localhost:8080/employee/_search')

        if(!response.ok){
          throw new Error('Failed to fetch users')
        }

        const data = await response.json()
        setUsers(data)
        
      }
      catch(error) {
        console.error('Error fetching data:',error)
      }
    }
    fetchUsers()
  },[])
  

  return (
    <div className='user-list-container'>
      <h1 className='list-title'>User List</h1>
      <ul className='user-list'>
        {
          users.map((user,idx) => {
            return (
              <li key={idx} className='user-item'>
                <strong>{user.firstName} {user.lastName}</strong> - {user.emailId}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default UsersList