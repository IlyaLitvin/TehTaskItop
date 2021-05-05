const initState = {
  user: {
    id: "",
    token: null,
    role: null,
    email: "",
    isAuth: false,
  },
  profiles: [],
  users: [],
  dashboard: {
    users: 0,
    profiles: 0,
    oldProfiles: 0,
  },
};

export default initState;
