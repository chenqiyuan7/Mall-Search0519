import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ChatInput from "../components/ChatInput";

const TrainingDiscounts = () => {
  const discountPrograms = [
    {
      id: 1,
      name: "小小艺术家绘画班",
      discount: "首课免费 + 报名立减100元",
      location: "3楼 C区 306",
      image: "https://nocode.meituan.com/photo/search?keyword=kids,painting&width=200&height=150"
    },
    {
      id: 2,
      name: "乐高创意工作室",
      discount: "新会员8折优惠",
      location: "4楼 A区 412",
      image: "https://nocode.meituan.com/photo/search?keyword=lego,kids&width=200&height=150"
    },
    {
      id: 3,
      name: "小小钢琴家",
      discount: "试课立减50元 + 赠送乐理教材",
      location: "5楼 B区 503",
      image: "https://nocode.meituan.com/photo/search?keyword=piano,child&width=200&height=150"
    },
    {
      id: 4,
      name: "趣味英语俱乐部",
      discount: "买10节课送2节 + 免费测评",
      location: "3楼 D区 315",
      image: "https://nocode.meituan.com/photo/search?keyword=english,class,kids&width=200&height=150"
    },
    {
      id: 5,
      name: "儿童舞蹈中心",
      discount: "新生报名享85折 + 免费舞蹈服",
      location: "4楼 C区 428",
      image: "https://nocode.meituan.com/photo/search?keyword=kids,dancing&width=200&height=150"
    }
  ];

  const handleCardClick = (program) => {
    // 处理卡片点击，查看详情
    console.log("查看详情:", program);
  };

  const handleBooking = (e, program) => {
    e.stopPropagation(); // 阻止事件冒泡到卡片
    // 处理预约按钮点击
    console.log("立即预约:", program);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 顶部导航栏 */}
      <div className="bg-white p-4 flex items-center shadow-sm">
        <Link to="/">
          <ChevronLeft className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-lg font-bold">儿童培训机构优惠</h1>
      </div>

      {/* 优惠列表 */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">当前优惠活动</h2>
        
        <div className="grid grid-cols-2 gap-4">
          {discountPrograms.map((program) => (
            <div 
              key={program.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => handleCardClick(program)}
            >
              <img 
                src={program.image} 
                alt={program.name} 
                className="mx-auto object-cover w-full h-32"
              />
              <div className="p-3">
                <h3 className="font-bold text-sm line-clamp-1">{program.name}</h3>
                <p className="text-red-500 text-xs my-1 line-clamp-2">{program.discount}</p>
                <p className="text-gray-500 text-xs mb-2">位置: {program.location}</p>
                <div className="flex justify-end items-center">
                  <button 
                    className="bg-green-500 text-white px-3 py-1 rounded text-xs"
                    onClick={(e) => handleBooking(e, program)}
                  >
                    立即预约
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

export default TrainingDiscounts;
