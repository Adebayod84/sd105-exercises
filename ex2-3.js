const getPosts = (callback) => {
  const myRequest = new XMLHttpRequest();

  myRequest.addEventListener('readystatechange', function(){
    if(myRequest.readyState ===4 && myRequest.status === 200) {
      callback(undefined, JSON.parse(request.responseText);
    } else if (myRequest.readyState === 4) {
      callback('something went wrong.');
    }
  });
  
  myRequest.open('GET', 'data/posts.json');
  myRequest.send();
  
}

getPosts((err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});