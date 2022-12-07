

const axios = require('axios')


async function getUsers  (req, res) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            
            res.status(200).send(response.data) 
        
        
    } catch (error) {
        
    }
    
}
module.exports = getUsers 

