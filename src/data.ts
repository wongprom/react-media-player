import { IImages, ISong } from './interfaces';
import loseControlImage from './assets/images/lose-control-530.png';
import masterBlasterImage from './assets/images/master-blaster-530.png';
import umaChanceImage from './assets/images/uma-chance-530.png';
import worldOnFireImage from './assets/images/world-on-fire-530.png';
import easyImage from './assets/images/easy-530.png';
import noLoveDubplateImage from './assets/images/no-love-dubplate-530.png';
import eighteenImage from './assets/images/18-530.png';
import tennesseeWhiskeyImage from './assets/images/tennessee-whiskey-530.png';
import jealousyImage from './assets/images/jealousy-530.png';

export const images: IImages = {
  loseControl: loseControlImage,
  masterBlaster: masterBlasterImage,
  umaChance: umaChanceImage,
  worldOnFire: worldOnFireImage,
  easy: easyImage,
  noLoveDubplate: noLoveDubplateImage,
  eighteen: eighteenImage,
  tennesseeWhiskey: tennesseeWhiskeyImage,
  jealousy: jealousyImage,
};

export const songs: ISong[] = [
  {
    id: '1',
    image: images.umaChance,
    title: 'Uma Chance (feat Ricky Boy & Loony Johnson)',
    artist: 'Djodje',
  },
  {
    id: '2',
    image: images.masterBlaster,
    title: "Master Blaster (Jammin') (12' Version)",
    artist: 'Stevie Wonder',
  },
  {
    id: '3',
    image: images.loseControl,
    title: 'Lose Control',
    artist: 'Teddy Swims',
  },
  {
    id: '4',
    image: images.worldOnFire,
    title: 'World on Fire',
    artist: 'Stick Figure & Slightly Stoopid',
  },
  {
    id: '5',
    image: images.easy,
    title: 'Easy',
    artist: 'Stray Kids',
  },
  {
    id: '6',
    image: images.noLoveDubplate,
    title: 'No Love Dubplate',
    artist: 'Queen Omega',
  },
  {
    id: '7',
    image: images.eighteen,
    title: '18 ฝน',
    artist: 'Thanapon Intharit',
  },
  {
    id: '8',
    image: images.tennesseeWhiskey,
    title: 'Tennessee Whiskey',
    artist: 'Chris Stapleton',
  },
  {
    id: '9',
    image: images.jealousy,
    title: 'Jealousy',
    artist: 'Wim',
  },
];
