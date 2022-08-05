const sentence = "hello there from lighthouse labs";

const typewriter = () => {
  let x = 0;
  for (let char = 0; char < sentence.length; char ++) {
    if (char === sentence.length-1) {
      setTimeout(() => {process.stdout.write(sentence[char] + "\n")}, x);
        x += 150;
    } else {
      setTimeout(() => {process.stdout.write(sentence[char])}, x);
        x += 150;
    }
  }
}

typewriter();


//
// typewriter.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/387?journey_step=32&workbook=7
// 2022-07-20
//

// const conColorGreen = '\x1b[92m', conColorReset = "\x1b[0m";

// const quotesArray = [
//   'Who is the more foolish: the fool or the fool who follows him?',
//   'Your focus determines your reality.', 'The ability to speak does not make you intelligent.', 'Many of the truths that we cling to depend on our viewpoint.', 'I like firsts. Good or bad, they are always memorable.', 'In my experience, there is no such thing as luck.', 'A friendly piece of advice; assume that I know everything.'];

// let quoteNumber = Math.floor((Math.random() * quotesArray.length-1) + 1);

// //const sentence = "hello there from lighthouse labs";
// const sentence = quotesArray[quoteNumber];

// const outputSentence = conColorGreen + sentence + conColorReset + '\n';  // Fix the new line "bug" with \n

// let timer = 50;
// for (const char of outputSentence) {
//   let timerIncrement = Math.floor((Math.random() * 160) + 25); // simulate a 'slow-ish' typer with these numbers
//   setTimeout(() => {
//     process.stdout.write(`${char}`);
//   }, timer);
//   timer = timer + timerIncrement;
// }