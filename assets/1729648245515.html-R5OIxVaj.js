import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createBaseVNode, e as createTextVNode, f as createVNode, b as createStaticVNode } from "./app-C6L_rV1c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "passnat",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#passnat",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" PassNAT")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://www.passnat.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-v</span> /volume2/docker/frpc/frpc.toml:/etc/frp/frpc.toml <span class="token parameter variable">--name</span> frpc uhub.service.ucloud.cn/ucpublic/frpc:latest\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createBaseVNode("a", _hoisted_2, [
          createTextVNode("https://www.passnat.com/"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_3
  ]);
}
const _1729648245515_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "1729648245515.html.vue"]]);
export {
  _1729648245515_html as default
};
