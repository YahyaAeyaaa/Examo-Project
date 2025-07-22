import Navbar from "./Navbar"


const Dashboard = ({sidebarToggle , setSidebarToggle}) => {
    return (    
        <div className={`transition-all duration-300 ${sidebarToggle ? "w-full" : "ml-64 w-full"} sticky top-0`}>
            <Navbar 
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
            />
        </div>
    )
}

export default Dashboard