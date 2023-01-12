import axios from "axios";

export const postAPI = async (url: string, post: any) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${url}`,
    post,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8"
      }
    }
  );

  return res;
};

export const getAPI = async (url: string) => {
  const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`, {
    headers: {
      "Access-Control-Allow-Rrigin": "*",
      "Content-type": "application/json; charset=UTF-8"
    }
  });

  return res;
};

// export const patchAPI = async (url, post, token) => {
//   const res = await axios.patch(
//     `${process.env.REACT_APP_BASE_URL}/${url}`,
//     post,
//     {
//       headers: { Authorization: "Bearer " + token }
//     }
//   );

//   return res;
// };

// export const putAPI = async (url, post, token) => {
//   const res = await axios.put(
//     `${process.env.REACT_APP_BASE_URL}/${url}`,
//     post,
//     {
//       headers: { Authorization: "Bearer " + token }
//     }
//   );

//   return res;
// };

// export const deleteAPI = async (url, post, token) => {
//   const res = await axios.delete(
//     `${process.env.REACT_APP_BASE_URL}/${url}`,
//     post,
//     {
//       headers: { Authorizaion: "Bearer " + token }
//     }
//   );

//   return res;
// };
