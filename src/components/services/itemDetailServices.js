import axios from 'axios';


export const getItemDetail = (itemId) => {

  return axios.get(`http://192.168.0.18:5000/itemDetail`,{
    params: {
      itemId: itemId
    }
  })
    .then(res => {
      return res.data;
    })
};
