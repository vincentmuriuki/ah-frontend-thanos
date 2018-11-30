const currentTime = new Date().getTime() / 1000;

const jwtDecode = (token = '') => {
  if (token !== '') {
    return {
      exp: currentTime + 1000,
      name: 'user1',
    };
  }
  return {
    exp: currentTime - 1000,
    name: 'user1',
  };
};

export default jwtDecode;
