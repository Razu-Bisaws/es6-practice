const person = {
    name: 'jack willam',
    age: 16,
    job: 'facebooker',
    gfName: 'Ema Watson',
    adress: 'kocho ket',
    phone: '098765455',
    friends: ['tom', 'bom']
}
const { phone, gfName, age } = person;
// const gfName = person.gfName;
// const gfName = person.gfName;
// const phone = person.phone;
// console.log(gfName, phone, age);
// console.log(gfName, phone, age);

const friends = ['omi', 'tomi', 'komi', 'jake', 'kake']
const [chotofriend, ...old] = friends;
console.log(chotofriend, old);

const complexObject = {
    name: 'abs',
    info:{
        adress: 'kola bagan',
        leader: 'tiger',
    }
}
const {leader} = complexObject.info;