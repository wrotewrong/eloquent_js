const { compareRobots } = require('./7.1.measuringARobot');
const { goalOrientedRobot, findRoute, roadGraph } = require('./scripts');

//the solution gives better reasults than goalOrientedRobot in the eloquent.js sandbox but not here...
function myRobot({ place, parcels }, route) {
  if (route.length == 0) {
    for (let parcel of parcels) {
      parcel.route = findRoute(roadGraph, place, parcel.place);
    }
    const sorted = parcels.sort((a, b) => a.route.length > b.route.length);

    if (sorted[0].place != place) {
      route = findRoute(roadGraph, place, sorted[0].place);
    } else {
      const parcel = parcels.find((parcel) => parcel.route);
      route = findRoute(roadGraph, place, parcel.address);
    }
  }

  return { direction: route[0], memory: route.slice(1) };
}

// //author solution
// function lazyRobot({ place, parcels }, route) {
//   if (route.length == 0) {
//     // Describe a route for every parcel
//     let routes = parcels.map((parcel) => {
//       if (parcel.place != place) {
//         return {
//           route: findRoute(roadGraph, place, parcel.place),
//           pickUp: true,
//         };
//       } else {
//         return {
//           route: findRoute(roadGraph, place, parcel.address),
//           pickUp: false,
//         };
//       }
//     });

//     // This determines the precedence a route gets when choosing.
//     // Route length counts negatively, routes that pick up a package
//     // get a small bonus.
//     function score({ route, pickUp }) {
//       return (pickUp ? 0.5 : 0) - route.length;
//     }
//     route = routes.reduce((a, b) => (score(a) > score(b) ? a : b)).route;
//   }

//   return { direction: route[0], memory: route.slice(1) };
// }

compareRobots(goalOrientedRobot, [], myRobot, []);
