import { Link, useLocation } from 'react-router-dom';
import Logo_Footer from '../../images/Logo_Footer.svg';
import NavItem from '../nav-item/NavItem';
import { AppRoute } from '../../mocks/login';

// Определение компонента Footer
const Footer = () => {
  // Получение текущего местоположения для определения активного маршрута
  const location = useLocation();
  return (
    <footer className="w-full bg-footer h-[200px] flex items-center justify-center">
      <div className="max-w-[1920px] w-full px-[160px] flex items-center">
        {/* Ссылка на главную страницу с логотипом подвала */}
        <Link to="/">
          <img src={Logo_Footer} alt="FinVision_logo" width="104" height="50" />
        </Link>
        {/* Навигация по сайту */}
        <nav className="flex items-center w-full">
          {/* Контакты пока что оформлены как ссылка, как появится конкретика, исправим*/}
          <Link className="ml-auto" to={AppRoute.Main}>
            <NavItem
              text="Контакты возможно"
              className={location.pathname === AppRoute.Login ? 'text-blue' : 'text-white'}
            />
          </Link>
        </nav>
      </div>
    </footer>
  );
};


export default Footer;