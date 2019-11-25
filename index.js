const edwardDecrypt = (message) => {
    let results = '';
    let i = 0;
    while(i < message.length)  {
        if(message[i] !== message[i+1]) {
            results += message[i];
            i++;
            continue;
        } 
        i+=2;
    }
    displayResults(results);
}

const displayResults = (decryptedMessage) => {
    const outputField = document.getElementById("decryptedMessage");
    outputField.innerText = decryptedMessage;
}