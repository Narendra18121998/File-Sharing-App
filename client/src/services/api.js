import axios from 'axios'

const url = 'http://localhost:8000'
export const uploadFile=async(data)=>{
    
    try {
        let response = await axios.post(`${url}/upload`,data)
        return response.data;
    } 
    catch (error) {
        console.log("Error while calling the api" , error.message)    
    }
}

