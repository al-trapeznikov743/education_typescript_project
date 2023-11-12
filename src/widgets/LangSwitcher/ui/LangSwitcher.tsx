import {classNames} from 'shared/lib';
import {useTranslation} from 'react-i18next';
import {Button, ButtonTheme} from 'shared/ui/Button';
import s from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
};

export const LangSwitcher = ({className}: LangSwitcherProps) => {
  const {i18n} = useTranslation();

  const isRu = i18n.language === 'ru';

  const toggleLang = () => {
    i18n.changeLanguage(isRu ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(s.LangSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleLang}
    >
      {isRu ? 'En' : 'Ru'}
    </Button>
  );
};