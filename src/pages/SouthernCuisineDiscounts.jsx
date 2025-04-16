import { useState } from "react";
import { ChevronLeft, MapPin, Phone, Clock, ArrowRight, ThumbsUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ChatInput from "../components/ChatInput";

const SouthernCuisineDiscounts = () => {
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

  return (
    <div className="min-h-screen bg-[#292929] flex justify-center items-start">
      {/* 固定宽度内容容器 */}
      <div className="w-[375px] h-[812px] relative bg-white overflow-y-auto overflow-x-hidden">
      {/* 顶部导航栏 */}
      <div className="bg-white p-4 flex items-center shadow-sm">
        <Link to="/">
          <ChevronLeft className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-lg font-bold">南方菜系优惠</h1>
      </div>

      {/* 网友推荐 */}
      <div className="px-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold">网友推荐</h2>
          <Link to="/recommendations" className="text-gray-500 text-sm">
            更多 &gt;
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {recommendations.map((rec) => (
            <div key={rec.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src={rec.image} 
                alt={rec.title} 
                className="mx-auto object-cover w-full h-24"
              />
              <div className="p-2">
                <p className="text-sm font-medium line-clamp-2">{rec.title}</p>
                <div className="flex items-center mt-1">
                  <ThumbsUp className="h-3 w-3 text-pink-500" />
                  <span className="text-xs text-gray-500 ml-1">{rec.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 店铺对比 */}
      <div className="px-4">
        <h2 className="text-lg font-bold mb-4">店铺对比</h2>
        <div className="space-y-4">
          {restaurants.map((restaurant) => (
            <div 
              key={restaurant.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer"
              onClick={() => handleRestaurantClick(restaurant)}
            >
              <div className="flex p-4">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name} 
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-3 flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-bold">{restaurant.name}</h3>
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
              <div className="border-t px-4 py-3">
                {restaurant.deals.map((deal, index) => (
                  <div key={index} className="flex justify-between items-center mb-2 last:mb-0">
                    <div>
                      <span className="text-red-500 text-lg font-bold">￥{deal.price}</span>
                      <span className="ml-2 text-xs bg-red-100 text-red-500 px-1 rounded">
                        {deal.discount}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">{deal.name}</span>
                  </div>
                ))}
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

export default SouthernCuisineDiscounts;
