import { useState } from "react";
import { ChevronLeft, MapPin, Clock, Tag, Phone, Navigation2, Users, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import ChatInput from "../components/ChatInput";

const RestaurantDetail = () => {
  const [activeTab, setActiveTab] = useState("packages");

  const restaurantInfo = {
    name: "中8楼风尚云南菜(颐堤港店)",
    status: "营业中",
    hours: "11:00-21:00",
    address: "朝阳区酒仙桥路颐堤港三层L3-49",
    features: ["儿童游乐区", "宝宝椅", "有露天位"],
    image: "https://nocode.meituan.com/photo/search?keyword=yunnan,cuisine,restaurant&width=400&height=200"
  };

  const packages = [
    {
      id: 1,
      name: "丽江铜锅洋芋鸡双人餐",
      price: 28.9,
      originalPrice: 50,
      image: "https://nocode.meituan.com/photo/search?keyword=yunnan,chicken,pot&width=200&height=200"
    },
    {
      id: 2,
      name: "野山菌跑山鸡双人分享餐",
      price: 49.9,
      originalPrice: 50,
      image: "https://nocode.meituan.com/photo/search?keyword=mushroom,chicken,yunnan&width=200&height=200"
    },
    {
      id: 3,
      name: "抚仙湖煮湖团鱼三人餐",
      price: 89.9,
      originalPrice: 50,
      image: "https://nocode.meituan.com/photo/search?keyword=fish,yunnan,cuisine&width=200&height=200"
    }
  ];

  const vouchers = [
    {
      id: 1,
      price: 159,
      value: 350,
      description: "周一至周日全天可用"
    },
    {
      id: 2,
      price: 129,
      value: 350,
      description: "周一至周日全天可用"
    },
    {
      id: 3,
      price: 199,
      value: 300,
      description: "周一至周日全天可用"
    }
  ];

  const recommendedDishes = [
    {
      id: 1,
      name: "招牌菜品1",
      image: "https://nocode.meituan.com/photo/search?keyword=yunnan,dish,1&width=200&height=200",
      rank: 1
    },
    {
      id: 2,
      name: "招牌菜品2",
      image: "https://nocode.meituan.com/photo/search?keyword=yunnan,dish,2&width=200&height=200",
      rank: 2
    },
    {
      id: 3,
      name: "招牌菜品3",
      image: "https://nocode.meituan.com/photo/search?keyword=yunnan,dish,3&width=200&height=200",
      rank: 3
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 顶部图片区域 */}
      <div className="relative h-48">
        <img 
          src={restaurantInfo.image}
          alt={restaurantInfo.name}
          className="w-full h-full object-cover"
        />
        <Link to="/" className="absolute top-4 left-4">
          <ChevronLeft className="h-6 w-6 text-white" />
        </Link>
      </div>

      {/* 餐厅信息 */}
      <div className="bg-white p-4 -mt-6 rounded-t-3xl relative z-10">
        <h1 className="text-xl font-bold">{restaurantInfo.name}</h1>
        <div className="flex items-center mt-2">
          <span className="text-green-500 text-sm">{restaurantInfo.status}</span>
          <span className="mx-2 text-gray-300">|</span>
          <Clock className="h-4 w-4 text-gray-400 mr-1" />
          <span className="text-sm text-gray-600">{restaurantInfo.hours}</span>
        </div>
        <div className="flex items-start mt-2">
          <MapPin className="h-4 w-4 text-gray-400 mr-1 mt-1" />
          <span className="text-sm text-gray-600">{restaurantInfo.address}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {restaurantInfo.features.map((feature, index) => (
            <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* 功能按钮 */}
      <div className="grid grid-cols-4 bg-white p-4 border-t border-gray-100">
        <button className="flex flex-col items-center">
          <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-1">
            <Tag className="h-6 w-6 text-green-500" />
          </div>
          <span className="text-xs">预定</span>
        </button>
        <button className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-1">
            <Users className="h-6 w-6 text-blue-500" />
          </div>
          <span className="text-xs">排队</span>
        </button>
        <button className="flex flex-col items-center">
          <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mb-1">
            <ShoppingBag className="h-6 w-6 text-yellow-500" />
          </div>
          <span className="text-xs">外卖</span>
        </button>
        <button className="flex flex-col items-center">
          <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-1">
            <Phone className="h-6 w-6 text-purple-500" />
          </div>
          <span className="text-xs">电话</span>
        </button>
      </div>

      {/* 导航卡片 */}
      <div className="mx-4 my-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Navigation2 className="h-6 w-6 text-white mr-2" />
            <div>
              <h3 className="text-white font-medium">找店路线规划</h3>
              <p className="text-white text-sm opacity-80">为你提供AR路线导航</p>
            </div>
          </div>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-lg text-sm">
            导航
          </button>
        </div>
      </div>

      {/* 套餐和代金券 */}
      <div className="bg-white p-4 mt-2">
        <div className="flex space-x-4 border-b">
          <button 
            className={`pb-2 px-2 ${activeTab === 'packages' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('packages')}
          >
            到店套餐
          </button>
          <button 
            className={`pb-2 px-2 ${activeTab === 'vouchers' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('vouchers')}
          >
            超值代金券
          </button>
        </div>

        {activeTab === 'packages' && (
          <div className="mt-4">
            {packages.map((pkg) => (
              <div key={pkg.id} className="flex items-center mb-4">
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="ml-3 flex-1">
                  <h3 className="font-medium">{pkg.name}</h3>
                  <div className="mt-1">
                    <span className="text-red-500 text-lg font-bold">¥{pkg.price}</span>
                    <span className="text-gray-400 text-sm line-through ml-2">¥{pkg.originalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'vouchers' && (
          <div className="mt-4 space-y-3">
            {vouchers.map((voucher) => (
              <div key={voucher.id} className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                <div>
                  <div className="flex items-baseline">
                    <span className="text-red-500 text-lg font-bold">¥{voucher.price}</span>
                    <span className="text-gray-500 text-sm ml-1">代{voucher.value}</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">{voucher.description}</p>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded text-sm">
                  抢购
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 网友推荐菜 */}
      <div className="bg-white p-4 mt-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold">网友推荐菜</h2>
          <button className="text-gray-500 text-sm">查看全部 &gt;</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {recommendedDishes.map((dish) => (
            <div key={dish.id} className="relative">
              <img 
                src={dish.image}
                alt={dish.name}
                className="w-full h-24 object-cover rounded-lg"
              />
              <div className="absolute top-1 left-1 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                TOP{dish.rank}
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

export default RestaurantDetail;
