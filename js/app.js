baguetteBox.run('.gallery');
baguetteBox.run('.gallery', {
  captions: true, 
  buttons: 'auto',
  animation: 'slideIn', 
  verlayBackgroundColor: 'rgba(0,0,0,.8)'
});
const search = new Filter('search', 'data-caption');