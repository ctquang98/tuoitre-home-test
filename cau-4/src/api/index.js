import api from './config';

export const getPosts = () => {
    return new Promise((resolve, reject) => {
        api.get('/posts')
            .then(res => {
                let { data } = res;
                console.log(data);
                resolve(data);
            })
            .catch(err => reject(err));
    });
}