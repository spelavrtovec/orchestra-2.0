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
    return service
      .get('/profile')
      .then(res => res.data)
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
      .get('/projects/members')
      .then(res => res.data)
      .catch(errHandler);
  },

  //////////////////groups
  getGroups() { //getting a list of groups of the certain user
    return service
    .get('/connect')
    .then(res => res.data)
    .catch(errHandler);
  },

  newGroup(group) { //posting a new group
    return service
      .post('/newgroup', group)
      .then(res => res.data)
      .catch(errHandler);
  },

  getGroup(groupId) { // to get all the happenings in a certain group
    return service //??????????????
    .get(`${groupId}`)
    .then(res => res.data)
    .catch(errHandler);
  },

  deleteGroup(groupId) {  //to delete a group
    return service
      .delete(`${groupId}`)
      .then(res => res.data)
      .catch(errHandler);
  },

  //////////////////////posts
  newPost(post, groupId) { //posting a new post
    return service
      .post(`${groupId}/post`, post)
      .then(res => res.data)
      .catch(errHandler);
  },

  deletePost(postId) {  //to delete a post
    return service
      .delete(`${postId}`)
      .then(res => res.data)
      .catch(errHandler);
  },

  newReply(postId, reply) { //posting a new reply
    return service
      .post(`${postId}/post`, reply)
      .then(res => res.data)
      .catch(errHandler);
  },

  newFile(file, groupId) { //posting a new file
    return service
      .post(`${groupId}/file`, file)
      .then(res => res.data)
      .catch(errHandler);
  },

  addFile(file, groupId) { //getting a file from the form
    const formData = new FormData();

    formData.append("file", file)
    return service
      .post(`${groupId}/file`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler);
  },

  ////////////////////signup/login/logout 
  signup(userInfo) {  //HOW TO GET THE INFO (PICTURE) FOR SIGNUP?!
    const formData = new FormData();
    formData.append("name", userInfo.name)
    formData.append("password", userInfo.password)
    formData.append("email", userInfo.email)
    formData.append("file", userInfo.file)
    formData.append("bio", userInfo.bio)
    formData.append("myRole", userInfo.myRole)

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
};