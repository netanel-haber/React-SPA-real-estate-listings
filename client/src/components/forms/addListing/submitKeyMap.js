const filterUndefinedProperties = obj => Object.fromEntries(Object
    .entries(obj)
    .filter(([, value]) => value !== undefined)
)

const compileAddress = ({ municipality, area, street, number, apt }) => filterUndefinedProperties({
    municipality,
    area,
    street,
    number,
    apt
});
const compileContact = ({ phoneNumber, email, name, lastName }) => filterUndefinedProperties({
    phoneNumber,
    email,
    name,
    lastName,
})


function mapDataToListing(data) {
    const address = compileAddress(data);
    const contact = compileContact(data);
    return { address, contact }
}


export { mapDataToListing }