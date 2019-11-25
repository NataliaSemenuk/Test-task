const edwardDecrypt = (message) => {
    let results = '';
    for (let i=0; i<message.length; i++) {
        let temp = message[i];
        if(message[i] !== message[i+1]) {
            results += message[i];
        }
        while(temp === message[i+1] && i<message.length) {
            i++;
        }   
    }
    displayResults(results);
}
const displayResults = (decryptedMessage) => {
    const outputField = document.getElementById("decryptedMessage");
    outputField.innerHTML = decryptedMessage;
}