
import { Link, useLocation } from 'react-router-dom';
import Logo_Footer from '../../images/Logo_Footer.svg';
import NavItem from '../nav-item/NavItem';
import { AppRoute } from '../../mocks/login';

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="w-full bg-footer h-[200px] flex items-center justify-center">
      <div className="max-w-[1920px] w-full px-[160px] flex items-center">
        <Link to="/">
          <img src={Logo_Footer} alt="FinVision_logo" width="104" height="50" />
        </Link>
        <nav className="flex items-center w-full">
          <Link className="ml-auto" to={AppRoute.Login}>
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