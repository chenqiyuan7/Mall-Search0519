import { useState } from "react";
import { ChevronLeft, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [inputValue, setInputValue] = useState("");

  const popularQuestions = [
    {
      id: 1,
      question: "哪些儿童培训机构有羊毛可以薅？",
      count: "928人问过",
      path: "/training-discounts"
    },
    {
      id: 2,
      question: "看看适合儿童的餐厅当前排队情况",
      count: "928人问过",
      path: "/restaurant-queue"
    },
    {
      id: 3,
      question: "哪些南方菜店铺有优惠",
      count: "928人问过",
      path: "/southern-cuisine-discounts"
    }
  ];

  const hotTopics = [
    {
      id: 1,
      title: "互动展览",
      count: "20个问题",
      icon: "https://nocode.meituan.com/photo/search?keyword=interactive,exhibition&width=100&height=100",
      path: "/interactive-exhibition"
    },
    {
      id: 2,
      title: "亲子餐厅",
      count: "12个问题",
      icon: "https://nocode.meituan.com/photo/search?keyword=family,restaurant&width=100&height=100",
      path: "/family-restaurant"
    },
    {
      id: 3,
      title: "省心遛娃",
      count: "9个问题",
      icon: "https://nocode.meituan.com/photo/search?keyword=kids,play&width=100&height=100",
      path: "/kids-activities"
    }
  ];

  const quickLinks = [
    { id: 1, text: "亲子餐厅", path: "/family-restaurant" },
    { id: 2, text: "停车引导", path: "/parking-guide" },
    { id: 3, text: "找店铺", path: "/find-store" },
    { id: 4, text: "吃喝玩乐套票", path: "/entertainment-packages" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 to-green-100 pb-20">
      {/* 顶部导航栏 */}
      <div className="flex justify-between items-center p-4">
        <ChevronLeft className="h-6 w-6 text-black" />
        <div className="flex items-center">
          <div className="flex -space-x-2 mr-2">
            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-white"></div>
          </div>
          <span className="text-sm font-medium">827,198人发起了提问</span>
        </div>
      </div>

      {/* 智能助理介绍区域 */}
      <div className="flex items-center px-6 py-4">
        <div className="w-20 h-20 mr-4">
          <img 
            src="https://nocode.meituan.com/photo/search?keyword=cute,rabbit,mascot&width=200&height=200" 
            alt="艾小团" 
            className="mx-auto object-cover w-full h-full"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">我是你的智能助理</h1>
          <h2 className="text-2xl font-bold">艾小团~</h2>
        </div>
      </div>

      {/* 问题和推荐列表区域 */}
      <div className="px-4 mt-2">
        {/* 大家都在问 */}
        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="inline-block bg-gray-100 px-4 py-1 rounded-full mb-4">
            <h2 className="text-lg font-bold">大家都在问</h2>
          </div>
          
          <div className="space-y-4">
            {popularQuestions.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.question}</p>
                  <p className="text-sm text-gray-500">{item.count}</p>
                </div>
                <Link to={item.path} className="bg-green-400 text-white px-4 py-2 rounded-full">
                  问问
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 热门问题 */}
        <div className="bg-white rounded-lg p-4">
          <div className="inline-block bg-gray-100 px-4 py-1 rounded-full mb-4">
            <h2 className="text-lg font-bold">热门问题</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {hotTopics.map((topic) => (
              <Link to={topic.path} key={topic.id} className="text-center">
                <div className="bg-gray-50 p-2 rounded-lg">
                  <div className="flex justify-center">
                    <img 
                      src={topic.icon} 
                      alt={topic.title} 
                      className="mx-auto object-cover w-16 h-16"
                    />
                  </div>
                  <h3 className="font-medium mt-2">{topic.title}</h3>
                  <p className="text-xs text-gray-500">{topic.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 底部对话区 */}
      <div className="fixed bottom-0 left-0 right-0 bg-black rounded-t-3xl p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="逛商场就问艾小团"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-gray-800 text-white rounded-full py-3 px-12 focus:outline-none"
          />
          <MessageSquare className="absolute left-4 top-3 h-5 w-5 text-green-400" />
        </div>
        
        <div className="flex justify-between mt-3">
          {quickLinks.map((link) => (
            <Link to={link.path} key={link.id} className="text-white text-xs">
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
