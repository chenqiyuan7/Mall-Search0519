import { useNavigate } from "react-router-dom";

const EntryPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#292929] flex justify-center items-start">
      {/* 固定宽度内容容器 */}
      <div className="w-[375px] h-[812px] relative bg-[#F5F5F5] overflow-hidden">
        {/* 背景图层 - 铺满整个容器 */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(./AI入口P图.png)'
          }}
          onClick={handleClick}
        >
          {/* 这里可以添加任何额外的提示或动画 */}
          <div className="absolute bottom-10 inset-x-0 text-center text-white animate-bounce">
            <p className="text-lg font-medium">点击任意位置进入</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryPage; 