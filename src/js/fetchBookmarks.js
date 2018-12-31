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
                                                <a onclick="deleteBookmark('${url}')" class="btn btn-danger" href="#">Delete</a>
                                                </h3>
                                                </div>`;
            
            } 
    }
         
}

export { fetchBookmarks };