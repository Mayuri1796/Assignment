import herotwig from './hero.twig';
import buttonstwig from '../../01-atoms/buttons/get-button.twig';
import heroData from './hero.yml';
import buttonsData from '../../01-atoms/buttons/get-button.yml';
import './hero.scss';

export default { title: 'Molecules/HeroSection' };

export const Welcome = () => herotwig(heroData);
export const button = () => buttonstwig(buttonsData);
