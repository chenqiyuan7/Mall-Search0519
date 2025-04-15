import { useState } from "react";
import { ChevronLeft, Calendar, Clock, MapPin, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const InteractiveExhibition = () => {
  const [activeTab, setActiveTab] = useState("current");
  
  const exhibitions = {
    current: [
      {
        id: 1,
        name: "奇妙海洋世界",
        description: "沉浸式海洋主题互动展览，适合3-12岁儿童",
        startDate: "2023-10-01",
        endDate: "2023-12-31",
        time: "10:00-20:00",
        location: "1楼 中央广场",
        price: "68元/人，家庭票158元（2大1小）",
        tags: ["海洋生物", "互动投影", "科普教育"],
        image: "https://nocode.meituan.com/photo/search?keyword=ocean,exhibition,interactive&width=300&height=200"
      },
      {
        id: 2,
        name: "恐龙探险记",
        description: "穿越时空，与恐龙近距离接触的AR互动体验",
        startDate: "2023-09-15",
        endDate: "2023-11-30",
        time: "09:30-19:30",
        location: "3楼 A区 展厅",
        price: "88元/人，家庭票198元（2大1小）",
        tags: ["恐龙主题", "AR体验", "历史探索"],
        image: "https://nocode.meituan.com/photo/search?keyword=dinosaur,exhibition&width=300&height=200"
      },
      {
        id: 3,
        name: "太空科学馆",
        description: "探索宇宙奥秘，体验失重感受的互动科学展",
        startDate: "2023-10-10",
        endDate: "2024-01-10",
        time: "10:00-21:00",
        location: "5楼 特展区",
        price: "98元/人，家庭票228元（2大1小）",
        tags: ["太空探索", "科学实验", "VR体验"],
        image: "https://nocode.meituan.com/photo/search?keyword=space,science,exhibition&width=300&height=200"
      }
    ],
    upcoming: [
      {
        id: 4,
        name: "童话世界奇遇",
        description: "走进经典童话故事，与角色互动的沉浸式体验",
        startDate: "2024-01-15",
        endDate: "2024-03-15",
        time: "10:00-20:00",
        location: "2楼 B区 展厅",
        price: "78元/人，家庭票188元（2大1小）",
        tags: ["童话主题", "角色互动", "创意艺术"],
        image: "https://nocode.meituan.com/photo/search?keyword=fairy,tale,exhibition&width=300&height=200"
      },
      {
        id: 5,
        name: "未来科技展",
        description: "体验前沿科技，探索未来世界的互动科技展",
        startDate: "2024-02-01",
        endDate: "2024-04-30",
        time: "09:00-21:00",
        location: "4楼 C区 科技馆",
        price: "108元/人，家庭票258元（2大1小）",
        tags: ["未来科技", "机器人", "互动游戏"],
        image: "https://nocode.meituan.com/photo/search?keyword=future,technology,exhibition&width=300&height=200"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* 顶部导航栏 */}
      <div className="bg-white p-4 flex items-center shadow-sm">
        <Link to="/">
          <ChevronLeft className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-lg font-bold">互动展览</h1>
      </div>

      {/* 标签切换 */}
      <div className="p-4 bg-white mb-2">
        <div className="flex border-b">
          <button 
            className={`flex-1 py-2 text-center ${activeTab === 'current' ? 'border-b-2 border-blue-500 text-blue-500 font-medium' : 'text-gray-500'}`}
            onClick={() => setActiveTab('current')}
          >
            当前展览
          </button>
          <button 
            className={`flex-1 py-2 text-center ${activeTab === 'upcoming' ? 'border-b-2 border-blue-500 text-blue-500 font-medium' : 'text-gray-500'}`}
            onClick={() => setActiveTab('upcoming')}
          >
            即将开展
          </button>
        </div>
      </div>

      {/* 展览列表 */}
      <div className="p-4">
        <div className="space-y-4">
          {exhibitions[activeTab].map((exhibition) => (
            <div key={exhibition.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src={exhibition.image} 
                alt={exhibition.name} 
                className="mx-auto object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{exhibition.name}</h3>
                <p className="text-gray-600 mt-1">{exhibition.description}</p>
                
                <div className="flex items-center mt-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">
                    {exhibition.startDate} 至 {exhibition.endDate}
                  </span>
                </div>
                
                <div className="flex items-center mt-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">开放时间: {exhibition.time}</span>
                </div>
                
                <div className="flex items-center mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">位置: {exhibition.location}</span>
                </div>
                
                <div className="flex items-center mt-2">
                  <Tag className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">票价: {exhibition.price}</span>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {exhibition.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-between">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                    查看详情
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
                    在线购票
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部提示 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg text-center">
        <p className="text-sm text-gray-600">展览信息可能会有变动，请以现场公告为准</p>
      </div>
    </div>
  );
};

export default InteractiveExhibition;
