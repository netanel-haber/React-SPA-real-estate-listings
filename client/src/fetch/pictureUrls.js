import fetchPost from './fetchPost';

function getPicUrls(pictureKeys, signal) {
    return fetchPost('/api/pics/get-pic-urls', { pictureKeys }, signal).then(res => res.json());
}

export { getPicUrls };