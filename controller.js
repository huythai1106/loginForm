var API = "http://localhost:3000/account";

const getUser = async () => {
  const res = await fetch(API);
  return res.json();
};

export const checkLogin = (value, callback) => {
  getUser()
    .then((data) => {
      callback(value, data);
    })
    .catch((err) => {
      alert("Không kết nối được với server");
      console.log(err);
    });
};
