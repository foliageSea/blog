import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createStaticVNode } from "./app-C6L_rV1c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&#39;3.7&#39;</span>\nservices:\n    tailscale:\n        container_name: tailscale\n        volumes:\n            - /volume2/docker/tailscale/var/lib:/var/lib\n            - /volume2/docker/tailscale/dev/net/tun:/dev/net/tun\n        network_mode: <span class="token function">host</span>\n        restart: unless-stopped\n        environment:\n            - <span class="token assign-left variable">TS_AUTHKEY</span><span class="token operator">=</span>*\n            - <span class="token assign-left variable">TS_EXTRA_ARGS</span><span class="token operator">=</span>--advertise-exit-node\n            - <span class="token assign-left variable">TS_ROUTES</span><span class="token operator">=</span><span class="token number">192.168</span>.31.0/24\n            - <span class="token assign-left variable">TS_HOSTNAME</span><span class="token operator">=</span>UGNAS\n            - <span class="token assign-left variable">TS_STATE_DIR</span><span class="token operator">=</span>./state/\n        image: tailscale/tailscale\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_2 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_2);
}
const _1742916950224_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "1742916950224.html.vue"]]);
export {
  _1742916950224_html as default
};
