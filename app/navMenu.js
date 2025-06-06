import { useState } from "react";
import classes from "./navMenu.module.css";
import Link from "next/link";

const NavMenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={classes.nav}>
      {/* Hamburger Button */}
      <button
        className={classes.hamburger}
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </button>
      {/* Main Navigation */}
      <ul
        className={`${classes.navList} ${
          isMobileMenuOpen ? classes.navListMobileOpen : ""
        }`}
      >
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
                <Link href="https://www.nutramaxlabs.com/our-products/products-for-your-dog-cat-horse">
                  Products for Your Pet
                </Link>
                <Link href="https://www.nutramaxlabs.com/our-products/products-for-people">Products for You</Link>
              </div>
            </div>
          </div>
        </li>
        <div className={classes.divider} />
        {/* OUR STORY */}
        <li className={classes.navItem}>
          <Link href="https://www.nutramaxlabs.com/our-story/" className={classes.navLink}>
            <span className={classes.subText}>Our </span>Story
          </Link>
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
                <Link href="https://www.nutramaxlabs.com/our-passion#at-home">At Home</Link>
                <Link href="https://www.nutramaxlabs.com/our-passion#across-the-nation">Across the Nation</Link>
                <Link href="https://www.nutramaxlabs.com/our-passion#around-the-world">Across the World</Link>
                <Link href="https://www.nutramaxlabs.com/nutramax-supports/service-dogs">
                  Supporting Service Dogs
                </Link>
              </div>
            </div>
          </div>
        </li>
        {/* OUR QUALITY */}
        <li className={classes.navItem}>
          <Link href="https://www.nutramaxlabs.com/our-quality" className={classes.navLink}>
            <span className={classes.subText}>Our </span>Quality
          </Link>
        </li>
        {/* JOIN OUR FAMILY */}
        <li className={classes.navItem}>
          <Link href="https://www.nutramaxlabs.com/join-our-family" className={classes.navLink}>
            <span className={classes.subText}>Join Our </span>Family
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;
