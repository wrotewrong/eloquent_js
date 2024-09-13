const { textFile, activityGraph } = require('./scripts.js');

async function activityTable(day) {
  const table = [];
  for (let x = 0; x < 24; x++) {
    table.push(0);
  }

  const logFileList = await textFile('camera_logs.txt');
  for (let file of logFileList.split('\n')) {
    const content = await textFile(file);
    for (let date of content.split('\n')) {
      const properDateFormat = new Number(date);
      if (new Date(properDateFormat).getDay() === day) {
        table[new Date(properDateFormat).getHours()]++;
      }
    }
  }
  return table;
}

// // author solution
// async function activityTable(day) {
//   let table = [];
//   for (let i = 0; i < 24; i++) table[i] = 0;

//   let logFileList = await textFile('camera_logs.txt');
//   for (let filename of logFileList.split('\n')) {
//     let log = await textFile(filename);
//     for (let timestamp of log.split('\n')) {
//       let date = new Date(Number(timestamp));
//       if (date.getDay() == day) {
//         table[date.getHours()]++;
//       }
//     }
//   }

//   return table;
// }

activityTable(1).then((table) => console.log(activityGraph(table)));
