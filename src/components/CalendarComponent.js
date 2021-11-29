import React, { useEffect } from "react";
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
        <a href="/vintesetenovembro">
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
                className="present_img"
                src="https://imgur.com/nal7XFg.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/umdezembro">
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
                className="present_img"
                src="https://imgur.com/FoA1bsK.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>{" "}
        <a href="/doisdezembro">
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
                className="present_img"
                src="https://imgur.com/RZBtuCc.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/tresdezembro">
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
                className="present_img"
                src="https://imgur.com/kbeb0Ci.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/quatrodezembro">
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
                className="present_img"
                src="https://imgur.com/TEutCZ7.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/cincodezembro">
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
                className="present_img"
                src="https://imgur.com/9siLmKF.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/seisdezembro">
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
                className="present_img"
                src="https://imgur.com/TSdKhVE.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/setedezembro">
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
                className="present_img"
                src="https://imgur.com/I8ECto5.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/oitodezembro">
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
                className="present_img"
                src="https://imgur.com/pbqlEU7.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/novedezembro">
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
                className="present_img"
                src="https://imgur.com/0JoweGU.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/dezdezembro">
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
                className="present_img"
                src="https://imgur.com/nXGuZ4J.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/onzedezembro">
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
                className="present_img"
                src="https://imgur.com/7ofmKfg.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/dozedezembro">
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
                className="present_img"
                src="https://imgur.com/nrGzgXq.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/trezedezembro">
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
                className="present_img"
                src="https://imgur.com/j43kPvk.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/catorzedezembro">
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
                className="present_img"
                src="https://imgur.com/mrd6FBR.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/quinzedezembro">
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
                className="present_img"
                src="https://imgur.com/mEvB4Id.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/dezasseisdezembro">
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
                className="present_img"
                src="https://imgur.com/Iv9Fp4O.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/dezassetedezembro">
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
                className="present_img"
                src="https://imgur.com/HUuWQYq.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/dezoitodezembro">
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
                className="present_img"
                src="https://imgur.com/RYRJsAu.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/dezanovedezembro">
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
                className="present_img"
                src="https://imgur.com/vrvww1g.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/vintedezembro">
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
                className="present_img"
                src="https://imgur.com/65ihV3B.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/vinteumdezembro">
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
                className="present_img"
                src="https://imgur.com/7wJnVeR.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/vintedoisdezembro">
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
                className="present_img"
                src="https://imgur.com/Nj7nBP9.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/vintetresdezembro">
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
                className="present_img"
                src="https://imgur.com/wz8z2vi.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/vintequatrodezembro">
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
              <img
                className="present_img"
                src="https://imgur.com/oWUDaKJ.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/doisjaneiro">
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
                className="present_img"
                src="https://imgur.com/YLgO6nm.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/seisjaneiro">
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
                className="present_img"
                src="https://imgur.com/BOGQIfm.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/oitojaneiro">
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
                className="present_img"
                src="https://imgur.com/pjKlPrZ.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/novejaneiro">
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
                className="present_img"
                src="https://imgur.com/wW4CLm6.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
        <a href="/vintedoisjaneiro">
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
                className="present_img"
                src="https://imgur.com/uC8zt91.png"
                alt="present"
              ></img>
            </div>
          </article>
        </a>
      </div>
    </React.Fragment>
  );
}
