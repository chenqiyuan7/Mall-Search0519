import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

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

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
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
        
        <div className="space-y-4">
          {discountPrograms.map((program) => (
            <div key={program.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src={program.image} 
                alt={program.name} 
                className="mx-auto object-cover w-full h-40"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{program.name}</h3>
                <p className="text-red-500 font-medium my-1">{program.discount}</p>
                <p className="text-gray-500 text-sm">位置: {program.location}</p>
                <div className="mt-3 flex justify-between">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                    查看详情
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
                    立即预约
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部提示 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg text-center">
        <p className="text-sm text-gray-600">更多优惠信息请咨询商场客服或各培训机构前台</p>
      </div>
    </div>
  );
};

export default TrainingDiscounts;
