module.exports = (oldPaths, newPaths) => ({
    ...Object.fromEntries(Object.entries(oldPaths)
        .filter(([key]) => newPaths.includes(key))),
    ...Object.fromEntries(newPaths
        .filter(el => !oldPaths[el])
        .map(el => ([el, []])))
})