// tslint:disable:max-line-length
const baby0 = require('../../images/Projects/baby0.jpg');
const baby1 = require('../../images/Projects/baby1.jpg');
const dino0 = require('../../images/Projects/dino0.jpg');
const dino1 = require('../../images/Projects/dino1.jpg');
const toys0 = require('../../images/Projects/toys0.jpg');
const toys1 = require('../../images/Projects/toys1.jpg');

export interface Details {
  body: string;
  pictures: string[];
  header: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  details: Details;
}

export const projects: Project[] = [{
  id: 0,
  title: 'Junior',
  description: 'Hey it\'s me Junior, I\m a fun little tike and I like to poo my pants and listen to mozart at night, tee hee :)' ,
  image: baby0,
  details: {
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    pictures: [baby0, toys0, toys1],
    header: 'header0',
  }
  }, {
  id: 1,
  title: 'Billy',
  description: 'Sup dude, I\'m Billy the baby, I like little dinos that go roar and stuff like that, I think its super exciting, you feel me?',
  image: baby1,
  details: {
    body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    pictures: [baby1, dino0, dino1],
    header: 'header1',
  }
}]; 
