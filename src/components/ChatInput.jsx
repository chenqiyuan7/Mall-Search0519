import { useState } from "react";
import { MessageSquare } from "lucide-react";
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
      
      {location.pathname === "/" && (
        <div className="flex justify-between mt-3">
          {quickLinks.map((link) => (
            <Link to={link.path} key={link.id} className="text-white text-xs">
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatInput;
