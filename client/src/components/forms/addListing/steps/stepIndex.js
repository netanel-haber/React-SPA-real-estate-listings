import AddPics from './AddPics';
import { Address, fieldNames as addFieldNames } from './Address';
import ContactDetails from './ContactDetails';
import Finalize from './Finalize';
import ListingDetails from './ListingDetails';
import {PropertyDetails, fieldNames as propFieldNames} from './PropertyDetails';
import { Type, fieldNames as typeFieldNames } from './Type';

const steps = [
    // [Type, typeFieldNames],
    // [Address, addFieldNames],
    [PropertyDetails, propFieldNames],
    [ListingDetails, []],
    [AddPics, []],
    [ContactDetails, []],
    [Finalize, []]
];
export { steps };