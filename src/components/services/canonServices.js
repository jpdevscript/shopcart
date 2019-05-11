import axios from 'axios';


export const getCartridges = () => {
  return axios.get(`http://192.168.0.18:5000/canon`)
    .then(res => {
      return res.data;
    })
};
