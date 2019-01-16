// var myRequest = {
//   Authorization:
//     "Basic 563492ad6f91700001000001a2adbaca7f4040f99fb48dd255ff8e31"
// };
// console.log(headers);

// var url = "https://api.pexels.com/v1/";

var url = "https://api.pexels.com/v1/";

const otherParam = {
  headers: {
    "content-type": "application/json; charset=UTF-8"
  },
  method: "GET"
};

fetch(url, otherParam).then(res => {
  console.log(res);
});
