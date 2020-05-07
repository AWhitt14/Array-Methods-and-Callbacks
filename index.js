import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const a = (x) => {
    let final = x.filter(y => y.Year === 2014 && y.Stage === "Final");

    console.log(`Home Team: ${final[0]["Home Team Name"]}, Away Team: ${final[0]["Away Team Name"]}, Home Goals: ${final[0]["Home Team Goals"]}, Away Goals: ${final[0]["Away Team Goals"]}, Winner of 2014 World Cup Final: ${final[0]["Home Team Initials"]}`);
}

a(fifaData);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(data){
    let Finals = data.filter(x => x.Stage === "Final");
    return Finals;
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb){
let years = [];
const a = cb;
a.forEach(function(item){
    years.push(item.Year);
});
return years;
}
console.log(getYears(getFinals(fifaData)))

// console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 
function getWinners(cb){
let Winners = [];
const a = cb;
a.forEach(function(item){
    if (item["Home Team Goals"] > item["Away Team Goals"]){
    Winners.push(item["Home Team Name"]);}
    else {Winners.push(item["Away Team Name"])}
});
return Winners;
}
console.log(getWinners(getFinals(fifaData)));


/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(year,wins) {
let stuff = year.map(function(x,y) {
    return `In ${x}, ${wins[y]} won the world cup`
});

return stuff;

}

console.log(getWinnersByYear(getYears(getFinals(fifaData)),getWinners(getFinals(fifaData))));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, team) {

ldata.reduce()

};

getCountryWins();

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
let avg = data.reduce()  

};

getAverageGoals();


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
