console.log("connected");
names = ["Ljupka", "Nikola", "Riste"];
lastNames = ["Sprostranova", "Nastovski", "Bimbiloski"];
function studentNames(){
    for ( let i = 0; i < lastNames.length; i++){
        console.log([i + 1 +"."] + names[i] + " " + lastNames[i]);
    }

}
studentNames();