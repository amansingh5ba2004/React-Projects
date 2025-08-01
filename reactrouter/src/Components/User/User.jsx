import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams()
  return (
    <div className='py-5 text-3xl text-center text-black bg-orange-500'>
      U S E R : {userid}
    </div>
  )
}

export default User
