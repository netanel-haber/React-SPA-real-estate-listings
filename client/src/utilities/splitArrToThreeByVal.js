const func = (arr, curVal) => {
    let curValIndex = arr.findIndex((el) => curVal === el)
    return [arr.slice(0, curValIndex), [curVal], arr.slice(curValIndex + 1)];
};

export default func;