const dummyTextArea = document.createElement('textarea');
dummyTextArea.style.position = "absolute";
dummyTextArea.style.top = "-100000px";
dummyTextArea.style.left = "-100000px";


document.querySelector('body').appendChild(dummyTextArea);


export default (text) => {
    dummyTextArea.innerText = text;
    dummyTextArea.select();
    document.execCommand("copy");
}
