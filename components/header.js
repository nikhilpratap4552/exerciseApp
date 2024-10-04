
import { logout } from '@/actions/auth-actions';
import style from './header.module.css';
import Image from 'next/image';
import logo from '../public/yoga/yogalogo.png';
import Link from 'next/link';
import Button from './ui/uibuttons';



export default function Header(){
    
    return(
        <>
        <header className={style.mainheader}>
            <div className={style.header}>
                <div className={style.logo}>
                    <div>
                        <Image src={logo} height={30} width={36} alt='logo image'/>
                    </div>
                    <div >
                         Fitness
                    </div>
                   </div>
                <div className={style.headerlast}>
                    <ul className={style.link}>
                        {/* <li> <Link href={'/training'}>Home </Link></li> */}
                       <li> <Button href={'/training'}>home</Button> </li>
                        <li> <Button href={'/trainingdetails/yoga'}>Activities </Button></li>
                        <li>
                            <form action={logout}>
                                <button>Logout</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}