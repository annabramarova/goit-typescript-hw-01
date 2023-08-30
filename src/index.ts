import { concatenation } from './concatenation';

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}


//const button = document.getElementById("button")! as HTMLInputElement;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });


// let age: number;
// age = 50;
// let personName: string;
// personName = 'Max';
// let toggle: boolean;
// toggle = true;
// let empty: null;
// empty = null;
// let notInitialize: undefined;
// notInitialize = undefined;
// let callback: (a: number) => number;
// callback = (a) => { return 100 + a };

// let anything: any;
// anything = -20;
// anything = 'Text';
// anything = {};

// let some: unknown;
// some = 'Text';
// let str;

// if (typeof some === 'string') {
// str = some;
// }

// let person: [string, number];
// person = ['Max', 21];

// enum Status { LOADING, READY };
// let page = {
//   loading : Status.LOADING
// }
// if (page.loading === Status.LOADING) {
//   console.log('Cтраница загружается')
// }
// if (page.loading === Status.READY) {
//   console.log('Cтраница загружена')
// }


// let union: string | number;
// union = 400;
// union = '400';

// let literal: 'enable' | 'disable';
// literal = 'enable';

// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number{
//   return num1 + num2;
// }

// function customError(): never{
//   throw new Error('Error');
// }

// type DatabaseData = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: 'open' | 'close';
//   details?: {
//     createAt: Date,
//     updateAt:Date,
//   }
// }

// const page1: DatabaseData = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: new Date(),
//     updateAt: new Date()
//   }
// }

// const page2: DatabaseData = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }