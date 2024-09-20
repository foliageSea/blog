import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createBaseVNode, e as createTextVNode, f as createVNode, b as createStaticVNode } from "./app-G3Uv68U6.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "基于go-frp的内网穿透方案",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#基于go-frp的内网穿透方案",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 基于go-frp的内网穿透方案")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = {
  href: "https://www.passnat.com",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://www.openfrp.net",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h3 id="frp-docker-安装" tabindex="-1"><a class="header-anchor" href="#frp-docker-安装" aria-hidden="true">#</a> frp Docker 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--network</span> <span class="token function">host</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-v</span> /root/frpc/config.toml:/etc/frp/frpc.toml <span class="token parameter variable">--name</span> frpc uhub.service.ucloud.cn/ucpublic/frpc:latest\n\n<span class="token parameter variable">--config</span> /etc/frp/frpc.toml\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 2);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          createTextVNode("https://www.passnat.com"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          createTextVNode("https://www.openfrp.net"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_4
  ]);
}
const _1726016678034_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "1726016678034.html.vue"]]);
export {
  _1726016678034_html as default
};
