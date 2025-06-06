import classes from "./navMenu.module.css";

const NavMenu = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        {/* OUR PRODUCTS */}
        <li className={classes.navItem}>
          <div className={classes.dropdownWrapper}>
            <button className={classes.navLink}>
              <span className={classes.subText}>Our </span>Products
              <div className={classes.dropdownIcon} />
            </button>
            <div className={classes.dropdown}>
              <div className={classes.dropdownTopBorder}>
                <div className={classes.dropdownArrow} />
              </div>
              <div className={classes.realDropDownList}>
                <a href="/our-products/products-for-your-dog-cat-horse">
                  Products for Your Pet
                </a>
                <a href="/our-products/products-for-people">Products for You</a>
              </div>
            </div>
          </div>
        </li>
        <div className={classes.divider} />
        {/* OUR STORY */}
        <li className={classes.navItem}>
          <a href="/our-story" className={classes.navLink}>
            <span className={classes.subText}>Our </span>Story
          </a>
        </li>
        {/* OUR PASSION */}
        <li className={`${classes.navItem} ${classes.hasDropdown}`}>
          <div className={classes.dropdownWrapper}>
            <button className={classes.navLink}>
              <span className={classes.subText}>Our </span>Passion
              <div className={classes.dropdownIcon} />
            </button>
            <div className={classes.dropdown}>
              <div className={classes.dropdownTopBorder}>
                <div className={classes.dropdownArrow} />
              </div>
              <div className={classes.realDropDownList}>
                <a href="/our-passion#at-home">At Home</a>
                <a href="/our-passion#across-the-nation">Across the Nation</a>
                <a href="/our-passion#across-the-world">Across the World</a>
                <a href="/nutramax-supports/service-dogs">Supporting Service Dogs</a>
              </div>
            </div>
          </div>
        </li>
        {/* OUR QUALITY */}
        <li className={classes.navItem}>
          <a href="/our-quality" className={classes.navLink}>
            <span className={classes.subText}>Our </span>Quality
          </a>
        </li>
        {/* JOIN OUR FAMILY */}
        <li className={classes.navItem}>
          <a href="/join-our-family" className={classes.navLink}>
            <span className={classes.subText}>Join Our </span>Family
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;
