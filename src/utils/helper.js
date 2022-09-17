import axios from "axios";

let getStatus = "";

// get request
export const getUsers = async (url) => {
  const data = await fetch(url);
  return data;
};

// post request
export const createUser = async (postData) => {
  if (!postData) {
    return "Postdata is not provided!";
  }

  const url = `http://localhost:5000/api/v1/register`;

  await axios
    .post(url, postData)
    .then((response) => {
    // getStatus = response.data.message;
    })
    .catch((error) => {
      console.log(error.response.data);
    });

  return getStatus;
};
