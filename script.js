// TASK1
// 4 esas funksiyaniz olacaq(Topla(),Cixma(),Vurma(),Bolme()).Bir Callback funksiyaniz olacaq(Output()).Kalkulyator yazacaqsiz.Işləmə prinsipi aşağıdakı kimi olacaq.
// Switch case olacaq 4 ədəd.topla,cixma,vurma,bolme caseləri olacaq.Key olaraq bunlardan hər hansı biri seçilsə yuxarıdakı funksiyaları işlədəcək.


// let cem;
// function Toplama(num1, num2, callback) {
//     cem = num1 + num2;
//     return callback(cem);
// }
// let cixma;
// function Cixma(num1, num2, callback) {
//     cixma = num1 - num2;
//     return callback(cixma);
// }
// let vurma;
// function Vurma(num1, num2, callback) {
//     vurma = num1 * num2;
//     return callback(vurma);
// }
// let bolme;
// function Bolme(num1, num2, callback) {
//     bolme = num1 / num2;
//     return callback(bolme);
// }
// function Output(result) {
//     console.log(result);
// }



// Vurma(1, 7, Output)

// switch (Output) {
//     case Toplama:
//         Toplama(num1, num2, Output);
//         break;
//     case Cixma:
//         Cixma(num1, num2, Output);
//         break;
//     case Vurma:
//         Vurma(num1, num2, Output);
//         break;
//     case Bolme:
//         Bolme(num1, num2, Output);
//         break;
//     default:
//         break;
// }



// TASK2
// Toplamda 3 funksiyaniz olacaq.Verilən arrayda ilk funksiyada tək ədədləri tapacaqsız.İkinci funksiyada bu tək ədədlərdən 3 və 5ə bölünənləri tapib Output funksiyasına göndərəcəksiz.
debugger
let arr = [3, 5, 7, 9, 30, 15, 45, 17, 60,75]
function TekEdedler(arr, callback) {
    let newArray = arr.filter(x => x % 2 !== 0);
    return callback(newArray);
}

function UcBesBolunen(newArray, callback) {
    let newUcBesArray = newArray.filter(x => x % 3 === 0 && x % 5 === 0);
    return callback(newUcBesArray);
}

function Output(result) {
    console.log(result);
}

TekEdedler(arr, function (tekEdedlerArray) {
    UcBesBolunen(tekEdedlerArray, Output);
});
debugger