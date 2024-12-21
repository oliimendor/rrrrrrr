let a = prompt('Ismingizni kiriting');
let b = prompt('Bironta harf kiriting');

if (a.includes(b)) {
    alert(`${a} ismining ichida ${b} harfi mavjud`);
} else {
    alert(`${a} ismining ichida ${b} harfi mavjud emas`);
}
