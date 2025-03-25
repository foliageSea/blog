import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createStaticVNode } from "./app-C6L_rV1c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="consul" tabindex="-1"><a class="header-anchor" href="#consul" aria-hidden="true">#</a> Consul</h2><ul><li>服务注册</li><li>服务发现</li></ul><h3 id="访问dns" tabindex="-1"><a class="header-anchor" href="#访问dns" aria-hidden="true">#</a> 访问DNS</h3><ul><li>测试Consul的DNS服务是否可用</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dig</span> @192.168.31.172 <span class="token parameter variable">-p</span> <span class="token number">8600</span> consul.service.consul SRV\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>consul.service.consul</code> 域名, 可用通过域名发现微服务的IP和端口</p><h2 id="consul-的-api-接口" tabindex="-1"><a class="header-anchor" href="#consul-的-api-接口" aria-hidden="true">#</a> Consul 的 API 接口</h2><ul><li>添加服务</li><li>删除服务</li><li>设置健康检查</li></ul><h2 id="go-集成-consul" tabindex="-1"><a class="header-anchor" href="#go-集成-consul" aria-hidden="true">#</a> Go 集成 Consul</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n	<span class="token string">&quot;fmt&quot;</span>\n	<span class="token string">&quot;github.com/hashicorp/consul/api&quot;</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token function">Register</span><span class="token punctuation">(</span>address <span class="token builtin">string</span><span class="token punctuation">,</span> port <span class="token builtin">int</span><span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">,</span> tags <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> id <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>\n	cfg <span class="token operator">:=</span> api<span class="token punctuation">.</span><span class="token function">DefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n	<span class="token comment">// consul 的HTTP接口地址</span>\n	cfg<span class="token punctuation">.</span>Address <span class="token operator">=</span> <span class="token string">&quot;192.168.31.172:8500&quot;</span>\n\n	client<span class="token punctuation">,</span> err <span class="token operator">:=</span> api<span class="token punctuation">.</span><span class="token function">NewClient</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span>\n\n	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n	<span class="token punctuation">}</span>\n\n	check <span class="token operator">:=</span> <span class="token operator">&amp;</span>api<span class="token punctuation">.</span>AgentServiceCheck<span class="token punctuation">{</span>\n		HTTP<span class="token punctuation">:</span>                           <span class="token string">&quot;http://192.168.31.172:8021/health&quot;</span><span class="token punctuation">,</span>\n		Timeout<span class="token punctuation">:</span>                        <span class="token string">&quot;5s&quot;</span><span class="token punctuation">,</span>\n		Interval<span class="token punctuation">:</span>                       <span class="token string">&quot;5s&quot;</span><span class="token punctuation">,</span>\n		DeregisterCriticalServiceAfter<span class="token punctuation">:</span> <span class="token string">&quot;10s&quot;</span><span class="token punctuation">,</span>\n	<span class="token punctuation">}</span>\n\n	registration <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>api<span class="token punctuation">.</span>AgentServiceRegistration<span class="token punctuation">)</span>\n	registration<span class="token punctuation">.</span>Name <span class="token operator">=</span> name\n	registration<span class="token punctuation">.</span>ID <span class="token operator">=</span> id\n	registration<span class="token punctuation">.</span>Port <span class="token operator">=</span> port\n	registration<span class="token punctuation">.</span>Tags <span class="token operator">=</span> tags\n	registration<span class="token punctuation">.</span>Address <span class="token operator">=</span> address\n	registration<span class="token punctuation">.</span>Check <span class="token operator">=</span> check\n\n	<span class="token comment">// 服务注册</span>\n	err <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">Agent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ServiceRegister</span><span class="token punctuation">(</span>registration<span class="token punctuation">)</span>\n	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n	<span class="token punctuation">}</span>\n	<span class="token keyword">return</span> <span class="token boolean">nil</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">AllService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	cfg <span class="token operator">:=</span> api<span class="token punctuation">.</span><span class="token function">DefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n	<span class="token comment">// consul 的HTTP接口地址</span>\n	cfg<span class="token punctuation">.</span>Address <span class="token operator">=</span> <span class="token string">&quot;192.168.31.172:8500&quot;</span>\n\n	client<span class="token punctuation">,</span> err <span class="token operator">:=</span> api<span class="token punctuation">.</span><span class="token function">NewClient</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span>\n\n	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n	<span class="token punctuation">}</span>\n\n	data<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Agent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Services</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n	<span class="token punctuation">}</span>\n\n	<span class="token keyword">for</span> key<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token keyword">range</span> data <span class="token punctuation">{</span>\n		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\n	<span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">FilterService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	cfg <span class="token operator">:=</span> api<span class="token punctuation">.</span><span class="token function">DefaultConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n	<span class="token comment">// consul 的HTTP接口地址</span>\n	cfg<span class="token punctuation">.</span>Address <span class="token operator">=</span> <span class="token string">&quot;192.168.31.172:8500&quot;</span>\n\n	client<span class="token punctuation">,</span> err <span class="token operator">:=</span> api<span class="token punctuation">.</span><span class="token function">NewClient</span><span class="token punctuation">(</span>cfg<span class="token punctuation">)</span>\n\n	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n	<span class="token punctuation">}</span>\n\n	data<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Agent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ServicesWithFilter</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">`Service == &quot;user_web&quot;`</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n	<span class="token punctuation">}</span>\n\n	<span class="token keyword">for</span> key<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token keyword">range</span> data <span class="token punctuation">{</span>\n		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\n	<span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	<span class="token boolean">_</span> <span class="token operator">=</span> <span class="token function">Register</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.31.172&quot;</span><span class="token punctuation">,</span> <span class="token number">8021</span><span class="token punctuation">,</span> <span class="token string">&quot;user_web&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;web&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;user_web&quot;</span><span class="token punctuation">)</span>\n	<span class="token comment">//AllService()</span>\n	<span class="token comment">//FilterService()</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grpc-健康检查" tabindex="-1"><a class="header-anchor" href="#grpc-健康检查" aria-hidden="true">#</a> GRPC 健康检查</h2><h2 id="grpc-注册-consul-服务" tabindex="-1"><a class="header-anchor" href="#grpc-注册-consul-服务" aria-hidden="true">#</a> GRPC 注册 Consul 服务</h2><h2 id="gin-集成-consul" tabindex="-1"><a class="header-anchor" href="#gin-集成-consul" aria-hidden="true">#</a> Gin 集成 Consul</h2><h2 id="动态端口发现" tabindex="-1"><a class="header-anchor" href="#动态端口发现" aria-hidden="true">#</a> 动态端口发现</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> utils\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n	<span class="token string">&quot;net&quot;</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token function">GetFreePort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	addr<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ResolveTCPAddr</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost:0&quot;</span><span class="token punctuation">)</span>\n	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span> err\n	<span class="token punctuation">}</span>\n\n	l<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ListenTCP</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span>\n	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">,</span> err\n\n	<span class="token punctuation">}</span>\n	<span class="token keyword">defer</span> l<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n	<span class="token keyword">return</span> l<span class="token punctuation">.</span><span class="token function">Addr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>net<span class="token punctuation">.</span>TCPAddr<span class="token punctuation">)</span><span class="token punctuation">.</span>Port<span class="token punctuation">,</span> <span class="token boolean">nil</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grpc-负载均衡" tabindex="-1"><a class="header-anchor" href="#grpc-负载均衡" aria-hidden="true">#</a> GRPC 负载均衡</h2><ul><li><code>grpc-consul-resolver</code></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n	<span class="token string">&quot;context&quot;</span>\n	<span class="token string">&quot;fmt&quot;</span>\n	<span class="token string">&quot;gin_test/grpc_consul_resolver_test/proto&quot;</span>\n	<span class="token boolean">_</span> <span class="token string">&quot;github.com/mbobakov/grpc-consul-resolver&quot;</span> <span class="token comment">// It&#39;s important</span>\n	<span class="token string">&quot;google.golang.org/grpc&quot;</span>\n	<span class="token string">&quot;log&quot;</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n	conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> grpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;consul://192.168.31.172:8500/user_srv?wait=14s&amp;tag=srv&quot;</span><span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithInsecure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> grpc<span class="token punctuation">.</span><span class="token function">WithDefaultServiceConfig</span><span class="token punctuation">(</span><span class="token string">`{&quot;loadBalancingPolicy&quot;: &quot;round_robin&quot;}`</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n	<span class="token punctuation">}</span>\n\n	<span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>\n		userSrvClient <span class="token operator">:=</span> proto<span class="token punctuation">.</span><span class="token function">NewUserClient</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>\n\n		resp<span class="token punctuation">,</span> err <span class="token operator">:=</span> userSrvClient<span class="token punctuation">.</span><span class="token function">GetUserList</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>proto<span class="token punctuation">.</span>PageInfo<span class="token punctuation">{</span>Pn<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> PSize<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n			<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n		<span class="token punctuation">}</span>\n		<span class="token keyword">for</span> index<span class="token punctuation">,</span> data <span class="token operator">:=</span> <span class="token keyword">range</span> resp<span class="token punctuation">.</span>Data <span class="token punctuation">{</span>\n			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> data<span class="token punctuation">)</span>\n		<span class="token punctuation">}</span>\n	<span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 18);
const _hoisted_19 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_19);
}
const _1714839512000_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "1714839512000.html.vue"]]);
export {
  _1714839512000_html as default
};
