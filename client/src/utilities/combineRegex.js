const combine = (...regex) => {
    let combined = "";
    regex.forEach(({ source }) => {
        combined += `(${source})`;
    })
    return new RegExp(combined.slice(0,combined.length-1),"g");
}

export default combine;