const initialOptions = {
    sorts: { updatedAt: -1 },
    filters: {
        price: {
            $lte: undefined,
            $gte: undefined
        },
        pictureKeys: {},
        type: {
            $eq: undefined
        }
    },
    limit: 3
};


const removeProps = (obj, keys) => {
    let result = Object.fromEntries(
        Object
            .entries(obj)
            .filter(([k]) => !keys.includes(k)))
    return result;
}

const areKeysInObject = (obj, keys) => {
    return keys.every(key => obj[key] !== undefined);
}


const optionsReducer = (state, { type, payload }) => {
    const { filters, sorts, limit } = state;
    switch (type) {
        case "SORTS":
            return { ...state, sorts: payload }
        case "LIMIT":
            return { ...state, limit: payload }
        case "UPDATE_FILTER_VALUE":
            const [fieldToUpdate, filter, value] = payload;
            return {
                limit, sorts, filters: {
                    ...filters,
                    [fieldToUpdate]: {
                        ...filters[fieldToUpdate],
                        [filter]: value
                    }
                }
            };
        case "UPDATE_FILTERS_VALUES":
            return {
                limit, sorts, filters: {
                    ...filters,
                    ...payload.reduce((acc, [fieldToUpdate, filter, value]) => ({
                        ...acc,
                        [fieldToUpdate]: {
                            ...filters[fieldToUpdate],
                            ...acc[fieldToUpdate],
                            [filter]: value || undefined
                        }
                    }), {})
                }
            }
        case "TOGGLE_FILTER":
            const [field, filterToToggle] = payload;
            const curFilters = filters[field];
            const updateKeys = Object.keys(filterToToggle);
            const shouldRemoveProps = areKeysInObject(curFilters, updateKeys);
            let retFilters = shouldRemoveProps
                ? removeProps(curFilters, updateKeys)
                : { ...curFilters, ...filterToToggle };
            return {
                sorts,
                limit,
                filters: { ...filters, [field]: retFilters }
            }
        case "RESET_FILTERS":
            return { ...state, filters: initialOptions.filters }
        default:
            return state;
    }
}




export { optionsReducer, initialOptions }

