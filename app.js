// Api= ifv577s6TuExjcuEVclO5q9G1j5G7Ag2
// https://api.giphy.com/v1/gifs
//http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
const request = new XMLHttpRequest();
request.open(
  "GET",
  "https://api.giphy.com/v1/gifs/random?api_key=ifv577s6TuExjcuEVclO5q9G1j5G7Ag2&tag=cat"
);
// request.open(
//   "GET",
//   "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=ifv577s6TuExjcuEVclO5q9G1j5G7Ag2&limit=1"
// );
request.onload = function () {
  const response = request.response;
  const data = JSON.parse(response);
  const gif = data.data.images.original.url;
  const gifElem = document.createElement("img");
  gifElem.setAttribute("src", gif);
  document.body.appendChild(gifElem);
  //  console.log(gif);
  console.log(data);
};
request.send();
