


import { useLoaderData } from "react-router-dom"



function github() {

//const [data , setData ] = React.useState([])

//useEffect( () => {
  //  fetch('https://api.github.com/users/amansingh5ba2004')
    //.then((response) => response.json())
    //.then(data => {
      //  setData(data)
    //})
//})
    
const data = useLoaderData()
console.log(data)


  return (
    <div className="p-4 m-4 text-3xl text-center text-white bg-gray-600">
      G I T H U B =--
      Name: {data.name} <br / >
        <img src="https://avatars.githubusercontent.com/u/125390936?v=4" alt="AmanSingh" width={300}/> 
        <br / >
            
    </div>
  )
}

export default github

export const githubInfoLoader = async () => {
   const response =  await fetch('https://api.github.com/users/amansingh5ba2004') 
   return response.json()
}