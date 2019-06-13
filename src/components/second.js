
import React, {Component} from 'react';
import { withTranslation  } from 'react-i18next';

const Second = (props) => {
    const {t} = props;
    return (
        <div>{t('second')}: {props.name}
            <button onClick={() => props.changeName(Math.random()) }>change</button>
        </div>

    );
}

export default withTranslation()(Second);

