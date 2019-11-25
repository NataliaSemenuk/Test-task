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


// The second variant

// const edwardDecrypt = (message) => {
//     let results = '';
//     let i = 0;
//     while(i < message.length)  {
//         if(message[i] !== message[i+1] && message[i-1] !== message[i]) {
//             results += message[i];
//         }
//         i++;
//     }
//     displayResults(results);
// }

const displayResults = (decryptedMessage) => {
    const outputField = document.getElementById("decryptedMessage");
    outputField.innerText = decryptedMessage;
}