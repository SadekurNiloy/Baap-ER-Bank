
document.getElementById('btn-submit').addEventListener('click', function(){
    const  eamilField = document.getElementById('user-email');
    const email = eamilField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);
    if(email === 'sadikniloy360@gmail.com' && password === 'web-developer') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid user');
    }
});

