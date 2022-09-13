import {
    SearchRounded,
    ShoppingCartRounded,
} from "@mui/icons-material/";

import {useState, useEffect} from 'react'

import menuService from '../utils/menu'

import "../styles/Header.css";
const Header = ({ cart, setMenu }) => {

    const [search, setSearch] = useState('')

    const doSearch = async (search) => {
        if(search !== '') {
            const menu = await menuService.search(search)
            setMenu(menu)
        } else {
            const menu = await menuService.getAll()
            setMenu(menu)
        }
    }

    useEffect(() => {
        doSearch(search)
    }, [search])

    const handleCartClick = () => {
        if(document.querySelector(".profileMenu").classList.contains('active'))
            document.querySelector(".profileMenu").classList.toggle("active");  
        
        document.querySelector(".rightMenu").classList.toggle("active");
    };

    const handleProfileClick = () => {
        if(document.querySelector(".rightMenu").classList.contains('active'))
            document.querySelector(".rightMenu").classList.toggle("active");

        document.querySelector(".profileMenu").classList.toggle("active");
    };

    return (
        <header>
            <img
                alt="logo"
                className="logo"
                src="https://www.kindpng.com/picc/b/411-4117796_anime-food-png.png"
            />

            <div className="search">
                <SearchRounded className="search-icon" />
                <input type="text" name="search" placeholder="Search" value={search} onChange={({target}) => setSearch(target.value)}/>
            </div>

            <div className="cart" onClick={handleCartClick}>
                <ShoppingCartRounded className="cartIcon" />
                <div className="cartContent">
                    <p>{cart.length}</p>
                </div>
            </div>

            <div className="profile" onClick={handleProfileClick}>
                <div className="imgBox">
                    <img
                        alt="logo"
                        src="https://avatars.githubusercontent.com/u/41179329"
                        className="profileImg"
                    />
                </div>
                <h2 className="username">Aditya Singh</h2>
            </div>
        </header>
    );
};

export default Header;
