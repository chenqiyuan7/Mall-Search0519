import { useState } from "react";
import { ChevronLeft, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import ChatInput from "../components/ChatInput";

const Recommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: "商场里的儿童餐我锁定这几家",
      likes: 1326,
      description: "精选5家适合带娃的餐厅，环境好还有儿童游乐区",
      author: "美食达人小王",
      image: "https://nocode.meituan.com/photo/search?keyword=kids,meal,restaurant&width=300&height=200"
    },
    {
      id: 2,
      title: "一家适合1人的日式拉面店",
      likes: 1326,
      description: "独特的用餐体验，让一个人吃饭也很享受",
      author: "拉面控",
      image: "https://nocode.meituan.com/photo/search?keyword=japanese,ramen&width=300&height=200"
    },
    {
      id: 3,
      title: "带娃必去的4家亲子餐厅",
      likes: 986,
      description: "环境好、有游乐设施，让孩子吃得开心玩得尽兴",
      author: "亲子美食家",
      image: "https://nocode.meituan.com/photo/search?keyword=family,restaurant,kids&width=300&height=200"
    },
    {
      id: 4,
      title: "探店 | 这家云南菜太地道了",
      likes: 856,
      description: "正宗的云南味道，让你一秒穿越到大理古城",
      author: "美食探店王",
      image: "https://nocode.meituan.com/photo/search?keyword=yunnan,cuisine&width=300&height=200"
    },
    {
      id: 5,
      title: "周末亲子游玩好去处",
      likes: 756,
      description: "精选商场内适合亲子活动的场所，让周末不再无聊",
      author: "亲子玩乐达人",
      image: "https://nocode.meituan.com/photo/search?keyword=family,weekend,fun&width=300&height=200"
    },
    {
      id: 6,
      title: "这家火锅店太适合聚会了",
      likes: 689,
      description: "环境舒适，菜品丰富，适合朋友聚会",
      author: "火锅爱好者",
      image: "https://nocode.meituan.com/photo/search?keyword=hotpot,restaurant&width=300&height=200"
    },
    {
      id: 7,
      title: "探秘商场里的甜品天堂",
      likes: 578,
      description: "精选5家人气甜品店，每一家都让人惊喜",
      author: "甜品控",
      image: "https://nocode.meituan.com/photo/search?keyword=dessert,cafe&width=300&height=200"
    },
    {
      id: 8,
      title: "带外国朋友必去的中餐厅",
      likes: 467,
      description: "既能品尝正宗中餐，又能感受现代餐饮文化",
      author: "美食文化家",
      image: "https://nocode.meituan.com/photo/search?keyword=chinese,restaurant,modern&width=300&height=200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 顶部导航栏 */}
      <div className="bg-white p-4 flex items-center shadow-sm sticky top-0 z-10">
        <Link to="/southern-cuisine-discounts">
          <ChevronLeft className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-lg font-bold">网友推荐</h1>
      </div>

      {/* 推荐列表 - 双列瀑布流布局 */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {recommendations.map((rec) => (
            <div 
              key={rec.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img 
                src={rec.image} 
                alt={rec.title} 
                className="mx-auto object-cover w-full h-40"
              />
              <div className="p-3">
                <h3 className="font-bold text-sm line-clamp-2">{rec.title}</h3>
                <p className="text-gray-600 mt-1 text-xs line-clamp-2">{rec.description}</p>
                
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-gray-500 text-xs">{rec.author}</span>
                  <div className="flex items-center">
                    <ThumbsUp className="h-3 w-3 text-pink-500 mr-1" />
                    <span className="text-gray-500 text-xs">{rec.likes}</span>
                  </div>
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

export default Recommendations;
