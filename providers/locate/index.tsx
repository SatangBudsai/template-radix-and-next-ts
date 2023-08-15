"use client"
import { Fragment } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import buddhistEra from 'dayjs/plugin/buddhistEra'

type Props = {
    children: React.ReactNode
}

const LocateProvider = (props: Props) => {
    dayjs.locale('th');
    dayjs.extend(buddhistEra);
    return (
        <Fragment>{props.children}</Fragment>
    )
}

export default LocateProvider