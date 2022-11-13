import iconTwig from './icon.twig';
import iconData from './icon.yml';
import './icon.scss';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Icons ' };

export const featureIcons = () => iconTwig(iconData);
