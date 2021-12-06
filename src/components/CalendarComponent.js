import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useVisibilityHook } from "react-observer-api";

export default function CalendarComponent() {
  const { setElement, isVisible } = useVisibilityHook();

  useEffect(() => {
    if (isVisible) {
    }
  }, [isVisible]);

  return (
    <React.Fragment>
      <div class="container">
        <div className="pt-5"></div>
        <Link to="/vintesetenovembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                27 <span style={{ fontWeight: "900" }}>NOV</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/nal7XFg.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/umdezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                01 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/FoA1bsK.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>{" "}
        <Link to="/doisdezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                02 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/Ngtlfxd.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/tresdezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                03 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/r7kcjNs.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/quatrodezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                04 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/6eJJdvQ.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/cincodezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                05 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/9siLmKF.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/seisdezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                06 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/7QWVEbv.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/setedezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                07 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/HHnms7y.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/oitodezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                08 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/pbqlEU7.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/novedezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                09 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/0JoweGU.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/dezdezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                10 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/YMDrroG.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/onzedezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                11 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/7ofmKfg.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/dozedezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                12 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/lkzEC8q.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/trezedezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                13 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/MSCV3gj.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/catorzedezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                14 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/AKVJoYf.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/quinzedezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                15 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/ZmyURSK.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/dezasseisdezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                16 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/Iv9Fp4O.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/dezassetedezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                17 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/HUuWQYq.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/dezoitodezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                18 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/nS4Tvxe.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/dezanovedezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                19 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/DERMjm3.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/vintedezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                20 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/fswkEaI.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/vinteumdezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                21 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/VFRvxbI.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/vintedoisdezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                22 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/Nj7nBP9.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/vintetresdezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                23 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/OnBJw78.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        {/* <Link to="/vintequatrodezembro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                24 <span style={{ fontWeight: "900" }}>DEZ</span>
              </h1>
            </div>
            <div class="present__content">
              <img loading="lazy"
                className="present_img"
                src="https://imgur.com/oWUDaKJ.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link> */}
        <Link to="/doisjaneiro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                02 <span style={{ fontWeight: "900" }}>JAN</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/GqzOVkR.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/seisjaneiro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                06 <span style={{ fontWeight: "900" }}>JAN</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/BOGQIfm.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/oitojaneiro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                08 <span style={{ fontWeight: "900" }}>JAN</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/FRDmXMw.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/novejaneiro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                09 <span style={{ fontWeight: "900" }}>JAN</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/StvX8E5.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
        <Link to="/vintedoisjaneiro">
          <article class="present">
            <div class="present__pane">
              <h1
                className="mobile-letras-amarelo"
                style={{ paddingBlock: "30%" }}
              >
                22 <span style={{ fontWeight: "900" }}>JAN</span>
              </h1>
            </div>
            <div class="present__content">
              <img
                loading="lazy"
                className="present_img"
                src="https://imgur.com/syDrrwX.png"
                alt="present"
              ></img>
            </div>
          </article>
        </Link>
      </div>
    </React.Fragment>
  );
}
