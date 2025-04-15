import { HomeIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import TrainingDiscounts from "./pages/TrainingDiscounts.jsx";
import RestaurantQueue from "./pages/RestaurantQueue.jsx";
import SouthernCuisineDiscounts from "./pages/SouthernCuisineDiscounts.jsx";
import InteractiveExhibition from "./pages/InteractiveExhibition.jsx";
import FamilyRestaurant from "./pages/FamilyRestaurant.jsx";
import KidsActivities from "./pages/KidsActivities.jsx";
import ParkingGuide from "./pages/ParkingGuide.jsx";
import FindStore from "./pages/FindStore.jsx";
import EntertainmentPackages from "./pages/EntertainmentPackages.jsx";
import RestaurantDetail from "./pages/RestaurantDetail.jsx";
import Recommendations from "./pages/Recommendations.jsx";
import SanqingtanRestaurant from "./pages/SanqingtanRestaurant.jsx";
import PutianRestaurant from "./pages/PutianRestaurant.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "培训优惠",
    to: "/training-discounts",
    page: <TrainingDiscounts />,
  },
  {
    title: "餐厅排队",
    to: "/restaurant-queue",
    page: <RestaurantQueue />,
  },
  {
    title: "南方菜优惠",
    to: "/southern-cuisine-discounts",
    page: <SouthernCuisineDiscounts />,
  },
  {
    title: "互动展览",
    to: "/interactive-exhibition",
    page: <InteractiveExhibition />,
  },
  {
    title: "亲子餐厅",
    to: "/family-restaurant",
    page: <FamilyRestaurant />,
  },
  {
    title: "省心遛娃",
    to: "/kids-activities",
    page: <KidsActivities />,
  },
  {
    title: "停车引导",
    to: "/parking-guide",
    page: <ParkingGuide />,
  },
  {
    title: "找店铺",
    to: "/find-store",
    page: <FindStore />,
  },
  {
    title: "吃喝玩乐套票",
    to: "/entertainment-packages",
    page: <EntertainmentPackages />,
  },
  {
    title: "餐厅详情",
    to: "/restaurant/:id",
    page: <RestaurantDetail />,
  },
  {
    title: "网友推荐",
    to: "/recommendations",
    page: <Recommendations />,
  },
  {
    title: "三清潭烧鹅",
    to: "/sanqingtan-restaurant",
    page: <SanqingtanRestaurant />,
  },
  {
    title: "莆田餐厅",
    to: "/putian-restaurant",
    page: <PutianRestaurant />,
  }
];
