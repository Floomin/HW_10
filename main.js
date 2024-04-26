let UserName = prompt('Підкажіть, як вас звати? Напевно:', 'Сергій')
console.log(UserName);
if (UserName == null || UserName =='') {
    alert(`Як не ввічливо!`);
}
else {
    alert(`Hello, ${UserName}! How are you?`);
}
