import axios from 'axios';

export default axios.create({
  baseURL: 'https://',
  headers: {
    Authorization: 'Bearer ',
  },
});

//example request call
// const searchApi = async () => {
//   try {
//     const response = await api.get('/search', {
//       params: {
//         limit: 50,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
