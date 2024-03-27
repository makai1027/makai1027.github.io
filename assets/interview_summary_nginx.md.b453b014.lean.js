import{_ as s,v as n,b as a,R as l}from"./chunks/framework.3d3e5663.js";const A=JSON.parse('{"title":"Nginx本地如何代理远程接口，遇到过哪些问题？","description":"Nginx本地代理常见的操作场景以及遇到问题的解决方案","frontmatter":{"title":"Nginx本地如何代理远程接口，遇到过哪些问题？","description":"Nginx本地代理常见的操作场景以及遇到问题的解决方案","date":"2024-03-27T11:20:00.000Z","author":"马凯","tags":["前端","知识点"],"categories":["前端"],"sidebar":{"title":"Nginx本地如何代理远程接口，遇到过哪些问题？"},"isTimeLine":true},"headers":[],"relativePath":"interview/summary/nginx.md","filePath":"interview/summary/nginx.md","lastUpdated":1711509996000}'),p={name:"interview/summary/nginx.md"},o=l(`<h1 id="nginx本地如何代理远程接口-遇到过哪些问题" tabindex="-1">Nginx本地如何代理远程接口，遇到过哪些问题？ <a class="header-anchor" href="#nginx本地如何代理远程接口-遇到过哪些问题" aria-label="Permalink to &quot;Nginx本地如何代理远程接口，遇到过哪些问题？&quot;">​</a></h1><h2 id="nginx的本地安装过程" tabindex="-1">Nginx的本地安装过程 <a class="header-anchor" href="#nginx的本地安装过程" aria-label="Permalink to &quot;Nginx的本地安装过程&quot;">​</a></h2><blockquote><p>本文操作环境，macos、homebrew安装</p></blockquote><ol><li>更新homebrew</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span></span></code></pre></div><ol start="2"><li>查看本地安装状态</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">search</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如若提示以下，则证明已安装成功</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ==&gt; Formulae</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># nginx ✔</span></span></code></pre></div><ol start="3"><li>未安装则执行安装</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx</span></span></code></pre></div><ol start="4"><li>安装完毕之后查看Nginx信息</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">info</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx</span></span></code></pre></div><p><a href="../../assets//nginx-1.png">如图所示</a></p><ul><li>1）在/usr/local/etc/nginx/nginx.conf配置文件中默认端口被配置为8080，从而使nginx运行时不需要加sudo</li><li>2）Docroot默认为/usr/local/var/www</li><li>3）nginx将在/usr/local/etc/nginx/servers/目录中加载所有文件</li><li>4）以及我们可以通过最简单的命令 ‘ brew services restart nginx’ 来启动nginx</li></ul><h2 id="nginx-接口代理配置" tabindex="-1">nginx 接口代理配置 <a class="header-anchor" href="#nginx-接口代理配置" aria-label="Permalink to &quot;nginx 接口代理配置&quot;">​</a></h2><blockquote><p>这个是Nginx的基础配置以及各场景的配置示例</p></blockquote><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#user  nobody;</span></span>
<span class="line"><span style="color:#FFCB6B;">worker_processes</span><span style="color:#BABED8;">  </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#error_log  logs/error.log  info;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#pid        logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">events</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">worker_connections</span><span style="color:#BABED8;">  </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">http</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">include</span><span style="color:#BABED8;">       </span><span style="color:#C3E88D;">mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">default_type</span><span style="color:#BABED8;">  </span><span style="color:#C3E88D;">application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#access_log  logs/access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">sendfile</span><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">keepalive_timeout</span><span style="color:#BABED8;">  </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 如果开启GZIP，那么我们构建后的文件可以不用进行GZIP，但是初次加载会消耗服务器性能进行文件的GZIP</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">server</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">listen</span><span style="color:#BABED8;">       </span><span style="color:#F78C6C;">8080</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">server_name</span><span style="color:#BABED8;">  </span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#charset koi8-r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#access_log  logs/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># location /sinochem-scm/gateway {</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#     proxy_pass http://scm-sit.1chemic.com/sinochem-scm/gateway;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#     # 删除.html后缀</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#     # if ($request_uri ~ ^/(.*)\\.html$) {</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#     #     return 302 /$1;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#     # }</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#     # # 重定向</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#     # try_files $uri $uri.html $uri/ =404;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># }</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># 此处我想将/Users/makai/Documents/project/xxxxx下的文件代理到端口号8080下，这样我可以通过localhost:8080/xxx.html,访问/Users/makai/Documents/project/xxxxx下的html文件</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">root</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/Users/makai/Documents/project/xxxxx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">location</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#FFCB6B;">index</span><span style="color:#BABED8;">  </span><span style="color:#C3E88D;">index.html</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#FFCB6B;">try_files</span><span style="color:#BABED8;"> $uri $uri</span><span style="color:#C3E88D;">.html</span><span style="color:#BABED8;"> $uri</span><span style="color:#C3E88D;">/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">=</span><span style="color:#F78C6C;">404</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#676E95;font-style:italic;"># 如果代理之后出现405的情况，可以使用改配置方法解决</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#676E95;font-style:italic;"># error_page 405 =200 $request_uri;</span></span>
<span class="line"><span style="color:#BABED8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># 接口代理，用于解决跨域问题，比如说我想将localhost:8080/aaa开头的的请求代理到某一个域名下的/aaa</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#FFCB6B;">location</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/aaa/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;"># 后台接口地址</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">proxy_pass</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">http://www.baidu.com/aaa/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Host</span><span style="color:#BABED8;"> $proxy_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">X-Real-IP</span><span style="color:#BABED8;"> $remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">X-Forwarded-For</span><span style="color:#BABED8;"> $proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">X-Forwarded-Proto</span><span style="color:#BABED8;"> $scheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;"># 有的教程会提示设置proxy_redirect default | off;这里不建议写因为可能会造成接口404；等下会给出原因</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;"># proxy_redirect default;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">add_header</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Access-Control-Allow-Origin</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;">*</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">add_header</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Access-Control-Allow-Headers</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">X-Requested-With</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">add_header</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Access-Control-Allow-Methods</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">GET,POST,OPTIONS</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;"># 此处设置复杂请求的options预请求</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$request_method = </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">OPTIONS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#FFCB6B;">add_header</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Access-Control-Max-Age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1728000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#FFCB6B;">add_header</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/plain charset=utf-8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#FFCB6B;">add_header</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Length</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">204</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#676E95;font-style:italic;"># 这里做的是不分资源的代理，比如说html文件内有通过相对路径引用的资源文件，但是在本地的话可能又找不到该资源</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#676E95;font-style:italic;"># 举例</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#676E95;font-style:italic;"># 比如说文件在服务器上的文件夹是/front/js/xxx,但是在本地就是./js/xxx，而且这些文件并不是你要更改的目标文件，则可以做如下代理设置</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#FFCB6B;">location</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/front/</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">proxy_pass</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">http://www.baidu.com/front/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Host</span><span style="color:#BABED8;"> $proxy_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">X-Real-IP</span><span style="color:#BABED8;"> $remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">X-Forwarded-For</span><span style="color:#BABED8;"> $proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">X-Forwarded-Proto</span><span style="color:#BABED8;"> $scheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">error_page</span><span style="color:#BABED8;">   </span><span style="color:#F78C6C;">500</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">502</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">503</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">504</span><span style="color:#BABED8;">  </span><span style="color:#C3E88D;">/50x.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">location</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">=</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/50x.html</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#FFCB6B;">root</span><span style="color:#BABED8;">   </span><span style="color:#C3E88D;">html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#    root           html;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#    deny  all;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#BABED8;">  }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#server {</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    listen       8000;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    listen       somename:8080;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    server_name  somename  alias  another.alias;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    location / {</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#        root   html;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    }</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># HTTPS server</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#server {</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    listen       443 ssl;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    server_name  localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    ssl_certificate_key  cert.key;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    ssl_session_timeout  5m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    location / {</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#        root   html;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#    }</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">#}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">include</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">servers/</span><span style="color:#BABED8;">*</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span></code></pre></div><h2 id="遇到的问题" tabindex="-1">遇到的问题 <a class="header-anchor" href="#遇到的问题" aria-label="Permalink to &quot;遇到的问题&quot;">​</a></h2><h3 id="_1-proxy-redirect配置造成接口404" tabindex="-1"><strong>1. proxy_redirect配置造成接口404；</strong> <a class="header-anchor" href="#_1-proxy-redirect配置造成接口404" aria-label="Permalink to &quot;**1. proxy_redirect配置造成接口404；**&quot;">​</a></h3><blockquote><p>这里的解释来自chatGPT，</p></blockquote><p><code>proxy_redirect default</code> 指令的作用是修改被代理服务器返回的响应中的 <code>Location</code> 头字段和 <code>Refresh</code> 头字段的值。当被代理服务器返回一个重定向响应时,Nginx 会将 <code>Location</code> 头字段中的 URI 替换为本地 Nginx 服务器的 URI。这个指令通常用于当被代理服务器产生相对 URI 的重定向时,将其转换成本地服务器的绝对 URI。</p><p>如果使用 <code>proxy_redirect default</code> 造成接口 404 错误,可能的原因有:</p><ol><li><p><strong>重定向循环</strong>: 如果被代理服务器返回的重定向 URI 被 Nginx 修改后又指向了被代理服务器,就会造成重定向循环,最终导致 404 错误。</p></li><li><p><strong>URI 重写错误</strong>: Nginx 修改重定向 URI 时可能存在错误,导致修改后的 URI 指向了错误的位置。</p></li><li><p><strong>缓存问题</strong>: 如果启用了缓存,缓存中可能存在旧的重定向数据,导致错误。</p></li></ol><p>为了解决这个问题,您可以尝试以下方法:</p><ol><li><p>检查 Nginx 的错误日志,查看是否有更多详细的错误信息。</p></li><li><p>尝试关闭或修改 <code>proxy_redirect</code> 指令,例如将其改为 <code>proxy_redirect off</code>。</p></li><li><p>检查被代理服务器返回的 <code>Location</code> 头字段是否正确。</p></li><li><p>清除 Nginx 的缓存。</p></li><li><p>尝试使用更明确的重定向规则,例如 <code>proxy_redirect http://example.com/ /</code>;。</p></li><li><p>检查 Nginx 的其他相关配置,如 <code>proxy_pass</code>、<code>proxy_set_header</code> 等。</p></li></ol>`,24),e=[o];function t(c,r,i,y,B,D){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{A as __pageData,F as default};
