import fetchHandler from './fetchHandler';

function getPicUrls(pictureKeys, signal) {
    return fetchHandler('/api/pics/get-pic-urls', "POST", { pictureKeys }, signal)
}

export { getPicUrls };