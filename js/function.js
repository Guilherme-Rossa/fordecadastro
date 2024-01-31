function salvarDados() {
    const username = document.getElementById('username').value;
    const useremail = document.getElementById('useremail').value;
    const usertel = document.getElementById('usertel').value;

    const userData = {
        username,
        useremail,
        usertel
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Dados salvos com sucesso!');

    return false;
}


