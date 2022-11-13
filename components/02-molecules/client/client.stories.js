import clienttwig from './client.twig';
import clientData from './client.yml';
import './client.scss';
import './client';

export default { title: 'Molecules/clientdiv' };
export const client = () => clienttwig(clientData);
