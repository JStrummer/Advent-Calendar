'use strict'

var gifts = new Map();

gifts.set(1, {
  type: 'image',
  preview: "graphic/img/gifts/selfie_preview.JPG",
  src: "graphic/img/gifts/selfie.gif",
  show: showGift});
  gifts.set(2, {
    type: 'video',
    preview: "graphic/videos/spot_coca_cola_preview.jpg",
    src: "graphic/videos/spot_coca_cola.mp4",
    show: showGift});
gifts.set(3, {
  type: 'video',
  preview: "graphic/videos/last_xmas_preview.jpg",
  src: "graphic/videos/last_xmas.mp4",
  show: showGift});
gifts.set(4, {
  type: 'video',
  preview: "graphic/videos/all_i_want_for_xmas_preview.jpg",
  src: "graphic/videos/all_i_want_for_xmas.mp4",
  show: showGift});
gifts.set(5, {
  type: 'video',
  preview: "graphic/videos/deck_the_hall_preview.jpg",
  src: "graphic/videos/deck_the_hall.mp4",
  show: showGift});
gifts.set(6, {
  type: 'video',
  preview: "graphic/videos/love_actually.jpg",
  src: "graphic/videos/love_actually.mp4",
  show: showGift});
gifts.set(7, {
  type: 'video',
  preview: "graphic/videos/Bridget.jpg",
  src: "graphic/videos/Bridget.mp4",
  show: showGift});
gifts.set(8, {
  type: 'video',
  preview: "graphic/videos/botox.jpg",
  src: "graphic/videos/botox.mp4",
  show: showGift});
gifts.set(9, {
  type: 'video',
  preview: "graphic/videos/love_actually_2.jpg",
  src: "graphic/videos/love_actually_2_hd.mp4",
  show: showGift});
gifts.set(10, {
  type: 'video',
  preview: "graphic/videos/elfo.jpg",
  src: "graphic/videos/elfo.mp4",
  show: showGift});
gifts.set(11, {
  type: 'video',
  preview: "graphic/videos/bistefani.jpg",
  src: "graphic/videos/bistefani.mp4",
  show: showGift});
gifts.set(12, {
  type: 'video',
  preview: "graphic/videos/bauli.jpg",
  src: "graphic/videos/bauli.mp4",
  show: showGift});
gifts.set(13, {
  type: 'video',
  preview: "graphic/videos/jump.jpg",
  src: "graphic/videos/jump.mp4",
  show: showGift});
gifts.set(14, {
  type: 'video',
  preview: "graphic/videos/moderno.jpg",
  src: "graphic/videos/moderno.mp4",
  show: showGift});
gifts.set(15, {
  type: 'video',
  preview: "graphic/videos/bowie_bing.jpg",
  src: "graphic/videos/bowie_bing.mp4",
  show: showGift});
gifts.set(16, {
  type: 'video',
  preview: "graphic/videos/buble.jpg",
  src: "graphic/videos/buble.mp4",
  show: showGift});
gifts.set(17, {
  type: 'video',
  preview: "graphic/videos/jingle_bell_rock.jpg",
  src: "graphic/videos/jingle_bell_rock.mp4",
  show: showGift});
gifts.set(18, {
  type: 'video',
  preview: "graphic/videos/rock_around.jpg",
  src: "graphic/videos/rock_around.mp4",
  show: showGift});
gifts.set(19, {
  type: 'video',
  preview: "graphic/videos/celtic.jpg",
  src: "graphic/videos/celtic.mp4",
  show: showGift});
gifts.set(20, {
  type: 'video',
  preview: "graphic/videos/jackson5.jpg",
  src: "graphic/videos/jackson5.mp4",
  show: showGift});
gifts.set(21, {
  type: 'video',
  preview: "graphic/videos/legend.jpg",
  src: "graphic/videos/legend.mp4",
  show: showGift});
gifts.set(22, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(23, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(24, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});

function showGift () {
  var giftContainer = document.querySelector('#gift-container');
  var closeBtn = document.querySelector('#close-button');
  var giftImage = document.querySelector('img.gift');
  var giftVideo = document.querySelector('video.gift')

  if (this.type == 'image') {
    giftImage.src = this.src;
    giftImage.style.display = 'block';
    giftVideo.style.display = 'none';
  } else if (this.type == 'video') {
    giftVideo.src = this.src;
    giftVideo.style.display = 'block';
    giftVideo.style.display = 'block';
    giftImage.style.display = 'none';
    closeBtn.addEventListener('click', function stopVideo () {
      giftContainer.querySelector('video').pause();
    })
  }

  giftContainer.style.display = "block";
  closeBtn.addEventListener('click', closeGift);
}

function closeGift () {
  var giftContainer = document.querySelector('#gift-container');
  var closeBtn = document.querySelector('#close-button');
  giftContainer.style.display = "none";
  closeBtn.removeEventListener('click', closeGift);
}
