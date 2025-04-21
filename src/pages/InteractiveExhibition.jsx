import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ChatInput from "../components/ChatInput";

const InteractiveExhibition = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const exhibitions = [
    {
      id: 1,
      title: "奇幻海洋世界",
      description: "沉浸式海洋生物互动展览",
      location: "4楼 展厅A",
      time: "10:00-20:00",
      price: "88元/人",
      image: "https://nocode.meituan.com/photo/search?keyword=ocean,exhibition,interactive&width=300&height=200"
    },
    {
      id: 2,
      title: "太空探险馆",
      description: "体验宇航员训练和太空科技",
      location: "5楼 展厅B",
      time: "09:30-19:30",
      price: "98元/人",
      image: "https://nocode.meituan.com/photo/search?keyword=space,exhibition,interactive&width=300&height=200"
    },
    {
      id: 3,
      title: "恐龙时代",
      description: "AR互动恐龙科普展",
      location: "3楼 展厅C",
      time: "10:00-19:00",
      price: "78元/人",
      image: "https://nocode.meituan.com/photo/search?keyword=dinosaur,exhibition&width=300&height=200"
    }
  ];

  const filters = [
    { id: "all", name: "全部展览" },
    { id: "science", name: "科技互动" },
    { id: "art", name: "艺术展览" },
    { id: "nature", name: "自然探索" }
  ];

  // 定义隐藏滚动条的样式
  const noScrollbarStyle = {
    scrollbarWidth: 'none',  /* Firefox */
    msOverflowStyle: 'none',  /* IE and Edge */
  };

  // 创建隐藏Webkit滚动条的CSS样式
  const hideScrollbarCSS = `
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <div className="min-h-screen bg-[#292929] flex justify-center items-start">
      {/* 添加隐藏滚动条的CSS */}
      <style>{hideScrollbarCSS}</style>
      
      {/* 固定宽度内容容器 */}
      <div 
        className="w-[375px] h-[812px] relative bg-[#F5F5F5] overflow-y-auto overflow-x-hidden no-scrollbar" 
        style={noScrollbarStyle}
      >
      {/* 顶部导航栏 - 固定在顶部 */}
      <div className="bg-white p-4 flex items-center shadow-sm fixed top-0 w-[375px] z-10">
        <Link to="/home">
          <ChevronLeft className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-lg font-bold">互动展览</h1>
      </div>
      
      {/* 为固定导航栏添加空白填充 */}
      <div className="h-[60px]"></div>

      {/* 筛选选项 */}
      <div className="p-4 bg-white mb-2">
        <div className="flex space-x-2 overflow-x-auto no-scrollbar" style={noScrollbarStyle}>
          {filters.map((filter) => (
            <button 
              key={filter.id}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeFilter === filter.id ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* 展览列表 */}
      <div className="p-4">
        <div className="space-y-4">
          {exhibitions.map((exhibition) => (
            <div key={exhibition.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src={exhibition.image} 
                alt={exhibition.title} 
                className="mx-auto object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{exhibition.title}</h3>
                <p className="text-gray-600 mt-1">{exhibition.description}</p>
                
                <div className="mt-3 space-y-2">
                  <div className="flex items-center">
                    <span className="text-gray-500 w-20">展览地点:</span>
                    <span>{exhibition.location}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-20">开放时间:</span>
                    <span>{exhibition.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-20">票价:</span>
                    <span className="text-red-500 font-medium">{exhibition.price}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                    展览详情
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
                    立即预约
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部聊天输入框 */}
      <ChatInput />
      </div>
    </div>
  );
};

export default InteractiveExhibition;
