function Header()
{
    return (
      <div className="heading">
        <img className="image" src="https://cdn.iconscout.com/icon/free/png-512/free-myntra-logo-icon-download-in-svg-png-gif-file-formats--shopping-brand-online-application-app-mobile-indian-companies-pack-logos-icons-2249158.png?" height="50px" width="50px"/>
        <div className="option">
            <button className="but">MEN</button>
            <button className="but">WOMEN</button>
            <button className="but">KIDS</button>
            <button className="but">HOME & LIVING</button>
            <button className="but">BEAUTY</button>
            <button className="but">STUDIO</button>
        </div>

        <input className="search_bar" placeholder="Search for Products Brands and More"></input>

        <div className="profile">
            <button className="pro">PROFILE</button>
            <button className="pro">WISHLIST</button>
            <button className="pro">BAG</button>
        </div>

      </div>
    )
}
export default Header;