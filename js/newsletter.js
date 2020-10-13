const newsBtnContainer = document.querySelector('.news_categories');
const newsBtns = document.querySelectorAll('.category_btn');
const newsItemContainer = document.querySelector('.news_container');
const newsItems = document.querySelectorAll('.news_item');

newsBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null) { return;}
  newsItemContainer.classList.add('ani_out');
  setTimeout(() => {
    newsItems.forEach((newsItem) => {
      if (filter === '*') {
        newsItem.classList.remove('none');
        newsItem.classList.remove('size');
      } else if (filter === newsItem.dataset.type) {
        newsItem.classList.remove('none');
        newsItem.classList.add('size');
      } else {
        newsItem.classList.add('none');
      }
    });
    newsBtns.forEach((newsBtn) => {
      if (filter === newsBtn.dataset.filter) {
        newsBtn.classList.add('active');
      } else {
        newsBtn.classList.remove('active');
      }
    });
    newsItemContainer.classList.remove('ani_out');
  }, 300);
});
