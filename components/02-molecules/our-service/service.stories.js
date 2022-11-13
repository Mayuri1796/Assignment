import serviceTwig from './service.twig';
import serviceData from './service.yml';
import './service.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/ Our Services ' };

export const Services = () => serviceTwig(serviceData);
