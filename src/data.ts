import { IImages, ISong } from './interfaces';
import loseControlImage from './assets/images/lose-control-530.png';
import masterBlasterImage from './assets/images/master-blaster-530.png';
import umaChanceImage from './assets/images/uma-chance-530.png';

export const images: IImages = {
  loseControl: loseControlImage,
  masterBlaster: masterBlasterImage,
  umaChance: umaChanceImage,
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
];
