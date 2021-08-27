console.log('**lev1_1: Arrays');
const adresse=['sandweg',60316, 'Frankfurt','Hessen'];
const besteFreunde=['Anntte','Yooni', 'Heelee'];
const person=['Ella', 'Choy', 'bear', 46,'kochen', 'seoul','supercode' ];

console.log(adresse);
console.log(`This is the array besteFreunde: ${besteFreunde}`);
console.log(`This is the array person:${person} `);

const mix1=person.concat(adresse);
// console.log(`This is the array combine: ${mix1}`);
const mix2=mix1.concat(besteFreunde);
console.log(`This is the array combine: ${mix2}`);

for(let i=0; i< person.length; i++) {
    console.log(person[i]);
}

console.log('');
console.log('');
console.log('**lev1_1_2: Arrays length');
console.log(`This is the array length of person: ${person.length}`);
console.log(`This is the array length of besteFreunde: ${besteFreunde.length}`);
console.log(`This is the array length of adresse: ${adresse.length}`);

console.log('');
console.log('');
console.log('**lev1_2: Arrays 3 Möglichkeiten');

const meinerTrainer1=['Annas','Elain','Eric','Steffen','Ebru'];
console.log(meinerTrainer1);

let meineTrainer2 = new Array("Georg", "Anass", "Elaine", "Hakan");
console.log(meineTrainer2);

let meineTrainer3= new Array();
meineTrainer3[0] = "Georg";
meineTrainer3[1] = "Anass";
meineTrainer3[2] = "Elaine";
meineTrainer3[3] = "Hakan";
console.log(meineTrainer3);

console.log('');
console.log('');
console.log('**lev1_3: Arrays index');

let  number= new Array(5,6,7,8,9,10);
console.log(number);
number.forEach(function(number,index){
console.log(`${index}:  ${number}`);
});
console.log(`length: ${number.length}`);
console.log(`numberArray[4]: ${number[4]}`);
console.log(`numberArray[0]: ${number[0]}`);
console.log(`numberArray[10]: ${number[5]}`);

console.log('');
console.log('');
console.log('**lev1_4: Arrays Split()');

let meinText1= "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.";
let meinText2="Wie geht es dir heute?";
let meinText3="Heute ist ein großer Tag für uns.";

const splite1= meinText1.split();
console.log(splite1);
const splite2= meinText1.split("");
console.log(splite2);
const splite3= meinText1.split(" ");
console.log(splite3);

const splite4= meinText2.split();
console.log(splite4);
const splite5= meinText2.split("");
console.log(splite5);
const splite6= meinText2.split(" ");
console.log(splite6);

const splite7= meinText3.split();
console.log(splite7);
const splite8= meinText3.split("");
console.log(splite8);
const splite9= meinText3.split(" ");
console.log(splite9);


