console.log('hello');

/* part 1 */
let choices = ['rock','paper','scissors'];

function getComputerchoice(arr) {

    ran = Math.floor(Math.random()* arr.length);
    rann = arr[ran];
    return rann;
}
console.log(getComputerchoice(choices));
