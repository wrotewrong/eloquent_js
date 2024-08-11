const { routeRobot, goalOrientedRobot, VillageState } = require('./scripts');

function compareRobots(robot1, memory1, robot2, memory2) {
  function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
      if (state.parcels.length == 0) {
        return turn;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
  }
  let result1 = 0;
  let result2 = 0;
  const testCount = 100;

  function mean(result, testCount) {
    return Math.round(result / testCount);
  }

  for (let i = 0; i <= testCount; i++) {
    const task = VillageState.random();
    result1 += runRobot(task, robot1, memory1);
    result2 += runRobot(task, robot2, memory2);
  }

  console.log(
    `Robot one: ${mean(result1, testCount)}, Robot two: ${mean(
      result2,
      testCount
    )}`
  );
}

// //author solution
// function countSteps(state, robot, memory) {
//   for (let steps = 0; ; steps++) {
//     if (state.parcels.length == 0) return steps;
//     let action = robot(state, memory);
//     state = state.move(action.direction);
//     memory = action.memory;
//   }
// }

// function compareRobots(robot1, memory1, robot2, memory2) {
//   let total1 = 0,
//     total2 = 0;
//   for (let i = 0; i < 100; i++) {
//     let state = VillageState.random();
//     total1 += countSteps(state, robot1, memory1);
//     total2 += countSteps(state, robot2, memory2);
//   }
//   console.log(`Robot 1 needed ${total1 / 100} steps per task`);
//   console.log(`Robot 2 needed ${total2 / 100}`);
// }

compareRobots(routeRobot, [], goalOrientedRobot, []);
