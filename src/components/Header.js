import React, { useState, useEffect, useRef } from 'react';
import {
  signInWithPopup,
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase';

export default function Header() {
  const [isLogin, SetisLogin] = useState(0);

  const floor1bg =
    'https://static.feednews.com/wemedia/static/media/floor1bg.dbf1fbea.png';

  const logoImg =
    'https://static.feednews.com/wemedia/static/media/floor1logo.4afd4d6d.png';

  const loginClick = () => {
    // console.log('Login Model');
    SetisLogin(!isLogin);
  };
  const ref = useRef(null);
  const handleClickModel = (e) => {
    // console.log(e.currentTarget === e.target);
    if (e.currentTarget === e.target) {
      // console.log('outside click');
      SetisLogin(0);
    } else {
      // console.log('inside click');
      SetisLogin(1);
    }
  };
  const loginGoogle = () => {
    // console.log('Google Login');
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log('Google Login');
        console.log(result);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const loginFB = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log('FB Info');
        console.log(result);
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };

  const signOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="login_header">
        {isLogin ? (
          <div className="login_modal" ref={ref} onClick={handleClickModel}>
            <div className="login_modal_content">
              <img
                className="login_modal_logo"
                src="data:image/png;base64,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"
                alt="logo"
              />
              <h4>Log in to Opera News Hub</h4>
              <button
                className="login_modal_button button_fb"
                onClick={loginFB}
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAnRJREFUaAXtmz9LHEEYh281MaBcmjRqUAiYIhII6QQrsUmr+QinjX4RQa7RLol+CzttUhgkqQJR04aIEglpJETx7vK8cruccDs73M0e7+7MwI+d//c+85vdWVasVEitVquGjlEDlS0J0zdUE9aonfkgBQ/SigAfA/rCA1hBPBHgBpkhT4CbAtzyBPYO0xdnE08DcLIUJc145/ADxUb+I7Z9dIC+oEv0GzXRQ/QIVdFj9AS9QevImDQCXxPxNqpHUXRhjL6jkcNmhGLhgH8Q9FtAxdFckiaHzyCcA/Y8F9L2pFoeWjfEs5Q3rDBrAX4P7Oe2CbleNACLuxu5UnZMrgH4I+7+7Igp16yGh5acs1aJo+cpHRfQBJJjKE4Rmdm4YLpqAD4yBRi3AbtGfhONxnW9XDUA/8oKHNgZ+myh4ay+We0a7uHLrCBpX0Z9w8rvaAD+K4FkJLlnnSQNwDYgYzadbPoUBdiGxapPALZapgJ38s7hQZzDn9gQfwyb4tbQFjd9JbMXF1Kur6mfTGlLqgfxXXqed+XD5BdzyvByIp+DFrOmL9OWfpYFK+2lAMZdeQub9gYY0Clk9TwqhcPAWm1n2QEBWFahgCk4nGaa1Y2eNtiy/hVPUdOtc8g5LX8+SU2Mf07jeGqHSuWloe1e0yBePO79YJdCFeCrLvVJFcDvKKwmFX1kTCvfx7R6hwZgvd64iSw47GYd9c4SHNbrjZvIgsNu1lHvLMFhvd64iSw47GYd9c4SHNbrjZvIgsNu1lHvLF46bPyepNerniJrisPfexpazEGnAlwvZuw9RV0f4ovhDkNX0Akq4/ZuwCX/jFaDdfc/X/dN24vHhTsAAAAASUVORK5CYII="
                  alt="facebook"
                />
                Continue with Facebook
              </button>
              <button
                className="login_modal_button button_google"
                onClick={loginGoogle}
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABUxJREFUaAXlm1uoFVUYx9uaaZmnOJaihZewjnLyYPVQEgVGir4pBUkPCXkDTckH6SEo66ULidDLeYgiKHvIS/qkqEko4YNoqEmoKJ3wVl7S00VDO6fff7vXcPbsua5Ze88MffDfa9Za3/q+7z9rZtZlZldua5L09/d3YvoZMAV0gImgDYwAd4Jr4G/QC34BP4OfwG7wQ6VS6SMtrkBwMJgNvgC/gixyicYbwFKgE1UcIaB28C44B5ohfRjdCLpyZU0AbeAD8AdohYj4ZvBYy4nj9CVwFuQln+NYz4HmCk6GgfV5sfT5PUB+XNMYY3w02Odzmnf2AgHMcE4ao12gJ292If5vUL44KelKnCLG5qDzNbg7TjfH+n58P8nYvT8uhtujFCCroWADGB6lV4C6D5OQjYwTshpfT4Giy7pIIkkqYahZ086iMyW+7iR8YnUwtLYEZD8jxthnUBKys0pAVnOBQbFkAhTqzhBGhqBzGEwO0M1SJJvbQQ84DS6DdnA/mARmgsdBXTzkg2QjhfN5SP0bVJmqDMKrHPbuVWy9DR5OEgR6o4AWIb0gTLZSoU7JLhgaClzMj29ipxuo91IL7UaCr4BftlMwNLXBsAYYW+T3YJG/TJsZYT7SlGPnTaAVkuRb4HaxgMEjspxBjtE20eWblDj2loA9wO3EB4NTQRbR4v+BpETS6GF3cBr9OF3zaH85TjGi/h/q5vLUPBOhY13l5Gns985Z/DFD967w2ytyvgLR+wjwN5BkDPRzOUbBo/TCTX9FUB5fSyl/K6iuyWXLiXGLfGi1pK1UG7Jq/0ZSslJGtMQcWz1q7c803FUJ6x5WxkZ6ILvVpmEObSYYnyJsO5RsNkZKkHp7X/8Xwg+aThHhUSaTMj2YUj9Pdb3eqYoI2+xVXeH+1XuhsshdJlAR9tibwgSplnhlkjrC2vFLK7bDWFo/rvRvGEPq4T9NJkXalHlzCv9pVbXhUBVbwvcya/IuE2OswOklE5sIa1ppI9qSKYvU9fBxy6hfsGyXR7M6wicsI5hn2S6PZt4lrcXDIcsIxnMfax1cnZQntKG598mEun61VRQ86y9MmNeq7pYQtDbNzN4Rh6lE2zo6aU0VfIwAUbuZcUFPNwEOoofU3UdNQcr0EfSXpWxjo651tM0ESb6ugwM68ITT817cKYqov07dU54xxwfYHgOy9O7egSFpWJKsv5VY/Wqv+BuC8lYkVlYCGmFT8X0CbHtXVr/XT4Ng/DDIIsdprEvcmWDPxUu94H1yjC/MwrbWVhvxz2VljA29rv24ZjNLoi/7ggWrd4AzWazX2mZ91TIJO7scxCETrwWzrZWi8LojRzKjl2lrQKItJPQ6wDqgh6AL0QdzbX7Cdcs8FIagoInIFL9ixrz/damGwnuAXrhpTv40eAK4lG6G3IYhs46wvEF6JskOl55zsNWLz04IN2xUmGHJiwmlnWTWegXlPFgdRFZUGnpYhfSyXmBtA+rtssluAn4ewoE7OYGExRDS7ST60Osh5Usi2licCtlTYfE2XNJGkUZaQ84Ff5mygqf65uOVKLKKP5SwKml8hORFYLPvJROtkj4cLSDeTU4ccnkX+eNSLW1fdUJ0oBGMFvHzYU1SFg2M0+kxxvWlz5egCKLFTpdTgmHGcJTnXwB0CX8E3H3CFEZ0YDkO28D7QHPWVsk2HGkamp8QQDt4B+hLnmaI7tNPQWd+LAM8E5DWsOaPWuc5ziL6L8MmsBKMDnBnXRQ607K2WGtIoOoRfT+ilVcHmAi0XNN2je6/38HFGrR6ugC0qvoOHGVMDZwaUpdJ/gM3mOf2apy70wAAAABJRU5ErkJggg=="
                  alt="google"
                />
                Continue with Google
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
        <div className="login_header_main">
          <div className="login_header_logo">
            <img
              src="data:image/png;base64,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"
              alt="logo"
            />
          </div>
          <ul className="login_header_nav">
            <li className="active">Home</li>
            <li>Opera News</li>
          </ul>
        </div>
        <div className="login_header_country">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAA5CAMAAABJeiYSAAAAb1BMVEVHcEzRL0T77O3309eyN1Xx4uLrzdH10Njz8/TUt8dGRn9GRn/QMEX5+fn///9GRn+6us6CgqdlZZPm5uxUVIeSkrJycp3Y1uBBQXihob376+3QL0Tol6LxwsjfbXzVRFe9M010Un7YsL3Ri53QaXxgtiLOAAAADXRSTlMA36FAMQQpSP5Og+JjvkhbvwAAAbZJREFUeAHlmMWiYyEQRIn3k744xJOR///GKWCyGSWkR9/ZVPQgXaurhFmtn77PpofFetVUyxf9A66HLmZLBZ61ftwFXrErLeICy7ot46MGO78rEb0pYb0JiLzvZa5wWXaaJvzNIZzWAWEh8dO0a9EJKa11QiIcT+yQxFNqktiiF6VBNEk7p62xJZKJOuADs9Pg/amb6tputztmi7DMO0RiNoh77h7cXLn92zDnZqZBl97qsi9E2RciERs95sJ9bT/fV3Bb3FeJsftKzIRdBGYO2Awxp3bqgTlauCBxcLmmtHB5HHegEya33ufW+9x6n+/qPbjN0ZJPiOTJIoKn+EAniGoniGoniP2wSxuqO4lEpQwWysFOpBi0tdpFVyLEVD4pAT4cuyku13YRPPnSiUzk2nHtQCeIaieoSgKidoJooBMh41+4HENGI3eUQ6kGZXe/a7uFAXwzrpdubp34Osb79XUMdOLdT/h47kZNcvy1rrMc6iCHqOsix5voxFEO2U78pa69HH9tJ05yvIlOnOQQnSOJqUjN91LM1fIgxVKpVyHVqwLLmYBptlSF1Wq92DxGeQ4gyyfmIVcgnnhT7QAAAABJRU5ErkJggg=="
            alt="country"
          />
        </div>
      </div>
      <div
        className="login_home"
        id="loginHome"
        style={{
          background: `url(${floor1bg}) no-repeat center`,
          backgroundSize: '100% 100%',
        }}
      >
        <div className="login_home_main">
          <div className="login_home_left">
            <h4>
              Create. <span>Share</span>. Earn
            </h4>
            <p>
              share your stories, opinions and life with over 350 million global
              active users.
            </p>
            <button
              className="login_btn"
              onClick={loginClick}
              style={{
                background: 'url('.concat(
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAAA8CAYAAAC0LwViAAAHGklEQVR4AezYg45eYRDG8bVtxo2Ke6l5LbVt27axthkUl9DG2Gj6nMnTZpIcr/f7TvKLc+L/OzMps/UdSi+qgXWw43B60QMYPJxR9OtIRtEfmDqaUSz/HKPjdMI4qUrkFJ2GM5kAZ+kcnc8sVRfgIl2iy3Aly1EmV+kaXKcbcFOVyy247cgulztwl+5lV8h9egAP6RE8zqmQJzmV6ik8o+fwQlXJS3hFr3Or5A28VdXyDt7TB/hIn+BzXo36Al/pGzSpWmmGFmp15NdKG7SrOumATuqibuqB3vx61VcA0E8DNEhDBQ1qmEaMUUdhg4wZ44WN/00Yk0kLwRT8hl8wCPdhB6yBGkiZDTP6s4PpRctgN4yBOA4ZhwnhkSMUJjwnyUQnMDwXvMLD6ACjoxgdYHTChOcBMToMT6VveF6a8LyOFJ6ayOFpCxmeHhuegqDwNHiGZ9Q1PDY6yfAsImOwF1YsqOAgKhmwDbpALN/owBGX8ByLGp7M6OG5HCE8t4jRAUYnRnieK047Njy53uH5QBodxeiQRseEpzkgPB0u4eme/fAkp53FrQs2Qca8BQchSYXN8AvEih+e4pkOj12zgNFxCc/V2OGpAI81y2GiEyY8b0x43s1QeFoDwtPlGh5ExxFpzXIJT2EyPEvID9gMqXMaHMRjlftEM3vhOR4zPOeih2fm7zvu4Qm474CZdv62dxdZkhxBEIZjeGYjZmbGk4iZbyBmZjyCdoKNmJmZmZlpOwyuP4X58pUU096eVZHRtviuYK/TKswbzn4HmX4nFzzqd6TjeeztChzHXzWnYgXML77fiSuWN8gEz4bu4CF0iimWn1GxPD2yHKdgVi+BQ0BsgPtgka4prFh29Tvw9zuZYnnRFIIn85k1tGL5fRmCO7FeaOAQDFvjfVi8+GLZ3+8grN/JBI+j38HY+x1k+x10Q2dmFcvyAbYLCRzCYHd8A/Opv9/prVh29DsRwfMs0FO/A31m1ehb7Ax/4BAAW+FbmEd8vxMVPPl+B+N9ONhw9DsYw8NBqN/Jk2+xlStw/ups3oFNUi/9TmCxfGNAsTyFfgcFPhyMCh49HKzBO1g3HzidX6PiC+L4Yvm6GVYs3zHNYvlhR7Gsh4MOcjdmTSVwzoBNlIrlgIeD5RfLBA5Q28NBOQWpa1TY7IkVsAJV8HAQ/n4nvlhuf2apWI4jy7EbUtuoT6mnYA6l9juORToKXaTHF8tapEtvnsgFzlEwPxXLuUU6el6kY+iLdFSzSJcj2hnTDpvZ+AgWoOhi+Ya6i2Ut0ksKHXkPs0cFzuGw8tW6SFexXO0iXQ4eFTgvwIKpWNYiXcWyPIvUaF/qs6lRsaxFuorlPMEa7NAOnEth1RrcIj0fPDfr1OmwimW5qB04b8F6oIeDvuDRIh1VLdLlNaQmbDbEalhPVCxrka6Hg7Ia6zeBcwisBFqko/BFeq/Fcu39jhzYBM5VsLppka5FuoKnABc2gXMXTKEDLdJR4iIdNTwclJubwHkb1jMVyzp1qkW6vNIEzk8wqf/UaeQiXcWyOHzZBM4SmPT/cBDlL9J16rS/4JHfkkJFxTK0SB/HqVNZpsDRIl2LdBXL47K8CZylMNEiXYv0notl+W1CpbGKZS3SEfZwUMXykErjd2BS6CK9zFOnWqS7g0c/i98Dk5oW6QhYpEOL9MhFutyiaUMFDwcRv0iPL5ZVLMtFTeAcARMVy/GL9PKK5Rd06nSSDm0CZ0uYqFjWqVP1Oz3b/O8DXB/CZAD9jk6dOvodFcsFeKd98e8KWL/kmpDg0SId/kV6ocXy+/W7tB04u8PERYt0LdJVLOft3P03MS/DRP2OTp3q4WCwF5C6gXM0THTqVIt09TvBDh8VOHPxKSyIaJGuU6dapH/U/Ve/7dA5HiY6dVrAIr3AU6d6OOhwLNJ/Bc4sPA8TqFiGFuk6der2MmZ1A6cbOvtiJUymSw8H4e134ovl9meWiuW+rcR+SCMDpxM658JkJizSUegivZRiWYt0l7OQ1jZwZuMhmPwvFcvz44rlW3XqtJZF+gOYlQ2cTuhsPMVfrUSnTnXqVMXyp9gIKRM4I0Nne3wLiyNapKtYrnSR/iN2QnIFzl+hsyd+gImTimUt0usvln/EnkjewGmHznb4GNYhOnWqRbqK5c+wE5IvcEaHzkZ4GCYFG+IiPRM8N+vUacnF8sOtziYscNq/Xl2gdzoj6eGgK3i0SMcQF+krcTZmI4UHTid49sdLMAdRsaxF+rD7neexLxLgDBzHXzsn4QuYQIv0Yovl2wdULBfc73yGkzALaZyB012ZH4fXYVIoLdK1SPcHz2s4FnORgMjA8YfP3rgWH8BKptDRIh0FLtJRxsPB93E19kJycAaOP3w2x9G4HvfjffyKNTDRIl2nTie+SF9D4PyK93E/gXMdjsTmSH34HQwt1W9Nn+bQAAAAAElFTkSuQmCC',
                  ') no-repeat center'
                ),
                backgroundSize: '100% 100%',
              }}
            >
              Login / SignUp
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAWCAYAAAAb+hYkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY0ODE4QTAzRjk3OTExRTk5QzBERTYwNDY4RkM5RTgyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY0ODE4QTA0Rjk3OTExRTk5QzBERTYwNDY4RkM5RTgyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjQ4MThBMDFGOTc5MTFFOTlDMERFNjA0NjhGQzlFODIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjQ4MThBMDJGOTc5MTFFOTlDMERFNjA0NjhGQzlFODIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6oAljKAAAA2ElEQVR42ozUzQoBURjG8UlTSopRWLFwCy7B3VmyIwthIWlioWwo9lKKlI8SsZCUCzieN+TZve+p/9Qsfp3pfIznnCu5z9giz5I8Zu4/plaUQguCYwuSfLQkOLIgKYrWBAcWJMXQhmDfgqQ42hPsWpCUREeCbQuSAnQm2LQgKYOuBOsW9GtFcBjx9BEgn96f2gwF9KJZytrn5dGDQEVbiBy6E6hqS55FNwI1bXPT6EKgoR0j2cwTgZZ2YBPoQKCjXQ1ZpR2BnuUSzgmE1ute/K7WxPpjeQswAFVaeLDr98skAAAAAElFTkSuQmCC"
                alt="right"
              />
            </button>
          </div>
          <div className="login_home_right">
            <img src={logoImg} alt="floorlogo" />
          </div>
        </div>
      </div>
    </>
  );
}
