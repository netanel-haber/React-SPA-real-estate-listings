const fetchPost = (path, body = {}, signal = undefined) => {
    console.log(body);
    
    return fetch(path, {
        method: 'POST',
        body: JSON.stringify(body),
        signal,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}


export default fetchPost;