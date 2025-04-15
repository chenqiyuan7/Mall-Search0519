import { useState, useEffect } from "react";
import { ChevronLeft, Clock, Users, MapPin, Star } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 顶部导航栏 */}
      <div className="bg-white p-4 flex items-center shadow-sm">
        <Link to="/">
          <ChevronLeft className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-lg font-bold">儿童餐厅排队情况</h1>
      </div>

      {/* 筛选选项 */}
      <div className="p-4 bg-white mb-2">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          <button 
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setFilter('all')}
          >
            全部餐厅
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${filter === 'short' ? 'bg-green-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setFilter('short')}
          >
            等待时间 ≤ 15分钟
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${filter === 'medium' ? 'bg-yellow-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setFilter('medium')}
          >
            等待时间 15-30分钟
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${filter === 'long' ? 'bg-red-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setFilter('long')}
          >
            等待时间 > 30分钟
          </button>
        </div>
      </div>

      {/* 餐厅列表 - 双列瀑布流布局 */}
      <div className="p-4">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name} 
                  className="mx-auto object-cover w-full h-32"
                />
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
                  
                  <button className="w-full bg-green-500 text-white text-xs px-3 py-1.5 rounded mt-2">
                    查看菜单
                  </button>
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
  );
};

export default RestaurantQueue;
