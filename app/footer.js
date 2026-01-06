import Link from "next/link";
import classes from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={classes["footer-section"]}>
      <div className={classes["footer-wrapper"]}>
        <div className={classes["footer"] + " " + classes["breadcrumbs"]}>
          <div className={classes["footer-main-container"]}>
            <div className={`${classes["footer-column"]} ${classes["center"]}`}>
              <Link
                href="/"
                aria-current="page"
                className={`${classes["f-logo-link"]} w-inline-block w--current`}
              >
                <picture>
                  <source
                    srcSet="/chaplain-podcast/logo_nutramax-laboratories-w.svg"
                    type="svg"
                  />
                  <Image
                    width="274"
                    height="79"
                    src="/chaplain-podcast/logo_nutramax-laboratories-w.svg"
                    alt="="
                    className={classes["footer-logo"]}
                  />
                </picture>
              </Link>
              <div className={classes["footer-social"]}>
                <div
                  className={`${classes["paragraph"]} ${classes["footer-social-text"]}`}
                >
                  Connect with us
                </div>
                <div className={classes.footerRow}>
                  <Link
                    href="https://www.facebook.com/NutramaxLabs"
                    target="_blank"
                    className={classes["footer-social-icon"]}
                    aria-label="Nutramax Labs Facebook"
                  >
                    <i className="fa fa-facebook" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/NutramaxLabs"
                    target="_blank"
                    className={classes["footer-social-icon"]}
                    aria-label="Nutramax Labs YouTube"
                  >
                    <i className="fa fa-youtube" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/nutramax-laboratories-inc."
                    target="_blank"
                    className={classes["footer-social-icon"]}
                    aria-label="Nutramax Labs LinkedIn"
                  >
                    <i className="fa fa-linkedin" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/nutramax_labs/"
                    target="_blank"
                    className={classes["footer-social-icon"]}
                    aria-label="Nutramax Labs Instagram"
                  >
                    <i className="fa fa-instagram" />
                  </Link>
                </div>
              </div>
            </div>
            <div className={classes["footer-column"]}>
              <div className={classes["footer-column-heading"]}>
                <div className={classes["footer-heading6"]}>Quick Links</div>
                <div className={classes["footercolumn"]}>
                  <ul role="list" className={classes["footer-bullet-list"]}>
                    <li className={classes["list-item-footerbullet"]}>
                      <Link
                        href="https://www.nutramaxlabs.com/our-products/products-for-people"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Products for You
                      </Link>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <Link
                        href="https://www.nutramaxlabs.com/our-products/products-for-your-dog-cat-horse"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Products for Your Pets
                      </Link>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <Link
                        href="https://www.nutramaxlabs.com/our-story/"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Our Story
                      </Link>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <Link
                        href="https://www.nutramaxlabs.com/our-passion"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Our Passion
                      </Link>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <Link
                        href="https://www.nutramaxlabs.com/our-quality"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Our Quality
                      </Link>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <Link
                        href="https://www.nutramaxlabs.com/join-our-family"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Join Our Family
                      </Link>
                    </li>
                    <li
                      className={`${classes["list-item-footerbullet"]} ${classes["hide"]}`}
                    >
                      <Link
                        href="#"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Coupons &amp; Rebates
                      </Link>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <Link
                        href="https://www.mynutramax.com/login/?"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Vet &amp; Medical Portal
                      </Link>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <Link
                        href="https://www.nutramaxlabs.com/international/"
                        target="_blank"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        International
                      </Link>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <Link
                        href="https://www.nutramaxlabs.com/policies/terms-of-use"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Policies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={classes["footer-column"]}>
              <div
                className={`${classes["footer-column-heading"]} ${classes["btmmargin"]}`}
              >
                <div className={classes["footer-heading6"]}>Contact Us</div>
                <div className={classes["footercolumn"]}>
                  <div
                    className={`${classes["paragraph"]} ${classes["footer-link"]} ${classes["inline"]}`}
                  >
                    <div className={classes["footercontactus"]}>
                      <div
                        className={`${classes["paragraph"]} ${classes["text-white"]} ${classes["small"]}`}
                      >
                        We love to hear from you! Send us your questions,
                        concerns and/or feedback.
                      </div>
                      <Link
                        href="https://www.nutramaxlabs.com/contact"
                        className={`${classes["button"]} ${classes["footer-button-border"]} w-button`}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${classes["footer-column"]} ${classes["end"]}`}>
              <div className={classes["footer-column-heading"]}>
                <div className={classes["footer-heading6"]}>Media</div>
                <div className={classes["footercolumn"]}>
                  <div
                    className={`${classes["paragraph"]} ${classes["footer-link"]} ${classes["inline"]}`}
                  >
                    <div className={classes["footercontactus"]}>
                      <div
                        className={`${classes["paragraph"]} ${classes["text-white"]} ${classes["small"]}`}
                      >
                        Catch up on Nutramax related news.
                      </div>
                      <Link
                        href="https://www.nutramaxlabs.com/media-center"
                        className={`${classes["button"]} ${classes["footer-button-border"]} w-button`}
                      >
                        View Latest News
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of .footer-main-container */}
        </div>
        {/* End of .footer.breadcrumbs */}
        <div className={classes["footer-bottom-bar-wrapper"]}>
          <div className={`${classes["footer"]} ${classes["btmbar"]}`}>
            <div className={`${classes["btmbar-content"]} ${classes["left"]}`}>
              <div
                className={`${classes["paragraph"]} ${classes["footer-btmbar-text"]}`}
              >
                Human products on Nutramaxlabs.com are sold by Nutramax
                Laboratories Consumer Care, Inc. Veterinary products on
                Nutramaxlabs.com are sold by Nutramax Laboratories Veterinary
                Sciences, Inc. All Intellectual Property is owned by Nutramax
                Laboratories, Inc.
              </div>
              <div
                className={`${classes["paragraph"]} ${classes["footer-btmbar-text"]}`}
              >
                As a general policy Nutramax Laboratories pays a maximum of 15%
                indirect costs to universities and other research organizations
                for external research collaborations.
              </div>
            </div>
            <div className={`${classes["btmbar-content"]} ${classes["right"]}`}>
              <Link
                href="https://www.nutramaxlabs.com/policies/privacy-policy"
                className={classes["footer-legal-link"]}
              >
                Privacy Policy
              </Link>
              <Link
                href="https://www.nutramaxlabs.com/policies/terms-of-use"
                className={classes["footer-legal-link"]}
              >
                Terms of Use
              </Link>
              <Link
                href="https://www.nutramaxlabs.com/policies/privacy-policy#donotsell"
                className={`${classes["footer-legal-link"]} ${classes["end"]}`}
                target="_blank"
              >
                Do Not Sell My Personal Information
              </Link>
            </div>
          </div>
          <Link
            href="#top-of-page"
            className={`${classes["scroll-to-top"]} w-inline-block`}
          >
            <p className={classes["paragraph-4"]}>Scroll to Top</p>
          </Link>
        </div>
      </div>
      {/* End of .footer-wrapper */}
    </div>
  );
}
