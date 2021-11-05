export const getUserData = () => {
  return JSON.parse(localStorage.getItem("currentUser")) || {};
};

export const makeSessionToken = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const setUserSession = (userName) => {
  const authToken = makeSessionToken(32);
  writeCookie("user", userName, 2);
  userName = authToken + userName;
  writeCookie("token", userName, 2);
};

export const writeCookie = (key, value, hours) => {
  var date = new Date();
  // Get milliseconds at current time plus number of hours*60 minutes*60 seconds* 1000 milliseconds
  date.setTime(+date + hours * 3600000); //60 * 60 * 1000
  window.document.cookie =
    key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";
  return value;
};

export const isSessionExist = () => {
  let cookie = document.cookie;
  let sessionExisit = false;
  if (cookie !== "" && cookie !== undefined && cookie !== null) {
    const cookieList = cookie.split(";");
    if (cookieList && Array.isArray(cookieList) && cookieList.length > 0) {
      const token = cookieList.filter((cl) => cl.includes("token"))[0];
      const found = token.split("=")[1];
      if (found !== "") {
        console.log("##session Token Exisit##", found.trim());
        sessionExisit = true;
      }
    }
  }
  return sessionExisit;
};

export const removeUserSession = () => {
  let cookie = document.cookie;
  var mydate = new Date();
  mydate.setTime(mydate.getTime() - 1);

  const value = "";
  if (cookie !== "" && cookie !== undefined && cookie !== null) {
    const cookieList = cookie.split(";");
    if (cookieList && Array.isArray(cookieList) && cookieList.length > 0) {
      cookieList.forEach((key, index) => {
        document.cookie =
          key + "=" + value + "; expires=" + mydate.toGMTString() + "; path=/";
      });
    }
  }
};
