import { useState, useEffect } from "react";
import { ChevronLeft, Car, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ChatInput from "../components/ChatInput";

const ParkingGuide = () => {
  const [parkingAreas, setParkingAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFloor, setSelectedFloor] = useState("all");
  
  const floors = [
    { id: "all", name: "全部" },
    { id: "B2", name: "B2" },
    { id: "B1", name: "B1" },
    { id: "1F", name: "1F" }
  ];

  useEffect(() => {
    // 模拟获取停车场数据
    const fetchData = () => {
      setLoading(true);
      setTimeout(() => {
        setParkingAreas([
          {
            id: 1,
            name: "B2区停车场",
            floor: "B2",
            totalSpots: 200,
            availableSpots: 45,
            nearbyEntrance: "B2电梯口，靠近超市",
            specialFeatures: ["亲子车位", "充电桩"],
            image: "https://nocode.meituan.com/photo/search?keyword=parking,garage,underground&width=300&height=200"
          },
          {
            id: 2,
            name: "B1区停车场",
            floor: "B1",
            totalSpots: 180,
            availableSpots: 12,
            nearbyEntrance: "B1电梯口，靠近美食广场",
            specialFeatures: ["残障车位", "充电桩"],
            image: "https://nocode.meituan.com/photo/search?keyword=parking,garage,level&width=300&height=200"
          },
          {
            id: 3,
            name: "1F北区停车场",
            floor: "1F",
            totalSpots: 120,
            availableSpots: 35,
            nearbyEntrance: "北门入口，靠近广场",
            specialFeatures: ["亲子车位", "临时停车"],
            image: "https://nocode.meituan.com/photo/search?keyword=parking,outdoor&width=300&height=200"
          },
          {
            id: 4,
            name: "1F南区停车场",
            floor: "1F",
            totalSpots: 100,
            availableSpots: 8,
            nearbyEntrance: "南门入口，靠近儿童乐园",
            specialFeatures: ["亲子车位", "临时停车"],
            image: "https://nocode.meituan.com/photo/search?keyword=parking,mall,entrance&width=300&height=200"
          },
          {
            id: 5,
            name: "B2VIP停车区",
            floor: "B2",
            totalSpots: 50,
            availableSpots: 20,
            nearbyEntrance: "VIP专用电梯，靠近高端品牌区",
            specialFeatures: ["会员专用", "充电桩", "代客泊车"],
            image: "https://nocode.meituan.com/photo/search?keyword=vip,parking&width=300&height=200"
          }
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  const getAvailabilityColor = (total, available) => {
    const percentage = (available / total) * 100;
    if (percentage > 30) return "text-green-500";
    if (percentage > 10) return "text-yellow-500";
    return "text-red-500";
  };

  const getAvailabilityText = (total, available) => {
    const percentage = (available / total) * 100;
    if (percentage > 30) return "充足";
    if (percentage > 10) return "紧张";
    return "拥挤";
  };

  const filteredParkingAreas = parkingAreas.filter(area => {
    return selectedFloor === "all" || area.floor === selectedFloor;
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
        <Link to="/">
          <ChevronLeft className="h-6 w-6 mr-2" />
        </Link>
        <h1 className="text-lg font-bold">停车引导</h1>
      </div>
      
      {/* 为固定导航栏添加空白填充 */}
      <div className="h-[60px]"></div>

      {/* 楼层选择 */}
      <div className="p-4 bg-white mb-2">
        <div className="flex space-x-2 overflow-x-auto no-scrollbar" style={noScrollbarStyle}>
          {floors.map((floor) => (
            <button 
              key={floor.id}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${selectedFloor === floor.id ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              onClick={() => setSelectedFloor(floor.id)}
            >
              {floor.name}
            </button>
          ))}
        </div>
      </div>

      {/* 停车场概览 */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">停车场实时状态</h2>
        
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredParkingAreas.map((area) => (
              <div key={area.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={area.image} 
                  alt={area.name} 
                  className="mx-auto object-cover w-full h-40"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg">{area.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {area.floor}层
                    </span>
                  </div>
                  
                  <div className="mt-3 flex items-center">
                    <Car className="h-5 w-5 mr-2" />
                    <div>
                      <div className="flex items-center">
                        <span className={`font-medium ${getAvailabilityColor(area.totalSpots, area.availableSpots)}`}>
                          可用车位: {area.availableSpots}/{area.totalSpots}
                        </span>
                        <span className={`ml-2 text-sm px-2 py-0.5 rounded ${getAvailabilityColor(area.totalSpots, area.availableSpots) === 'text-green-500' ? 'bg-green-100' : getAvailabilityColor(area.totalSpots, area.availableSpots) === 'text-yellow-500' ? 'bg-yellow-100' : 'bg-red-100'}`}>
                          {getAvailabilityText(area.totalSpots, area.availableSpots)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div 
                          className={`h-2.5 rounded-full ${getAvailabilityColor(area.totalSpots, area.availableSpots) === 'text-green-500' ? 'bg-green-500' : getAvailabilityColor(area.totalSpots, area.availableSpots) === 'text-yellow-500' ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${(area.availableSpots / area.totalSpots) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-gray-600 text-sm">附近入口: {area.nearbyEntrance}</span>
                  </div>
                  
                  <div className="mt-3 flex flex-wrap gap-2">
                    {area.specialFeatures.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex justify-between">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm flex items-center">
                      查看详细位置 <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
                      导航前往
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredParkingAreas.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">没有找到匹配的停车区域</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 底部提示 */}
        <div className="fixed bottom-16 left-0 right-0 mx-auto max-w-[375px] bg-white p-4 shadow-lg text-center">
        <p className="text-sm text-gray-600">停车位信息实时更新，请以实际情况为准</p>
      </div>

      {/* 底部聊天输入框 */}
      <ChatInput />
      </div>
    </div>
  );
};

export default ParkingGuide;
