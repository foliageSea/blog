import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createStaticVNode } from "./app-C6L_rV1c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> clash <span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token parameter variable">-v</span> /volume2/docker/clash:/root/.config/clash <span class="token parameter variable">-p</span> <span class="token number">7890</span>:7890 <span class="token parameter variable">-p</span> <span class="token number">7891</span>:7891 <span class="token parameter variable">-p</span> <span class="token number">9090</span>:9090 <span class="token parameter variable">--restart</span> unless-stopped dreamacro/clash\n\n<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> yacd <span class="token parameter variable">-p</span> <span class="token number">9091</span>:80 <span class="token parameter variable">--restart</span> unless-stopped haishanh/yacd\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 1);
const _hoisted_2 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_2);
}
const _1742917278530_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "1742917278530.html.vue"]]);
export {
  _1742917278530_html as default
};
