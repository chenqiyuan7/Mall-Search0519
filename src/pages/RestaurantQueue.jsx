import { useState, useEffect } from "react";
import { ChevronLeft, Clock, Users, MapPin, Star, User, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import ChatInput from "../components/ChatInput";

const RestaurantQueue = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all, short, medium, long

  useEffect(() => {
    // 模拟获取餐厅排队数据
    const fetchData = () => {
      setLoading(true);
      setTimeout(() => {
        setRestaurants([
          {
            id: 1,
            name: "童趣主题餐厅",
            waitTime: 15,
            waitCount: 5,
            location: "4楼 B区 412",
            rating: 4.8,
            tags: ["儿童套餐", "游乐区", "主题派对"],
            image: "https://nocode.meituan.com/photo/search?keyword=kids,theme,restaurant&width=300&height=200"
          },
          {
            id: 2,
            name: "海底世界餐厅",
            waitTime: 30,
            waitCount: 12,
            location: "3楼 A区 305",
            rating: 4.6,
            tags: ["海洋主题", "互动体验", "儿童餐具"],
            image: "https://nocode.meituan.com/photo/search?keyword=underwater,restaurant&width=300&height=200"
          },
          {
            id: 3,
            name: "森林探险餐厅",
            waitTime: 45,
            waitCount: 18,
            location: "5楼 C区 508",
            rating: 4.7,
            tags: ["森林主题", "亲子互动", "健康餐饮"],
            image: "https://nocode.meituan.com/photo/search?keyword=forest,restaurant&width=300&height=200"
          },
          {
            id: 4,
            name: "太空冒险餐厅",
            waitTime: 5,
            waitCount: 2,
            location: "6楼 D区 602",
            rating: 4.5,
            tags: ["科技互动", "太空主题", "创意美食"],
            image: "https://nocode.meituan.com/photo/search?keyword=space,restaurant&width=300&height=200"
          },
          {
            id: 5,
            name: "甜心公主餐厅",
            waitTime: 25,
            waitCount: 10,
            location: "4楼 E区 423",
            rating: 4.9,
            tags: ["公主主题", "下午茶", "生日派对"],
            image: "https://nocode.meituan.com/photo/search?keyword=princess,restaurant&width=300&height=200"
          },
          {
            id: 6,
            name: "动物农场餐厅",
            waitTime: 20,
            waitCount: 8,
            location: "2楼 F区 218",
            rating: 4.7,
            tags: ["农场主题", "亲子互动", "有机食材"],
            image: "https://nocode.meituan.com/photo/search?keyword=farm,animals,restaurant&width=300&height=300"
          }
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  const getWaitTimeColor = (time) => {
    if (time <= 15) return "text-green-500";
    if (time <= 30) return "text-yellow-500";
    return "text-red-500";
  };

  const filteredRestaurants = restaurants.filter(restaurant => {
    if (filter === "all") return true;
    if (filter === "short" && restaurant.waitTime <= 15) return true;
    if (filter === "medium" && restaurant.waitTime > 15 && restaurant.waitTime <= 30) return true;
    if (filter === "long" && restaurant.waitTime > 30) return true;
    return false;
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
        <h1 className="text-lg font-bold">儿童餐厅排队情况</h1>
      </div>
      
      {/* 为固定导航栏添加空白填充，防止内容被遮挡 */}
      <div className="h-[60px]"></div>

      {/* 筛选选项 */}
      <div className="p-4 bg-white mb-2">
        <div className="flex space-x-2 overflow-x-auto no-scrollbar">
          <button 
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${filter === 'all' ? 'bg-[#FFDD00] text-[#111111] font-bold' : 'bg-gray-100 text-[#555555]'}`}
            onClick={() => setFilter('all')}
          >
            全部餐厅
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${filter === 'short' ? 'bg-[#FFDD00] text-[#111111] font-bold' : 'bg-gray-100 text-[#555555]'}`}
            onClick={() => setFilter('short')}
          >
            等待时间 ≤ 15分钟
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${filter === 'medium' ? 'bg-[#FFDD00] text-[#111111] font-bold' : 'bg-gray-100 text-[#555555]'}`}
            onClick={() => setFilter('medium')}
          >
            等待时间 15-30分钟
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${filter === 'long' ? 'bg-[#FFDD00] text-[#111111] font-bold' : 'bg-gray-100 text-[#555555]'}`}
            onClick={() => setFilter('long')}
          >
            等待时间 &gt; 30分钟
          </button>
        </div>
      </div>

      {/* 餐厅列表 - 双列瀑布流布局 */}
      <div className="px-3 pt-2 pb-4">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-square w-full">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    className="mx-auto object-cover w-full h-full"
                  />
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-sm line-clamp-1">{restaurant.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 mr-1" fill="#FACC15" />
                      <span className="text-xs">{restaurant.rating}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span className={`text-xs font-medium ${getWaitTimeColor(restaurant.waitTime)}`}>
                        等待时间: {restaurant.waitTime} 分钟
                      </span>
                    </div>
                    
                    <div className="flex items-center mt-1">
                      <Users className="h-3 w-3 mr-1" />
                      <span className="text-xs">排队人数: {restaurant.waitCount} 组</span>
                    </div>
                    
                    <div className="flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span className="text-xs text-gray-500">{restaurant.location}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 flex flex-wrap gap-1">
                    {restaurant.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-xs px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredRestaurants.length === 0 && !loading && (
          <div className="text-center py-8">
            <p className="text-gray-500">没有找到符合条件的餐厅</p>
          </div>
        )}
      </div>

      {/* 底部聊天输入框 */}
      <ChatInput />
      </div>
    </div>
  );
};

export default RestaurantQueue;
