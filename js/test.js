console.log('script loaded');

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((resp) => {
        for (var pair of resp.headers.entries()) {
            console.log(pair[0]+ ': '+ pair[1]);
         }
        // console.log('**response headers', resp.headers);
        return resp.json()
    })
    .then(function (data) {
        console.log('**data', data);
    });