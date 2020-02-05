const appendClass = (currentClasses, extraClass) => (currentClasses + " " + extraClass);
const removeClass = (currentClasses, extraClass) => (currentClasses.replace(" " + extraClass, ""));


export {
    appendClass,
    removeClass
};