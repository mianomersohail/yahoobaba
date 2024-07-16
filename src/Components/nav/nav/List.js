import React from 'react';

export default function List({ className, children }) {
    return (
        <>
            <li className={className}>{children}</li>
            
        </>
    );
}
