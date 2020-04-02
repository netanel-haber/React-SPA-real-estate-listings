import sanitizer from '../sanitizeInput';
import toaster from '../../../utilities/toaster';
import { getUploadFormData, uploadFilesToS3 } from '../../../fetch/pictureUrls';
import { addListing } from '../../../fetch/listings';
import { mapDataToListing } from './submitKeyMap';
import { paths } from '../../pages/paths';

const { HEB_PROBLEM, HEB_UPLOAD_PROBLEM } = {
    HEB_PROBLEM: "אירעה בעיה.",
    HEB_UPLOAD_PROBLEM: "אירעה תקלה בהעלאת הקבצים - נסה שוב או בחר קבצים שוב.",
    HEB_UPLOAD_SUCCESS:"המודעה נוצרה בהצלחה!"
}


export default async (unfilteredData, history) => {
    const data = sanitizer(unfilteredData);
    const { address, contact } = mapDataToListing(data);
    let pictureKeys;
    if (data.pictures) {
        const uploadDataArr = await getUploadFormData(data.pictures.length);
        try {
            await uploadFilesToS3(uploadDataArr, data.pictures);
            pictureKeys = uploadDataArr.map(({ fields: { key } }) => key);
        }
        catch (ex) {
            console.log(ex);
            return toaster(HEB_UPLOAD_PROBLEM);
        }
    }
    const { type } = data;
    const { floor, floorsInBuilding, sqMeters, price, propertyType } = data;
    const { entrance, desc, entryDate, parkingSpots, upkeep,
        numBalconies, sqMGarden, sqMBuilt, homeOwnerAssociationMonthly,
        biMonthlyArnona, divided, rentedUntil, meetingRoom,
        bathrooms, numChecks, taxesIncluded, rooms, furnitureDesc } = data;
    const { longTerm, forPartners, cameras, ITRoom,
        highCeiling, loadingRamp, underGround, kitchenette, alarm,
        keepsKashrut, petsAllowed } = data;
    const finalResult = {
        type,
        listing: {
            listing: {
                pictureKeys,
                contact
            },
            level1: { address, floorsInBuilding, floor, sqMeters, price, type: propertyType },
            level2: {
                entrance, desc, entryDate, parkingSpots, upkeep,
                numBalconies, sqMGarden, sqMBuilt, homeOwnerAssociationMonthly,
                biMonthlyArnona, divided, rentedUntil, meetingRoom,
                bathrooms, numChecks, taxesIncluded, rooms, furnitureDesc
            },
            level3: {
                longTerm, forPartners, cameras, ITRoom,
                highCeiling, loadingRamp, underGround, kitchenette, alarm,
                keepsKashrut, petsAllowed
            }
        }
    }
    try {
        await addListing(finalResult);
        toaster(HEB_UPLOAD_SUCCESS,"success");
        history.push(paths.myListings);
    }
    catch (ex) {
        toaster(HEB_PROBLEM);
    }
}