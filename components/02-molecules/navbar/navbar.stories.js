import navbartwig from './navbar.twig';

import navbarData from './navbar.yml';
import './navbar.scss';
import './navbar';

export default { title: 'Molecules/Header' };

export const Navbar = () => navbartwig(navbarData);
