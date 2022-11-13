import menutwig from './menu.twig';
import navbarData from '../navbar/navbar.yml';
import logoData from '../../01-atoms/text/text/logo.yml';
import './menu.scss';

export default { title: 'Molecules/Main-Menu' };

export const Menu = () => menutwig({ ...navbarData, ...logoData });
