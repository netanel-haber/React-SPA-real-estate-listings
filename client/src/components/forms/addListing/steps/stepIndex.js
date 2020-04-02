import { Type, fieldNames as typeFieldNames } from './Type';
import { Address, fieldNames as addFieldNames } from './Address';
import { PropertyDetails, fieldNames as propFieldNames } from './PropertyDetails';
import { ListingDetails, fieldNames as listingFieldNames } from './ListingDetails';
import { AddPics, fieldNames as addPicsFieldNames } from './AddPics';
import { ContactDetails, fieldNames as contactFieldNames } from './ContactDetails';

const steps = [
    [Type, typeFieldNames],
    [Address, addFieldNames],
    [PropertyDetails, propFieldNames],
    [ListingDetails, listingFieldNames],  
    [ContactDetails, contactFieldNames],
    [AddPics, addPicsFieldNames],
];
export { steps };