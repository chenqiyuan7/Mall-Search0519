import { useState } from "react";
import { ChevronLeft, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import ChatInput from "../components/ChatInput";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-[#292929] flex justify-center items-start">
      {/* 固定宽度内容容器 */}
      <div className="w-[375px] h-[812px] relative bg-[#F5F5F5] overflow-y-auto overflow-x-hidden">
        {/* 背景图层 */}
        <div 
          className="absolute top-0 left-0 w-full h-[500px] bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(/bg@1x.png)'
          }}
        />
        
        {/* 内容层 - 确保在背景之上 */}
        <div className="relative z-10">
          {/* 顶部导航栏 */}
          <div className="flex justify-between items-center p-4">
            <ChevronLeft className="h-6 w-6 text-black" />
            <div className="relative">
              {/* 背景层 */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[317px] h-[32px] rounded-[22px_0px_0px_22px] opacity-[0.548] border border-white"
                   style={{
                     background: 'linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6207) 100%)'
                   }}>
              </div>
              {/* 内容层 - 添加左边距 */}
              <div className="flex items-center relative z-10 pl-[4px]">
                <div className="flex -space-x-2 mr-2">
                  <div className="w-6 h-6 rounded-full border-0.5 border-white overflow-hidden">
                    <img src="/IndexAvatar1.png" alt="avatar1" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full border-0.5 border-white overflow-hidden">
                    <img src="/IndexAvatar2.png" alt="avatar2" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full border-0.5 border-white overflow-hidden">
                    <img src="/IndexAvatar3.png" alt="avatar3" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span 
                  style={{
                    fontFamily: 'PingFang SC, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: '11px',
                    fontWeight: 'normal',
                    lineHeight: 'normal',
                    letterSpacing: '0px',
                    color: '#4C4C4C'
                  }}
                >
                  827,198人发起了提问
                </span>
              </div>
            </div>
          </div>

          {/* 智能助理及以下模块内容区域 - 上移60px */}
          <div className="mt-[-60px] pb-16">
            {/* 智能助理介绍区域 */}
            <div className="flex items-center py-4 pl-0 pr-6 mb-[-36px] relative">
              <div className="w-[107px] h-[149px] flex items-center justify-center">
                <img 
                  src="/艾小团x@2x.png" 
                  alt="艾小团" 
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="ml-[14px] relative top-[10px]">
                <h1 className="text-[20px] font-bold">我是你的智能助理</h1>
                <h2 className="text-[20px] font-bold">艾小团~</h2>
              </div>
            </div>

            {/* 问题和推荐列表区域 */}
            <div className="px-3 mt-0">
              {/* 大家都在问 */}
              <div className="bg-white rounded-[12px] p-3 mb-4">
                {/* 这是一个白色背景的卡片容器,带有圆角和内边距,底部有外边距 */}
                <div className="inline-block bg-gray-100 px-4 py-1 rounded-full mb-4">
                  {/* 这是一个灰色背景的标题容器,呈现胶囊形状 */}
                  <h2 className="text-lg font-bold">大家都在问</h2>
                </div>
                
                <div className="space-y-4">
                  {popularQuestions.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <p className="text-[16px] font-medium">{item.question}</p>
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
              <div className="bg-white rounded-[12px] p-3">
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
          </div>

          {/* 底部聊天输入框 */}
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default Index;
