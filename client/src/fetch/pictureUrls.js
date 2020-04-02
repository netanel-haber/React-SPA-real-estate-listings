import fetchHandler from './fetchHandler';

function getPicUrls(pictureKeys, signal) {
    return fetchHandler('/api/pics/get-pic-urls', "POST", { pictureKeys }, signal)
}

function getUploadFormData(howmany) {
    return fetchHandler(`/api/pics/upload-data/${howmany}`);
}


function uploadFileToS3 (presignedPostData, file) {
    const formData = new FormData();
    Object.keys(presignedPostData.fields).forEach(key => {
        formData.append(key, presignedPostData.fields[key]);
    });
    formData.append("file", file);
    return fetch(presignedPostData.url, {
        method: 'post',
        mode: 'cors',
        body: formData
    })
};

function uploadFilesToS3(postDataArray, files) {
    console.log(`---Starting upload. Total number of files: ${files.length}. Total load: ${Array.from(files).reduce((accumulator, { size }) => accumulator + size, 0) / 1000000}mb.`);
    let before = Date.now();
    return Promise.all(postDataArray.map((postDatum, index) => uploadFileToS3(postDatum, files[index])))
        .then(() => {
            console.log(`${(Date.now() - before) / 1000}secs. success---`)
        })
}


export { getPicUrls, getUploadFormData, uploadFilesToS3 };