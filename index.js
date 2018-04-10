var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine){
  var n = 1; n ++;
  katzDeliLine.push(n);//add new person to line, give them number, keep track of numbers throughout day, and when new ppl come in without anyone else in line, the number keeps rising
  return `You are number ` + katzDeliLine;
}


function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
}
  else{
    return `Currently serving `+line.shift()+`.`;
 }
}

function currentLine(line){
  if (line.length ===0){
  return "The line is currently empty.";
  }
  else{
   return `The line is currently: ` + `1. ` + line[0] + `, 2. ` + line[1] + `, 3. ` + line[2];
    }
}