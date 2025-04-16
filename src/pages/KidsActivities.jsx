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
      image: "https://nocode.meituan.com/photo/search?keyword=science,kids,experiment&width=300&height=200"
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
      image: "https://nocode.meituan.com/photo/search?keyword=outdoor,adventure,kids&width=300&height=200"
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
      image: "https://nocode.meituan.com/photo/search?keyword=art,studio,kids&width=300&height=200"
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
      image: "https://nocode.meituan.com/photo/search?keyword=coding,kids,education&width=300&height=200"
    }
  ];

  const filteredActivities = activities.filter(activity => {
    return activeFilter === "all" || activity.type === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#292929] flex justify-center items-start">
      {/* 固定宽度内容容器 */}
      <div className="w-[375px] h-[812px] relative bg-white overflow-y-auto overflow-x-hidden">
        {/* 顶部导航栏 */}
        <div className="bg-white p-4 flex items-center shadow-sm">
          <Link to="/">
            <ChevronLeft className="h-6 w-6 mr-2" />
          </Link>
          <h1 className="text-lg font-bold">省心遛娃</h1>
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

        {/* 活动列表 */}
        <div className="p-4">
          <div className="space-y-4">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={activity.image} 
                  alt={activity.name} 
                  className="mx-auto object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{activity.name}</h3>
                  <p className="text-gray-600 mt-1">{activity.description}</p>
                  
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center">
                      <span className="text-gray-500 w-20">活动时间:</span>
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 w-20">活动地点:</span>
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 w-20">适合年龄:</span>
                      <span>{activity.ageRange}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 w-20">活动费用:</span>
                      <span className="text-red-500 font-medium">{activity.price}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                      活动详情
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

        {/* 底部聊天输入框 */}
        <ChatInput />
      </div>
    </div>
  );
};

export default KidsActivities;
