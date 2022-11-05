import Header from '../components/common/Header';
import Title from '../components/common/Title';
import AdManagement from '../components/AdManagement';

const Ad = () => {
  return (
    <div className="ad">
      <Header />
      <Title text="광고관리" />
      <AdManagement />
    </div>
  );
};

export default Ad;
