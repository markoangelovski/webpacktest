import { fetchBookmarks } from './fetchBookmarks';

// Delete bookmark
function deleteBookmark(url){
    return function() {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    for (var i = 0; i < bookmarks.length; i++){
        if(bookmarks[i].url == url){
            // Remove from array
            bookmarks.splice(i, 1);
        }
    }
    // Re-set back to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    // Re-fetch bookmarks
    fetchBookmarks();
    }
}

export { deleteBookmark };