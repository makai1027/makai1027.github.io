import{_ as o,v as s,b as p,C as e,O as n,a6 as t,R as a,M as c,G as r,L as y}from"./chunks/framework.2f6b31a9.js";const C=JSON.parse('{"title":"new操作具体做了什么？","description":"","frontmatter":{"sidebar":{"title":"new操作具体做了什么？","step":10},"isTimeLine":true,"title":"new操作具体做了什么？","date":"2020-08-20T00:00:00.000Z","author":"马凯","tags":["前端","JavaScript"],"categories":["前端"]},"headers":[],"relativePath":"bigWeb/js/new.md","filePath":"bigWeb/js/new.md","lastUpdated":1692782642000}'),D={name:"bigWeb/js/new.md"},F=a(`<h1 id="new操作具体做了什么" tabindex="-1">new操作具体做了什么？ <a class="header-anchor" href="#new操作具体做了什么" aria-label="Permalink to &quot;new操作具体做了什么？&quot;">​</a></h1><blockquote><p><strong>new 方法是用于构造函数实例化的方法，所有的构造函数都可以通过new进行创建实例。</strong></p></blockquote><h2 id="new-操作解析" tabindex="-1">new 操作解析 <a class="header-anchor" href="#new-操作解析" aria-label="Permalink to &quot;new 操作解析&quot;">​</a></h2><p>例子</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">hobbys</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> []</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 实例 引用数据类型属性</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">hobbys</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">hobbys</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 原型链方法</span></span>
<span class="line"><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">hobbys</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> child </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#BABED8;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">足球</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(child) </span><span style="color:#676E95;font-style:italic;">// Person { hobbys: [&#39;足球&#39;] }</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(child</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">__proto__) </span><span style="color:#676E95;font-style:italic;">// { say: function(){}, constructor:  }</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(child</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">__proto__ </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#BABED8;">child</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#BABED8;">() </span><span style="color:#676E95;font-style:italic;">// [&#39;足球&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">typeof</span><span style="color:#BABED8;"> child) </span><span style="color:#676E95;font-style:italic;">// object</span></span></code></pre></div><p>通过以上例子可以发现，new 创建的实例，继承了构造函数Person的实例属性和原型链方法。 实例child的原型链指向构造函数Person的prototype。</p><h2 id="new-执行过程解析" tabindex="-1">new 执行过程解析 <a class="header-anchor" href="#new-执行过程解析" aria-label="Permalink to &quot;new 执行过程解析&quot;">​</a></h2><ol><li>创建一个空对象Object</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 底层原理实际是 new Object({})</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">第一步,</span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">obj</span><span style="color:#89DDFF;">}\`</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// obj的原型对象内的constructor指向Object</span></span></code></pre></div><ol start="2"><li>给新建的对象obj新增__proto__属性，指向构造函数Person的原型对象</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">__proto__ </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">第二步,</span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">obj</span><span style="color:#89DDFF;">}\`</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// 返回Person的原型对象，内部constructor指向Person</span></span></code></pre></div><ol start="3"><li>Person通过借用构造函数方法（call、apply）为obj新增hobbys的属性</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#BABED8;">(obj</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">足球</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">])</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">第三步,</span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">obj</span><span style="color:#89DDFF;">}\`</span><span style="color:#BABED8;">) </span><span style="color:#676E95;font-style:italic;">// 返回Person的原型对象，新增了一个实例属性hobbys</span></span></code></pre></div><h2 id="如果构造函数person-本身有返回-又会是什么结果呢" tabindex="-1">如果构造函数Person 本身有返回，又会是什么结果呢？ <a class="header-anchor" href="#如果构造函数person-本身有返回-又会是什么结果呢" aria-label="Permalink to &quot;如果构造函数Person 本身有返回，又会是什么结果呢？&quot;">​</a></h2><p>例子</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Foo</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">name</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">111</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Boo</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">name</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">name</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> testA </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Foo</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">你好Foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(testA) </span><span style="color:#676E95;font-style:italic;">// { value: 111 }</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(testA</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name) </span><span style="color:#676E95;font-style:italic;">// undefined,这就神奇了！！！</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> testB </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Boo</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">你好Boo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(testB) </span><span style="color:#676E95;font-style:italic;">// Boo { name: &#39;你好Boo&#39; }</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(testB</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">name) </span><span style="color:#676E95;font-style:italic;">// 你好Boo</span></span></code></pre></div><p>通过返回结果可知，如果说构造函数本省有返回，如果返回的结果是object，那么实例化后则直接返回object； 如果构造函数默认返回的是基础数据类型或者不返回，则返回构造函数原型对象；</p><p>所以，new过程解析中的第三步也就是借用构造函数返回时，需要对借用构造函数的返回结果进行判断，是返回<strong>借用构造函数的返回结果</strong>，还是直接返回<strong>新对象</strong>。</p><h2 id="整体流程图示" tabindex="-1">整体流程图示 <a class="header-anchor" href="#整体流程图示" aria-label="Permalink to &quot;整体流程图示&quot;">​</a></h2>`,19),B=a(`<h2 id="手写模拟new" tabindex="-1">手写模拟new <a class="header-anchor" href="#手写模拟new" aria-label="Permalink to &quot;手写模拟new&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>注意：在构造函数没有返回值的情况下，直接返回创建的新对象；<br> 我们先假定 构造函数通过借用构造函数更改作用域指向后的执行结果为result;<br> 如果构造函数有返回，这个时候需要判断返回值的数据类型；<br> 如果返回值result为基础数据类型string、number、null、undefined、boolean、symbol，那么返回新对象；<br> 如果返回值为引用数据类型时，则返回result</p></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">_new</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">constructor</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">args</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">slice</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">arguments</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 定义新对象</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">obj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 添加新对象的__proto__指向构造函数constructor的prototype</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">__proto__</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">constructor</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 借用构造函数更改constructor的this指向，并记录返回结果</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">constructor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">args</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 返回时判断result是否为object, 这里为什么要用instanceof而不是typeof主要是判断继承关系</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// typeof判断function结果为function，instanceof判断[]/{}/function等等都是继承自Object</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">instanceof</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">obj</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><strong>测试可用性</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">hobbys</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> []</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 实例 引用数据类型属性</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">hobbys</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">hobbys</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 原型链方法</span></span>
<span class="line"><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">hobbys</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> child </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">_new</span><span style="color:#BABED8;">(Person</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">足球</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(child) </span><span style="color:#676E95;font-style:italic;">// Person { hobbys: [&#39;足球&#39;] }</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(child</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">__proto__) </span><span style="color:#676E95;font-style:italic;">// { say: function(){}, constructor:  }</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(child</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">__proto__ </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#BABED8;">child</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#BABED8;">() </span><span style="color:#676E95;font-style:italic;">// [&#39;足球&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">typeof</span><span style="color:#BABED8;"> child) </span><span style="color:#676E95;font-style:italic;">// object</span></span></code></pre></div>`,5);function E(i,A,b,d,h,u){const l=c("Mermaid");return s(),p("div",null,[F,(s(),e(t,null,{default:n(()=>[r(l,{id:"mermaid-61",graph:"flowchart%20TD%0A%20%20%20%20start(%5B%22const%20child%20%3D%20new%20Person(%5B'%E8%B6%B3%E7%90%83'%5D)%22%5D)%20--%3E%7C1.%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84%E7%A9%BA%E5%AF%B9%E8%B1%A1obj%7C%20A%5B%22const%20obj%20%3D%20%7B%7D%22%5D%0A%20%20%20%20A%20--%3E%7C2.%E5%B0%86%E5%88%9B%E5%BB%BA%E7%9A%84%E6%96%B0%E5%AF%B9%E8%B1%A1%E7%9A%84obj%E7%9A%84'__proto__'%E6%8C%87%E5%90%91%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0Person%E7%9A%84%E5%8E%9F%E5%9E%8B%E5%AF%B9%E8%B1%A1%7C%20B%5B%22obj.__proto__%20%3D%20Person.prototype%22%5D%0A%20%20%20%20B%20--%3E%7C3.%E5%80%9F%E7%94%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E6%94%B9%E5%8F%98%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0Person%E7%9A%84this%E6%8C%87%E5%90%91%E6%96%B0%E5%AF%B9%E8%B1%A1Obj%2C%E5%B9%B6%E5%A3%B0%E6%98%8E%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C%E4%B8%BAresult%7C%20C%5B%22const%20result%20%3D%20Person.call(obj%2C%20...%5B'%E8%B6%B3%E7%90%83'%5D)%22%5D%0A%20%20%20%20C%20--%3E%7C4.%E5%88%A4%E6%96%AD%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E6%9B%B4%E6%94%B9this%E5%90%8E%E7%9A%84%E6%89%A7%E8%A1%8C%E7%BB%93%E6%9E%9C%E6%98%AF%E5%90%A6%E5%AD%98%E5%9C%A8%E6%88%96%E8%80%85%E6%98%AF%E5%90%A6%E7%BB%A7%E6%89%BF%E8%87%AA%E5%AF%B9%E8%B1%A1%2C%E5%A6%82%E6%9E%9C%E6%98%AF%E5%88%99%E8%BF%94%E5%9B%9Eresult%2C%E5%90%A6%E5%88%99%E8%BF%94%E5%9B%9E%E6%96%B0%E5%AF%B9%E8%B1%A1obj%7C%20D%5B%22return%20typeof%20result%20%3D%3D%3D%20'object'%20%3F%20result%20%3A%20obj%22%5D%0A%0A"})]),fallback:n(()=>[y(" Loading... ")]),_:1})),B])}const g=o(D,[["render",E]]);export{C as __pageData,g as default};