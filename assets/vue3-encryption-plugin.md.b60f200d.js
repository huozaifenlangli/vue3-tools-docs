import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.a10e78c8.js";const d=JSON.parse('{"title":"你的 Pinia 加密插件","description":"","frontmatter":{},"headers":[],"relativePath":"vue3-encryption-plugin.md","filePath":"vue3-encryption-plugin.md","lastUpdated":1696238246000}'),l={name:"vue3-encryption-plugin.md"},o=p(`<h1 id="你的-pinia-加密插件" tabindex="-1">你的 Pinia 加密插件 <a class="header-anchor" href="#你的-pinia-加密插件" aria-label="Permalink to &quot;你的 Pinia 加密插件&quot;">​</a></h1><blockquote><p>你的 Pinia 加密插件是一个基于 crypto-js 封装的实用 hooks 工具，用于在 Vue.js 应用程序中加密和解密敏感数据。它提供了一种简单且安全的方式来保护你的数据。</p></blockquote><h2 id="🌍-安装" tabindex="-1">🌍 安装 <a class="header-anchor" href="#🌍-安装" aria-label="Permalink to &quot;🌍 安装&quot;">​</a></h2><p>你可以使用 npm 或 yarn 安装插件：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">pnpm i vue3</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">encryption</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">plugin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">pnpm i vue3</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">encryption</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">plugin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="🛹-使用方法" tabindex="-1">🛹 使用方法 <a class="header-anchor" href="#🛹-使用方法" aria-label="Permalink to &quot;🛹 使用方法&quot;">​</a></h2><p>在你的主应用程序入口文件（例如 main.js）中，导入并使用 Pinia store 以及加密插件：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPinia } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;pinia&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> App </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./App.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入加密插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> EncryptionPlugin </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue3-encryption-plugin&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pinia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPinia</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(pinia);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 注册加密插件并提供自定义的密钥（可选）例如，随机的字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(EncryptionPlugin, { key: </span><span style="color:#9ECBFF;">&quot;your-custom-secret-key&quot;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createPinia } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;pinia&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> App </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./App.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 引入加密插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> EncryptionPlugin </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue3-encryption-plugin&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pinia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPinia</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(pinia);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 注册加密插件并提供自定义的密钥（可选）例如，随机的字符串</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(EncryptionPlugin, { key: </span><span style="color:#032F62;">&quot;your-custom-secret-key&quot;</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="🤖-加密和解密" tabindex="-1">🤖 加密和解密 <a class="header-anchor" href="#🤖-加密和解密" aria-label="Permalink to &quot;🤖 加密和解密&quot;">​</a></h2><p>一旦你设置了插件，你就可以在组件中使用 $encrypt 和 $decrypt 方法：</p><blockquote><p>第一种： getCurrentInstance()</p></blockquote><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">&lt;!--</span><span style="color:#E1E4E8;"> YourComponent.vue </span><span style="color:#F97583;">--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {  getCurrentInstance } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;">// 获取当前组件的上下文，下面两种方式都能获取到组件的上下文。</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">ctx</span><span style="color:#E1E4E8;"> }  </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCurrentInstance</span><span style="color:#E1E4E8;">();  </span><span style="color:#6A737D;">//  方式一，这种方式只能在开发环境下使用，生产环境 下的ctx将访问不到</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">proxy</span><span style="color:#E1E4E8;"> }</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCurrentInstance</span><span style="color:#E1E4E8;">();  </span><span style="color:#6A737D;">//  方式二，此方法在开发环境以及生产环境下都能到组件上下文对象（推荐）</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;">// ctx 中包含了组件中由ref和reactive创建的响应式数据对象,以及以下对象及方法;</span></span>
<span class="line"><span style="color:#E1E4E8;">     proxy.$attrs</span></span>
<span class="line"><span style="color:#E1E4E8;">     proxy.$data</span></span>
<span class="line"><span style="color:#E1E4E8;">     proxy.$el</span></span>
<span class="line"><span style="color:#E1E4E8;">     proxy.$emit</span></span>
<span class="line"><span style="color:#E1E4E8;">     proxy.$forceUpdate</span></span>
<span class="line"><span style="color:#E1E4E8;">     proxy.$nextTick</span></span>
<span class="line"><span style="color:#E1E4E8;">     proxy.$options</span></span>
<span class="line"><span style="color:#E1E4E8;">     proxy.$parent</span></span>
<span class="line"><span style="color:#E1E4E8;">     proxy.$props</span></span>
<span class="line"><span style="color:#E1E4E8;">     proxy.$refs</span></span>
<span class="line"><span style="color:#E1E4E8;">     proxy.$root</span></span>
<span class="line"><span style="color:#E1E4E8;">     proxy.$slots</span></span>
<span class="line"><span style="color:#E1E4E8;">     proxy.$watch</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handClick</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;加密 🚀 ==&gt;：&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		proxy.$encryptionPlugin.</span><span style="color:#B392F0;">encrypt</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&quot;zk&quot;</span><span style="color:#E1E4E8;">, age: </span><span style="color:#79B8FF;">26</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">	);</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#9ECBFF;">&quot;解密 🚀 ==&gt;：&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		proxy.$encryptionPlugin.</span><span style="color:#B392F0;">decrypt</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#9ECBFF;">&quot;U2FsdGVkX1/PBDHn2pyLPAf6DmolvylM2QEIDhcf5I3WQWhOh19eos0uZfdbzdDP&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		)</span></span>
<span class="line"><span style="color:#E1E4E8;">	);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">&lt;!--</span><span style="color:#24292E;"> YourComponent.vue </span><span style="color:#D73A49;">--&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {  getCurrentInstance } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// 获取当前组件的上下文，下面两种方式都能获取到组件的上下文。</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">ctx</span><span style="color:#24292E;"> }  </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCurrentInstance</span><span style="color:#24292E;">();  </span><span style="color:#6A737D;">//  方式一，这种方式只能在开发环境下使用，生产环境 下的ctx将访问不到</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">proxy</span><span style="color:#24292E;"> }</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCurrentInstance</span><span style="color:#24292E;">();  </span><span style="color:#6A737D;">//  方式二，此方法在开发环境以及生产环境下都能到组件上下文对象（推荐）</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// ctx 中包含了组件中由ref和reactive创建的响应式数据对象,以及以下对象及方法;</span></span>
<span class="line"><span style="color:#24292E;">     proxy.$attrs</span></span>
<span class="line"><span style="color:#24292E;">     proxy.$data</span></span>
<span class="line"><span style="color:#24292E;">     proxy.$el</span></span>
<span class="line"><span style="color:#24292E;">     proxy.$emit</span></span>
<span class="line"><span style="color:#24292E;">     proxy.$forceUpdate</span></span>
<span class="line"><span style="color:#24292E;">     proxy.$nextTick</span></span>
<span class="line"><span style="color:#24292E;">     proxy.$options</span></span>
<span class="line"><span style="color:#24292E;">     proxy.$parent</span></span>
<span class="line"><span style="color:#24292E;">     proxy.$props</span></span>
<span class="line"><span style="color:#24292E;">     proxy.$refs</span></span>
<span class="line"><span style="color:#24292E;">     proxy.$root</span></span>
<span class="line"><span style="color:#24292E;">     proxy.$slots</span></span>
<span class="line"><span style="color:#24292E;">     proxy.$watch</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handClick</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;加密 🚀 ==&gt;：&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		proxy.$encryptionPlugin.</span><span style="color:#6F42C1;">encrypt</span><span style="color:#24292E;">({ name: </span><span style="color:#032F62;">&quot;zk&quot;</span><span style="color:#24292E;">, age: </span><span style="color:#005CC5;">26</span><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">	);</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#032F62;">&quot;解密 🚀 ==&gt;：&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		proxy.$encryptionPlugin.</span><span style="color:#6F42C1;">decrypt</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#032F62;">&quot;U2FsdGVkX1/PBDHn2pyLPAf6DmolvylM2QEIDhcf5I3WQWhOh19eos0uZfdbzdDP&quot;</span></span>
<span class="line"><span style="color:#24292E;">		)</span></span>
<span class="line"><span style="color:#24292E;">	);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><blockquote><p>第二种 injict (推荐)</p></blockquote><p>1：src / types / global.d.ts 定义类型</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 加密解密</span></span>
<span class="line"><span style="color:#F97583;">declare</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">EncryptionPlugin</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">encryptData</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">data</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">decryptData</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">encryptedData</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 加密解密</span></span>
<span class="line"><span style="color:#D73A49;">declare</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">EncryptionPlugin</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">encryptData</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> &lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;(</span><span style="color:#E36209;">data</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">decryptData</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> &lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;(</span><span style="color:#E36209;">encryptedData</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果你使用 <code>eslint</code> 请在 <code>.eslintrc.cjs</code> 文件中添加</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">globals</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 以下是全局变量 eslint 不会报&#39;EncryptionPlugin&#39; is not defined.eslint （no-undef）</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">EncryptionPlugin</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;readonly&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#B392F0;">$encryptionPlugin</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;readonly&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">globals</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 以下是全局变量 eslint 不会报&#39;EncryptionPlugin&#39; is not defined.eslint （no-undef）</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">EncryptionPlugin</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6F42C1;">$encryptionPlugin</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;readonly&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>2： 页面使用</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { inject } from &#39;vue&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// 使用 inject 函数获取 encryptionPlugin</span></span>
<span class="line"><span style="color:#E1E4E8;">const encryptionPlugin = inject(&quot;encryptionPlugin&quot;) as EncryptionPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">function handClick() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 现在你可以在你的组件中使用 encryptData 和 decryptData 方法了</span></span>
<span class="line"><span style="color:#E1E4E8;">	const encryptedData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> encryptionPlugin.</span><span style="color:#B392F0;">encryptData</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Hello World&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">	const decryptedData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> encryptionPlugin.</span><span style="color:#B392F0;">decryptData</span><span style="color:#E1E4E8;">(encryptedData);</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;加密 🚀 ==&gt;：&quot;</span><span style="color:#E1E4E8;">, encryptedData);</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;解密 🚀 ==&gt;：&quot;</span><span style="color:#E1E4E8;">, decryptedData);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { inject } from &#39;vue&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// 使用 inject 函数获取 encryptionPlugin</span></span>
<span class="line"><span style="color:#24292E;">const encryptionPlugin = inject(&quot;encryptionPlugin&quot;) as EncryptionPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">function handClick() {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 现在你可以在你的组件中使用 encryptData 和 decryptData 方法了</span></span>
<span class="line"><span style="color:#24292E;">	const encryptedData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> encryptionPlugin.</span><span style="color:#6F42C1;">encryptData</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hello World&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	const decryptedData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> encryptionPlugin.</span><span style="color:#6F42C1;">decryptData</span><span style="color:#24292E;">(encryptedData);</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;加密 🚀 ==&gt;：&quot;</span><span style="color:#24292E;">, encryptedData);</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;解密 🚀 ==&gt;：&quot;</span><span style="color:#24292E;">, decryptedData);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,19),e=[o];function t(c,r,y,E,i,u){return n(),a("div",null,e)}const F=s(l,[["render",t]]);export{d as __pageData,F as default};
