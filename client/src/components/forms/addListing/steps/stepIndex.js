import AddPics from './AddPics';
import Address from './Address';
import ContactDetails from './ContactDetails';
import Finalize from './Finalize';
import ListingDetails from './ListingDetails';
import PropertyDetails from './PropertyDetails';
import Type from './Type';

const steps = [
    [Type, ["type"]],
    [Address, ["number"]],
    [PropertyDetails, []],
    [ListingDetails, []],
    [AddPics, []],
    [ContactDetails, []],
    [Finalize, []]
];
export { steps };