import '../styles/appleone.scss'

export default function Routers() {
  return (
    <section className="section section-routers theme-light">
      <div className="section-content">
        <div
          className="student-plan-router"
          data-analytics-section-engagement="name:student plan"
        >
          <div className="row">
            <div className="copy-container column large-5 large-offset-1 medium-4 small-12 small-offset-0 small-centered">
              <h3 className="student-plan-icon">
                <span className="visuallyhidden"></span>
              </h3>
              <p className="typography-router-headline">
                The&nbsp;Apple&nbsp;Music Student <br className="small" />
                Plan comes with <br className="small" />
                Apple&nbsp;TV+ for&nbsp;free.
                <sup className="footnote footnote-number">
                  <a href="#footnote-5" aria-label="Footnote 5">
                    5
                  </a>
                </sup>
              </p>
              <a
                href="https://music.apple.com/deeplink?app=music&amp;p=subscribe-student?itscg=10000&amp;itsct=mus-0-tv_ovp-try_mus-apl-200310"
                className="button button-elevated button-custom-dark"
                aria-label="Try apple music free"
                data-analytics-title="try apple music free"
                data-analytics-exit-link=""
                data-rid-relay='{"286":"itsct"}'
              >
                Try Apple Music free
              </a>
            </div>
            <div className="image-wrapper column large-6 medium-7 small-12">
              <figure className="image-student-plan"></figure>
            </div>
          </div>
        </div>
        <div className="lower-container">
          <div
            className="tv-4k-router"
            data-analytics-section-engagement="name:apple tv 4k"
          >
            <figure className="image-apple-tv-4k"></figure>
            <div className="copy-container">
              <h3 className="tv-4k-icon">
                <span className="visuallyhidden">Apple&nbsp;TV&nbsp;4K</span>
              </h3>
              <p className="typography-router-headline">
                The Apple experience.
                <br />
                Cinematic in every&nbsp;sense.
              </p>
              <div className="typography-router-cta ctas large-12 large-centered">
                <ul className="links-inline">
                  <li>
                    <a
                      href="/us/shop/goto/buy_tv/apple_tv_4k"
                      data-analytics-title="buy - apple tv 4k"
                      aria-label="Buy Apple TV 4K"
                      className="icon-wrapper button button-elevated"
                    >
                      <span className="icon-copy">Buy</span>
                    </a>{' '}
                  </li>
                  <li>
                    <a
                      href="/apple-tv-4k/"
                      data-analytics-title="learn more about apple tv 4k"
                      aria-label="Learn more about Apple TV 4K"
                      className="icon-wrapper learn-more"
                      data-rid-store='{"289":"atv-0-tvapp_ovp-tle_lrn-apl-avl-191111"}'
                    >
                      <span className="icon-copy">Learn more</span>
                      <span className="icon icon-after more"></span>
                    </a>{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="airplay-router"
            data-analytics-section-engagement="name:airplay"
          >
            <figure className="image-router-airplay"></figure>
            <div className="copy-container">
              <h3 className="typography-router-eyebrow icon">AirPlay</h3>
              <p className="typography-router-headline headline">
                Bring Apple&nbsp;TV+ to <br />a screen near you.
              </p>
              <a
                href="/airplay/"
                data-analytics-title="learn more about airplay"
                aria-label="learn more about airplay"
                className="icon-wrapper typography-router-cta learn-more"
              >
                <span className="icon-copy">Learn more</span>
                <span className="icon icon-after more"></span>
              </a>{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
