import serviceCardTwig from './service-card.twig';
import serviceCardData from './service-card.yml';
import './service-card.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Services ' };

export const ServiceCard = () => serviceCardTwig(serviceCardData);
