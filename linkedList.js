"use strict";

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     const newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = this.tail.next; //he put newNode here
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.head) return undefined;
//     let curNode = this.head;
//     if (this.length === 1) {
//       this.head = this.tail = null;
//       this.length = 0;
//       return curNode;
//     } else {
//       while (curNode.next.next) {
//         curNode = curNode.next;
//       }
//       let lastNode = curNode.next;
//       this.tail = curNode;
//       curNode.next = null;
//       this.length--;
//       return lastNode;
//     }
//   }
//   shift() {
//     if (!this.head) return undefined;
//     let nodeToReturn = this.head;
//     if (this.length === 1) {
//       this.head = this.tail = null;
//       this.length = 0;
//     } else {
//       this.head = this.head.next;
//       this.length--;
//     }
//     return nodeToReturn;
//   }
//   unshift(val) {
//     if (!this.head) this.push(val);
//     let newNode = new Node(val);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   get(index) {
//     if (index >= this.length || index < 0) return undefined;
//     let counter = 0;
//     let nodeToReturn = this.head;
//     while (counter < index) {
//       nodeToReturn = nodeToReturn.next;
//       counter++;
//     }
//     return nodeToReturn || undefined;
//   }
//   // implemented a different set method of the one in the course
//   //mine sets an node at index X , shifting the nodes after it, not replacing the node an index X

//   insert(index, val) {
//     if (index >= this.length || index < 0) return undefined;
//     if (index === 0) {
//       this.unshift(val);
//       return this;
//     }
//     if (index === this.length) {
//       this.push(val);
//       return this;
//     }
//     let rightNode = this.get(index - 1);
//     let nodeToInsert = new Node(val);
//     nodeToInsert.next = rightNode.next;
//     rightNode.next == nodeToInsert;
//     this.length++;
//     return this;
//   }
//   //the get from the course:
//   set(index, val) {
//     let nodeToUpdate = this.get(index);
//     if (!nodeToUpdate) return false;
//     nodeToUpdate.value = val;
//     return true;
//   }
// }

// const list = new SinglyLinkedList();
// list.push("pop");
// list.push(" e ");
// list.push(" smecher");
// list.push("ndsjkd");
// list.push("jdskjd");
// list.push("sdsds");
// console.log(list);
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
// list.pop();

// class Human {
//   #solarSystem = "in pula cu satelitu";
//   constructor(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }
//   eat() {
//     console.log("this human is eating");
//   }
//   #getPlanet() {
//     return "Earth";
//   }
//   getSolarSystem() {
//     return this.#solarSystem;
//   }
//   setSolarSystem() {
//     this.#solarSystem = "la dracu";
//   }
//   static getHuman() {
//     console.log("get human");
//   }
// }
// // Human.prototype.planet = "Earth";
// class Male extends Human {
//   constructor(name, birthYear, penisLength) {
//     super(name, birthYear);
//     this.penisLength = penisLength;
//   }
//   fuck() {
//     console.log("this man fucks");
//   }
// }
// class Female extends Human {
//   constructor(name, birthYear, breastSize) {
//     super(name, birthYear);
//     this.breastSize = breastSize;
//   }
//   breasFeed() {
//     console.log("this woman is breastfeeding");
//   }
// }
// class Adult extends Human {
//   hasRightToDrinckAlcohol = true;
//   constructor(name, birthYear, maritalStatus) {
//     super(name, birthYear);
//     this.maritalStatus = maritalStatus;
//   }
//   drinkAndDrive() {
//     console.log("this adult drinks and drives", this);
//   }
// }

// class Employee extends Adult {
//   hasWage = true;
//   constructor(name, birthYear, maritalStatus, wage) {
//     super(name, birthYear, maritalStatus);
//     this.wage = wage;
//   }
//   receiveSalary() {
//     console.log("this employee received the salary. money goes brrr");
//   }
// }

// class Developer extends Employee {
//   workField = "IT";
//   constructor(name, birthYear, maritalStatus, wage, mainLanguage) {
//     super(name, birthYear, maritalStatus, wage);
//     this.mainLanguage = mainLanguage;
//   }
//   codes() {
//     console.log("thsi developer codes. keyboard goes brr");
//   }
// }
// class Manager extends Employee {
//   workField = "management";
//   constructor(name, birthYear, maritalStatus, wage, teamMembersNo) {
//     super(name, birthYear, maritalStatus, wage);
//     this.teamMembersNo = teamMembersNo;
//   }
//   evaluatesPerformance() {
//     console.log("thsi manager evaluates your performance");
//   }
// }

// const georgel = new Developer("georgel", 1997, "single", 1000, "python");
// console.log(georgel.hasOwnProperty("#planet"));
// // console.log(georgel.getPlanet());
// // georgel.setSolarSystem();
// console.log(georgel instanceof Employee);
// Object.freeze(georgel);
// // georgel.ion = "ion";
// // georgel.getHuman();
// Employee.getHuman();
// class Mother extends Female {
//   constructor(name, birthYear, breastSize) {
//     super(name, birthYear, breastSize);
//   }
// }
// const obj = {
//   drinkAndDrive: Adult.prototype.drinkAndDrive,
// };
// Object.assign(Mother.prototype, obj);
// const kjdksjd = new Mother();
// kjdksjd.drinkAndDrive();

// const addOne = function () {
//   let result = 0;
//   return function () {
//     return ++result;
//   };
// };

// const x = addOne();

// const y = addOne();

// const z = addOne();

// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());
// console.log(y());
// console.log(y());
// console.log(y());
// console.log(z());
// console.log(z());

// class ggg {
//   constructor(callback) {
//     callback(this.log);
//     this.result = "val";
//   }
//   log() {
//     console.log("the log fn");
//     this.state = "from log fn";
//   }
// }

// let dd = new ggg(function (callback) {
//   if (1) callback.call(ggg.prototype);
// });
// console.log(dd.state);

// const promise = function () {
//   return new Promise(function (resolve, reject) {
//     let x = 0;
//     let y;
//     while (x < 1000000) {
//       let a = 904382958405894;
//       let b = a % 17;
//       y = b;
//       x++;
//     }
//     resolve(y);
//   });
// };

// promise().then((result) => console.log(`from promise: ${result}`));
// console.log("from global");
var removeElement = function (nums, val) {
  if (val > 50) return nums.length;
  if (nums.length === 0) return 0;
  let lastElmIndex = nums.length - 1; //4
  for (let index = lastElmIndex; index >= 0; index--) {
    if (nums[index] === val) {
      [nums[index], nums[lastElmIndex]] = [nums[lastElmIndex], nums[index]];
      lastElmIndex--;
    }
  }
  return lastElmIndex + 1;
};
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
