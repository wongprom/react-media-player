import { IImages, ISong } from './interfaces';
import loseControlImage from './assets/images/lose-control-530.png';
import masterBlasterImage from './assets/images/master-blaster-530.png';
import umaChanceImage from './assets/images/uma-chance-530.png';
import worldOnFireImage from './assets/images/world-on-fire-530.png';

export const images: IImages = {
  loseControl: loseControlImage,
  masterBlaster: masterBlasterImage,
  umaChance: umaChanceImage,
  worldOnFire: worldOnFireImage,
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
    title: 'World on Fire ',
    artist: 'Stick Figure & Slightly Stoopid',
  },
];
