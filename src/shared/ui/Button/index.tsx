import {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from 'shared/lib';
import s from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear'
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: string;
};

export const Button: FC<ButtonProps> = ({className, children, theme, ...other}) => (
  <button className={classNames(s.Button, {}, [className, s[theme]])} {...other}>
    {children}
  </button>
);