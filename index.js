function getName1 (name){
    return 'Имя равно ' + name;
}
console.log(getName1('Alex'));

const getName2 = function (name1) {
    return 'Имя равно ' + name1;
}
console.log(getName2('Dima'));

const getName3 = (name2) => {
    return'Имя равно ' + name2;
}
console.log(getName3('Martin'));