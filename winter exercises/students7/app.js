console.log("Connected");
/*One student has 5 exams in the first semester. He/She enters the grades as input.
 The professor told the students that for passing the first semester they must have average of 8. 
 The student needs to know whether they have passed the semester or not. Alert on screen if the student passed or not! */
  let grades = [];
  sum = 0;

 for( let i = 0; i < 5; i++){
        grades.push(parseFloat( prompt(`Enter ur grade`)));
        sum += grades[i]
  }
  console.log(sum);
 let avgGrades = sum / 5;
 
 if(avgGrades < 8){
     alert(`Sorry, you did not pass.`);
 } else if(avgGrades > 8){
     alert(`Congrats, you passed!`);
 }
