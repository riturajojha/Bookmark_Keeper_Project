const bookmarkForm = document.getElementById('add-bookmark-form');
const bookmarkList = document.getElementById('bookmark-list');

bookmarkForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const bookmarkName = document.getElementById('bookmark-name').value;
  const bookmarkUrl = document.getElementById('bookmark-url').value;
  
  const bookmark = document.createElement('li');
  const bookmarkLink = document.createElement('a');
  const deleteButton = document.createElement('button');
  
  bookmarkLink.textContent = bookmarkName;
  bookmarkLink.href = bookmarkUrl;
  bookmarkLink.target = '_blank';
  
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    bookmark.remove();
  });
  
  bookmark.appendChild(bookmarkLink);
  bookmark.appendChild(deleteButton);
  bookmarkList.appendChild(bookmark);
  
  bookmarkForm.reset();
});
