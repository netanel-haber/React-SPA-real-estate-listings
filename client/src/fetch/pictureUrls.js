import fetchPost from './fetchPost';

function getPicUrls(keys, signal) {
    return fetchPost('/api/pics/get-pic-urls', keys, signal).then(res => res.json());
}

export { getPicUrls };