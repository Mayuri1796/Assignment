import slicksliderTwig from './slick-slider.twig';
import slicksliderData from './slick-slider.yml';
import './slick-slider.scss';
import './slick-slider';
import 'slick-carousel/slick/slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
/**
 * Storybook Definition.
 */
export default { title: 'Molecules/slick-slider' };

export const slick = () => slicksliderTwig(slicksliderData);
