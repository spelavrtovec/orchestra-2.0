import axios from 'axios';

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3030/api',
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service: service,
  
  getPosts() {
    return service
      .get('/countries')
      .then(res => res.data)
      .catch(errHandler);
  },

  postPosts(data) {
    return service
      .post('/countries', data)
      .then(res => res.data)
      .catch(errHandler);
  },

  agenda() {
    return service
      .get('/agenda')
      .then(res => res.data)
      .catch(errHandler);
  },

  contacts() {
    return service
      .get('/contacts')
      .then(res => res.data)
      .catch(errHandler);
  },

  projects() {
    return service
      .get('/projects')
      .then(res => res.data)
      .catch(errHandler);
  },

  gallery() {
    return service
      .get('/gallery')
      .then(res => res.data)
      .catch(errHandler);
  },

  association() {
    return service
      .get('/association')
      .then(res => res.data)
      .catch(errHandler);
  },

  connect() {
    return service
      .get('/connect')
      .then(res => res.data)
      .catch(errHandler);
  },

  profile() {
    return service
      .get('/profile')
      .then(res => res.data)
      .catch(errHandler);
  },
  
  signup(userInfo) {
    return service
      .post('/signup', userInfo)
      .then(res => res.data)
      .catch(errHandler);
  },

  login(email, password) {
    return service
      .post('/login', {
        email,
        password,
      })
      .then(res => {
        const { data } = res;
        localStorage.setItem('user', JSON.stringify(data));
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
        return data;
      })
      .catch(errHandler);
  },

  logout() {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('user');
  },

  loadUser() {
    const userData = localStorage.getItem('user');
    if (!userData) return false;
    const user = JSON.parse(userData);
    if (user.token && user.name) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
      return user;
    }
    return false;
  },

  isLoggedIn() {
    return localStorage.getItem('user') != null
  },


  addPicture(file) {
    const formData = new FormData();
    formData.append("picture", file)
    return service
      .post('/users/first-user/pictures', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler);
  },
};
