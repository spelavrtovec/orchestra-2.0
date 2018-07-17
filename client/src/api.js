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
  
  //////////////////users
  getProfile() { //getting the profile
    console.log("API")
        return service
      .get('/users/profile')
      .then(res => {
        console.log("RETURN TO API FROM ROUTE",res.data)
        return res.data
      })
      .catch(errHandler);
  },

  updateProfile(user) { //updating the profile
    return service
      .put('/change', user)
      .then(res => res.data)
      .catch(errHandler);
  },

  getMembers() { //getting all the public profiles of the members
    return service
      .get('users/members')
      .then(res => res.data)
      .catch(errHandler);
  },

  //////////////////groups

  newGroup(data) {  //post a new group
    return service
      .post('/connect/newgroup', data)
      .then(res => res.data)
      .catch(errHandler);
  },

  getGroups() {         //getting all the happenings in the connect page
    return service
      .get('/connect/connect')
      .then(res => {
        return res.data.user._groups})
      .catch(errHandler);
  },

  getGroup(groupId) { // to get all the happenings in a certain group
    return service
    .get(`/connect/${groupId}`)
    .then(res => res.data)
    .catch(errHandler);
  },

  deleteGroup(groupId) {  //to delete a group
    return service
      .delete(`/connect/${groupId}`)
      .then(res => res.data)
      .catch(errHandler);
  },

  //////////////////////posts
  newPost(data) { //posting a new post
    return service
      .post(`/posts/${data.groupId}/post`, data)
      .then(res => res.data)
      .catch(errHandler);
  },

  deletePost(postId) {  //to delete a post
    return service
      .delete(`posts/${postId}`)
      .then(res => res.data)
      .catch(errHandler);
  },

  newReply(data) { //posting a new reply
    return service
      .post(`posts/${data.postId}/reply`, data)
      .then(res => res.data)
      .catch(errHandler);
  },

  addFile(data) { //getting a file from the form
    const formData = new FormData();

    formData.append("file", data.file)

    return service
      .post(`/users/${data.groupId}/file`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler);
  },

  ////////////////////signup/login/logout 
  signup(userInfo) {  
    const formData = new FormData();
    formData.append("name", userInfo.name)
    formData.append("password", userInfo.password)
    formData.append("email", userInfo.email)
    formData.append("file", userInfo.file)
    formData.append("bio", userInfo.bio)
    formData.append("myRole", userInfo.myRole)
    formData.append("value", userInfo.value)

    return service
      .post('/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },})
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

  ////////////////////////////other
  repertiore() {
    return service
      .get('/repertiore')
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

  connect() {         //getting all the happenings in the connect page
    return service
      .get('/users/connect')
      .then(res => res.data)
      .catch(errHandler);
  },
};