// For opening Sign up Modal
function openSignupModal() {
    document.getElementById('signUpModal').style.display = 'block';
}

//For opening Signin Modal
function openSigninModal() {
    document.getElementById('signInModal').style.display = 'block';
}

//For opening signup Modal and closing signin modal
function displaySignupModal() {
    document.getElementById('signInModal').style.display = 'none';
    document.getElementById('signUpModal').style.display = 'block';
}
// For create post modal
function opencreatePostModal(){
    document.getElementById('CreatePost').style.display = 'block';
}