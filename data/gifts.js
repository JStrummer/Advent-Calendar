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
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(14, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(15, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(16, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(17, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(18, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(19, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(20, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
  show: showGift});
gifts.set(21, {
  preview: "graphic/img/santa.png",
  src: "graphic/img/santa.png",
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
