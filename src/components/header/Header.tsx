import { Link, useLocation } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import NavItem from '../nav-item/NavItem';
import { AppRoute } from '../../mocks/login';

const Header = () => {
  const location = useLocation();
  return (
    <header className="w-full">
      <div className="max-w-[1920px] mx-auto px-[160px]">
        <div className="flex items-center py-4">
          <Link to="/">
            <img src={Logo} alt="FinVision_logo" width="104" height="50" />
          </Link>
          <nav className="flex items-center w-full">
            <div className="flex flex-1 justify-center space-x-[75px]">
              <Link to={AppRoute.Main}>
                <NavItem
                  text="Прототип"
                  className={location.pathname === AppRoute.Main ? 'text-blue' : 'text-white'}
                />
              </Link>
              <Link to={AppRoute.Overview}>
                <NavItem
                  text="Overview"
                  className={location.pathname === AppRoute.Overview ? 'text-blue' : 'text-white'}
                />
              </Link>
            </div>
            <Link className="ml-auto" to={AppRoute.Login}>
              <NavItem
                text="Личный кабинет"
                className={location.pathname === AppRoute.Login ? 'text-blue' : 'text-white'}
              />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;