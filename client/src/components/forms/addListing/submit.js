import sanitizer from '../sanitizeInput';
import toaster from '../../../utilities/toaster';
import { getUploadFormData, uploadFilesToS3 } from '../../../fetch/pictureUrls';

const { HEB_WRONG_CREDS } = {
    HEB_WRONG_CREDS: "השדות לא מולאו כהלכה.",
    HEB_UPLOAD_PROBLEM: "אירעה תקלה בהעלאת הקבצים - נסה שוב או בחר קבצים שוב."
}

export default async (data) => {
    let pictureKeys;
    if (data.pictures) {
        const uploadDataArr = await getUploadFormData(data.pictures.length);
        try {
            await uploadFilesToS3(uploadDataArr, data.pictures);
            pictureKeys = uploadDataArr.map(({ fields: { key } }) => key);
        }
        catch (ex) {
            console.log(ex);
            return toaster("a problem occured.");
        }
    }
}