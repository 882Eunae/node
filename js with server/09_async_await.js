function webServerConnect() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1', {
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
    .then(response => response.json())
    .catch(err => console.log(err));
}
//함수앞에 async 비동기 작업 함수인데 순차적으로 진행 
async function getJSONData() {
  const result = await webServerConnect();
  console.log(1, result);

  //  webServerConnect()
  // .then(result=>console.log(2,result));
}

getJSONData();
console.log('End!');