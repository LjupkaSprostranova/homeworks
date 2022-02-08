let parag = document.getElementsByTagName(`p`);
let headers = document.getElementsByTagName(`h1`);
let theOtherHeader = document.getElementsByTagName(`h3`);

for(let i = 0; i < parag.length; i++){
    parag[i].innerHTML = "This is the changed text";
}
for(let iterator = 0; iterator < headers.length; iterator ++){
    headers[iterator].innerHTML = "CHANGED TEXT";
}

theOtherHeader[0].innerHTML = "This one is changed too";
