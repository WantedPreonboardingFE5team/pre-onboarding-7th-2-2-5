import Header from '../components/common/Header';
import Title from '../components/common/Title';
import AdManage from '../components/Ad/Ad';

const Ad = () => {
  return (
    <div className="ad">
      <Header />
      <Title text="광고관리" />
      <AdManage />
    </div>
  );
};

export default Ad;
