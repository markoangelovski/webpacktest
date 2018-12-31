import { validateForm } from './validateForm';
import { fetchBookmarks } from './fetchBookmarks';

// Save Bookmark
function saveBookmark(e){
    // Get form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
  
    if(!validateForm(siteName, siteUrl)){
        return false;
    }
  
    var bookmark = {
      name: siteName,
      url: siteUrl
    }
  
    // Set bookmark
    if(localStorage.getItem('bookmarks') === null){
      // Init array
      var bookmarks = [];
      // Add to array
      bookmarks.push(bookmark);
      // Set to localStorage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
      // Get bookmarks from localStorage
      var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      // Add bookmark to array
      bookmarks.push(bookmark);
      // Re-set back to localStorage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
  
    // Clear form
    document.getElementById("myForm").reset();
  
    // Re-fetch bookmarks
    fetchBookmarks();
  
    // Prevent form from submitting
    e.preventDefault();
  }

  export { saveBookmark };