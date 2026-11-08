"use client";
import React, { Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinkInner = ({ href, children, className }) => {
    const pathName = usePathname();
    const isActive = href === '/' ? pathName === '/' : pathName.startsWith(href);

    return (
        <Link href={href} className={`${className} ${isActive ? "text-primary" : ""}`}>
            {children}
        </Link>
    );
};

const NavLinks = ({ href, children, className }) => {
    return (
        <Suspense
            fallback={
                <Link href={href} className={className}>
                    {children}
                </Link>
            }
        >
            <NavLinkInner href={href} className={className}>
                {children}
            </NavLinkInner>
        </Suspense>
    );
};

export default NavLinks; 
