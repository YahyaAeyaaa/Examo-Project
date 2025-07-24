    import { MdOutlineExpandMore } from "react-icons/md";
    import React, { useState, useRef, useEffect } from "react";
    import Button from "../button/button";

    const FilterDate = () => {
    return (
        <div className="flex items-center justify-center px-3 py-2 shadow rounded-md w-25" style={{ color : '#9D9D9D' }}>
        <FilterLayout>
            <p className="cursor-pointer">Filter</p>
        </FilterLayout>
        </div>
    );
    };

    const FilterLayout = ({ children }) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setOpen(false);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className="relative inline-block">
        <div onClick={() => setOpen((prev) => !prev)} className="select-none">
            {/* Rotate icon based on open state */}
            <div className="flex items-center gap-1">
            {children}
            <MdOutlineExpandMore
                className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
            />
            </div>
        </div>

        {open && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded-2xl overflow-hidden shadow-lg">
            <FilterDropdown />
            </div>
        )}
        </div>
    );
    };

    const FilterDropdown = () => {
    return (
        <div className="bg-white p-6" style={{ width: "200px" }}>
        <div className="mb-3 space-y-3">
            <h1 className="text-sm font-semibold">Tanggal Mulai</h1>
            <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-md text-sm mb-3"
            />
            <h1 className="text-sm font-semibold">Tanggal Berakhir</h1>
            <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-md text-sm mb-3"
            />
            <h1 className="text-sm font-semibold">Status</h1>
            <div className="space-y-2">
            <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" /> Aktif
            </label>
            <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" /> Tidak Aktif
            </label>
            </div>
            <div className="flex gap-3 mt-4">
            <Button color="bg-sky-100" texts="text-blue-500" className="text-sm w-full" text="Batal" onClick={() => {}} />
            <Button text="OK" texts="text-white" onClick={() => {}} />
            </div>
        </div>
        </div>
    );
    };

    export default FilterDate;
