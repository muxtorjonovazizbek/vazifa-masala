// 26. Berilgan ikki massivning umumiy elementlarini toping.

// function commonElements(arr1, arr2) {
//     let sameNums = []
//     arr1.forEach(val => {
//         // console.log(val);
//         if (arr2.includes(val)) {
//             sameNums.push(val)
//         }
//     });
//     return sameNums
// }

// console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// 27. Berilgan ikki qatorning umumiy belgilarini qaytaring.

// function commonCharacters(str1, str2) {
//   let str = [];
//   let found = new Set();
//   for (let item of str1) {
//     if (str2.includes(item) && !found.has(item)) {
//       found.add(item);
//       str.push(item);
//     }
//   }
//   return str.join("");
// }

// console.log(commonCharacters("hello", "world")); // "lo"



// 28. Berilgan ikki massivdan simmetrik farqni toping (faqat birida bor va ikkinchisida yo'q elementlar).

// function symmetricDifference(arr1, arr2) {
//     let new_arr = []
//     for(let item1 of arr1) {
//        if (!arr2.includes(item1)) {
//             new_arr.push(item1)
//        }
//     }
//     for(let item2 of arr2) {
//         if (!arr1.includes(item2)) {
//             new_arr.push(item2)
//         }
//     }
//     console.log(new_arr);
// }

// console.log(symmetricDifference([1, 2, 3], [3, 4, 5])); // [1, 2, 4, 5]



// 29. Berilgan massiv ichida musbat, manfiy va nol qiymatli raqamlarning foizini hisoblang.

// function calculatePercentages(arr) {

//     let musbat = 0
//     let manfiy = 0
//     let zero = 0
//     for(let item of arr) {
      
//         if (item > 0) {
//             musbat++
//         }else if (item < 0) {
//             manfiy++
//         }else {
//             zero++
//         }
//     }
//     let result1 = (musbat / arr.length) * 100
//     let result2 = (manfiy / arr.length) * 100
//     let result3 = (zero / arr.length) * 100
    
//     console.log(result1.toFixed(2), "musbat");
//     console.log(result2.toFixed(2), "manfiy");
//     console.log(result3.toFixed(2), "no'l");
// }

// console.log(calculatePercentages([1, -2, 0, 4, -5, 6, 0])); 
// // {positive: 42.86, negative: 28.57, zero: 28.57}



// 30. Berilgan qator ichidagi har bir belgini faqat bir marta qoldirib, unikal belgilar ketma-ketligini yarating.

// function uniqueCharacters(str) {
//     let arr = []
//     let getUnique = new Set()

//     for(let item of str) {
//         if (!getUnique.has(item)) {
//             getUnique.add(item)
//             arr.push(item)
//         }
//     }
//     return arr.join("")
// }

// console.log(uniqueCharacters("hello world")); // "helo wrd"



// 31. Berilgan massivdan yig'indisi ma'lum bir qiymatga teng bo'lgan sonlar juftligini toping.

// function findPairs(arr, target) {
//     let new_arr = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let g = 0; g < i; g++) {
//             if ((arr[i] + arr[g]) == target) {
//                 new_arr.push(arr[i], arr[g])
                
//             }
            
//         }
        
//     }
//     console.log(new_arr);
// }

// console.log(findPairs([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]] not done yet 

// 32. Berilgan massiv ichidagi har bir raqamning kvadratini hisoblang va yangi massiv qaytaring.

// function squareNumbers(arr) {
//     arr.forEach(val => {
    
//         let result = Math.pow(val,2)
//         console.log(result);
//     });
// }

// console.log(squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]



// 33.Berilgan oraliqda nechta palindrom son borligini toping.

// function countPalindromNumbers(start, end) {
//     let count = 0
//     let palNums = []
//     for (let i = start; i < end; i++) {
//         let str = i.toString()
//         let reverseStr = str.split("").reverse().join("")
     
//         if (str == reverseStr) {
//             count++
//             palNums.push(str)
//         }

        
//     }
//     console.log(count, 'Jami Palindrome');
//     console.log(palNums, "Palindorm Sonlar");
// }

// countPalindromNumbers(1, 100); // 18 (1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99)



// // 34.Berilgan sonlar qatorini vergul bilan ajratilgan qator ko'rinishida qaytaring.

// function joinWithCommas(arr) {
//     let result = arr.toString()
//     console.log(result);
// }

// console.log(joinWithCommas([1, 2, 3, 4, 5])); // "1, 2, 3, 4, 5"