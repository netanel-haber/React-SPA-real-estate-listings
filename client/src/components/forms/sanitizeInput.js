export default (data) => Object.fromEntries(Object
    .entries(data)
    .filter(([key, value]) => value !== "")
    .map(([key, value]) => ([key, value?.trim?.() || value])));