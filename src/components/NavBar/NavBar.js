import s from './NavBar.module.css'
import logo from "../../assets/logo.png"
import SecNavBar from './SecNavBar/SecNavBar'

const NavBar = () => {
    const NavItems = ["Anasayfa", "Diziler", "Filmler", "Yeni ve Popüler"]
    return (
        <div className={s.navigation}>
            <div className={s.mainNavigation}>
                <img src={logo} alt="" className={s.brand_logo}></img>
                <ul className={s.navigationList}>
                    {NavItems.map(item =>
                        <li className={s.navigationItem} key={item}>
                            <a href="/">{item}</a>
                        </li>
                    )}
                </ul>
            </div>
            <SecNavBar />
        </div>
    );
}

export default NavBar;