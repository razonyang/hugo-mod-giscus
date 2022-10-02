"use strict";
(() => {
  // ns-params:@params
  var params_default = { endpoint: "https://giscus.app/" };

  // ns-hugo:/home/runner/work/hugo-mod-giscus/hugo-mod-giscus/assets/giscus/js/index.ts
  var Giscus = class {
    endpoint = "";
    constructor(endpoint) {
      this.endpoint = endpoint.replace(/\/$/, "");
    }
    setTheme(theme) {
      const iframe = document.querySelector(
        "iframe.giscus-frame"
      );
      if (!iframe || !iframe.contentWindow) {
        console.error("[giscus] iframe not found.");
        return;
      }
      iframe.contentWindow.postMessage(
        {
          giscus: {
            setConfig: {
              theme: `${this.endpoint}/themes/${theme}.css`
            }
          }
        },
        this.endpoint
      );
    }
  };
  var js_default = Giscus;

  // <stdin>
  var giscus = new js_default(params_default.endpoint);
  window.Giscus = giscus;
})();
