import { useNavigate } from "react-router-dom";

const EntryPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div 
      className="w-full h-screen flex items-center justify-center cursor-pointer"
      style={{
        backgroundImage: 'url(./AI入口P图.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      onClick={handleClick}
    >
      {/* 这里可以添加任何额外的提示或动画 */}
      <div className="absolute bottom-10 text-center text-white animate-bounce">
        <p className="text-lg font-medium">点击任意位置进入</p>
      </div>
    </div>
  );
};

export default EntryPage; 