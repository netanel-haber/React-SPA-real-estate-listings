const mapValueToField = {
    "שכונה": "area",
    "רח'": "street",
};

export default (place) => {
    let field;
    for (let key of Object.keys(mapValueToField)) {
        if (place.includes(key)) {
            field = mapValueToField[key];
        }
    }
    return (!field) ? ["municipality", place] : [field, !place ? undefined : place.split(/ \(/)?.[0]];
}