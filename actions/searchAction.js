import axios from 'axios'
import client from '../client.js'

const lostPersonSearch = async (keyword) => {
  const response = await client.get(`/lostPerson/${keyword}`)
  return response
}
const findPersonSearch = async (keyword) => {
  const response = await client.get(`/foundPerson/${keyword}`)
  return response
}

const searchByFace = async (image) => {
  console.log(image, 'lalaImage')
  const form = new FormData()
  form.append('photo', `data:image/jpeg;base64,${image}`)
  const response = await client.post('/photo', form)
  if (!response.ok) {
    alert('Couldnot Upload Image To Server For Compare')
    return false
  }

  try {
    const faceId = await axios.get(`https://recognize-missing-person.herokuapp.com/find/?url=${response.data?.photo}`)
    const searchResult = await client.get('foundPersons/' + faceId.data.found)
    console.log(searchResult, 'searchResult')
    return searchResult.data.foundPerson
  } catch (error) {
    console.log(error, 'error')
    if (error.response.status === 404) {
      alert('No Match Found')
      return false
    }
    alert('Couldnot Upload Image To Server For Compare - Maybe Face Id Server Error')
    return false
  }
}



export default {
  lostPerson: lostPersonSearch,
  foundPerson: findPersonSearch,
  faceId: searchByFace
}

