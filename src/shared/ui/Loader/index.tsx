import {classNames} from 'shared/lib';
import s from './Loader.module.scss';

interface LoaderProps {
  className?: string;
};

export const Loader = ({className}: LoaderProps) => (
  <div className={classNames(s.ldsSpinner, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);