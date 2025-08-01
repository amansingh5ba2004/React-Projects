
import { useContext } from "react"
import UserContext from "../context/UserContext"


function profile() {
  const {user} = useContext[UserContext]

  if(!user) return <h1>Not Loged In</h1>
  return (
    <div>
      <h1>Profile : {user.username} </h1>
    </div>
  )
}

export default profile
