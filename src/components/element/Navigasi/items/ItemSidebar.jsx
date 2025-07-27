import { Link, useLocation } from "react-router-dom"
import { cn } from "../../../../lib/utils";

const ItemSidebar = ({ icon, label, to, collapsed = false}) => {   
    const location = useLocation()   
    const isActive = location.pathname === to;    

    return (   
        <Link to={to} className="no-underline" title={collapsed ? label : ''}>    
        <div     
            className={cn(       
            'flex items-center py-[7px] rounded-[5px] cursor-pointer transition-all duration-300',
            collapsed 
                ? 'gap-0 w-[40px] justify-center pl-0' 
                : 'gap-2 w-[180px] pl-2.5', 
            isActive ? 'bg-primary-blue text-white' : 'text-black hover:bg-primary-blue hover:text-white'     
            )}>     
            <span className="w-[26px] h-[26px] flex items-center justify-center">       
            {icon}     
            </span>     
            {!collapsed && (
            <span className="text-[18px] font-normal leading-6.5 tracking-custom">
                {label}
            </span>
            )}    
        </div>   
        </Link>   
    ) 
}


export default ItemSidebar
