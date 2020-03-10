`\  a// function harmLessRansomNote (noteText, magazineText) {

// }

// Big O can give us an idea of how long an algorithim will take to complete based on input size //

function log(array) {
  console.log(array[0]);
  console.log(array[1]);
} 

log ([1,2,3,4]);
log ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//run time will be constant becasue as the input size increasees the number of opersations we before never changes//

//linear runtime
//Big O notation: "O (n)"

function logALl(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

logAll ([1,2,3,4,5]);
logAll ([1,2,3,4,5,6]);
logAll ([1,2,3,4,5,6,7]);



// function binarySearch(array, key) {
//   var low = 0;
//   var high = array.length -1;
//   var mid;
//   var element;
//   while (low<= high) {
//     mid = Math.floor ((low+high) / 2, 10);
//     elemtn = array[mid];
//     if (element < Key) {
//       low = mid + 1;
//       else if (element>key) {
//         high = mid-1;
//       }else {
//         return mid;
//       }
//     }
//     return - 1;
//   }
//  }

// }

