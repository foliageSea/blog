import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createStaticVNode } from "./app-cL27D36w.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>ObjectBox Flutter数据库是在跨平台应用程序中存储Dart对象的绝佳选择。ObjectBox Flutter数据库专为高性能而设计，是移动的和物联网设备的理想选择。ObjectBox使用最少的CPU，内存和电池，使您的应用程序不仅有效，而且可持续。通过将数据本地存储在设备上，ObjectBox可以帮助您降低云成本，并制作不依赖连接的应用程序。在几分钟内开始使用我们直观的原生Dart API，而无需SQL的麻烦。另外：我们构建了一个数据同步解决方案，使您能够在线和离线跨设备和服务器保持数据同步。</p><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2><ol><li>添加依赖包</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>\n  <span class="token key atrule">objectbox</span><span class="token punctuation">:</span> ^2.4.0\n  <span class="token key atrule">objectbox_flutter_libs</span><span class="token punctuation">:</span> ^2.4.0\n  <span class="token key atrule">intl</span><span class="token punctuation">:</span> ^0.18.0\n  <span class="token key atrule">path_provider</span><span class="token punctuation">:</span> ^2.0.10\n  <span class="token key atrule">path</span><span class="token punctuation">:</span> ^1.8.0\n\n<span class="token key atrule">dev_dependencies</span><span class="token punctuation">:</span>\n  <span class="token key atrule">build_runner</span><span class="token punctuation">:</span> ^2.0.0\n  <span class="token key atrule">objectbox_generator</span><span class="token punctuation">:</span> ^2.4.0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>声明数据模型</li></ol><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:intl/intl.dart&#39;</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:objectbox/objectbox.dart&#39;</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;objectbox.g.dart&#39;</span></span><span class="token punctuation">;</span>\n\n<span class="token metadata function">@Entity</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">class</span> <span class="token class-name">Note</span> <span class="token punctuation">{</span>\n  int id<span class="token punctuation">;</span>\n\n  <span class="token class-name">String</span> text<span class="token punctuation">;</span>\n  <span class="token class-name">String</span><span class="token operator">?</span> comment<span class="token punctuation">;</span>\n\n  <span class="token class-name">DateTime</span> date<span class="token punctuation">;</span>\n\n  <span class="token class-name">Note</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>comment<span class="token punctuation">,</span> <span class="token class-name">DateTime</span><span class="token operator">?</span> date<span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">:</span> date <span class="token operator">=</span> date <span class="token operator">?</span><span class="token operator">?</span> <span class="token class-name">DateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token class-name">String</span> <span class="token keyword">get</span> dateFormat <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token class-name">DateFormat</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;dd.MM.yyyy hh:mm:ss&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>封装 <em>ObjectBox</em> 类</li></ol><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:path_provider/path_provider.dart&#39;</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:path/path.dart&#39;</span></span> <span class="token operator">as</span> p<span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;model.dart&#39;</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;objectbox.g.dart&#39;</span></span><span class="token punctuation">;</span> <span class="token comment">// created by `flutter pub run build_runner build`</span>\n\n<span class="token comment">/// Provides access to the ObjectBox Store throughout the app.</span>\n<span class="token comment">///</span>\n<span class="token comment">/// Create this in the apps main function.</span>\n<span class="token keyword">class</span> <span class="token class-name">ObjectBox</span> <span class="token punctuation">{</span>\n  <span class="token comment">/// The Store of this app.</span>\n  late <span class="token keyword">final</span> <span class="token class-name">Store</span> _store<span class="token punctuation">;</span>\n\n  late <span class="token keyword">final</span> <span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Note</span><span class="token punctuation">&gt;</span></span> _noteBox<span class="token punctuation">;</span>\n\n  <span class="token class-name">ObjectBox</span><span class="token punctuation">.</span><span class="token function">_create</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_store<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    _noteBox <span class="token operator">=</span> <span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Note</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>_store<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">static</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ObjectBox</span><span class="token punctuation">&gt;</span></span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>\n    <span class="token keyword">final</span> store <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">openStore</span><span class="token punctuation">(</span>\n        directory<span class="token punctuation">:</span>\n            p<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">getApplicationDocumentsDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>path<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;obx-demo&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        macosApplicationGroup<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;objectbox.demo&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token class-name">ObjectBox</span><span class="token punctuation">.</span><span class="token function">_create</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Note</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">getNotes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">final</span> builder <span class="token operator">=</span> _noteBox<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token class-name">Note_</span><span class="token punctuation">.</span>date<span class="token punctuation">,</span> flags<span class="token punctuation">:</span> <span class="token class-name">Order</span><span class="token punctuation">.</span>descending<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> builder\n        <span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>triggerImmediately<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> query<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">addNote</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> _noteBox<span class="token punctuation">.</span><span class="token function">putAsync</span><span class="token punctuation">(</span><span class="token class-name">Note</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">removeNote</span><span class="token punctuation">(</span>int id<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> _noteBox<span class="token punctuation">.</span><span class="token function">removeAsync</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>运行 <code>flutter pub run build_runner build</code> 生成 <code>objectbox.g.dart</code></li><li>初始化</li></ol><div class="language-3dart line-numbers-mode" data-ext="3dart"><pre class="language-3dart"><code>import &#39;dart:async&#39;;\nimport &#39;package:flutter/material.dart&#39;;\nimport &#39;model.dart&#39;;\nimport &#39;objectbox.dart&#39;;\n\n/// Provides access to the ObjectBox Store throughout the app.\nlate ObjectBox objectbox;\n\nFuture&lt;void&gt; main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  objectbox = await ObjectBox.create();\n  runApp(const MyApp());\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何监听数据变化" tabindex="-1"><a class="header-anchor" href="#如何监听数据变化" aria-hidden="true">#</a> 如何监听数据变化</h2><ul><li>监听数据变化,记录</li></ul><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token function">getObjLogs</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;INFO&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;ERROR&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;EXCEPTION&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">final</span> logsQuery <span class="token operator">=</span> _objLogBox<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token class-name">ObjLog_</span><span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">final</span> logs <span class="token operator">=</span> logsQuery<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>logs<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">final</span> deleteLogs <span class="token operator">=</span> logs<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> e<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      _objLogBox<span class="token punctuation">.</span><span class="token function">removeMany</span><span class="token punctuation">(</span>deleteLogs<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 14);
const _hoisted_15 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_15);
}
const _1714839504000_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "1714839504000.html.vue"]]);
export {
  _1714839504000_html as default
};