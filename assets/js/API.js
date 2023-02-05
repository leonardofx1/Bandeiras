const apiUrl =  'https://restcountries.com/v3.1/all'
const fetchApi = async () =>{ 
  try
  {
    const response = await fetch(apiUrl)
   
    if(!response.ok) {
        throw new Error('não foi possível obter os dados')
    }
   return response.json()
  }
  catch( error) {
     alert(`Erro: ${error.messege}`)
 }
}

