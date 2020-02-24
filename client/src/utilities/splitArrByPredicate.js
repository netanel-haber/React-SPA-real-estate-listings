// const splitArrByPredicate = (arr, pred) => arr.reduce((acc, cVal) => {
//     acc[Number(pred(cVal))].push(cVal);
//     return acc;
// }, [[], []]);
// export default splitArrByPredicate;

//much cooler version but less efficient
const splitArrByPredicate = (arr, pred) => arr.reduce((acc, cVal, _, __, rightIndex = Number(pred(cVal))) =>
    ({ ...acc, [rightIndex]: [...acc[rightIndex], cVal] }), { 0: [], 1: [] })

export default splitArrByPredicate;





