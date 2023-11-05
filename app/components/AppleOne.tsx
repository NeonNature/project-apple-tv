import '../styles/appleone.scss'

export default function AppleOne() {
  return (
    <section className="section section-apple-one theme-light">
      <div className="section-content">
        <div className="figure-wrapper large-6 small-12">
          <figure className="tile-image" />
        </div>
        <div className="tile-copy-container large-6 small-12">
          <div className="tile-copy-wrapper">
            <h2 className="tile-logo">
              <span className="visuallyhidden">Apple One</span>
            </h2>
            <p className="tile-headline typography-router-headline">
              <span className="lg-wrap">Bundle Apple&nbsp;TV+</span>{' '}
              <br className="small" />
              with
              <br className="large" />
              <br className="medium" /> up to five other great&nbsp;services.
              <br />
              And enjoy more for less.
            </p>
            <a
              href="https://one.apple.com/us/tv/?itscg=10000&itsct=one-NA-tv-bnr-apl-avl-102020"
              aria-label="Try Apple One Free"
              className="icon-wrapper button button-elevated button-custom-dark"
            >
              <span className="icon-copy">
                Try Apple&nbsp;One free
                <sup className="footnote footnote-number">4</sup>
              </span>
            </a>
            <span className="large-hide"></span>
            <a
              href="https://www.apple.com/apple-one/"
              aria-label="Learn more about Apple One"
              className="icon-wrapper typography-router-cta"
            >
              <span className="icon-copy">Learn more</span>
              <span className="icon icon-after more"></span>
            </a>{' '}
          </div>
        </div>
      </div>
    </section>
  )
}
