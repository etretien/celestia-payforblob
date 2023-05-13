import styles from './Loading.module.scss';

import { LucidLogo } from '../LucidLogo';

export const Loading = () => (
  <div className={styles.loading}>
    <LucidLogo width="100%" height="100%" colorBody="black" colorLine="black" />
  </div>
);
