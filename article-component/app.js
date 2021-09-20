// store ".share" & ".share-img" in variables
const share = document.querySelector('.share');
const shareIcon = document.querySelector('.share-img');
const shareClose = document.querySelector('.share-mobile-close');

// listen for click on icon
shareIcon.addEventListener('click', (e) => {
  // Within listner
  // show/hide correct share menu
  // avoid shutting the share popup when clicking on it

  if (e.target === shareIcon) {
    if (window.innerWidth <= 750) {
      share.classList.toggle('active-share-mobile');
      return;
    }

    share.classList.toggle('active-share-desktop');
  }
});

shareClose.addEventListener('click', () => {
  share.classList.toggle('active-share-mobile');
  return;
});