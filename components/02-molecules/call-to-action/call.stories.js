import calltwig from './call.twig';
import callData from './call.yml';
import './call.scss';
// import './call';

export default { title: 'Molecules/CallToAction' };
export const CallAction = () => calltwig(callData);
