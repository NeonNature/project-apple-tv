import '../styles/footer.scss'

export default function Footer() {
  return (
    <footer
      id="ac-globalfooter"
      className="js"
      role="contentinfo"
      aria-labelledby="ac-gf-label"
    >
      <div className="ac-gf-content">
        <h2 className="ac-gf-label" id="ac-gf-label">
          Apple Footer
        </h2>
        <section className="ac-gf-sosumi" aria-label="Footnotes">
          <ol>
            <li id="footnote-1">
              Not all content is available in 4K or 4K&nbsp;HDR. 4K resolution
              requires a 4K‑capable device. Accessing Dolby&nbsp;Atmos features
              requires a Dolby&nbsp;Atmos‑capable system. Playback quality will
              depend on hardware and internet&nbsp;connection.
            </li>
            <li id="footnote-2">
              New and qualified returning subscribers only. $9.99/month after
              free trial. Only one offer per Apple&nbsp;ID and only one offer
              per family if you’re part of a Family&nbsp;Sharing group,
              regardless of the number of devices you or your family purchases.
              This offer is not available if you or your Family have previously
              accepted an Apple&nbsp;TV+ three months free or one year free
              offer. Offer good for 3 months after eligible device activation.
              Plan automatically renews until cancelled. Restrictions and other{' '}
              <a href="/promo/">terms</a> apply.
            </li>
            <li id="footnote-3">
              One subscription per Family&nbsp;Sharing group. Plan automatically
              renews until cancelled.
            </li>
            <li id="footnote-4">
              The Apple&nbsp;One free trial includes only services that you are
              not currently using through a free trial or a subscription. Plan
              automatically renews after trial until cancelled. Restrictions and
              other terms apply.
            </li>
            <li id="footnote-5">
              Limited-time offer; offer may end at any time. Free Apple&nbsp;TV+
              access for students ends when you no longer qualify or do not
              renew your Apple&nbsp;Music Student subscription. Offer good for
              verified college students only and does not extend to a
              Family&nbsp;Sharing group.
            </li>
          </ol>
          <ul>
            <li>
              <span className="mlb-legal">
                Major League Baseball trademarks and copyrights are used with
                permission of MLB Advanced Media, L.P. All rights reserved.
              </span>
            </li>
          </ul>
        </section>
        <nav
          className="ac-gf-breadcrumbs"
          aria-label="Breadcrumbs"
          role="navigation"
        >
          <a href="/" className="home ac-gf-breadcrumbs-home">
            <span className="ac-gf-breadcrumbs-home-icon" aria-hidden="true">
              
            </span>
            <span className="ac-gf-breadcrumbs-home-label">Apple</span>
            <span className="ac-gf-breadcrumbs-home-chevron"></span>
            <span className="ac-gf-breadcrumbs-home-mask"></span>
          </a>
          <div className="ac-gf-breadcrumbs-path">
            <ol
              className="ac-gf-breadcrumbs-list"
              vocab="http://schema.org/"
              typeof="BreadcrumbList"
            >
              <li
                className="ac-gf-breadcrumbs-item"
                property="itemListElement"
                typeof="ListItem"
              >
                <a
                  className="ac-gf-breadcrumbs-link"
                  href="/services/"
                  property="item"
                  typeof="WebPage"
                >
                  <span property="name">Only on Apple</span>
                </a>
                <meta property="position" content="1" />
              </li>
              <li
                className="ac-gf-breadcrumbs-item"
                property="itemListElement"
                typeof="ListItem"
              >
                <span property="name">Apple&nbsp;TV+</span>
                <meta property="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        <nav
          className="ac-gf-directory with-5-columns"
          aria-label="Apple Directory"
          role="navigation"
        >
          <div className="ac-gf-directory-column">
            <div className="ac-gf-directory-column-section">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  Shop and Learn
                </span>
                <button className="ac-gf-directory-column-section-title-button">
                  <span className="ac-gf-directory-column-section-title-text">
                    Shop and Learn
                  </span>
                  <span
                    className="ac-gf-directory-column-section-title-icon"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <ul
                id="footer-directory-column-section-products"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/us/shop/goto/store"
                    data-analytics-title="store"
                  >
                    Store
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/mac/"
                    data-analytics-title="mac"
                  >
                    Mac
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/ipad/"
                    data-analytics-title="ipad"
                  >
                    iPad
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/iphone/"
                    data-analytics-title="iphone"
                  >
                    iPhone
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/watch/"
                    data-analytics-title="watch"
                  >
                    Watch
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/apple-vision-pro/"
                    data-analytics-title="vision"
                  >
                    Vision
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/airpods/"
                    data-analytics-title="airpods"
                  >
                    AirPods
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/tv-home/"
                    data-analytics-title="tv and home"
                  >
                    TV &amp; Home
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/airtag/"
                    data-analytics-title="airtag"
                  >
                    AirTag
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/us/shop/goto/buy_accessories"
                    data-analytics-title="accessories"
                  >
                    Accessories
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/us/shop/goto/giftcards"
                    data-analytics-title="gift cards"
                  >
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>
            <div className="ac-gf-directory-column-section">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  Apple Wallet
                </span>
                <button className="ac-gf-directory-column-section-title-button">
                  <span className="ac-gf-directory-column-section-title-text">
                    Apple Wallet
                  </span>
                  <span
                    className="ac-gf-directory-column-section-title-icon"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <ul
                id="footer-directory-column-section-applewallet"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/wallet/"
                    data-analytics-title="wallet"
                  >
                    Wallet
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/apple-card/"
                    data-analytics-title="apple card"
                  >
                    Apple&nbsp;Card
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/apple-pay/"
                    data-analytics-title="apple pay"
                  >
                    Apple&nbsp;Pay
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/apple-cash/"
                    data-analytics-title="apple cash"
                  >
                    Apple&nbsp;Cash
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ac-gf-directory-column">
            <div className="ac-gf-directory-column-section">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  Account
                </span>
                <button className="ac-gf-directory-column-section-title-button">
                  <span className="ac-gf-directory-column-section-title-text">
                    Account
                  </span>
                  <span
                    className="ac-gf-directory-column-section-title-icon"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <ul
                id="footer-directory-column-section-accounts"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="https://appleid.apple.com/us/"
                    data-analytics-title="manage your apple id"
                    data-analytics-exit-link=""
                  >
                    Manage Your Apple&nbsp;ID
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/us/shop/goto/account"
                    data-analytics-title="apple store account"
                  >
                    Apple Store Account
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="https://www.icloud.com"
                    data-analytics-title="icloud.com"
                    data-analytics-exit-link=""
                  >
                    iCloud.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="ac-gf-directory-column-section">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  Entertainment
                </span>
                <button className="ac-gf-directory-column-section-title-button">
                  <span className="ac-gf-directory-column-section-title-text">
                    Entertainment
                  </span>
                  <span
                    className="ac-gf-directory-column-section-title-icon"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <ul
                id="footer-directory-column-section-entertainment"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/apple-one/"
                    data-analytics-title="apple one"
                  >
                    Apple&nbsp;One
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/apple-tv-plus/"
                    data-analytics-title="apple tv plus"
                  >
                    Apple&nbsp;TV+
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/apple-music/"
                    data-analytics-title="apple music"
                  >
                    Apple&nbsp;Music
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/apple-arcade/"
                    data-analytics-title="apple arcade"
                  >
                    Apple&nbsp;Arcade
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/apple-fitness-plus/"
                    data-analytics-title="apple fitness plus"
                  >
                    Apple&nbsp;Fitness+
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/apple-news/"
                    data-analytics-title="apple news plus"
                  >
                    Apple&nbsp;News+
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/apple-podcasts/"
                    data-analytics-title="apple podcasts"
                  >
                    Apple Podcasts
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/apple-books/"
                    data-analytics-title="apple books"
                  >
                    Apple&nbsp;Books
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/app-store/"
                    data-analytics-title="app store"
                  >
                    App&nbsp;Store
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ac-gf-directory-column">
            <div className="ac-gf-directory-column-section">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  Apple Store
                </span>
                <button className="ac-gf-directory-column-section-title-button">
                  <span className="ac-gf-directory-column-section-title-text">
                    Apple Store
                  </span>
                  <span
                    className="ac-gf-directory-column-section-title-icon"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <ul
                id="footer-directory-column-section-storeservices"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/retail/"
                    data-analytics-title="find a store"
                  >
                    Find a Store
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/retail/geniusbar/"
                    data-analytics-title="genius bar"
                  >
                    Genius Bar
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/today/"
                    data-analytics-title="today at apple"
                  >
                    Today at Apple
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/today/camp/"
                    data-analytics-title="apple camp"
                  >
                    Apple Camp
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="https://apps.apple.com/us/app/apple-store/id375380948"
                    data-analytics-title="apple store app"
                    data-analytics-exit-link=""
                  >
                    Apple Store App
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/us/shop/goto/special_deals"
                    data-analytics-title="certified refurbished"
                  >
                    Certified Refurbished
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/us/shop/goto/trade_in"
                    data-analytics-title="apple trade in"
                  >
                    Apple&nbsp;Trade&nbsp;In
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/us/shop/goto/payment_plan"
                    data-analytics-title="financing"
                  >
                    Financing
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/us/shop/goto/buy_iphone/carrier_offers"
                    data-analytics-title="carrier deals at apple"
                  >
                    Carrier Deals at Apple
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/us/shop/goto/order/list"
                    data-analytics-title="order status"
                  >
                    Order Status
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/us/shop/goto/help"
                    data-analytics-title="shopping help"
                  >
                    Shopping Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ac-gf-directory-column">
            <div className="ac-gf-directory-column-section">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  For Business
                </span>
                <button className="ac-gf-directory-column-section-title-button">
                  <span className="ac-gf-directory-column-section-title-text">
                    For Business
                  </span>
                  <span
                    className="ac-gf-directory-column-section-title-icon"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <ul
                id="footer-directory-column-section-business"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/business/"
                    data-analytics-title="apple and business"
                  >
                    Apple and Business
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/retail/business/"
                    data-analytics-title="shop for business"
                  >
                    Shop for Business
                  </a>
                </li>
              </ul>
            </div>
            <div className="ac-gf-directory-column-section">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  For Education
                </span>
                <button className="ac-gf-directory-column-section-title-button">
                  <span className="ac-gf-directory-column-section-title-text">
                    For Education
                  </span>
                  <span
                    className="ac-gf-directory-column-section-title-icon"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <ul
                id="footer-directory-column-section-education"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/education/"
                    data-analytics-title="apple and education"
                  >
                    Apple and Education
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/education/k12/how-to-buy/"
                    data-analytics-title="shop for k12"
                  >
                    Shop for K-12
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/us/shop/goto/educationrouting"
                    data-analytics-title="shop for college"
                  >
                    Shop for College
                  </a>
                </li>
              </ul>
            </div>
            <div className="ac-gf-directory-column-section">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  For Healthcare
                </span>
                <button className="ac-gf-directory-column-section-title-button">
                  <span className="ac-gf-directory-column-section-title-text">
                    For Healthcare
                  </span>
                  <span
                    className="ac-gf-directory-column-section-title-icon"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <ul
                id="footer-directory-column-section-healthcare"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/healthcare/"
                    data-analytics-title="apple in healthcare"
                  >
                    Apple in Healthcare
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/healthcare/apple-watch/"
                    data-analytics-title="health on apple watch"
                  >
                    Health on Apple&nbsp;Watch
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/healthcare/health-records/"
                    data-analytics-title="health records on iphone"
                  >
                    Health Records on iPhone
                  </a>
                </li>
              </ul>
            </div>
            <div className="ac-gf-directory-column-section">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  For Government
                </span>
                <button className="ac-gf-directory-column-section-title-button">
                  <span className="ac-gf-directory-column-section-title-text">
                    For Government
                  </span>
                  <span
                    className="ac-gf-directory-column-section-title-icon"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <ul
                id="footer-directory-column-section-government"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/r/store/government/"
                    data-analytics-title="shop for government"
                  >
                    Shop for Government
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/us/shop/goto/eppstore/veteransandmilitary"
                    data-analytics-title="shop for veterans and military"
                  >
                    Shop for Veterans and Military
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ac-gf-directory-column">
            <div className="ac-gf-directory-column-section">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  Apple Values
                </span>
                <button className="ac-gf-directory-column-section-title-button">
                  <span className="ac-gf-directory-column-section-title-text">
                    Apple Values
                  </span>
                  <span
                    className="ac-gf-directory-column-section-title-icon"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <ul
                id="footer-directory-column-section-responsibility"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/accessibility/"
                    data-analytics-title="accessibility"
                  >
                    Accessibility
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/education-initiative/"
                    data-analytics-title="education"
                  >
                    Education
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/environment/"
                    data-analytics-title="environment"
                  >
                    Environment
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/diversity/"
                    data-analytics-title="inclusion and diversity"
                  >
                    Inclusion and Diversity
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/privacy/"
                    data-analytics-title="privacy"
                  >
                    Privacy
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/racial-equity-justice-initiative/"
                    data-analytics-title="racial equity and justice"
                  >
                    Racial Equity and Justice
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/supplier-responsibility/"
                    data-analytics-title="supplier responsibility"
                  >
                    Supplier Responsibility
                  </a>
                </li>
              </ul>
            </div>
            <div className="ac-gf-directory-column-section">
              <h3 className="ac-gf-directory-column-section-title">
                <span className="ac-gf-directory-column-section-title-text">
                  About Apple
                </span>
                <button className="ac-gf-directory-column-section-title-button">
                  <span className="ac-gf-directory-column-section-title-text">
                    About Apple
                  </span>
                  <span
                    className="ac-gf-directory-column-section-title-icon"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </h3>
              <ul
                id="footer-directory-column-section-about"
                className="ac-gf-directory-column-section-list"
                role="list"
              >
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/newsroom/"
                    data-analytics-title="newsroom"
                  >
                    Newsroom
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/leadership/"
                    data-analytics-title="apple leadership"
                  >
                    Apple Leadership
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/careers/us/"
                    data-analytics-title="career opportunities"
                  >
                    Career Opportunities
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="https://investor.apple.com/"
                    data-analytics-title="investors"
                    data-analytics-exit-link=""
                  >
                    Investors
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/compliance/"
                    data-analytics-title="ethics and compliance"
                  >
                    Ethics &amp; Compliance
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/apple-events/"
                    data-analytics-title="events"
                  >
                    Events
                  </a>
                </li>
                <li
                  className="ac-gf-directory-column-section-item"
                  role="listitem"
                >
                  <a
                    className="ac-gf-directory-column-section-link"
                    href="/contact/"
                    data-analytics-title="contact apple"
                  >
                    Contact Apple
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="ac-gf-footer">
          <div className="ac-gf-footer-shop" x-ms-format-detection="none">
            More ways to shop:{' '}
            <a href="/retail/" data-analytics-title="find an apple store">
              Find an Apple Store
            </a>{' '}
            or{' '}
            <a
              href="https://locate.apple.com/"
              data-analytics-title="other retailers or resellers"
              data-analytics-exit-link=""
            >
              other retailer
            </a>{' '}
            near you. <span className="nowrap">Or call 1-800-MY-APPLE.</span>
          </div>
          <div className="ac-gf-footer-locale">
            <a
              className="ac-gf-footer-locale-link"
              href="/choose-country-region/"
              title="Choose your country or region"
              aria-label="United States. Choose your country or region"
              data-analytics-title="choose your country"
            >
              United States
            </a>
          </div>
          <div className="ac-gf-footer-legal">
            <div className="ac-gf-footer-legal-copyright">
              Copyright © 2023 Apple Inc. All rights reserved.
            </div>
            <ul className="ac-gf-footer-legal-links" role="list">
              <li className="ac-gf-footer-legal-links-item" role="listitem">
                <a
                  className="ac-gf-footer-legal-link"
                  href="/legal/privacy/"
                  data-analytics-title="privacy policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="ac-gf-footer-legal-links-item" role="listitem">
                <a
                  className="ac-gf-footer-legal-link"
                  href="/legal/internet-services/terms/site.html"
                  data-analytics-title="terms of use"
                >
                  Terms of Use
                </a>
              </li>
              <li className="ac-gf-footer-legal-links-item" role="listitem">
                <a
                  className="ac-gf-footer-legal-link"
                  href="/us/shop/goto/help/sales_refunds"
                  data-analytics-title="sales and refunds"
                >
                  Sales and Refunds
                </a>
              </li>
              <li className="ac-gf-footer-legal-links-item" role="listitem">
                <a
                  className="ac-gf-footer-legal-link"
                  href="/legal/"
                  data-analytics-title="legal"
                >
                  Legal
                </a>
              </li>
              <li className="ac-gf-footer-legal-links-item" role="listitem">
                <a
                  className="ac-gf-footer-legal-link"
                  href="/sitemap/"
                  data-analytics-title="site map"
                >
                  Site Map
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  )
}
