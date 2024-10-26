let usersList = [];
let requestList = [];
let friendsList = [];
let userEmail = null;

const ENDPOINT = "http://localhost:4000"

const setData = async () => {
  await fetch(ENDPOINT + "/usertable", {
    method: "get",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then((response) => response.json())
    .then((responseJson) => {
      usersList = responseJson;
    })
    .catch((error) => {
      console.log(error);
    });

  await fetch(ENDPOINT + "/requests-list", {
    method: "get",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then((response) => response.json())
    .then((responseJson) => {
      requestList = responseJson;
    })
    .catch((error) => {
      console.log(error);
    });

  await fetch(ENDPOINT + "/friends-list", {
    method: "get",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then((response) => response.json())
    .then((responseJson) => {
      friendsList = responseJson.friendsList;
      userEmail = responseJson.userEmail;
    })
    .catch((error) => {
      console.log(error);
    });

  return { usersList, requestList, friendsList, userEmail };
};

export default setData;
