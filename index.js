// const edwardDecrypt = (message) => {
//     let results = '';
//     let i = 0;
//     let flag = false;

//     while(i < message.length)  {
//         if(message[i] !== message[i+1]) {
//             results += message[i];
//             i++;
//             continue;
//         } 
//         i+=2;
//         flag = true;
//     }
//     if (flag == true) {
//         flag = false;
//             setTimeout(() => {
//                 edwardDecrypt(results);
//             }, 0);
        
//     } else {
//         displayResults(results);
        
//     }
// }


//Answer without recursion

const edwardDecrypt = (message) => {
    let flag = true;
    let results = '';
    while (flag == true) {
        let i = 0;
        flag = false;
        results = '';
        while(i < message.length)  {
            if(message[i] !== message[i+1]) {
                results += message[i];
                i++;
                continue;
            } 
            i+=2;
            flag = true;
        }
        message = results;
    }
    displayResults(results);
}


const displayResults = (decryptedMessage) => {
    const outputField = document.getElementById("decryptedMessage");
    outputField.innerHTML = decryptedMessage;
}
// let res = '';
// for( let i=0; i<10000;i++) {
//     res += '1234567899876543210'
    
//     }
//     console.log(res)