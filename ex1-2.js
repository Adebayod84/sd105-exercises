const getPosts = (callback) => {
  const myRequest = new XMLHttpRequest();

  myRequest.addEventListener('readystatechange', function(){
    if(myRequest.readyState ===4 && myRequest.status === 200) {
      callback(undefined, request.responseText);
    } else if (myRequest.readyState === 4) {
      callback('something went wrong.');
    }
  });
  
  myRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  myRequest.send();
  
}

getPosts((err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});