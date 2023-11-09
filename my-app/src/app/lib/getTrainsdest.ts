export default async function getTrainsdest(main_destination:string){
    
    const res= await fetch(`http://localhost:3000/api/traindest/main_destination?main_destination=${main_destination}`)

    if(!res.ok) throw new Error('failed to fetch user')

    const userData = await res.json(); // Parse the JSON data

  return userData;
}