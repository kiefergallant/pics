import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID A4wys3lTMVeO1cRM6v3bgPJmaYzR7BpZvZcrWw0mqsw"
    }
});

