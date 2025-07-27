    import React from 'react';

    const FormGrid = ({ children, cols = 2 }) => {
    const gridClasses = {
        1: "grid grid-cols-1 gap-6",
        2: "grid grid-cols-1 md:grid-cols-2 gap-6",
        3: "grid grid-cols-1 md:grid-cols-3 gap-6",
        4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    };

    return (
        <div className={gridClasses[cols] || gridClasses[2]}>
        {children}
        </div>
    );
    };

    export default FormGrid;