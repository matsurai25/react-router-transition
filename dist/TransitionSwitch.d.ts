import * as React from 'react';
export interface TransitionSwitchRouteProps {
    exact: boolean;
    path: string;
    Component(): JSX.Element;
}
interface Props {
    duration?: number;
    over?: React.ReactNode;
    routes: TransitionSwitchRouteProps[];
}
export default function TransitionSwitch({ duration, over, routes }: Props): JSX.Element;
export {};
