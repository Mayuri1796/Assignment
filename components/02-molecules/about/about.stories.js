import abouttwig from './about.twig';
import aboutData from './about.yml';
import './about.scss';

export default { title: 'Molecules/About Us' };
export const About = () => abouttwig(aboutData);
