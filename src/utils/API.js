import axios from 'axios';

export default {
    getAllEmployees(){
        return axios.get('https://randomuser.me/api/?results=60');
        
    }
}