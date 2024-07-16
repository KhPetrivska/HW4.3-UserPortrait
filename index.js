'use strict'
//Age
const userBirthYear = prompt("Вкажи свій рік народження");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let ageMess = '';

if (userBirthYear === null ) {
  alert("Шкода, що Ви не захотіли ввести свою дату народження");
} else if (!userBirthYear.trim()) {
    alert("Пустий рядок");
} else if(isNaN(userBirthYear)) {
    alert("Використовуйте лише цифри.")
} else {
   if( userBirthYear > currentYear || userBirthYear < 1907 ){
      alert("Невалідний рік народження.")
   } else {
        const userAge = currentYear - userBirthYear
        ageMess = `Тобі ${userAge}.`
   }
}

//City
let userCity = prompt("Вкажи місто в якому проживаєте?");
let cityMess = '';
if (userCity === null ){
    alert("Шкода, що Ви не захотіли ввести своє місто.");
} else if (!userCity.trim()){
    alert("Пустий рядок");
} else {
    userCity = userCity.trim();
    switch (userCity){
    case "Київ":
        cityMess = "Ти живеш у столиці України.";
    break;
    case "Вашингтон":
        cityMess = "Ти живеш у столиці США.";
    break;
    case "Лондон":
        cityMess = "Ти живеш у столиці Великої Британії.";
    break;
    default:
        cityMess = `Ти живеш у ${userCity}.`;
    }
}

//Sport
const userSport = prompt("Введи назву улюбленого виду спорту.");
let sportMess = ""
if (userSport === null ){
    alert("Шкода, що Ви не захотіли ввести свій улюблений спорт.");
} else if (!userSport.trim()){
    alert("Пустий рядок.")
}else{
        switch(userSport.trim().toLowerCase()){
        case "бокс":
            sportMess = "Круто! Хочеш стати як Усик?";
        break;
        case "футбол":
            sportMess = "Круто! Хочеш стати як Рональдо?";
        case "баскетбол":
            sportMess = "Круто! Хочеш стати як Джордан?";
        break;
        default:
           sportMess = `Твій улюблений вид спорту - ${userSport.trim()}.`
        
        } 
}

alert( `
Результати:
${ageMess ? ageMess : "Шкода, що Ви не захотіли ввести свою дату народження."}
${cityMess ? cityMess : "Шкода, що Ви не захотіли ввести своє місто."}
${sportMess ? sportMess : "Шкода, що Ви не захотіли ввести свій улюблений спорт."}
`)
