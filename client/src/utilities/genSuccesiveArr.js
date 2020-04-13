const genSuccessiveArr = (tLimit, bLimit = 1, step = 1) =>
    Array(Math.ceil((tLimit - bLimit + step) / step))
        .fill(0)
        .map((el, index) => bLimit + (step * index));


export default genSuccessiveArr;
