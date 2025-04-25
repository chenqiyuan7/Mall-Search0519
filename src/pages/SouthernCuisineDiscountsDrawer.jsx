import { useState } from "react";
import { ChevronLeft, MapPin, Phone, Clock, ArrowRight, ThumbsUp, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SouthernCuisineDiscountsDrawer = ({ onClose }) => {
  const navigate = useNavigate();
  
  const restaurants = [
    {
      id: 1,
      name: "三清潭烧鹅",
      rating: 4.9,
      pricePerPerson: "165/人",
      location: "L3",
      tag: "酒仙桥风味地方菜人气榜第1名",
      deals: [
        {
          price: 28.9,
          discount: "7.5折",
          name: "三清潭经典烧鹅套餐"
        },
        {
          price: 80,
          discount: "8折",
          name: "80代100代金券"
        }
      ],
      image: "https://nocode.meituan.com/photo/search?keyword=roasted,goose,cantonese&width=300&height=200"
    },
    {
      id: 2,
      name: "中8楼风尚云南菜",
      rating: 4.9,
      pricePerPerson: "98/人",
      location: "L4",
      tag: "酒仙桥风味地方菜人气榜第3名",
      deals: [
        {
          price: 196,
          discount: "7.5折",
          name: "三清潭经典烧鹅套餐"
        },
        {
          price: 97,
          discount: "9.7折",
          name: "97代100代金券"
        }
      ],
      image: "https://nocode.meituan.com/photo/search?keyword=yunnan,cuisine&width=300&height=200"
    },
    {
      id: 3,
      name: "莆田餐厅PUTIEN",
      rating: 4.9,
      pricePerPerson: "105/人",
      location: "L3",
      features: ["儿童游乐区", "宝宝椅", "有露天位"],
      deals: [
        {
          price: 308,
          discount: "7.1折",
          name: "乐享精致2人C餐"
        },
        {
          price: 80,
          discount: "8折",
          name: "80代100代金券"
        }
      ],
      image: "https://nocode.meituan.com/photo/search?keyword=putien,restaurant&width=300&height=200"
    }
  ];

  // 网友推荐内容
  const recommendations = [
    {
      id: 1,
      title: "商场里的儿童餐我锁定这几家",
      likes: 1326,
      image: "https://nocode.meituan.com/photo/search?keyword=kids,meal,restaurant&width=300&height=200"
    },
    {
      id: 2,
      title: "一家适合1人的日式拉面店",
      likes: 1326,
      image: "https://nocode.meituan.com/photo/search?keyword=japanese,ramen&width=300&height=200"
    }
  ];

  const handleRestaurantClick = (restaurant) => {
    if (restaurant.id === 1) {
      navigate('/sanqingtan-restaurant', { state: { restaurant } });
    } else if (restaurant.id === 2) {
      navigate('/restaurant/2', { state: { restaurant } });
    } else if (restaurant.id === 3) {
      navigate('/putian-restaurant', { state: { restaurant } });
    }
  };

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
    <div className="flex flex-col h-full w-full">
      {/* 添加隐藏滚动条的CSS */}
      <style>{hideScrollbarCSS}</style>
      
      {/* 内容区域 - 可滚动 */}
      <div className="flex-1 overflow-y-auto no-scrollbar" style={noScrollbarStyle}>
        {/* 网友推荐 */}
        <div className="relative mb-0">
          {/* 背景图 */}
          <div className="absolute top-0 left-0 w-full h-full">
            <img 
              src="/网友推荐背景图@2x.png?v=1" 
              alt="网友推荐背景" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* 内容 - 放在背景上层 */}
          <div className="relative px-3 py-3">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold text-black">网友推荐</h2>
              <span className="text-black text-sm cursor-pointer">
                更多 &gt;
              </span>
            </div>
            <div className="flex gap-2">
              {recommendations.map((rec) => (
                <div key={rec.id} className="bg-white rounded-lg overflow-hidden flex-1">
                  <div className="flex items-start py-0 px-0">
                    <img 
                      src={rec.image} 
                      alt={rec.title} 
                      className="w-[61px] h-[61px] object-cover rounded-lg"
                    />
                    <div className="ml-2 flex flex-col h-[61px] justify-between py-0 flex-1">
                      <p className="text-xs line-clamp-2">{rec.title}</p>
                      <div className="flex items-center">
                        <img 
                          src="/点赞.png" 
                          alt="点赞" 
                          className="h-3 w-auto"
                        />
                        <span className="text-[11px] text-[#8F8F8F] ml-1">{rec.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 店铺对比 - 确保背景为浅灰色 */}
        <div className="px-3 pb-4 bg-[#F5F5F5] text-black">
          <h2 className="text-lg font-bold mb-4">店铺对比</h2>
          <div className="space-y-4">
            {restaurants.map((restaurant) => (
              <div 
                key={restaurant.id} 
                className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer"
                onClick={() => handleRestaurantClick(restaurant)}
              >
                <div className="flex px-3 pt-4 pb-[6px]">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="ml-1.5 flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-bold text-black">{restaurant.name}</h3>
                      <span className="text-gray-500">{restaurant.location}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-orange-500 font-medium">{restaurant.rating}分</span>
                      <span className="text-gray-500 ml-2">￥{restaurant.pricePerPerson}</span>
                    </div>
                    {restaurant.tag && (
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded mt-1">
                        {restaurant.tag}
                      </span>
                    )}
                    {restaurant.features && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {restaurant.features.map((feature, index) => (
                          <span key={index} className="text-xs text-gray-500">
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex">
                  <div className="w-20 ml-3"></div>
                  <div className="border-t border-gray-200 flex-1 pl-0 pr-3 pt-[6px] pb-3">
                    {restaurant.deals.map((deal, index) => (
                      <div key={index} className="flex justify-between items-center mb-2 last:mb-0">
                        <div className="flex items-center">
                          <span className="text-red-500 text-lg font-bold">￥{deal.price}</span>
                          <span className="ml-1 text-xs bg-red-100 text-red-500 px-1 rounded flex items-center">
                            {deal.discount}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600">{deal.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SouthernCuisineDiscountsDrawer; 