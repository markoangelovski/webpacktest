import { fetchBookmarks } from './fetchBookmarks';
import { saveBookmark } from './saveBookmark';

// Listen for page load
export var fetch = document.addEventListener("DOMContentLoaded", fetchBookmarks());

// Listen for form submit
export var submit = document.getElementById('myForm').addEventListener('submit', saveBookmark);