import { ChevronRight } from "lucide-react";
import { cn } from "../../../lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileItem = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = location.pathname === item.path;

  return (
   <li onClick={() => navigate(item.path)} className={cn("relative flex items-center justify-between gap-4 px-4 py-2 cursor-pointer transition-all duration-200 rounded-r-full",
    isActive && "lg:bg-[#EAF5FF] lg:text-primary-blue lg:font-medium",
    !isActive && [      
      "lg:hover:bg-[#E5F1FF]",
      "lg:hover:text-[#007bff]",
      "lg:hover:[&_svg]:text-[#007bff]"
      ]
    )}>
    <span
      className={cn(
        "hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-full w-1 bg-[#007bff] rounded-r-full transition-opacity duration-200",
        isActive ? "lg:opacity-100" : "lg:opacity-0 lg:group-hover:opacity-100"
      )}
    />
    <div className="flex items-center gap-4">
      <div className="transition-colors duration-200">
        {item.icon}
      </div>
      <span className={cn(
        "text-base xl:text-lg transition-all duration-200",
        isActive && "lg:text-[#007bff] lg:font-medium"
      )}>
        {item.label}
      </span>
    </div>
    <ChevronRight
      className={cn(
        "w-5 h-5 block md:hidden",
        "text-[#555555]"
      )}
    />
  </li>
  );
};

export default ProfileItem;
