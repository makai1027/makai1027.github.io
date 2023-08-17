import{_ as E,v as a,b as r,C as p,O as s,a6 as o,R as l,M as c,G as e,L as t}from"./chunks/framework.22c575f2.js";const g=JSON.parse('{"title":"执行上下文和执行栈","description":"","frontmatter":{"sidebar":{"title":"执行上下文和执行栈","step":10},"isTimeLine":true,"title":"执行上下文和执行栈","date":"2020-07-10T00:00:00.000Z","tags":["前端","JavaScript"],"categories":["前端"]},"headers":[],"relativePath":"bigWeb/js/runStack.md","filePath":"bigWeb/js/runStack.md","lastUpdated":1692237369000}'),A={name:"bigWeb/js/runStack.md"},i=l('<h1 id="javascript中执行上下文和执行栈" tabindex="-1">JavaScript中执行上下文和执行栈 <a class="header-anchor" href="#javascript中执行上下文和执行栈" aria-label="Permalink to &quot;JavaScript中执行上下文和执行栈&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>执行上下文和执行栈是JavaScript中的重要概念之一，理解了执行上下文和执行栈有助于理解JavaScript的运行机制、作用域和闭包等</p></div><h2 id="什么是执行上下文" tabindex="-1">什么是执行上下文？ <a class="header-anchor" href="#什么是执行上下文" aria-label="Permalink to &quot;什么是执行上下文？&quot;">​</a></h2><p><strong>执行上下文是指当前js代码被解析和执行时所处的环境的抽象概念，js代码的执行过程都是在执行上下文完成的。</strong></p><p>执行上下文和作用域不同，执行上下文只有在运行时才能创建，作用域在声明时就已经确定。</p><p>执行上下文的分类：</p><ul><li><strong>全局执行上下文</strong></li></ul><blockquote><p>全局只有一个全局执行上下文，浏览器的全局对象就是window对象，全局执行上下文中的this指向window，全局执行上下文只有在项目销毁时才会被垃圾回收机制处理。</p></blockquote><ul><li><strong>函数执行上下文</strong></li></ul><blockquote><p>函数执行上下文存在无数个，只要有<strong>函数调用</strong>就会产生函数执行上下文</p></blockquote><ul><li><strong>eval执行上下文</strong></li></ul><blockquote><p>eval执行上下文是指eval函数，eval函数会将字符串转化为js代码进行执行，所有性能很差</p></blockquote><p>JavaScript可以有任意多个执行上下文被创建存储到调用栈内，每次函数调用都会产生一个新的执行上下文，同时会创建一个私有作用域，函数内部声明的任何变量都不会被外部作用域访问到，除非是子作用域，或者闭包。</p><p>只有全局执行上下文内的变量可以被其他的上下文访问。</p><h2 id="执行上下文的生命周期" tabindex="-1">执行上下文的生命周期 <a class="header-anchor" href="#执行上下文的生命周期" aria-label="Permalink to &quot;执行上下文的生命周期&quot;">​</a></h2>',15),B=l(`<h3 id="创建阶段" tabindex="-1">创建阶段 <a class="header-anchor" href="#创建阶段" aria-label="Permalink to &quot;创建阶段&quot;">​</a></h3><ul><li>确定this的指向</li></ul><blockquote><p>this的指向，或者说this的值只有在函数被调用时，才能确定，定义的时候未执行，所以不能确定</p></blockquote><ul><li><p>词法环境创建</p><ol><li>全局环境创建，是一个没有外部环境的词法环境，其外部环境对象为null，该全局对象指向window对象</li><li>函数环境，函数内部定义私有变量、实例属性以及方法都会被存储在函数环境内，函数环境的外部环境可能是全局环境也可能是包含当前函数环境的其他函数环境</li></ol></li><li><p>语法环境创建或者变量环境</p></li></ul><blockquote><p>变量环境也是一种词法环境，包含了词法环境所有的功能，区别在于词法环境用存储函数声明和块级作用域变量的绑定（let/const），而变量环境仅用于存储var声明变量的存储。</p></blockquote><h3 id="执行阶段" tabindex="-1">执行阶段 <a class="header-anchor" href="#执行阶段" aria-label="Permalink to &quot;执行阶段&quot;">​</a></h3><p>该阶段用于执行变量的赋值以及执行上下文的执行，该阶段如果读取到未赋值的变量，则将其值分配为undefined</p><h3 id="回收阶段" tabindex="-1">回收阶段 <a class="header-anchor" href="#回收阶段" aria-label="Permalink to &quot;回收阶段&quot;">​</a></h3><p>该阶段执行上下文已经执行完毕，推出执行栈，触发垃圾回收机制</p><h2 id="执行栈" tabindex="-1">执行栈 <a class="header-anchor" href="#执行栈" aria-label="Permalink to &quot;执行栈&quot;">​</a></h2><p>执行栈也称为调用栈，用于存储代码执行期间创建的执行上下文。</p><p><strong>如果是同步任务，或者异步待执行任务则是顺序读取执行，保持先进先出，如果是callback调用，例如函数a内部调用函数b，函数b又调用c，则具有先进后出的性质。</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nihao</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">person</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">person</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">say</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">say</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">person</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">student</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">student</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">student</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 执行结果如下</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// person</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// hello world</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// student</span></span></code></pre></div><p>根据先进后出的原则，可以使用一下流程图解释</p>`,14),D=l('<p>执行流程分析：</p><ol><li>有函数需要执行，首先肯定要创建全局执行上下文</li><li>person函数被调用执行，创建person的函数执行上下文，导入执行栈内</li><li>执行person的过程中，发现函数say，进而执行say，在创建一个say的执行上下文塞进执行栈内</li><li>say执行完毕，对应的执行上下文被推出，继续执行person的上下文</li><li>person执行完毕后，被推出</li><li>js继续执行遇到student函数，创建student的函数执行上下文，导入执行栈内执行</li><li>student执行完毕之后被推出，这时仅剩全局执行上下文</li></ol><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://github.com/febobo/web-interview/issues/63" target="_blank" rel="noreferrer">面试官：JavaScript中执行上下文和执行栈是什么？</a></li></ul>',4);function F(y,d,u,h,C,b){const n=c("Mermaid");return a(),r("div",null,[i,(a(),p(o,null,{default:s(()=>[e(n,{id:"mermaid-65",graph:"flowchart%20LR%0A%20%20%20%20start%5B%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%5D%20--%3E%20step1%5B1.%20%E5%88%9B%E5%BB%BA%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%5D%0A%20%20%20%20step1%20--%3E%20step1_1%5B1.%20%E7%A1%AE%E5%AE%9Athis%E7%9A%84%E6%8C%87%E5%90%91%5D%0A%20%20%20%20step1%20--%3E%20step1_2%5B2.%20%E8%AF%8D%E6%B3%95%E7%8E%AF%E5%A2%83%E5%88%9B%E5%BB%BA%5D%0A%20%20%20%20step1_2%20--%3E%20step1_2_1%5B1.%20%E5%85%A8%E5%B1%80%E7%8E%AF%E5%A2%83%5D%0A%20%20%20%20step1_2%20--%3E%20step1_2_2%5B2.%20%E5%87%BD%E6%95%B0%E7%8E%AF%E5%A2%83%5D%0A%20%20%20%20step1%20--%3E%20step1_3%5B3.%20%E8%AF%AD%E6%B3%95%E7%8E%AF%E5%A2%83%E5%88%9B%E5%BB%BA%E6%88%96%E8%80%85%E5%8F%98%E9%87%8F%E7%8E%AF%E5%A2%83%E5%88%9B%E5%BB%BA%5D%0A%20%20%20%20start%5B%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%5D%20--%3E%20step2%5B2.%20%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5%5D%0A%20%20%20%20start%5B%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%5D%20--%3E%20step3%5B3.%20%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6%E9%98%B6%E6%AE%B5%5D%0A%0A"})]),fallback:s(()=>[t(" Loading... ")]),_:1})),B,(a(),p(o,null,{default:s(()=>[e(n,{id:"mermaid-135",graph:"classDiagram%0A%20%20%20%20direction%20LR%0A%20%20%20%20class%20Start%5B%22%E5%85%A8%E5%B1%80%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%22%5D%0A%20%20%20%20class%20Step1%5B%22person%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%22%5D%7B%0A%20%20%20%20%20%20%20%20%E5%85%A8%E5%B1%80%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%0A%20%20%20%20%7D%0A%20%20%20%20class%20Step2%5B%22say%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%22%5D%7B%0A%20%20%20%20%20%20%20%20person%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%0A%20%20%20%20%20%20%20%20%E5%85%A8%E5%B1%80%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%0A%20%20%20%20%7D%0A%20%20%20%20class%20Step3%5B%22person%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%22%5D%7B%0A%20%20%20%20%20%20%20%20person%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%0A%20%20%20%20%20%20%20%20%E5%85%A8%E5%B1%80%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%0A%20%20%20%20%7D%0A%20%20%20%20class%20Step4%5B%22%E5%85%A8%E5%B1%80%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%22%5D%0A%20%20%20%20class%20Step5%5B%22student%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%22%5D%20%7B%0A%20%20%20%20%20%20%20%20%E5%85%A8%E5%B1%80%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%0A%20%20%20%20%7D%0A%20%20%20%20class%20Step6%5B%22%E5%85%A8%E5%B1%80%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%22%5D%0A%20%20%20%20Start%20--%7C%3E%20Step1%0A%20%20%20%20Step1%20--%7C%3E%20Step2%0A%20%20%20%20Step2%20--%7C%3E%20Step3%0A%20%20%20%20Step3%20--%7C%3E%20Step4%0A%20%20%20%20Step4%20--%7C%3E%20Step5%0A%20%20%20%20Step5%20--%7C%3E%20Step6%0A%0A"})]),fallback:s(()=>[t(" Loading... ")]),_:1})),D])}const m=E(A,[["render",F]]);export{g as __pageData,m as default};