var numberOfClicks = 0;
// For liking a post
function likePost() {
    document.getElementById("likePostBtn").innerHTML = "<i class='fa fa-thumbs-up'></i>Liked";
    
    numberOfClicks += 1;
    if (numberOfClicks !== 0) {
        if (numberOfClicks == 1) {
            document.getElementById('likesCount').innerHTML = numberOfClicks + " person likes this!";
        } else {
            document.getElementById('likesCount').innerHTML = numberOfClicks + " people like this!";
        }
    }
}

// For adding a comment
function addComment() {
    var comment = document.getElementById('commentText').value;
    var node = document.createElement("div");
    node.innerHTML = "<br>"
    node.style.backgroundColor = "#fff";
    node.style.margin = "10px 10px 10px 10px";
    node.style.padding = "0 20px 20px 10px";
    var textnode = document.createTextNode(comment);
    node.appendChild(textnode);

    if (comment === "") {
        alert("Please add a comment!");
    } else {
        var latestComment = document.getElementById("allCommentsBox");
        latestComment.style.display = "block";
        latestComment.insertBefore(node, latestComment.childNodes[0]);
        document.getElementById('commentText').value = "";
    }
}

// For editing the post
function toggleEditSave() {
    if (document.getElementById('post-Text').getAttribute("contentEditable") === "true") {
        document.getElementById('post-Text').setAttribute("contentEditable", "false");
        document.getElementById('Title').setAttribute("contentEditable", "false");
        document.getElementById('post-Text').style.border = "none";
        document.getElementById('Title').style.border = "none";
        document.getElementById('editPostButton').innerHTML = "Edit<i class='fa fa-edit'></i>";
    } else {
        document.getElementById('post-Text').setAttribute("contentEditable", "true");
        document.getElementById('Title').setAttribute("contentEditable", "true");
        document.getElementById('post-Text').style.border = "2px solid pink";
        document.getElementById('Title').style.border = "2px solid pink";
        document.getElementById('editPostButton').innerHTML = "Save<i class='fa fa-save'></i>";
    }
}