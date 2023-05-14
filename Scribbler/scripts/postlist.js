//For opening yes / no Modal
function viewDeletePostModal(id) {
    document.getElementById('deletePostModal').style.display = 'block';
    document.getElementById('deletePostModal').setAttribute('idToDelete', id);
}

//For deleting a modal
function deletePost() {
   document.getElementById('deletePostModal').style.display = 'none';
   var idToDelete = document.getElementById('deletePostModal').getAttribute('idToDelete');
    var s = "card" + idToDelete;
    document.getElementById(s).style.display = 'none';
   
}
//For viewing a post
function viewFullPost() {
    window.location.href = "./post.html";
}