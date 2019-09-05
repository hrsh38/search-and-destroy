'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let obj = {};
    let curr = linkedlist.head;
    while (curr.next !== null){
        if (obj[curr.value]){
            return true;
        }
        else {
            obj[curr.value] = true;
        }
        curr = curr.next;
    }
    return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop