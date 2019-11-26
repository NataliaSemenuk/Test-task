const edwardDecrypt = (message) => {
    let results = '';
    let i = 0;
    let flag = false;

    while(i < message.length)  {
        if(message[i] !== message[i+1]) {
            results += message[i];
            i++;
            continue;
        } 
        i+=2;
        flag = true;
    }
    if (flag == true) {
        flag = false;
        edwardDecrypt (results);
    } else {
        displayResults(results);
    }
}
const displayResults = (decryptedMessage) => {
    const outputField = document.getElementById("decryptedMessage");
    outputField.innerHTML = decryptedMessage;
}