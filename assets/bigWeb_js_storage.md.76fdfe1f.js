import{_ as a,v as e,b as s,R as o}from"./chunks/framework.3d3e5663.js";const l="/assets/storage.c58f93ec.png",b=JSON.parse('{"title":"本地存储方法有哪些？他们的区别是什么？","description":"本地存储方法有哪些？他们的区别是什么？","frontmatter":{"siderbar":{"title":"本地存储方法有哪些？他们的区别是什么？"},"isTimeLine":true,"title":"本地存储方法有哪些？他们的区别是什么？","head":[["meta",{"name":"keywords","content":"localStorage,sessionStorage,cookie,indexDB"}]],"description":"本地存储方法有哪些？他们的区别是什么？","date":"2020-08-19T17:00:00.000Z","author":"马凯","aside":true,"tags":["前端","JavaScript"],"categories":["前端"]},"headers":[],"relativePath":"bigWeb/js/storage.md","filePath":"bigWeb/js/storage.md","lastUpdated":1714988234000}'),t={name:"bigWeb/js/storage.md"},i=o('<h1 id="本地存储方法有哪些-他们的区别是什么" tabindex="-1">本地存储方法有哪些？他们的区别是什么？ <a class="header-anchor" href="#本地存储方法有哪些-他们的区别是什么" aria-label="Permalink to &quot;本地存储方法有哪些？他们的区别是什么？&quot;">​</a></h1><h2 id="本地存储的类型" tabindex="-1">本地存储的类型 <a class="header-anchor" href="#本地存储的类型" aria-label="Permalink to &quot;本地存储的类型&quot;">​</a></h2><p>本地存储又称为浏览器存储，通过操作能够存储用的信息到浏览器内。</p><ul><li>localStorage</li><li>sessionStorage</li><li>cookie</li><li>indexDB</li></ul><p>共同点：</p><ul><li>全都受同源策略约束</li><li>存储方式否是字符串</li><li>都是浏览器的本地存储</li></ul><h3 id="localstorage" tabindex="-1">localStorage <a class="header-anchor" href="#localstorage" aria-label="Permalink to &quot;localStorage&quot;">​</a></h3><p>html5新特性，IE8及以上都兼容。</p><p><strong>特点</strong></p><ul><li>localStorage在浏览器具有持久性，如果不主动删除，则一直存在，没有过期时间</li><li>存储信息在同域环境下是共享的</li><li>存储大小一般为5M，具体跟浏览器有关</li><li>localStorage本质上操作的是字符串，所以在存储时需要进行JSON.stringify和JSON.parse转换</li><li>受制于同源策略</li></ul><p><strong>localStorage的操作方法</strong></p><ol><li>设置:</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItem</span><span style="color:#BABED8;">(key</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> value)</span></span></code></pre></div><ol start="2"><li>获取:</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getItem</span><span style="color:#BABED8;">(key)</span></span></code></pre></div><ol start="3"><li>清理:</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#BABED8;">()</span></span></code></pre></div><ol start="4"><li>获取键名</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">localStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#BABED8;">()</span></span></code></pre></div><h3 id="sessionstorage" tabindex="-1">sessionStorage <a class="header-anchor" href="#sessionstorage" aria-label="Permalink to &quot;sessionStorage&quot;">​</a></h3><p>sessionStorage的操作方法和属性与localStorage一致，但是sessionStorage会在浏览器关闭tab标签时进行清理。</p><h3 id="cookie" tabindex="-1">cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;cookie&quot;">​</a></h3><p>cookie一般用于存储用的身份信息或者登录信息，为了解决http无状态导致的问题；属于小文件存储，一般存储大小为4K。</p><p>cookie在每次http请求都会通过请求头被携带，如果不使用https加密，其保存的信息容易被窃取，有一定的安全风险。</p><p>例如如果能切渠道个人的cookie，通过复制cookie值，在另外一个地方进行登录。</p><p><strong>cookie的常用属性</strong></p><ul><li>name cookie的名字(键)</li><li>value cookie存放的值</li><li>expires：指cookie过期的时间（该时间为世界时间 UTC时间）也称为格林威治时间</li><li>max-age:指cookie最大的存活有效期（单位：秒）</li><li>domain: 指的是cookie当前的域</li><li>path:指cookie当前的路径</li><li>size:指cookie存放的大小</li><li>secure:指cooke的安全属性</li></ul><p><img src="'+l+`" alt="cookie的属性"></p><p><strong>注意：expires和max-age的默认值为session代表关闭浏览器(回话存储)，该cookie则清空、失效</strong></p><p><strong>cookie的相关属性设置</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Set-Cookie:name=aa; domain=aa.net; path=/  # 服务端设置</span></span>
<span class="line"><span style="color:#BABED8;">document</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">cookie </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name=bb; domain=aa.net; path=/;expires=new Date().toUTCString()</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 客户端设置</span></span></code></pre></div><h3 id="indexdb-浏览器特殊存储类型" tabindex="-1">indexDB 浏览器特殊存储类型 <a class="header-anchor" href="#indexdb-浏览器特殊存储类型" aria-label="Permalink to &quot;indexDB 浏览器特殊存储类型&quot;">​</a></h3><p>indexDB又称为浏览器数据库，能够通过JS操作API，通过索引实现对数据的高性能搜索。</p><p>相对Web Storage来说存储量更大，更适合大量数据的存储。</p><p>常用于浏览器端的富文本保存编辑，修改历史等。</p><p><strong>优点：</strong></p><ul><li>储存量理论上没有上限</li><li>所有操作都是异步的，相比 LocalStorage 同步操作性能更高，尤其是数据量较大时</li><li>原生支持储存JS的对象</li><li>是个正经的数据库，意味着数据库能干的事它都能干</li></ul><p><strong>缺点：</strong></p><ul><li>操作非常繁琐</li><li>本身有一定门槛</li></ul><p>关于indexedDB的使用基本使用步骤如下：</p><p>打开数据库并且开始一个事务</p><p>创建一个 object store</p><p>构建一个请求来执行一些数据库操作，像增加或提取数据等。</p><p>通过监听正确类型的 DOM 事件以等待操作完成。</p><p>在操作结果上进行一些操作（可以在 request 对象中找到）</p><p>关于使用indexdb的使用会比较繁琐，大家可以通过使用Godb.js库进行缓存，最大化的降低操作难度</p><h2 id="不同点" tabindex="-1">不同点 <a class="header-anchor" href="#不同点" aria-label="Permalink to &quot;不同点&quot;">​</a></h2><p>关于cookie、sessionStorage、localStorage三者的区别主要如下：</p><ul><li><p>存储大小： cookie数据大小不能超过4k，sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大</p></li><li><p>有效时间：localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据； sessionStorage 数据在当前浏览器窗口关闭后自动删除；cookie设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭</p></li><li><p>数据与服务器之间的交互方式， cookie的数据会自动的传递到服务器，服务器端也可以写cookie到客户端； sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存</p></li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://github.com/febobo/web-interview/issues/79" target="_blank" rel="noreferrer">面试官：Javascript本地存储的方式有哪些？区别及应用场景？</a></li></ul>`,51),n=[i];function p(r,c,d,g,h,u){return e(),s("div",null,n)}const y=a(t,[["render",p]]);export{b as __pageData,y as default};
