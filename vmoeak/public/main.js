function jsonp(url) {
    return new Promise((resolve, reject) => {
        let functionName = 'jsonFunctionName' + Math.random();
        window[functionName] = (data) => {
            resolve(data);
        }
        let script = document.createElement('script');
        script.src = `${url}?callback=${functionName}`
        script.onload = () => {
            script.remove();
        }
        script.onerror = () => {
            reject();
        }
        document.body.appendChild(script);
    })
}

jsonp('http://localhost:8888/friends.js').then((data) => {
    console.log(data);
})