import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createStaticVNode } from "./app-C6L_rV1c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h3 id="安装-ruby" tabindex="-1"><a class="header-anchor" href="#安装-ruby" aria-hidden="true">#</a> 安装 Ruby</h3><ul><li>请先确保安装 <code>HomeBrew</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> ruby\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加环境变量" tabindex="-1"><a class="header-anchor" href="#添加环境变量" aria-hidden="true">#</a> 添加环境变量</h3><ul><li>如果使用 <code>zsh</code> Shell, 修改 <code>~/.zshrc</code> 添加一下配置</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/opt/homebrew/opt/ruby/bin:<span class="token environment constant">$PATH</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-L/opt/homebrew/opt/ruby/lib&quot;</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">CPPFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/opt/homebrew/opt/ruby/include&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置国内镜像源" tabindex="-1"><a class="header-anchor" href="#设置国内镜像源" aria-hidden="true">#</a> 设置国内镜像源</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加镜像源并移除默认源</span>\ngem sources <span class="token parameter variable">--add</span> https://mirrors.tuna.tsinghua.edu.cn/rubygems/ <span class="token parameter variable">--remove</span> https://rubygems.org/\n<span class="token comment"># 列出已有源</span>\ngem sources <span class="token parameter variable">-l</span>\n<span class="token comment"># 应该只有镜像源一个</span>\n\nbundle config mirror.https://rubygems.org https://mirrors.tuna.tsinghua.edu.cn/rubygems\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-cocoapods" tabindex="-1"><a class="header-anchor" href="#安装-cocoapods" aria-hidden="true">#</a> 安装 cocoapods</h3><ul><li>开发 Flutter 原生 Mac 应用需要用到</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> gem <span class="token function">install</span> cocoapods\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 11);
const _hoisted_12 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_12);
}
const _1714839559000_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "1714839559000.html.vue"]]);
export {
  _1714839559000_html as default
};
