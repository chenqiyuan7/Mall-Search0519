import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ChatInput = () => {
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();

  const quickLinks = [
    { id: 1, text: "亲子餐厅", path: "/family-restaurant" },
    { id: 2, text: "停车引导", path: "/parking-guide" },
    { id: 3, text: "找店铺", path: "/find-store" },
    { id: 4, text: "吃喝玩乐套票", path: "/entertainment-packages" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 flex flex-col items-center" style={{ maxWidth: "inherit" }}>
      {/* 背景层和选项栏的容器 */}
      <div className="relative w-full mt-5">
        {/* 半透明背景 */}
        <div 
          style={{
            position: "absolute",
            width: "100%",
            height: "65.5px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            borderRadius: "20px 20px 0 0",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "-29px",  /* 使其与底部输入框重叠70px */
            zIndex: -1
          }}
        ></div>
        
        {/* 选项栏 - 在输入框上方 */}
        <div className="flex justify-start pl-2 space-x-2 w-full mb-2 overflow-x-auto">
          {quickLinks.map((link) => (
            <Link 
              to={link.path} 
              key={link.id} 
              className="bg-white text-[#858687] px-1.5 py-1 rounded-full whitespace-nowrap relative z-10"
              style={{ fontSize: '11px', lineHeight: '1em' }}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
      
      {/* 悬浮输入框 */}
      <div className="relative w-full">
        <div className="relative w-full">
          <div className="bg-black rounded-full flex items-center px-0.5 py-0.5 shadow-lg w-full">
            <div className="flex items-center justify-center ml-[3px]" style={{ padding: '0' }}>
              <img 
                src="/音频圈@2x.png" 
                alt="音频图标" 
                className="h-[52px] w-[52px] object-contain"
                style={{ margin: '2px 5px 2px 5px' }}
              />
            </div>
            <input
              type="text"
              placeholder="逛商场就问艾小团"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="bg-transparent w-full focus:outline-none ml-[10px]"
              style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '16px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
