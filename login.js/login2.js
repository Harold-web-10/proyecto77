const (login) =>{
 const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = firebase.auth().currentUser;
    if (user) {
        // User is signed in.
        console.log('User is signed in');
    } else {
        // No user is signed in.
        console.log('No user is signed in');
    }
}