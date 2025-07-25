import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";

const Navbar = ({sidebarToggle , setSidebarToggle}) => {
     const [user, setUser] = useState(null);
    
      useEffect(() => {
       
        const userData = localStorage.getItem('user');
        if (userData) {
          try {
            setUser(JSON.parse(userData));
          } catch (error) {
            console.error('Error parsing user data:', error);
          }
        }
      }, []);
    return (
        <>
                <div className="flex justify-between items-center p-8 shadow sticky top-0">
                    <div>
                        <RxHamburgerMenu className="w-8 h-8" 
                            onClick={() => setSidebarToggle(!sidebarToggle)} />
                    </div>
                    <div className="flex items-center justify-center">
                        <img 
                            src="/image/pfp.jpg" 
                            alt="Profile" 
                            className="w-15 h-15 rounded-full object-cover shadow"
                        />

                    <div className="ml-6">
                        <h1 className="font-semibold">{user?.name || 'Loading...'}</h1>
                        <h1>{user?.email || 'Loading...'}</h1>
                    </div>
                    </div>
                </div>
        </>
    )
}

export default Navbar