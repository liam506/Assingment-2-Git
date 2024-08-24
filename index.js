//defining varibale and place into http package
let myhttp = require("http");

//server requst and response
let myserver = myhttp.createServer(function (myrequest, myresponse) {
  console.log(myrequest.url);

  let mytext = "Hello, assignment for git and server testing";
  if (myrequest.url == "/") {
    mytext;
  } else {
    mytext = "404 error";
  }

  //creating a http response header, including the status code
  myresponse.writeHead(200, { "Cotent-Type": "text/plain" });

  myresponse.end(mytext);
});

// listen() takes 2 args: 1: tcp port #, 2: string of the ip address to listen (0.0.0.0)
myserver.listen(8080, "0.0.0.0");

console.log("Server has been set up");
