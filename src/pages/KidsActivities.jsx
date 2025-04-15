import { useState } from "react";
import { ChevronLeft, Search, MapPin, Clock, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const KidsActivities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "全部" },
    { id: "indoor", name: "室内活动" },
    { id: "outdoor", name: "户外活动" },
    { id: "educational", name: "教育活动" },
    { id: "creative", name: "创意手工" },
    { id: "sports", name: "运动健身" }
  ];
  
  const activities = [
    {
      id: 1,
      name: "儿童淘气堡",
      description: "大型室内游乐场，适合2-12岁儿童",
      category: "indoor",
      location: "5楼 D区 儿童乐园",
      openHours: "10:00-21:00",
      price: "60元/小时，全天票168元",
      ageRange: "2-12岁",
      image: "https://nocode.meituan.com/photo/search?keyword=indoor,playground,kids&width=300&height=200"
    },
    {
      id: 2,
      name: "亲子手工坊",
      description: "DIY手工制作，培养孩子创造力和动手能力",
      category: "creative",
      location: "3楼 B区 创意空间",
      openHours: "10:00-19:00",
      price: "88元/次（含材料费）",
      ageRange: "4-12岁",
      image: "https://nocode.meituan.com/photo/search?keyword=kids,craft,diy&width=300&height=200"
    },
    {
      id: 3,
      name: "儿童科学实验室",
      description: "趣味科学实验，激发孩子探索精神",
      category: "educational",
      location: "4楼 C区 科学馆",
      openHours: "09:30-18:30",
      price: "98元/次（含实验材料）",
      ageRange: "6-14岁",
      image: "https://nocode.meituan.com/photo/search?keyword=science,lab,kids&width=300&height=200"
    },
    {
      id: 4,
      name: "迷你高尔夫",
      description: "儿童友好型高尔夫球场，培养专注力和协调能力",
      category: "sports",
      location: "6楼 屋顶花园",
      openHours: "09:00-20:00",
      price: "78元/小时",
      ageRange: "5-15岁",
      image: "https://nocode.meituan.com/photo/search?keyword=mini,golf,kids&width=300&height=200"
    },
    {
      id: 5,
      name: "户外探险乐园",
      description: "安全的户外攀爬和探险活动，锻炼孩子勇气和体能",
      category: "outdoor",
      location: "1楼 中央广场",
      openHours: "10:00-19:00",
      price: "88元/次",
      ageRange: "6-15岁",
      image: "https://nocode.meituan.com/photo/search?keyword=outdoor,adventure,kids&width=300&height=200"
    },
    {
      id: 6,
      name: "儿童绘画工作室",
      description: "专业儿童美术教育，培养艺术天赋",
      category: "creative",
      location: "3楼 A区 艺术中心",
      openHours: "10:00-18:00",
      price: "108元/课时",
      ageRange: "4-16岁",
      image: "https://nocode.meituan.com/photo/search?keyword=painting,studio,kids&width=300&height=200"
    }
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          activity.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || activity.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* 顶部导航栏 */}
      <div className="bg-white p-4 flex items-center shadow-sm">
        <Link to="/">
          <ChevronLeft className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-lg font-bold">省心遛娃</h1>
      </div>

      {/* 搜索栏 */}
      <div className="p-4 bg-white">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索活动名称或位置"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 bg-gray-100 rounded-lg"
          />
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* 分类选项 */}
      <div className="p-4 bg-white mb-2">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeCategory === category.id ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
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
                
                <div className="flex items-center mt-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">位置: {activity.location}</span>
                </div>
                
                <div className="flex items-center mt-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">开放时间: {activity.openHours}</span>
                </div>
                
                <div className="flex items-center mt-2">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-gray-600 text-sm">适合年龄: {activity.ageRange}</span>
                </div>
                
                <div className="mt-2 bg-blue-50 p-2 rounded-lg">
                  <p className="text-blue-800 text-sm font-medium">价格: {activity.price}</p>
                </div>
                
                <div className="mt-4 flex justify-between">
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

          {filteredActivities.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">没有找到匹配的活动</p>
            </div>
          )}
        </div>
      </div>

      {/* 底部提示 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg text-center">
        <p className="text-sm text-gray-600">活动信息可能会有变动，请以现场公告为准</p>
      </div>
    </div>
  );
};

export default KidsActivities;
