'use client';
import Link from 'next/link';
import classes from './Button.module.css';
import { usePathname } from 'next/navigation';

export default function Button({href, children}){
    const path = usePathname();
    return(
        <>
        <Link href={href} className={path === href ? `${classes.active} ${classes.link}`: classes.link}>{children}</Link>
        </>

    );
}