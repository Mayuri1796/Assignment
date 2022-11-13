import logoCard from './logo-card.twig';
import logoCardData from './logo-card.yml';
import './logo-card.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/banner-slider-card ' };

export const logocard = () => logoCard(logoCardData);
