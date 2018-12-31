import { deleteBookmark } from './deleteBookmark';

// Fetch bookmarks
function fetchBookmarks(){
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    // Get output id
    var bookmarkResults = document.getElementById("bookmarksResults");

    // Build output
    bookmarkResults.innerHTML = "";
    if(localStorage.getItem('bookmarks') === null){
        return;
    } else {
        for(var i = 0; i < bookmarks.length; i++){
            var name = bookmarks[i].name;
            var url = bookmarks[i].url;
        
            bookmarkResults.innerHTML += `<div class="well">
                                                <h3>${name}
                                                <a class="btn btn-default" target="_blank" href="http://${url}">Visit</a>
                                                <a class="delete btn btn-danger" href="#">Delete</a>
                                                </h3>
                                                </div>`;
            } 
        // Add eventListener to Delete Buttons
        var deleteButtons = bookmarkResults.querySelectorAll(".delete");
        for (var j = 0; j < deleteButtons.length; j++){
            deleteButtons[j].addEventListener("click", deleteBookmark.bind(this, url));
        };
    }
         
}

export { fetchBookmarks };