console.log("sanity check!");
const url = "http://www.reddit.com/r/starWars.json";
const request = (url, callback) => {
  const oReq = new XMLHttpRequest();
  oReq.addEventListener("load", callback);
  oReq.open("GET", url);
  oReq.send();
};

request(url, res => {
  const data = JSON.parse(res.currentTarget.response);
  //   console.log(res);
  console.log("data", data);
  let dataL = data.data.children;
  // let getContainer = ;
  for (let i = 0; i < dataL.length; i++) {
    //get the titles
    let listE = document.createElement("li");
    listE.className = "elem";
    let titleE = document.createElement("p");
    titleE.innerHTML = dataL[i].data.title;
    listE.appendChild(titleE);
    document.getElementById("bodyElem").appendChild(listE);
    //get replies
    // console.log(dataL[i].data.url);
    //get images
    let img = document.createElement("img");
    img.src = dataL[i].data.url;
    img.className = "imgL";
    listE.appendChild(img);
  }
});
