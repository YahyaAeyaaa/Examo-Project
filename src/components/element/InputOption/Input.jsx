    import { useState } from "react";
    import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

    const Input = () => {
    const [data] = useState([
        { label: "Matematika", value: 0 },
        { label: "Matematika", value: 0 },
        { label: "Matematika", value: 0 },
        { label: "Matematika", value: 0 },
    ]);

    const [isOpen, setIsOpen] = useState(false);
    const [itemPick, setItemPick] = useState({});

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col w-full">
        <div className="relative w-full max-w-sm">
            {/* Input Field */}
            <div
            className="w-full p-2 pr-10 rounded-lg border border-gray-400 bg-white cursor-pointer relative focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={toggleOpen}
            >
            {itemPick.label || "Pilih Bank Soal"}
            <div className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-400">
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            </div>

            {/* Dropdown */}
            <div
            className={`absolute top-[105%] w-full text-gray-600 bg-white shadow-md rounded-b z-10
                ${isOpen ? "max-h-60" : "max-h-0"}
                overflow-hidden transition-all duration-150`}
            >
            <div className="flex flex-col">
                {data.map((item, index) => (
                <div key={index}>
                    <div
                    className={`border-b p-2 cursor-pointer hover:bg-gray-100
                        ${index === 0 ? "rounded-t" : index === data.length - 1 ? "rounded-b" : ""}`}
                    onClick={() => {
                        setItemPick(item);
                        toggleOpen();
                    }}
                    >
                    {item.label}
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Input;
