import { Route, Routes } from 'react-router-dom';
import Wrapper from './components/wrapper/Wrapper';
import MainPage from './components/main/MainPage';
import { AppRoute } from './mocks/login';
import OverviewPage from './components/overview/OverviewPage';

function App() {
  return (
    <div className="bg-primary">
      <Routes>
        <Route path={AppRoute.Main} element={<Wrapper><MainPage /></Wrapper>} />
        <Route path={AppRoute.Overview} element={<Wrapper><OverviewPage /></Wrapper>} />
      </Routes>
    </div>
  );
}

export default App;