const { textFile, activityGraph } = require('./scripts.js');

function activityTable(day) {
  const table = [];
  for (let x = 0; x < 24; x++) {
    table.push(0);
  }

  return textFile('camera_logs.txt')
    .then((files) => files.split('\n'))
    .then((filesArray) => {
      return Promise.all(
        filesArray.map((file) => {
          return textFile(file)
            .then((content) => content.split('\n'))
            .then((datesArray) =>
              datesArray.forEach((date) => {
                const properDateFormat = new Number(date);
                if (new Date(properDateFormat).getDay() === day) {
                  table[new Date(properDateFormat).getHours()]++;
                }
              })
            );
        })
      );
    })
    .then(() => table);
}

//author solution
// function activityTable(day) {
//   let table = [];
//   for (let i = 0; i < 24; i++) table[i] = 0;

//   return textFile("camera_logs.txt").then(files => {
//     return Promise.all(files.split("\n").map(name => {
//       return textFile(name).then(log => {
//         for (let timestamp of log.split("\n")) {
//           let date = new Date(Number(timestamp));
//           if (date.getDay() == day) {
//             table[date.getHours()]++;
//           }
//         }
//       });
//     }));
//   }).then(() => table);
// }

activityTable(1).then((table) => console.log(activityGraph(table)));
