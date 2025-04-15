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
      image: "https://nocode.meituan.com/photo/search?keyword=kids,theme,restaurant&width=300&height=200"
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
      image: "https://nocode.meituan.com/photo/search?keyword=ocean,theme,restaurant&width=300&height=200"
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
      image: "https://nocode.meituan.com/photo/search?keyword=kids,cooking,restaurant&width=300&height=200"
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
      image: "https://nocode.meituan.com/photo/search?keyword=candy,dessert,cafe&width=300&height=200"
    }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => {
    return activeFilter === "all" || restaurant.cuisine === activeFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 顶部导航栏 */}
      <div className="bg-white p-4 flex items-center shadow-sm">
        <Link to="/">
          <ChevronLeft className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-lg font-bold">亲子餐厅</h1>
      </div>

      {/* 筛选选项 */}
      <div className="p-4 bg-white mb-2">
        <div className="flex space-x-2 overflow-x-auto pb-2">
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

      {/* 餐厅列表 */}
      <div className="p-4">
        <div className="space-y-4">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src={restaurant.image} 
                alt={restaurant.name} 
                className="mx-auto object-cover w-full h-48"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{restaurant.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" fill="#FACC15" />
                    <span>{restaurant.rating}</span>
                  </div>
                </div>
                
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <span>{restaurant.priceRange}</span>
                  <span className="mx-2">|</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>等待{restaurant.waitTime}</span>
                </div>
                
                <div className="mt-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">{restaurant.address}</span>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {restaurant.features.map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-between">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                    查看菜单
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
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
  );
};

export default FamilyRestaurant;
