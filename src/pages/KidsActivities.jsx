import React from "react";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ChatInput from "../components/ChatInput";

const KidsActivities = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "全部活动" },
    { id: "indoor", name: "室内活动" },
    { id: "outdoor", name: "户外活动" },
    { id: "education", name: "教育活动" },
    { id: "art", name: "艺术活动" }
  ];

  const activities = [
    {
      id: 1,
      name: "趣味科学实验室",
      type: "indoor",
      description: "让孩子在实验中探索科学奥秘",
      time: "每天 10:00-18:00",
      location: "4楼 科教中心",
      ageRange: "6-12岁",
      price: "98元/人",
      image: "https://nocode.meituan.com/photo/search?keyword=science,kids,experiment&width=300&height=300"
    },
    {
      id: 2,
      name: "户外探险乐园",
      type: "outdoor",
      description: "安全有趣的户外探险活动",
      time: "每天 09:00-17:00",
      location: "6楼 空中花园",
      ageRange: "4-12岁",
      price: "68元/人",
      image: "https://nocode.meituan.com/photo/search?keyword=outdoor,adventure,kids&width=300&height=300"
    },
    {
      id: 3,
      name: "创意美术工作室",
      type: "art",
      description: "激发孩子的艺术创造力",
      time: "每天 10:00-19:00",
      location: "3楼 艺术中心",
      ageRange: "3-15岁",
      price: "128元/课时",
      image: "https://nocode.meituan.com/photo/search?keyword=art,studio,kids&width=300&height=300"
    },
    {
      id: 4,
      name: "趣味编程课堂",
      type: "education",
      description: "寓教于乐的编程启蒙课程",
      time: "周末 10:00-16:00",
      location: "5楼 教育中心",
      ageRange: "7-14岁",
      price: "158元/课时",
      image: "https://nocode.meituan.com/photo/search?keyword=coding,kids,education&width=300&height=300"
    },
    {
      id: 5,
      name: "亲子运动馆",
      type: "indoor",
      description: "促进亲子关系的互动体育活动",
      time: "每天 09:30-20:30",
      location: "2楼 运动中心",
      ageRange: "3-10岁",
      price: "88元/人",
      image: "https://nocode.meituan.com/photo/search?keyword=sports,kids,interactive&width=300&height=300"
    }
  ];

  const filteredActivities = activities.filter(activity => {
    return activeFilter === "all" || activity.type === activeFilter;
  });

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
    <div className="min-h-screen bg-[#292929] flex justify-center items-start">
      {/* 添加隐藏滚动条的CSS */}
      <style>{hideScrollbarCSS}</style>
      
      {/* 固定宽度内容容器 */}
      <div 
        className="w-[375px] h-[812px] relative bg-[#F5F5F5] overflow-y-auto overflow-x-hidden no-scrollbar" 
        style={noScrollbarStyle}
      >
      {/* 顶部导航栏 - 固定在顶部 */}
      <div className="bg-white p-4 flex items-center shadow-sm fixed top-0 w-[375px] z-10">
        <Link to="/home">
          <ChevronLeft className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-lg font-bold">省心遛娃</h1>
      </div>
      
      {/* 为固定导航栏添加空白填充 */}
      <div className="h-[60px]"></div>

      {/* 筛选选项 */}
      <div className="py-3 px-4 bg-white mb-4">
        <div className="flex space-x-2 overflow-x-auto no-scrollbar" style={noScrollbarStyle}>
          {filters.map((filter) => (
            <button 
              key={filter.id}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeFilter === filter.id ? 'bg-[#FFDD00] text-[#111111] font-bold' : 'bg-gray-100 text-[#555555]'}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* 活动列表 */}
      <div className="px-3 pt-2 pb-3">
        <div className="space-y-3">
          {filteredActivities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-lg overflow-hidden shadow-sm flex p-3">
              <div className="w-1/3">
                <div className="aspect-square w-full">
                  <img 
                    src={activity.image} 
                    alt={activity.name} 
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="font-bold text-base text-left">{activity.name}</h3>
                <p className="text-gray-600 text-xs mt-1 text-left">{activity.description}</p>
                
                <div className="mt-2 space-y-1">
                  <div className="flex items-center">
                    <span className="text-gray-500 text-xs text-left">活动时间:</span>
                    <span className="text-xs text-left ml-[6px]">{activity.time}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-xs text-left">活动地点:</span>
                    <span className="text-xs text-left ml-[6px]">{activity.location}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-xs text-left">适合年龄:</span>
                    <span className="text-xs text-left ml-[6px]">{activity.ageRange}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-xs text-left">活动费用:</span>
                    <span className="text-red-500 font-medium text-xs text-left ml-[6px]">{activity.price}</span>
                  </div>
                </div>
                
                <div className="mt-2 flex space-x-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                    活动详情
                  </button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded text-xs">
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
    </div>
  );
};

export default KidsActivities;
