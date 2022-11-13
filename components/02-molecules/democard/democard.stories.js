import democardtwig from './democard.twig';
import democardData from './democard.yml';
import './democard.scss';

export default { title: 'Molecules/DemoGrid' };
export const DemoCard = () => democardtwig(democardData);
