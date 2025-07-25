import React from 'react'
import SidebarItem from '../items/SidebarItem'

const SidebarSection = ({title, items, collapsed = false}) => {      
  return (     
    <aside className={`mb-2 ${collapsed ? 'w-[40px] overflow-hidden' : ''}`}>              
  <h3 className="text-base font-normal text-gray-500 tracking-custom mb-4 truncate">                    
    {title}                
  </h3>       
  <div className="flex flex-col gap-4">                  
    {items.map((item) => (                      
      <SidebarItem                          
        key={item.label}                          
        icon={item.icon}                          
        label={item.label}                          
        active={item.active}                          
        to={item.path}
        collapsed={collapsed}         
      />                  
    ))}              
  </div>          
</aside>  
  ) 
}

export default SidebarSection
