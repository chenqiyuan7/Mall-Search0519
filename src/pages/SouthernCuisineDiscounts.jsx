import { useState } from "react";
import { ChevronLeft, Search, Percent, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const SouthernCuisineDiscounts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const restaurants = [
    {
      id: 1,
      name: "粤香阁",
      cuisine: "粤菜",
      discount: "全场8.5折，儿童套餐买一送一",
      validUntil: "2023-12-31",
      location: "3楼 A区 308",
      image: "https://nocode.meituan.com/photo/search?keyword=cantonese,cuisine&width=300&height=200"
    },
    {
      id: 2,
      name: "湘味轩",
      cuisine: "湘菜",
      discount: "下单满200减30，儿童免费赠送小食",
      validUntil: "2023-11-30",
      location: "4楼 B区 415",
      image: "https://nocode.meituan.com/photo/search?keyword=hunan,cuisine&width=300&height=200"
    },
    {
      id: 3,
      name: "川香苑",
      cuisine: "川菜",
      discount: "特价菜单5折，家庭套餐立减50元",
      validUntil: "2023-12-15",
      location: "5楼 C区 503",
      image: "https://nocode.meituan.com/photo/search?keyword=sichuan,cuisine&width=300&height=200"
    },
    {
      id: 4,
      name: "闽南小馆",
      cuisine: "闽菜",
      discount: "周一至周四全场9折，儿童餐具免费升级",
      validUntil: "2023-11-20",
      location: "3楼 D区 320",
      image: "https://nocode.meituan.com/photo/search?keyword=fujian,cuisine&width=300&height=200"
    },
    {
      id: 5,
      name: "云南风味",
      cuisine: "云南菜",
      discount: "新品上市，第二份半价",
      validUntil: "2023-12-10",
      location: "4楼 E区 428",
      image: "https://nocode.meituan.com/photo/search?keyword=yunnan,cuisine&width=300&height=200"
    }
  ];

  const filteredRestaurants = restaurants.filter(restaurant => 
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* 顶部导航栏 */}
      <div className="bg-white p-4 flex items-center shadow-sm">
        <Link to="/">
          <ChevronLeft className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-lg font-bold">南方菜系优惠</h1>
      </div>

      {/* 搜索栏 */}
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索餐厅名称、菜系或位置"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 bg-white rounded-lg border border-gray-200"
          />
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* 餐厅列表 */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">当前优惠餐厅</h2>
        
        <div className="space-y-4">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src={restaurant.image} 
                alt={restaurant.name} 
                className="mx-auto object-cover w-full h-40"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{restaurant.name}</h3>
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                    {restaurant.cuisine}
                  </span>
                </div>
                
                <div className="flex items-center mt-3">
                  <Percent className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-red-500 font-medium">{restaurant.discount}</span>
                </div>
                
                <div className="flex items-center mt-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">有效期至: {restaurant.validUntil}</span>
                </div>
                
                <div className="flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">位置: {restaurant.location}</span>
                </div>
                
                <div className="mt-4 flex justify-between">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                    查看菜单
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
                    立即预约
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

      {/* 底部提示 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg text-center">
        <p className="text-sm text-gray-600">优惠信息实时更新，请以餐厅实际情况为准</p>
      </div>
    </div>
  );
};

export default SouthernCuisineDiscounts;
