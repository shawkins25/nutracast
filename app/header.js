import NavMenu from "./navMenu";
import classes from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const logoImg = null;

  const oldLogoImg =
    "https://dfblmkp853lqv.cloudfront.net/images/logo_nutramax-laboratories-g.svg";
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      role="banner"
      className={`${classes["nav-bar"]} ${classes["w-nav"]}`}
    >
      <div className={classes["topbar-container"]}>
        <div className={classes["topbar-wrapper"]}>
          <div className={classes["topnav-right"]}>
            <Link
              href="https://www.nutramaxlabs.com/international/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes["topbar-navlink"]}
            >
              International
            </Link>
            <Link href="/login" className={classes["topbar-navlink"]}>
              Vet &amp; Medical Portal
            </Link>
          </div>
        </div>
      </div>
      <div className={classes["nav-main"]}>
        <div className={classes["nav-bar-wrapper"]}>
            <Link href="/" className={classes["navlogowrapper"]}>
                <Image
                  fill
                  src={"https://dfblmkp853lqv.cloudfront.net/images/logo_nutramax-laboratories-g.svg"}
                  alt="Nutramax Laboratories®"
                  className={classes["sitelogo"]}
                  priority
                />
            </Link>
          <div className={classes["navigation"]}>
            {/* <div className={classes["nav-links-container"]}>
              <div className={classes.navlinks}>
                <div
                  className={`${classes.navMainLink} ${classes.wDropdownToggle}`}
                >
                  <div
                    className={`${classes.dropdownLinkicon} ${classes.desktop}`}
                  >
                    <a
                      className={`${classes.navMainLink} ${classes.navlinkOur}`}
                    >
                      <span className={classes["nav-ourspan"]}>Our </span>
                      Products
                    </a>
                    <div
                      className={`${classes.dropDownIcon} ${classes.wIconDropdownToggle}`}
                    />
                  </div>
                </div>
                <nav
                  className={`${classes.dropdownList} ${classes.wDropdownList}`}
                >
                  <div className={classes.dropdownTopborder}>
                    <div className={classes.dropdownArrow} />
                  </div>
                  <div className={classes.dropdownrounded}>
                    <div className={classes.dropdownLink}>
                      <a
                        href="/our-products/products-for-your-dog-cat-horse"
                        className={`${classes.dropdownFrame} ${classes.dropdownSpacing} ${classes.end} ${classes.wDropdownLink}`}
                      >
                        Products for Your Pet
                      </a>
                      <a
                        href="/our-products/products-for-people"
                        className={`${classes.dropdownFrame} ${classes.dropdownSpacing} ${classes.wDropdownLink}`}
                      >
                        Products for You
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div> */}
            <NavMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
