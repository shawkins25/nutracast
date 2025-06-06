import classes from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={classes["footer-section"]}>
      {/* <div
        data-w-id="2038dae6-bf65-9c11-83ea-2e300e097d04"
        className={classes["footer-lead-in-silhouette"]}
      >
        <img
          src={"/nutracast/footer-silhouette-winter.png"}
          alt="Silhouette of family outside with dog, cat and horse"
          data-w-id="2038dae6-bf65-9c11-83ea-2e300e097d05"
          className={classes["footer-lead-in-silhouette-img"]}
        />
      </div>
      <img
        src="/nutracast/nmx-divider-pattern-leaf-angled.png"
        srcSet="/nmx-divider-pattern-leaf-angled-p-500.png 500w, /nmx-divider-pattern-leaf-angled-p-800.png 800w, /nmx-divider-pattern-leaf-angled.png 1920w"
        sizes="(max-width: 1920px) 100vw, 1920px"
        alt=""
        className={classes["footer-lead-in"]}
      /> */}
      <div className={classes["footer-wrapper"]}>
        <div className={classes["footer"] + " " + classes["breadcrumbs"]}>
          <div className={classes["footer-main-container"]}>
            <div className={`${classes["footer-column"]} ${classes["center"]}`}>
              <a
                href="/"
                aria-current="page"
                className={`${classes["f-logo-link"]} w-inline-block w--current`}
              >
                <picture>
                  <source
                    srcSet="/nutracast/logo_nutramax-laboratories-w.svg"
                    type="svg"
                  />
                  <img
                    width="274"
                    height="79"
                    src="/nutracast/logo_nutramax-laboratories-w.svg"
                    alt="="
                    className={classes["footer-logo"]}
                  />
                </picture>
              </a>
              <div className={classes["footer-social"]}>
                <div
                  className={`${classes["paragraph"]} ${classes["footer-social-text"]}`}
                >
                  Connect with us
                </div>
                <div className={classes["footerrow"]}>
                  <a
                    href="https://www.facebook.com/NutramaxLabs"
                    target="_blank"
                    className={classes["footer-social-icon"]}
                    aria-label="Nutramax Labs Facebook account"
                  >
                    &#62366;
                  </a>
                  <a
                    href="https://www.youtube.com/NutramaxLabs"
                    target="_blank"
                    className={classes["footer-social-icon"]}
                    aria-label="Nutramax Labs YouTube account"
                  >
                    &#61799;
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nutramax-laboratories-inc."
                    target="_blank"
                    className={classes["footer-social-icon"]}
                    aria-label="Nutramax Labs LinkedIn account"
                  >
                    &#61665;
                  </a>
                  <a
                    href="https://www.instagram.com/nutramax_labs/"
                    target="_blank"
                    className={`${classes["footer-social-icon"]} ${classes["last"]}`}
                    aria-label="Nutramax Labs Instagram account"
                  >
                    &#61805;
                  </a>
                </div>
              </div>
            </div>
            <div className={classes["footer-column"]}>
              <div className={classes["footer-column-heading"]}>
                <div className={classes["footer-heading6"]}>Quick Links</div>
                <div className={classes["footercolumn"]}>
                  <ul role="list" className={classes["footer-bullet-list"]}>
                    <li className={classes["list-item-footerbullet"]}>
                      <a
                        href="/our-products/products-for-people"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Products for You
                      </a>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <a
                        href="/our-products/products-for-your-dog-cat-horse"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Products for Your Pets
                      </a>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <a
                        href="/our-story"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Our Story
                      </a>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <a
                        href="/our-passion"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Our Passion
                      </a>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <a
                        href="/our-quality"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Our Quality
                      </a>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <a
                        href="/join-our-family"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Join Our Family
                      </a>
                    </li>
                    <li
                      className={`${classes["list-item-footerbullet"]} ${classes["hide"]}`}
                    >
                      <a
                        href="#"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Coupons &amp; Rebates
                      </a>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <a
                        href="/login"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Vet &amp; Medical Portal
                      </a>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <a
                        href="https://www.nutramaxlabs.com/international/"
                        target="_blank"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        International
                      </a>
                    </li>
                    <li className={classes["list-item-footerbullet"]}>
                      <a
                        href="/policies/terms-of-use"
                        className={`${classes["paragraph"]} ${classes["footer-link"]}`}
                      >
                        Policies
                      </a>
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
                      <a
                        href="/contact"
                        className={`${classes["button"]} ${classes["footer-button-border"]} w-button`}
                      >
                        Contact Us
                      </a>
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
                      <a
                        href="/media-center"
                        className={`${classes["button"]} ${classes["footer-button-border"]} w-button`}
                      >
                        View Latest News
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${classes["footer-column"]} ${classes["subscribe"]} ${classes["hide"]}`}
            >
              <div
                className={`${classes["footer-column-heading"]} ${classes["subscribe"]}`}
              >
                <div className={classes["footer-heading6"]}>Subscribe</div>
                <div className={classes["footercolumn"]}>
                  <div
                    className={`${classes["paragraph"]} ${classes["text-white"]} ${classes["small"]}`}
                  >
                    Sign up to receive news and special offers from Nutramax
                    Laboratories Consumer Care, Inc.
                  </div>
                  <div className={`${classes["form-block"]} w-form`}>
                    <form
                      id="email-form-2"
                      name="email-form-2"
                      data-name="Email Form 2"
                      className={classes["form"]}
                    >
                      <input
                        type="submit"
                        value="Join Now"
                        data-wait="Please wait..."
                        className={`${classes["button"]} ${classes["footer-subscribe"]} w-button`}
                      />
                      <input
                        type="text"
                        className={`${classes["footer-subscribe-field"]} w-input`}
                        maxLength="256"
                        name="Subscribe-Email-2"
                        data-name="Subscribe Email 2"
                        placeholder="Your E-Mail"
                        id="Subscribe-Email-2"
                      />
                      <label
                        className={`${classes["w-checkbox"]} ${classes["checkbox-field"]}`}
                      >
                        <input
                          type="checkbox"
                          id="checkbox-2"
                          name="checkbox-2"
                          data-name="Checkbox 2"
                          className={`${classes["w-checkbox-input"]} ${classes["checkbox"]}`}
                        />
                        <span
                          className={`${classes["footer-subscribe-legalcopy"]} ${classes["w-form-label"]}`}
                        >
                          Yes, I wish to receive electronic promotions, special
                          offers and new product information from Nutramax
                          Laboratories Consumer Care, Inc. ("Nutramax"). I
                          understand I can unsubscribe at any time. Emails and
                          other marketing communications from Nutramax,
                          including offers or promotions contained therein, are
                          intended for and available to United States residents
                          only. By clicking 'Join Now', I certify that I am a
                          resident of the United States and at least 18 years of
                          age.
                        </span>
                      </label>
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
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
              <a
                href="/policies/privacy-policy"
                className={classes["footer-legal-link"]}
              >
                Privacy Policy
              </a>
              <a
                href="/policies/terms-of-use"
                className={classes["footer-legal-link"]}
              >
                Terms of Use
              </a>
              <a
                href="/policies/privacy-policy#donotsell"
                className={`${classes["footer-legal-link"]} ${classes["end"]}`}
                target="_blank"
              >
                Do Not Sell My Personal Information
              </a>
            </div>
          </div>
          <a
            href="#top-of-page"
            className={`${classes["scroll-to-top"]} w-inline-block`}
          >
            <p className={classes["paragraph-4"]}>Scroll to Top</p>
          </a>
        </div>
      </div>
      {/* End of .footer-wrapper */}
    </div>
  );
}
