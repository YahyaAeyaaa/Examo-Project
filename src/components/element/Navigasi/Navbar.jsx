import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineNotificationsActive } from "react-icons/md";

const Navbar = ({sidebarToggle , setSidebarToggle}) => {
    return (
        <>
                <div className="flex justify-between items-center p-8 shadow sticky top-0">
                    <div>
                        <RxHamburgerMenu className="w-8 h-8" 
                            onClick={() => setSidebarToggle(!sidebarToggle)} />
                    </div>
                    <div className="flex items-center justify-center">
                        <MdOutlineNotificationsActive className="w-10 h-10 mr-6 text-blue-400"/>
                        <img 
                            src="/image/pfp.jpg" 
                            alt="Profile" 
                            className="w-15 h-15 rounded-full object-cover shadow"
                        />

                    <div className="ml-6">
                        <h1 className="font-semibold">Mrs.Wong Ireng</h1>
                        <h1>Sybau@gmail.com</h1>
                    </div>
                    </div>
                </div>
        </>
    )
}

export default Navbar