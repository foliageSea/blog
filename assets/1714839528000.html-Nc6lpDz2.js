import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createStaticVNode } from "./app-C6L_rV1c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="开发环境配置" tabindex="-1"><a class="header-anchor" href="#开发环境配置" aria-hidden="true">#</a> 开发环境配置</h2><h3 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker" aria-hidden="true">#</a> 安装 Docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 docker</span>\n<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">docker</span> <span class="token parameter variable">--mirror</span> Aliyun\n<span class="token comment"># 启动 docker</span>\nsystemctl start <span class="token function">docker</span>\n<span class="token comment"># 设置 docker 开机自启</span>\nsystemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-docker-compose" tabindex="-1"><a class="header-anchor" href="#安装-docker-compose" aria-hidden="true">#</a> 安装 Docker-Compose</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://get.daocloud.io/docker/compose/releases/download/1.25.0/docker-compose-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">`</span></span>-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">`</span></span> <span class="token operator">&gt;</span> /usr/local/bin/docker-compose\n<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose\n\n<span class="token function">docker-compose</span> <span class="token parameter variable">-v</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-mysql" tabindex="-1"><a class="header-anchor" href="#安装-mysql" aria-hidden="true">#</a> 安装 MySql</h3><p>拉取镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql:8.0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建 MySql 容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>\n<span class="token parameter variable">--name</span> mysql-server <span class="token punctuation">\\</span>\n<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token punctuation">[</span>密码<span class="token punctuation">]</span> <span class="token punctuation">\\</span>\n<span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>\nmysql:8.0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-go" tabindex="-1"><a class="header-anchor" href="#安装-go" aria-hidden="true">#</a> 安装 Go</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载压缩包</span>\n<span class="token comment"># 解压</span>\n<span class="token function">tar</span> <span class="token parameter variable">-xvf</span> go1.15.3.linux-amd64.tar.gz\n\n<span class="token comment"># 配置环境变量</span>\n<span class="token function">vim</span> ~/.bashrc\n  \n<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOROOT</span><span class="token operator">=</span>/root/go\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPATH</span><span class="token operator">=</span>/root/projects/go\n<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$GOROOT</span>/bin:<span class="token variable">$GPPATH</span>/bin\n\n<span class="token comment"># 设置代理</span>\ngo <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.io,direct\ngo <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-node-js" tabindex="-1"><a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a> 安装 Node.js</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 node.js 版本管理工具</span>\n<span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh <span class="token operator">|</span> <span class="token function">bash</span>\n<span class="token comment"># 设置代理</span>\nnvm npm_mirror https://npmmirror.com/mirrors/npm/\nnvm node_mirror https://npmmirror.com/mirrors/node/\n<span class="token comment"># 安装指定版本的 node</span>\nnvm <span class="token function">install</span> <span class="token number">16</span>\nnvm list\nnvm use <span class="token number">16</span>\n<span class="token comment"># 指定镜像源安装全局工具</span>\n<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">yarn</span> <span class="token function">pnpm</span> nrm <span class="token parameter variable">--registry</span><span class="token operator">=</span>http://registry.npmmirror.com\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置容器自启" tabindex="-1"><a class="header-anchor" href="#设置容器自启" aria-hidden="true">#</a> 设置容器自启</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> container update <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token operator">&lt;</span>容器名称<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images\n<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>', 17);
const _hoisted_18 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_18);
}
const _1714839528000_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "1714839528000.html.vue"]]);
export {
  _1714839528000_html as default
};
