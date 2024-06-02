import LogoImg from "./logo.svg"
import "./header.scss"

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={LogoImg} alt="logo" />
            </div>
        </header>
    )
}

export default Header
