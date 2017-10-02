import React from 'react';
import _ from 'lodash';

export const toTitle = (string) => {
  let title = [];
  const words = string.split('-');
  _.forEach(words, (word) => {
    let newWord = word[0].toUpperCase() + word.slice(1);
    title.push(newWord);
  });
  title = title.join(' ');

  return title;
};

export const images = {
  about: 'http://res.cloudinary.com/dzyfczxnr/image/upload/v1486001602/fishman/IMG_1254_f2zgkq.jpg',
  main: 'https://static.pexels.com/photos/92080/pexels-photo-92080.jpeg',
  media: 'https://static.pexels.com/photos/230800/pexels-photo-230800.jpeg',
  tour: 'https://static.pexels.com/photos/9137/night-vintage-music-bokeh.jpg'
};

export const songTracks = [
  {
    title: "Honey Won't You Stay",
    src: "http://res.cloudinary.com/dzyfczxnr/video/upload/v1488865244/fishman/honey.mp3"
  },
  {
    title: "Try Again",
    src: "http://res.cloudinary.com/dzyfczxnr/video/upload/v1495396712/Try%20Again.m4a"
  },
  {
    title: "Shadow of a Man",
    src: "http://res.cloudinary.com/dzyfczxnr/video/upload/v1495397101/Shadow%20of%20a%20man.m4a"
  },
  {
    title: "Who Do You Love",
    src: "http://res.cloudinary.com/dzyfczxnr/video/upload/v1497412846/Who%20Do%20You%20Love.m4a"
  }
];

export const tourDates = [

];

export const videos = [
  {
    src: 'https://www.youtube.com/embed/OK5j3ds7qkQ',
    title: "Honey Won't You Stay"
  },
  {
    src: 'https://www.youtube.com/embed/ayd0gUK435Y',
    title: "Shadow of a Man"
  },
  {
    src: 'https://www.youtube.com/embed/P9AFh3b2tTw',
    title: "Try Again"
  }
];


export const data = {
  email : 'dannyfishmanmusic@gmail.com'
};
