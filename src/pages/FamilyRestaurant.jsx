import { useState } from "react";
import { ChevronLeft, Search, Filter, Star, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const FamilyRestaurant = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: "all",
    features: []
  });
  
  const restaurants = [
    {
      id: 1,
      name: "童趣主题餐厅",
      description: "以童话故事为主题的亲子餐厅，提供儿童游乐区和专属菜单",
      rating: 4.8,
      priceRange: "¥¥",
      location: "4楼 B区 412",
      openHours: "10:00-21:00",
      features: ["儿童游乐区", "主题派对", "儿童餐具", "亲子活动"],
      image: "https://nocode.meituan.com/photo/search?keyword=kids,theme,restaurant&width=300&height=200"
    },
    {
      id: 2,
      name: "海底世界餐厅",
      description: "海洋主题餐厅，360度沉浸式海洋环境，适合全家用餐",
      rating: 4.6,
      priceRange: "¥¥¥",
      location: "3楼 A区 305",
      openHours: "11:00-22:00",
      features: ["海洋主题", "互动体验", "儿童餐具", "生日派对"],
      image: "https://nocode.meituan.com/photo/search?keyword=underwater,restaurant&width=300&height=200"
    },
    {
      id: 3,
      name: "森林探险餐厅",
      description: "森林主题亲子餐厅，提供健康有机食材和丰富的互动游戏",
      rating: 4.7,
      priceRange: "¥¥",
      location: "5楼 C区 508",
      openHours: "10:00-20:30",
      features: ["森林主题", "亲子互动", "健康餐饮", "儿童读物"],
      image: "https://nocode.meituan.com/photo/search?keyword=forest,restaurant&width=300&height=200"
    },
    {
      id: 4,
      name: "太空冒险餐厅",
      description: "太空主题餐厅，提供科技互动体验和创意美食",
      rating: 4.5,
      priceRange: "¥¥¥",
      location: "6楼 D区 602",
      openHours: "11:30-21:30",
      features: ["科技互动", "太空主题", "创意美食", "VR体验"],
      image: "https://nocode.meituan.com/photo/search?keyword=space,restaurant&width=300&height=200"
    },
    {
      id: 5,
      name: "甜心公主餐厅",
      description: "以公主城堡为主题的餐厅，提供精致下午茶和生日派对服务",
      rating: 4.9,
      priceRange: "¥¥¥¥",
      location: "4楼 E区 423",
      openHours: "10:00-21:00",
      features: ["公主主题", "下午茶", "生日派对", "角色扮演"],
      image: "https://nocode.meituan.com/photo/search?keyword=princess,restaurant&width=300&height=200"
    }
  ];

  const allFeatures = ["儿童游乐区", "主题派对", "儿童餐具", "亲子活动", "海洋主题", "互动体验", "生日派对", "森林主题", "健康餐饮", "儿童读物", "科技互动", "太空主题", "创意美食", "VR体验", "公主主题", "下午茶", "角色扮演"];

  const toggleFeatureFilter = (feature) => {
    setSelectedFilters(prev => {
      const features = [...prev.features];
      if (features.includes(feature)) {
        return { ...prev, features: features.filter(f => f !== feature) };
      } else {
        return { ...prev, features: [...features, feature] };
      }
    });
  };

  const filteredRestaurants = restaurants.filter(restaurant => {
    // 搜索过滤
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          restaurant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          restaurant.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 价格范围过滤
    const matchesPriceRange = selectedFilters.priceRange === "all" || 
                              (selectedFilters.priceRange === "low" && restaurant.priceRange.length <= 2) ||
                              (selectedFilters.priceRange === "medium" && restaurant.priceRange.length === 3) ||
                              (selectedFilters.priceRange === "high" && restaurant.priceRange.length >= 4);
    
    // 特色过滤
    const matchesFeatures = selectedFilters.features.length === 0 || 
                            selectedFilters.features.some(feature => restaurant.features.includes(feature));
    
    return matchesSearch && matchesPriceRange && matchesFeatures;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* 顶部导航栏 */}
      <div className="bg-white p-4 flex items-center shadow-sm">
        <Link to="/">
          <ChevronLeft className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-lg font-bold">亲子餐厅</h1>
      </div>

      {/* 搜索栏 */}
      <div className="p-4 bg-white">
        <div className="flex">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="搜索餐厅名称或位置"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 bg-gray-100 rounded-lg"
            />
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          </div>
          <button 
            className="ml-2 p-3 bg-gray-100 rounded-lg"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>

        {/* 筛选选项 */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">价格范围</h3>
            <div className="flex space-x-2 mb-4">
              <button 
                className={`px-3 py-1 rounded-full text-sm ${selectedFilters.priceRange === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedFilters(prev => ({ ...prev, priceRange: 'all' }))}
              >
                全部
              </button>
              <button 
                className={`px-3 py-1 rounded-full text-sm ${selectedFilters.priceRange === 'low' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedFilters(prev => ({ ...prev, priceRange: 'low' }))}
              >
                ¥-¥¥
              </button>
              <button 
                className={`px-3 py-1 rounded-full text-sm ${selectedFilters.priceRange === 'medium' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedFilters(prev => ({ ...prev, priceRange: 'medium' }))}
              >
                ¥¥¥
              </button>
              <button 
                className={`px-3 py-1 rounded-full text-sm ${selectedFilters.priceRange === 'high' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedFilters(prev => ({ ...prev, priceRange: 'high' }))}
              >
                ¥¥¥¥
              </button>
            </div>

            <h3 className="font-medium mb-2">餐厅特色</h3>
            <div className="flex flex-wrap gap-2">
              {allFeatures.map((feature, index) => (
                <button 
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${selectedFilters.features.includes(feature) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  onClick={() => toggleFeatureFilter(feature)}
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>
        )}
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
                
                <p className="text-gray-600 mt-1">{restaurant.description}</p>
                
                <div className="mt-2">
                  <span className="text-gray-700">{restaurant.priceRange}</span>
                </div>
                
                <div className="flex items-center mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">{restaurant.location}</span>
                </div>
                
                <div className="flex items-center mt-1">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">营业时间: {restaurant.openHours}</span>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {restaurant.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                  {restaurant.features.length > 3 && (
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      +{restaurant.features.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="mt-4 flex justify-between">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                    查看菜单
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
                    在线预约
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredRestaurants.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">没有找到匹配的餐厅</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FamilyRestaurant;
