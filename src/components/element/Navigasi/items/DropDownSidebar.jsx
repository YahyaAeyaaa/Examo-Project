import { Link, useLocation } from "react-router-dom"
import { cn } from "../../../../lib/utils";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState } from "react";

const DropDownSidebar = ({ icon, label, children, collapsed = false }) => {   
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    
    // Check if any child is active
    const isChildActive = children?.some(child => location.pathname === child.path);
    
    const toggleDropdown = () => {
        if (!collapsed) {
            setIsOpen(!isOpen);
        }
    };

    // If collapsed, show as regular item
    if (collapsed) {
        return (
            <div title={label} className="cursor-pointer">
                <div className={cn(
                    'flex items-center py-[7px] rounded-[5px] cursor-pointer transition-all duration-300',
                    'gap-0 w-[40px] justify-center pl-0',
                    isChildActive ? 'bg-primary-blue text-white' : 'text-black hover:bg-primary-blue hover:text-white'
                )}>
                    <span className="w-[26px] h-[26px] flex items-center justify-center">
                        {icon}
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div 
                onClick={toggleDropdown}
                className={cn(
                    'flex items-center py-[7px] rounded-[5px] cursor-pointer transition-all duration-300',
                    'gap-2 w-[180px] pl-2.5 justify-between',
                    isChildActive ? 'bg-primary-blue text-white' : 'text-black hover:bg-primary-blue hover:text-white'
                )}
            >
                <div className="flex items-center gap-2">
                    <span className="w-[26px] h-[26px] flex items-center justify-center">
                        {icon}
                    </span>
                    <span className="text-[18px] font-normal leading-6.5 tracking-custom">
                        {label}
                    </span>
                </div>
                <MdOutlineExpandMore 
                    className={cn(
                        "transition-transform duration-200 mr-2",
                        isOpen ? "rotate-180" : "rotate-0"
                    )} 
                />
            </div>
            
            {isOpen && (
                <div className="flex mt-2 ml-2">
                    <div className="border-l-2 border-dashed border-gray-300 ml-2 mr-4" style={{height: `${children.length * 40}px`}}></div>
                    <div className="space-y-3 py-2 flex-1">
                        {children.map((child, index) => (
                            <Link key={index} to={child.path} className="no-underline">
                                <div className={cn(
                                    "flex items-center space-x-3 cursor-pointer py-1 px-2 rounded transition-colors mb-5 -mt-2",
                                    location.pathname === child.path 
                                        ? "text-primary-blue font-medium" 
                                        : "text-gray-600 hover:text-primary-blue hover:bg-gray-50"
                                )}>
                                    <span className="text-[16px]">{child.label}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropDownSidebar;