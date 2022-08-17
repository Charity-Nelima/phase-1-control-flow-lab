function scuberGreetingForFeet(distance){
  // Write your code here!
  // 
  if (distance <= 400){
    return "This one is on me!"
  }
  if (distance > 2000 && distance < 2500 ){
    return "I will gladly take your thirty bucks."
  }
  else if(distance > 2500 ){
    return "No can do."
  }
  // if (scuberGreetingForFeet >= 2000);
  // return "I will gladly take your thirty bucks. "
  //  else if (scuberGreetingForFeet > 2000){
  //   return "I will gladly take your thirty bucks."
  //  }
  //  else if (scuberGreetingForFeet > 2500) {
  //   return "No can do."
  //  }

  // else if(scuberGreetingForFeet > 2500);
  // return "No can do."
}

function ternaryCheckCity(city){
  // Write your code here!
  // return city === `NYC` ? `Ok`: `sounds good. ${Nogo}!`;
  if (city ==='NYC') {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  // 
//   
console.log(tip);
  if (tip === 'generous') {
    return 'Thank you so much.'
  } else if (tip === 'not as generous') {
    return 'Thank you.';
  } else {
    return 'Bye.';
  }
}