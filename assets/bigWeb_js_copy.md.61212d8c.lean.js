import{_ as s,v as a,b as n,R as l}from"./chunks/framework.effad1f5.js";const C=JSON.parse('{"title":"深拷贝和浅拷贝","description":"","frontmatter":{"siderbar":{"title":"深拷贝和浅拷贝"},"isTimeLine":true,"title":"深拷贝和浅拷贝","date":"2020-05-13T10:00:00.000Z","author":"马凯","aside":true,"tags":["前端","JavaScript"],"categories":["前端"]},"headers":[],"relativePath":"bigWeb/js/copy.md","filePath":"bigWeb/js/copy.md","lastUpdated":1691743000000}'),o={name:"bigWeb/js/copy.md"},p=l(`<h1 id="深拷贝和浅拷贝" tabindex="-1">深拷贝和浅拷贝 <a class="header-anchor" href="#深拷贝和浅拷贝" aria-label="Permalink to &quot;深拷贝和浅拷贝&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>说到JS的深拷贝和浅拷贝，一定要降到堆内存和栈内存，该部分已在<a href="./baseData.html">JS中基本数据类型以及它们的区别</a>做了解释；<br><br> 简单来说，就是<strong>浅拷贝</strong>仅仅是复制了原数据的内存地址，相当于两个数据指针指向一个堆内存区块，通过任意一个指针更改数据都会修改堆内存区块信息，导致另外一个指针也发生了更改；<br><br><strong>深拷贝</strong>则是将堆内存区块复制了一个，并新生成一个新的栈内存指针，指向新的堆内存区块，新指针发生更改不会影响原数据。</p></div><h2 id="浅拷贝" tabindex="-1">浅拷贝 <a class="header-anchor" href="#浅拷贝" aria-label="Permalink to &quot;浅拷贝&quot;">​</a></h2><p><strong>浅拷贝是指对基本数据类型的拷贝或者对引用数据类型的内存地址拷贝</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 基本数据类型示例</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 可以是基本数据类型的其他类型</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#676E95;font-style:italic;">// 这个时候就实现了浅拷贝,</span></span>
<span class="line"><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// b发生修改则a也会更改</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a) </span><span style="color:#676E95;font-style:italic;">// 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 引用数据类型的浅拷贝</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nihao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> test </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> obj </span><span style="color:#676E95;font-style:italic;">// 内存指针的拷贝，实际跟obj指向的同一个堆内存区块</span></span>
<span class="line"><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 直接更改实际上是更改的同一个堆内存区块数据</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name) </span><span style="color:#676E95;font-style:italic;">// world</span></span></code></pre></div><h3 id="浅拷贝的常用方法" tabindex="-1">浅拷贝的常用方法 <a class="header-anchor" href="#浅拷贝的常用方法" aria-label="Permalink to &quot;浅拷贝的常用方法&quot;">​</a></h3><ul><li>Object.assign</li><li>Array.slice</li><li>扩展运算符 ...</li><li>concat</li><li>array.push</li><li>Array.from</li></ul><h2 id="深拷贝" tabindex="-1">深拷贝 <a class="header-anchor" href="#深拷贝" aria-label="Permalink to &quot;深拷贝&quot;">​</a></h2><p><strong>深拷贝则是将堆内存区块复制了一个，并新生成一个新的栈内存指针，指向新的堆内存区块，新指针发生更改不会影响原数据。</strong></p><p>常用方式：</p><ul><li>lodash - cloneDeep</li><li>JQuery - $.extend</li><li>JSON.parse(JSON.stringify(target))</li><li>手写递归函数</li></ul><h3 id="json-parse-json-stringify-target" tabindex="-1">JSON.parse(JSON.stringify(target)) <a class="header-anchor" href="#json-parse-json-stringify-target" aria-label="Permalink to &quot;JSON.parse(JSON.stringify(target))&quot;">​</a></h3><p><strong>该方法一定要慎用，因为仅能对基本数据类型进行深拷贝，针对原生对象（Date、RegExp、）、null、undefined、function、Error，则会发生数据类型更改</strong></p><p><strong>存在的问题</strong></p><blockquote><p>这还是在 还未测试其他的原生对象的情况下</p></blockquote><ol><li>无法处理BigInt</li><li>symbol会丢失</li><li>Date对象会发生数据类型变更</li><li>Error会变成{}</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> test </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nihao</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">llll</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">e</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">f</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">g</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">h</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Symbol</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   j: BigInt(9007199254740991),</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> target </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(test))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(target)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回结果如下：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     &quot;a&quot;: &quot;2023-08-10T09:58:07.028Z&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     &quot;c&quot;: {},</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     &quot;d&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     &quot;e&quot;: 1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     &quot;f&quot;: null,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     &quot;h&quot;: true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span></code></pre></div><h3 id="手写递归方法" tabindex="-1">手写递归方法 <a class="header-anchor" href="#手写递归方法" aria-label="Permalink to &quot;手写递归方法&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cloneDeep</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">target</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isArray</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> [] </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hasOwnProperty</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">cloneDeep</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">k</span><span style="color:#F07178;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,19),t=[p];function e(c,r,y,D,F,i){return a(),n("div",null,t)}const u=s(o,[["render",e]]);export{C as __pageData,u as default};
