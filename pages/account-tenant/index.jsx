/* eslint-disable jsx-a11y/label-has-associated-control */
import PageWrapper from 'widgets/PageWrapper';

const Page = () => (
  <PageWrapper title="DigiRent - Account" pageName="account-tenant">
    <img src="/images/main-left-bg.svg" className="left-arrow-bg" alt="left bg" />
    <img src="/images/main-right-bg.svg" className="right-arrow-bg" alt="left bg" />
    <div className="container">
      <h3 className="main-title">EDIT PROFILE</h3>
      <p className="main-subtitle text-primary">TENANT</p>

      <div className="row mt-5">
        <div className="col-12 col-lg-5 col-xl-4">
          <div className="user-profile main-box p-0">
            <div className="top">
              <div className="premium">
                <img src="/images/icon/icon-diamond-white.svg" className="icon" alt="icon" />
                <span className="divider" />
                <span className="text">PREMIUM</span>
              </div>
              <div className="photo-holder">
                <div className="settings">
                  <div className="item">
                    <span>B</span>
                  </div>
                  <div className="item">
                    <img src="/images/icon/icon-camera-primary.svg" alt="camera icon" />
                  </div>
                  <div className="item">
                    <img src="/images/icon/icon-facebook-f-primary.svg" alt="fb f icon" />
                  </div>
                  <div className="item">
                    <span>ID</span>
                  </div>
                </div>
                <div className="status-banner">
                  ALL <span className="font-weight-bold">OK</span>
                </div>
                <div className="change-photo">
                  <img src="/images/icon/icon-camera-white.svg" alt="camera icon" />
                </div>
                <img
                  className="photo-additional-bg"
                  src="/images/account-profile-bg.svg"
                  alt="bg profile"
                />
              </div>
            </div>

            <div className="bottom mt-1">
              <h3 className="name text-center text-md font-weight-bold">Adele Haenel</h3>
              <span className="main-description text-dark-gray text-center d-block">
                Speaks Duthch, English
              </span>

              <div className="progress-wrapper mt-4">
                <span className="main-description text-center d-block text-primary">
                  Completed profile: <span className="font-weight-bold">50%</span>
                </span>
                <div className="progress">
                  <div className="progress-bar w-50" role="progressbar">
                    <span className="progress-point" />
                  </div>
                </div>
              </div>

              <button type="button" className="button yellow mx-auto d-block mt-5">
                CANCEL <span className="font-weight-bold">PREMIUM</span>
              </button>
            </div>
          </div>

          <div className="settings-wrapper my-5">
            <button type="button" className="button btn-icon-text d-flex">
              <img src="/images/icon/icon-settings-white.svg" alt="icon" />
              <span className="divider" />
              <span className="text">Settings</span>
            </button>

            <div className="field-group-select select mt-3">
              <img src="/images/icon/icon-languages-primary.svg" className="left-icon" alt="icon" />
              <span className="divider" />
              <span className="value">Languages</span>
              <button type="button" className="btn-dropdown">
                <img src="/images/icon/icon-caret-down-white.svg" alt="item icon" />
              </button>
              <div className="choices">
                <div className="item">Language 1</div>
                <div className="item">Language 2</div>
                <div className="item">Language 3</div>
                <div className="item">Language 4</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="language-item mx-auto">
                <span className="circle" />
                <span className="text">English</span>
              </div>

              <div className="language-item mt-2 mx-auto">
                <span className="circle" />
                <span className="text">Dutch</span>
              </div>
            </div>
          </div>

          <div className="toggle-buttons main-box">
            <div className="toggle-switch">
              <div className="switch">
                <input
                  id="toggle-on-1"
                  className="toggle toggle-left"
                  name="toggle-1"
                  value="false"
                  type="radio"
                  checked
                />
                <label htmlFor="toggle-on-1" className="switch-button">
                  ON
                </label>
                <input
                  id="toggle-off-1"
                  className="toggle toggle-right"
                  name="toggle-1"
                  value="true"
                  type="radio"
                />
                <label htmlFor="toggle-off-1" className="switch-button">
                  OFF
                </label>
              </div>
              <span className="main-desc ml-3">Email messages notifications</span>
            </div>

            <hr />

            <div className="toggle-switch">
              <div className="switch">
                <input
                  id="toggle-on-2"
                  className="toggle toggle-left"
                  name="toggle-2"
                  value="false"
                  type="radio"
                  checked
                />
                <label htmlFor="toggle-on-2" className="switch-button">
                  ON
                </label>
                <input
                  id="toggle-off-2"
                  className="toggle toggle-right"
                  name="toggle-2"
                  value="true"
                  type="radio"
                />
                <label htmlFor="toggle-off-2" className="switch-button">
                  OFF
                </label>
              </div>
              <span className="main-desc ml-3">Monthly newsletter </span>
            </div>

            <hr />

            <div className="toggle-switch">
              <div className="switch">
                <input
                  id="toggle-on-3"
                  className="toggle toggle-left"
                  name="toggle-3"
                  value="false"
                  type="radio"
                />
                <label htmlFor="toggle-on-3" className="switch-button">
                  ON
                </label>
                <input
                  id="toggle-off-3"
                  className="toggle toggle-right"
                  name="toggle-3"
                  value="true"
                  type="radio"
                  checked
                />
                <label htmlFor="toggle-off-3" className="switch-button">
                  OFF
                </label>
              </div>
              <span className="main-desc ml-3">Weekly update new tenants</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-7 col-xl-8 mt-5 mt-lg-0">
          <div className="main-box">
            <div className="social-media-options">
              <div className="item">
                <img src="/images/social-media/facebook-square.png" alt="icon" />
              </div>
              <div className="item">
                <img src="/images/social-media/google.png" alt="icon" />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12 col-sm-6">
                <div className="field-group mt-3">
                  <div className="field-icon">
                    <img src="/images/icon/icon-user-primary.svg" alt="item icon" />
                  </div>
                  <span className="field-divider" />
                  <input type="text" placeholder="First Name" required />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="field-group mt-3">
                  <div className="field-icon">
                    <img src="/images/icon/icon-user-primary.svg" alt="item icon" />
                  </div>
                  <span className="field-divider" />
                  <input type="text" placeholder="Last Name" required />
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="field-group mt-3">
                  <div className="field-icon">
                    <img src="/images/icon/icon-calendar-primary.svg" alt="item icon" />
                  </div>
                  <span className="field-divider" />
                  <input type="text" placeholder="Date of Birth" required />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="field-group mt-3">
                  <div className="field-icon">
                    <img src="/images/icon/icon-smartphone-primary.svg" alt="item icon" />
                  </div>
                  <span className="field-divider" />
                  <input type="text" placeholder="Phone Number" required />
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="field-group-select select mt-3">
                  <img
                    src="/images/icon/icon-map-marker-primary.svg"
                    className="left-icon"
                    alt="icon"
                  />
                  <span className="divider" />
                  <span className="value">City</span>
                  <button type="button" className="btn-dropdown">
                    <img src="/images/icon/icon-caret-down-white.svg" alt="item icon" />
                  </button>
                  <div className="choices">
                    <div className="item">City 1</div>
                    <div className="item">City 2</div>
                    <div className="item">City 3</div>
                    <div className="item">City 4</div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="field-group-select select mt-3">
                  <img
                    src="/images/icon/icon-gender-primary.svg"
                    className="left-icon"
                    alt="icon"
                  />
                  <span className="divider" />
                  <span className="value">Gender</span>
                  <button type="button" className="btn-dropdown">
                    <img src="/images/icon/icon-caret-down-white.svg" alt="item icon" />
                  </button>
                  <div className="choices">
                    <div className="item">Gender 1</div>
                    <div className="item">Gender 2</div>
                    <div className="item">Gender 3</div>
                    <div className="item">Gender 4</div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="field-group mt-3">
                  <div className="field-icon">
                    <img src="/images/icon/icon-email-primary.svg" alt="item icon" />
                  </div>
                  <span className="field-divider" />
                  <input type="email" placeholder="Email Address" required />
                </div>
              </div>
            </div>

            <button type="button" className="button mt-4 mx-auto d-block min-width">
              SAVE CHANGES
            </button>

            <div className="row mt-3">
              <div className="col-12 col-sm-6">
                <div className="field-group mt-3">
                  <div className="field-icon">
                    <img src="/images/icon/icon-lock-primary.svg" alt="item icon" />
                  </div>
                  <span className="field-divider" />
                  <input type="password" placeholder="Old Password" required />
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="field-group mt-3">
                  <div className="field-icon">
                    <img src="/images/icon/icon-lock-primary.svg" alt="item icon" />
                  </div>
                  <span className="field-divider" />
                  <input type="password" placeholder="New Password" required />
                </div>
              </div>
            </div>

            <button type="button" className="button mt-4 mx-auto d-block min-width">
              UPDATE
            </button>
          </div>

          <div className="main-box mt-4">
            <h3 className="main-box-title">Profile Description</h3>
            <div className="field-group mt-4">
              <div className="field-icon">
                <img src="/images/icon/icon-left-align-primary.svg" alt="item icon" />
              </div>
              <span className="field-divider long" />
              <textarea placeholder="About me?" required />
            </div>

            <button type="button" className="button mt-4 mx-auto d-block min-width">
              SAVE CHANGES
            </button>
          </div>

          <div className="main-box mt-4">
            <h3 className="main-box-title">What I am looking htmlFor</h3>

            <div className="row mt-2">
              <div className="col-12 col-sm-6">
                <div className="field-group-select select mt-3">
                  <img src="/images/icon/icon-house-primary.svg" className="left-icon" alt="icon" />
                  <span className="divider" />
                  <span className="value">Type of house</span>
                  <button type="button" className="btn-dropdown">
                    <img src="/images/icon/icon-caret-down-white.svg" alt="item icon" />
                  </button>
                  <div className="choices">
                    <div className="item">House 1</div>
                    <div className="item">House 2</div>
                    <div className="item">House 3</div>
                    <div className="item">House 4</div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 mt-3">
                <div className="field-group-select select">
                  <img
                    src="/images/icon/icon-map-marker-primary.svg"
                    className="left-icon"
                    alt="icon"
                  />
                  <span className="divider" />
                  <span className="value">City</span>
                  <button type="button" className="btn-dropdown">
                    <img src="/images/icon/icon-caret-down-white.svg" alt="item icon" />
                  </button>
                  <div className="choices">
                    <div className="item">City 1</div>
                    <div className="item">City 2</div>
                    <div className="item">City 3</div>
                    <div className="item">City 4</div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="field-group mt-3">
                  <div className="field-icon">
                    <img src="/images/icon/icon-euro-primary.svg" alt="item icon" />
                  </div>
                  <span className="field-divider" />
                  <input type="text" placeholder="Max budget" required />
                </div>
              </div>
            </div>

            <button type="button" className="button mt-4 mx-auto d-block min-width">
              SAVE CHANGES
            </button>
          </div>

          <div className="main-box mt-4">
            <h3 className="main-box-title">Bank Details</h3>

            <div className="field-group mt-4">
              <div className="field-icon">
                <img src="/images/icon/icon-account-name-primary.svg" alt="item icon" />
              </div>
              <span className="field-divider" />
              <input type="text" placeholder="Account Name" required />
            </div>

            <div className="field-group mt-3">
              <div className="field-icon">
                <img src="/images/icon/icon-account-number-primary.svg" alt="item icon" />
              </div>
              <span className="field-divider" />
              <input type="text" placeholder="Account Number" required />
            </div>

            <div className="d-flex justify-content-center mt-4">
              <button type="button" className="button min-width mr-3">
                SAVE CHANGES
              </button>
              <button type="button" className="button outline min-width btn-verify-payment">
                <span className="font-weight-bold">VERIFY PAYMENT</span>
                <br />
                with 0,01 ct
              </button>
            </div>
          </div>

          <div className="main-box mt-4">
            <div className="d-flex align-items-center">
              <h3 className="main-box-title">Copy ID</h3>
              <span className="circular-icon x ml-3">
                <img src="/images/icon/icon-cancel-dark-gray.svg" alt="icon" />
              </span>

              <span className="circular-icon check ml-1">
                <img src="/images/icon/icon-check-white.svg" alt="icon" />
              </span>
            </div>

            <div className="file-upload mt-4">
              <div className="file-select">
                <button type="button" className="button btn-browse" id="fileName">
                  Browse...
                </button>
                <div className="main-description font-weight-light ml-3 text-primary filename">
                  No document selected
                </div>
                <input type="file" />
              </div>
              <button type="button" className="button">
                UPLOAD
              </button>
            </div>
          </div>

          <div className="main-box mt-4">
            <div className="d-flex align-items-center">
              <h3 className="main-box-title">Proof of Income</h3>
              <span className="circular-icon x ml-3">
                <img src="/images/icon/icon-cancel-dark-gray.svg" alt="icon" />
              </span>

              <span className="circular-icon check ml-1">
                <img src="/images/icon/icon-check-white.svg" alt="icon" />
              </span>
            </div>

            <div className="file-upload mt-4">
              <div className="file-select">
                <button type="button" className="button btn-browse" id="fileName">
                  Browse...
                </button>
                <div className="main-description font-weight-light ml-3 text-primary filename">
                  No document selected
                </div>
                <input type="file" />
              </div>
              <button type="button" className="button">
                UPLOAD
              </button>
            </div>
          </div>

          <div className="main-box mt-4">
            <div className="d-flex align-items-center">
              <h3 className="main-box-title">Proof of Enrolment</h3>
              <span className="circular-icon x ml-3">
                <img src="/images/icon/icon-cancel-dark-gray.svg" alt="icon" />
              </span>

              <span className="circular-icon check ml-1">
                <img src="/images/icon/icon-check-white.svg" alt="icon" />
              </span>
            </div>

            <div className="file-upload mt-4">
              <div className="file-select">
                <button type="button" className="button btn-browse" id="fileName">
                  Browse...
                </button>
                <div className="main-description font-weight-light ml-3 text-primary filename">
                  No document selected
                </div>
                <input type="file" />
              </div>
              <button type="button" className="button">
                UPLOAD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default Page;
