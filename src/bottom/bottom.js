import React from 'react';

import styles from './Bottom.module.css';
import SocialFollows from './socialFollows/socialFollows';


function Bottom () {
    return (
        <div className={styles.bottom}>
            <div className={styles.socialFollows} >
              <SocialFollows />
            </div>
        </div>
    );
}

export default Bottom;