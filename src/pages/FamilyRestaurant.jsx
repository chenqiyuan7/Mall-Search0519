import { useState } from "react";
import { ChevronLeft, Star, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ChatInput from "../components/ChatInput";

const FamilyRestaurant = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "全部" },
    { id: "chinese", name: "中餐" },
    { id: "western", name: "西餐" },
    { id: "japanese", name: "日料" },
    { id: "dessert", name: "甜品" }
  ];

  const restaurants = [
    {
      id: 1,
      name: "童趣主题餐厅",
      cuisine: "western",
      rating: 4.8,
      priceRange: "¥128/人",
      waitTime: "约15分钟",
      features: ["儿童游乐区", "主题派对", "儿童餐具"],
      address: "4楼 B区 412",
      image: "https://nocode.meituan.com/photo/search?keyword=kids,theme,restaurant&width=300&height=300"
    },
    {
      id: 2,
      name: "海洋世界餐厅",
      cuisine: "japanese",
      rating: 4.6,
      priceRange: "¥168/人",
      waitTime: "约30分钟",
      features: ["海洋主题", "互动体验", "寿司体验"],
      address: "3楼 A区 305",
      image: "https://nocode.meituan.com/photo/search?keyword=ocean,theme,restaurant&width=300&height=300"
    },
    {
      id: 3,
      name: "小厨师成长馆",
      cuisine: "chinese",
      rating: 4.7,
      priceRange: "¥98/人",
      waitTime: "约20分钟",
      features: ["DIY美食", "厨艺课堂", "亲子互动"],
      address: "5楼 C区 508",
      image: "https://nocode.meituan.com/photo/search?keyword=kids,cooking,restaurant&width=300&height=300"
    },
    {
      id: 4,
      name: "甜心糖果屋",
      cuisine: "dessert",
      rating: 4.9,
      priceRange: "¥68/人",
      waitTime: "约10分钟",
      features: ["甜品DIY", "生日派对", "下午茶"],
      address: "2楼 D区 203",
      image: "https://nocode.meituan.com/photo/search?keyword=candy,dessert,cafe&width=300&height=300"
    },
    {
      id: 5,
      name: "农场体验餐厅",
      cuisine: "western",
      rating: 4.5,
      priceRange: "¥118/人",
      waitTime: "约25分钟",
      features: ["农场体验", "有机食材", "亲子互动"],
      address: "1楼 G区 108",
      image: "https://nocode.meituan.com/photo/search?keyword=farm,restaurant&width=300&height=300"
    },
    {
      id: 6,
      name: "恐龙世界餐厅",
      cuisine: "chinese",
      rating: 4.7,
      priceRange: "¥138/人",
      waitTime: "约20分钟",
      features: ["恐龙主题", "科普教育", "儿童套餐"],
      address: "3楼 H区 325",
      image: "https://nocode.meituan.com/photo/search?keyword=dinosaur,restaurant&width=300&height=300"
    }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => {
    return activeFilter === "all" || restaurant.cuisine === activeFilter;
  });

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
          <h1 className="text-lg font-bold">亲子餐厅</h1>
        </div>
        
        {/* 为固定导航栏添加空白填充 */}
        <div className="h-[60px]"></div>

        {/* 筛选选项 */}
        <div className="py-2 px-4 bg-white mb-4">
          <div className="flex space-x-2 overflow-x-auto no-scrollbar" style={noScrollbarStyle}>
            {filters.map((filter) => (
              <button 
                key={filter.id}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeFilter === filter.id ? 'bg-[#FFDD00] text-[#111111] font-bold' : 'bg-gray-100 text-[#555555]'}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* 餐厅列表 */}
        <div className="px-3 pt-2 pb-3">
          <div className="space-y-3">
            {filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-lg overflow-hidden shadow-sm flex p-3">
                <div className="w-1/3">
                  <div className="aspect-square w-full">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name} 
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-base text-left">{restaurant.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 mr-1" fill="#FACC15" />
                      <span className="text-xs">{restaurant.rating}</span>
                    </div>
                  </div>
                  
                  <div className="mt-1 flex items-center text-xs text-gray-600">
                    <span>{restaurant.priceRange}</span>
                    <span className="mx-2">|</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>等待{restaurant.waitTime}</span>
                  </div>
                  
                  <div className="mt-1 flex items-center">
                    <span className="text-gray-500 text-xs text-left">地址:</span>
                    <span className="text-xs text-left ml-[6px]">{restaurant.address}</span>
                  </div>
                  
                  <div className="mt-2 flex flex-wrap gap-1">
                    {restaurant.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-xs px-1.5 py-0.5 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-2">
                    <button className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                      立即预订
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

export default FamilyRestaurant;
