let fs = require("fs");
let productsDB = JSON.parse(fs.readFileSync("txt.json", "utf-8"));
console.log(productsDB);
let http = require("http");
let num;
for (let i = 0; i < productsDB.length; i++) {
  num = i;
}

let restfullAPI = http.createServer(function (request, response) {
  let urls = request.url.split("/");
  console.log(urls);
  let id = urls[2];
  if (urls[1] == "home") {
    response.write("<h2 style=font-weight:bold>Welcome to our api</h2>");
  }   else if (urls[1] == "products" && urls[2]==undefined) {
    response.write(JSON.stringify(productsDB));
  }   else if (urls[1] == "products" && urls[2]==id) {
    if (urls[2] == id) {
    //   let product = productsDB.find((i,e) => i == id);

      response.write(JSON.stringify(productsDB[id]));
    }
    // response.write(productsDB[num]);
    // if(urls[2]==1){

    //     response.write(JSON.stringify(productsDB[0]));

    // }
    // else if(urls[2]==2){
    //     response.write(JSON.stringify(productsDB[1]));
    // }
    // else{
    //  response.write(JSON.stringify(productsDB[2]));
    // }
  } else {
    response.writeHead(404);
    response.write("<h1>not found</h1>");
  }
  response.end();
});
restfullAPI.listen(4000, function () {
  console.log("hi i listen on port 4000");
});
