import '../styles/devices.scss'

export default function Devices() {
  return (
    <section
      className="section section-apple-tv-app theme-light"
      data-analytics-section-engagement="name:apple tv app"
    >
      <div className="section-content">
        <div className="lockup" id="devices">
          <figure className="image-apple-tv-app-icon"></figure>
          <h2 className="typography-app-headline">
            Watch Apple&nbsp;TV+ anywhere <br className="large" />
            on the Apple&nbsp;TV&nbsp;app.
          </h2>
          <p className="typography-body large-centered large-7 medium-12 small-11">
            Find the Apple&nbsp;TV&nbsp;app on your favorite Apple devices.{' '}
            <br className="large" />
            <br className="medium" />
            Or&nbsp;watch Apple&nbsp;TV+ online at{' '}
            <a
              href="https://tv.apple.com/"
              data-analytics-exit-link=""
              data-analytics-title="watch online at tv.apple.com"
            >
              tv.apple.com
            </a>
            .
          </p>
        </div>
        <div
          className="internal build-in"
          data-anim-tween-0='{"start":"t-90vh","cssClass":"build-in","disabledWhen":"prefers-reduced-motion"}'
        >
          <div className="logo icon-apple-tv col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-apple-tv"></div>
              <h3 className="feature-headline typography-device-names">
                Apple&nbsp;TV
              </h3>
            </div>
          </div>
          <div className="logo icon-iphone col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-iphone"></div>
              <h3 className="feature-headline typography-device-names">
                iPhone
              </h3>
            </div>
          </div>
          <div className="logo icon-ipad col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-ipad"></div>
              <h3 className="feature-headline typography-device-names">iPad</h3>
            </div>
          </div>
          <div className="logo icon-mac col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-mac"></div>
              <h3 className="feature-headline typography-device-names">Mac</h3>
            </div>
          </div>
          <div className="logo icon-airplay col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-airplay"></div>
              <h3 className="feature-headline typography-device-names">
                AirPlay
              </h3>
            </div>
          </div>
        </div>
        <div className="copy-lockup">
          <p className="typography-offer-headline subhead large-centered large-5 medium-6 small-11">
            See it on your smart&nbsp;TV or&nbsp;streaming&nbsp;device.
          </p>
          <ul className="links-stacked">
            <li>
              <a
                href="https://support.apple.com/guide/tvplus/welcome/web"
                data-analytics-title="set up your device"
                aria-label="set up your device"
                className="icon-wrapper typography-body"
                data-analytics-exit-link=""
              >
                <span className="icon-copy">Set up your device</span>
                <span className="icon icon-after more"></span>
              </a>{' '}
            </li>
            <li></li>
          </ul>
        </div>
        <div
          className="external build-in"
          data-anim-tween-0='{"start":"t-90vh","cssClass":"build-in","disabledWhen":"prefers-reduced-motion"}'
        >
          <div className="logo icon-samsung col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-samsung"></div>
              <h3 className="feature-headline visuallyhidden">
                Samsung Smart TV
              </h3>
            </div>
          </div>
          <div className="logo icon-lg col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-lg"></div>
              <h3 className="feature-headline visuallyhidden">LG Smart TV</h3>
            </div>
          </div>
          <div className="logo icon-vizio col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-vizio"></div>
              <h3 className="feature-headline visuallyhidden">Vizio</h3>
            </div>
          </div>
          <div className="logo icon-sony col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-sony"></div>
              <h3 className="feature-headline visuallyhidden">Sony</h3>
            </div>
          </div>
          <div className="logo icon-xfinity col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-xfinity"></div>
              <h3 className="feature-headline visuallyhidden">xfinity</h3>
            </div>
          </div>
          <div className="logo icon-roku col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-roku"></div>
              <h3 className="feature-headline visuallyhidden">Roku</h3>
            </div>
          </div>
          <div className="logo icon-firetv col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-firetv"></div>
              <h3 className="feature-headline visuallyhidden">
                Amazon Fire Tv
              </h3>
            </div>
          </div>
          <div className="logo icon-google-tv col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-google-tv"></div>
              <h3 className="feature-headline visuallyhidden">Google TV</h3>
            </div>
          </div>
          <div className="logo icon-playstation col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-playstation"></div>
              <h3 className="feature-headline visuallyhidden">PlayStation</h3>
            </div>
          </div>
          <div className="logo icon-xbox col">
            <div className="icon-wrapper">
              <div className="feature-icon image-icon-xbox"></div>
              <h3 className="feature-headline visuallyhidden">XBOX</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
