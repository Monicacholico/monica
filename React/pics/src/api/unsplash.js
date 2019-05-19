import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID dcbd5da81aeb61c0aa1f87c44732dff802c0d102036dca7a0d8df29246c32928'
    }
});
