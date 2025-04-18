import { useState } from "react";
import { ChevronLeft, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import ChatInput from "../components/ChatInput";

const Index = () => {
  const popularQuestions = [
    {
      id: 1,
      question: "哪些儿童培训机构有羊毛可以薅？",
      count: "1890人问过",
      path: "/training-discounts"
    },
    {
      id: 2,
      question: "看看适合儿童的餐厅当前排队情况",
      count: "679人问过", 
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
            {/* 智能助理介绍区域 - 包含助理形象和介绍文字 */}
            <div className="flex items-center py-4 pl-0 pr-6 mb-[-30px] relative">
              {/* 助理形象容器 - 固定宽高比的图片容器 */}
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
              <div className="bg-white rounded-[16px] pt-0 pl-0 pr-0 pb-3 mb-2">
                {/* 使用图片替代文字标题和胶囊背景 */}
                <div className="flex mb-1.5">
                  <img 
                    src="/大家都在问@2x.png" 
                    alt="大家都在问" 
                    className="h-[38px] object-contain"
                  />
                </div>
                
                {/* 热门问题列表容器 */}
                <div className="space-y-4 px-3">
                  {/* 遍历渲染每个热门问题项 */}
                  {popularQuestions.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      {/* 问题标题和提问数量 */}
                      <div>
                        <p className="text-[16px] font-medium">{item.question}</p>
                        <p style={{ color: '#858687', fontSize: '11px' }}>{item.count}</p>
                      </div>
                      {/* "问问"按钮,点击跳转到对应页面 */}
                      <Link 
                        to={item.path} 
                        className="relative flex items-center justify-center px-4 rounded-full"
                        style={{
                          backgroundImage: 'url(/butn.png)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          color: '#000000',
                          fontSize: '14px',
                          height: '28px',
                          fontWeight: '500'
                        }}
                      >
                        问问
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* 热门问题 */}
              <div className="bg-white rounded-[16px] pt-0 pl-0 pr-0 pb-3 mb-4">
                {/* 使用图片替代文字标题和胶囊背景 */}
                <div className="flex mb-1.5">
                  <img 
                    src="/热门问题@2x.png" 
                    alt="热门问题" 
                    className="h-[38px] object-contain"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-1.5 px-3">
                  {hotTopics.map((topic, index) => (
                    <Link to={topic.path} key={topic.id} className="text-left">
                      <div className="bg-gray-50 p-2 rounded-lg h-[86px] flex flex-col relative overflow-visible">
                        <h3 className="font-medium text-left">{topic.title}</h3>
                        <p style={{ color: '#858687', fontSize: '11px' }} className="text-left mb-1">{topic.count}</p>
                        <div className="absolute top-0 right-0 h-full">
                          <img 
                            src={index === 0 ? "/互动展览ICON@2x.png" : 
                                 index === 1 ? "/亲子餐厅@2x.png" : 
                                              "/省心遛娃@2x.png"} 
                            alt={topic.title} 
                            className="h-[91px] w-auto object-contain"
                          />
                        </div>
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
