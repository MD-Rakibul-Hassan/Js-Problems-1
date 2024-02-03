/****** Basic Js Problem Solving *******/

// Problem 1 :  Ludu Khalai 1 Thaka 6 Pojnto Randomly Rrent Karo 
function LuduKhala (min,max) {
      let random = Math.floor(Math.random() * max) + min;
      return random;
}
let randomNumber = LuduKhala(1,6);
console.log(randomNumber)

// Problem 2 : Sort Your All Friend Names By Alphabaticly 
// All frends name array
const allFrends = ["Rakib","Shehab","Hassan","Biplab","Sujon"];
function SortingAllNames (allNames) {
      const sortedName = Array.from(allNames).sort();
      return sortedName;
}
const allSortedNames = SortingAllNames(allFrends);
console.log(allSortedNames);

// Problem 3 : Sorted Your All Frends Roll Number By Assinding To Decnding Order
// All Roll Numbers Array 
const allRollNumbers = [45,30,8,15,72,85,46];
function SortedRoll (rolls) {
      // The sort method muted main array 
      return  rolls.sort( (a,b) => a - b); 
}
SortedRoll(allRollNumbers);
console.log(allRollNumbers);

// Problem 4 : Find A Year isLeap Year Or Not ?
function isLeap (year) {
      if (year % 4 === 0) {
            return `${year} Is Leap Year`
      }else {
            return `${year}  Is Not Leap Year !`
      }
}
const leapYear = isLeap(2026);
console.log(leapYear);

// Problem 5 : Count How Much Vowel Is Occeanced In A Sentence 
const vowels = ["a","e","i","o","u","A","E","I","O","U"];
function coutnVowels (sentence) {
      let count = 0;
      for (value of sentence) {
            if (vowels.includes(value)) {
                 count++;
            }
      }
      return count;
}
const voweles = coutnVowels("I  am Rakibul Hassan Shehab");
console.log(voweles);

// Problem 6 : Find dublicat value form array
const numbers = [1,2,3,1,5,4,2,4,5];
function findDublicat (array) {
      const dublicats = array.filter ( (value,index,arr) => {
            return arr.indexOf(value) !== index;
      });
      return dublicats;
}
console.log(findDublicat(numbers))
