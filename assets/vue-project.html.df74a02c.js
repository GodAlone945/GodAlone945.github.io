import{_ as a,c as n}from"./app.92598d3d.js";const s={},e=n(`<h1 id="vue\u9879\u76EE\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#vue\u9879\u76EE\u5F00\u53D1" aria-hidden="true">#</a> vue\u9879\u76EE\u5F00\u53D1</h1><h2 id="\u4E00\u3001\u7236\u5B50\u7EC4\u4EF6\u901A\u8BAF" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u7236\u5B50\u7EC4\u4EF6\u901A\u8BAF" aria-hidden="true">#</a> \u4E00\u3001\u7236\u5B50\u7EC4\u4EF6\u901A\u8BAF</h2><h3 id="_1-1-\u5B50\u7EC4\u4EF6\u5185\u90E8\u56DE\u8C03\u81EA\u5DF1" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5B50\u7EC4\u4EF6\u5185\u90E8\u56DE\u8C03\u81EA\u5DF1" aria-hidden="true">#</a> 1.1 \u5B50\u7EC4\u4EF6\u5185\u90E8\u56DE\u8C03\u81EA\u5DF1</h3><p>\u5F53\u67D0\u4E2A\u7EC4\u4EF6\u5728\u5176\u5185\u90E8\u81F3\u5C11\u4E00\u6B21\u518D\u6B21\u6E32\u67D3\u81EA\u5DF1\u65F6\uFF0C\u65E0\u6CD5\u83B7\u53D6\u5230\u7236\u7EC4\u4EF6\u5B9A\u4E49\u7684\u65B9\u6CD5 \u89E3\u51B3\u529E\u6CD5</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- parent.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Parent</span> <span class="token attr-name">@nodeClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nodeClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- child.vue --&gt;</span>
// \u5728\u7EC4\u4EF6\u5185\u90E8\u518D\u6B21\u8C03\u7528\u7EC4\u4EF6\u65F6\uFF0C\u65E0\u6CD5\u4F7F\u7528\u7236\u7EC4\u4EF6\u4F20\u6765\u7684\u65B9\u6CD5
// \u4F7F\u7528 $listeners \u83B7\u53D6\u5230\u7236\u7EC4\u4EF6\u4F20\u6765\u7684\u65B9\u6CD5
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">@nodeClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$listeners.nodeSet<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,5);function t(p,c){return e}var o=a(s,[["render",t],["__file","vue-project.html.vue"]]);export{o as default};
