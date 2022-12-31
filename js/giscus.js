"use strict";
(() => {
  // ns-params:@params
  var params_default = { endpoint: "https://giscus.app/" };

  // ns-hugo:/home/runner/work/hugo-mod-giscus/hugo-mod-giscus/assets/giscus/js/index.ts
  var Giscus = class {
    setTheme(theme) {
      const frames = document.querySelectorAll(
        "iframe.giscus-frame"
      );
      frames.forEach((frame) => {
        if (!frame.contentWindow) {
          return;
        }
        const endpoint = new URL(frame.src).origin;
        frame.contentWindow.postMessage(
          {
            giscus: {
              setConfig: {
                theme: `${endpoint}/themes/${theme}.css`
              }
            }
          },
          endpoint
        );
      });
    }
  };
  var js_default = Giscus;

  // <stdin>
  var giscus = new js_default(params_default.endpoint);
  window.Giscus = giscus;
})();
