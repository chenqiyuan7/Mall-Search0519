import { useState } from "react";
import { ChevronLeft, MapPin, Clock, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ChatInput from "../components/ChatInput";

const SanqingtanRestaurantDrawer = ({ onClose }) => {
  const navigate = useNavigate();
  
  const store = {
    name: "三清潭烧鹅(颐提港店)",
    openHours: "10:00-22:00",
    address: "朝阳区酒仙桥路颐提港三层L3-28",
    tags: ["儿童餐具", "宝宝椅", "包间"],
    image: "https://nocode.meituan.com/photo/search?keyword=roasted,goose,restaurant&width=400&height=300"
  };

  const packages = [
    {
      id: 1,
      name: "人气爆款经典烧鹅双人配米饭",
      price: 28.9,
      originalPrice: 50,
      image: "https://nocode.meituan.com/photo/search?keyword=roasted,goose,meal&width=200&height=200"
    },
    {
      id: 2,
      name: "超值潮州卤水拼盘配时蔬",
      price: 49.9,
      originalPrice: 50,
      image: "https://nocode.meituan.com/photo/search?keyword=chaozhou,food&width=200&height=200"
    },
    {
      id: 3,
      name: "店长推荐秘制烧鹅配靓汤",
      price: 39.9,
      originalPrice: 68,
      image: "https://nocode.meituan.com/photo/search?keyword=roasted,goose,rice&width=200&height=200"
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
      price: 99,
      value: 200,
      description: "周一至周日全天可用"
    }
  ];

  const recommendedDishes = [
    {
      id: 1,
      name: "TOP1",
      image: "https://nocode.meituan.com/photo/search?keyword=roasted,goose,1&width=200&height=200"
    },
    {
      id: 2,
      name: "TOP2",
      image: "https://nocode.meituan.com/photo/search?keyword=roasted,goose,2&width=200&height=200"
    },
    {
      id: 3,
      name: "TOP3",
      image: "https://nocode.meituan.com/photo/search?keyword=roasted,goose,3&width=200&height=200"
    }
  ];

  const handleBack = () => {
    if (onClose) onClose();
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
    <div className="w-full h-full overflow-hidden">
      {/* 添加隐藏滚动条的CSS */}
      <style>{hideScrollbarCSS}</style>
      
      {/* 内容容器 */}
      <div 
        className="w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar" 
        style={noScrollbarStyle}
      >
      {/* 店铺信息 */}
      <div className="relative">
        <img 
          src="/店铺详情头图@2x.png"
          alt={store.name}
          className="w-full object-cover"/>
        
        {/* 店铺信息覆盖在图片上层右侧 */}
        <div className="absolute top-0 right-0 p-0 text-white w-[65%] h-full flex flex-col justify-center">
          <h2 className="text-base font-bold">{store.name}</h2>
          <div className="mt-2 flex items-center text-xs">
            <span className="text-green-300">营业中</span>
            <span className="ml-2">{store.openHours}</span>
          </div>
          <p className="mt-1 text-white/80 text-xs">{store.address}</p>
          <div className="mt-2 flex gap-2 flex-wrap">
            {store.tags.map((tag, index) => (
              <span key={index} className="px-1 py-0.5 bg-white/20 text-[10px] rounded-[4px]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 功能按钮 */}
      <div className="grid grid-cols-4 mt-0 p-4" style={{ 
        backgroundImage: 'url(/ICON背景@2x.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        borderBottom: 'none'  // 确保没有底部边框
      }}>
        <button className="flex flex-col items-center">
          <img src="/预定.png" alt="预定" className="w-10 h-10 mb-1" />
          <span className="text-sm text-black">预定</span>
        </button>
        <button className="flex flex-col items-center">
          <img src="/排队.png" alt="排队" className="w-10 h-10 mb-1" />
          <span className="text-sm text-black">排队</span>
        </button>
        <button className="flex flex-col items-center">
          <img src="/外卖.png" alt="外卖" className="w-10 h-10 mb-1" />
          <span className="text-sm text-black">外卖</span>
        </button>
        <button className="flex flex-col items-center">
          <img src="/电话.png" alt="电话" className="w-10 h-10 mb-1" style={{ objectFit: 'contain' }} />
          <span className="text-sm text-black">电话</span>
        </button>
      </div>

      {/* 导航区域 */}
      <div className="bg-white px-3" style={{ borderTop: 'none', marginTop: '-1px' }}>  {/* 添加负margin消除可能的间隙 */}
        <img 
          src="/路线规划@2x.png" 
          alt="路线规划"
          className="w-full"
        />
      </div>

      {/* 从这里开始添加灰色背景 */}
      <div className="relative">
        {/* 渐变背景层 */}
        <div 
          className="absolute w-full h-[26px]" 
          style={{ 
            background: 'linear-gradient(to bottom, #FFFFFF 0%, #F5F5F5 100%)',
            top: 0
          }}
        />
        {/* 灰色背景层 */}
        <div className="absolute w-full bg-[#F5F5F5]" style={{ top: '26px', bottom: 0 }} />
        
        {/* 内容层 */}
        <div className="relative">
          {/* 套餐和代金券 */}
          <div className="px-3 py-3">
            <div className="grid grid-cols-2 gap-2">
              {/* 到店套餐 */}
              <div className="bg-white p-3 rounded-2xl">
                <div className="relative w-[171.5px] -mx-3 -mt-3">
                  <img 
                    src="/到店套餐备份 2@2x.png"
                    alt="到店套餐"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <h3 className="font-medium" style={{ color: '#000000' }}>到店套餐</h3>
                  </div>
                </div>
                <div className="space-y-[5px]">
                  {packages.map((pkg) => (
                    <div key={pkg.id} className="flex items-center bg-white rounded h-[53px]">
                      <img 
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-[53px] h-[53px] rounded-xl object-cover"
                      />
                      <div className="flex-1 ml-[5px]">
                        <h4 className="text-xs">{pkg.name}</h4>
                        <div>
                          <span className="text-red-500 text-xs">¥{pkg.price}</span>
                          <span className="text-gray-400 text-xs line-through ml-2">¥{pkg.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 超值代金券 */}
              <div className="bg-white p-3 rounded-2xl">
                <div className="relative w-[171.5px] -mx-3 -mt-3">
                  <img 
                    src="/超值代金券备份 2@2x.png"
                    alt="超值代金券"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <h3 className="font-medium" style={{ color: '#000000' }}>超值代金券</h3>
                  </div>
                </div>
                <div className="flex flex-col gap-[6px]">
                  {vouchers.map((voucher, index) => (
                    <div 
                      key={voucher.id} 
                      className="min-h-[53px] p-1 rounded-xl flex items-center"
                      style={{
                        background: 'linear-gradient(270deg, #FFFBFE 44%, #FFF1F8 99%)',
                        border: '0.5px solid #FFF1F8',
                        opacity: 1,
                        boxSizing: 'border-box'
                      }}
                    >
                      <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col">
                          <div className="text-xs font-medium" style={{ color: '#000000', fontSize: '12px' }}>
                            {`${voucher.price}代${voucher.value}代金券`}
                          </div>
                          <p className="text-gray-500" style={{ fontSize: '10px' }}>{voucher.description}</p>
                        </div>
                        <div className="flex items-baseline">
                          <span className="text-red-500">¥</span>
                          <span className="text-red-500 text-lg">{voucher.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 网友推荐菜 */}
          <div className="bg-white mx-3 rounded-2xl">
            <div className="relative w-[351px] mx-auto">
              <img 
                src="/网友推荐菜@2x.png"
                alt="网友推荐菜"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-3 gap-[6px] px-3 pb-20">
              {recommendedDishes.map((dish) => (
                <div key={dish.id} className="relative aspect-square">
                  <img 
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full rounded-lg object-cover"
                  />
                  <div className="absolute left-[5px] -top-[3px]">
                    <img 
                      src={`/TOP${dish.id}.png`}
                      alt={dish.name}
                      className="w-12 h-6 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SanqingtanRestaurantDrawer;
