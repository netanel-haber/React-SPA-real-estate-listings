module.exports = (userSort) => {
    const [key, value] = Object.entries(userSort)[0];
    const transKey = ({
        "updatedAt": 'listing.updatedAt',
        "price": 'level1.price',
    })[key] || 'listing.updatedAt';

    const transVal = ({
        "asc": 1,
        "ascending": 1,
        "1": 1,
        "desc": -1,
        "descending": -1,
        "-1": -1
    })[value] || 1;

    return { [transKey]: transVal };
}