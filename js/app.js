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
    let titleE = document.createElement("h1");
    titleE.innerHTML = dataL[i].data.title;
    listE.appendChild(titleE);
    document.getElementById("bodyElem").appendChild(listE);

    //get images

    let linkType = dataL[i].data.post_hint;

    // console.log(img);

    console.log("test", linkType);

    if (linkType === "image") {
      let img = document.createElement("img");
      img.src = dataL[i].data.url;
      img.className = "imgL";
      listE.appendChild(img);
    } else if (linkType === "rich:video") {
      let vid = document.createElement("video");
      vid.autoplay = true;
      vid.controls = true;
      vid.src = dataL[i].data.url;
      listE.appendChild(vid);
      console.log("fuck");
    }
    //get comments
    // console.log(dataL[i].data.url);
    let commentL = document.createElement("li");
    let aElem = document.createElement("a");
    let iElem = document.createElement("i");
    aElem.href = "http://www.reddit.com".concat(dataL[i].data.permalink);
    commentL.className = "comment";
    iElem.className = "fas fa-comment";
    iElem.innerHTML = " " + dataL[i].data.num_comments + " Comments";
    aElem.appendChild(iElem);
    commentL.appendChild(aElem);
    listE.appendChild(commentL);
    console.log(commentL);

    //save button
    let saveL = document.createElement("li");
    let saveI = document.createElement("i");
    saveL.className = "saved";
    saveI.className = "far fa-bookmark";
    saveL.appendChild(saveI);
    listE.appendChild(saveL);
  }
});
