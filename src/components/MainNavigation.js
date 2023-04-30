import { NavLink } from "react-router-dom";
import styles from './MainNavigation.module.css'

function MainNavigation(){

    return(
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li><NavLink to='' className={({isActive}) => isActive ? styles.active : undefined} end>Home</NavLink></li>
                    <li><NavLink to='products' className={({isActive}) => isActive ? styles.active : undefined}>Products</NavLink></li>
                    <li><NavLink to='contact' className={({isActive}) => isActive ? styles.active : undefined}>Contact us!</NavLink></li>
                </ul>
            </nav>
        </header>
    )

};

export default MainNavigation;

/* 

    NAVLINK IS USEFUL WHEN WE WANT TO SPECIFY AND HIGHLIGHT NAV LINK OF THE PAGE WE ARE CURRENTLY ON

*/