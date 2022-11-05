import Header from '../components/common/Header';
import Title from '../components/common/Title';
import Dashboard from '../components/Dashboard/Dashboard';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Title text="대시보드" picker />
      <Dashboard />
    </div>
  );
};

export default Main;
