/**
 *
 * Asynchronously loads the component for Background
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
