import {classNames} from 'shared/lib';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
};

export const Navbar = ({className}: NavbarProps) => (
  <div className={classNames(s.Navbar, {}, [className])}>
    <div className={s.links}>
      <AppLink to='/' theme={AppLinkTheme.PRIMARY}>Main</AppLink>
      <AppLink to='/about' theme={AppLinkTheme.PRIMARY}>About</AppLink>
    </div>
  </div>
);