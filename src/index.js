/**
This file should import the fruits and both array helpers. It should then:

Randomly draw a fruit from the array
Log the message “I’d like one RANDOMFRUIT, please.”
Log the message “Here you go: RANDOMFRUIT”
Log the message “Delicious! May I have another?”
Remove the fruit from the array of fruits
Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”

 */

 import fruitsArr from './foods';
 import {choice, remove} from './helpers';


const want = choice(fruitsArr);
console.log(`I’d like one ${want}, please.`);
console.log(`Here you go: ${want}`);
console.log('Delicious! May I have another?');
remove(fruitsArr,want);
console.log(`I’m sorry, we’re all out. We have ${fruitsArr.length} left.`);
