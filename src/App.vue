<template>
  <div id="app">
    <div id="sidebar">
      <TheSidebar />
    </div>
    <div id="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import moment from "moment";

import TheSidebar from "./components/Layout/TheSidebar.vue";

export default {
  name: "app",
  components: {
    TheSidebar
  },
  data() {
    return {
      salespop: {
        img:
          "https://res.cloudinary.com/carlsapps/image/upload/v1555519945/nS2mJr_ljm2dc.png",
        top: "Dan in Atlanta, Georgia",
        middle: "Purchased Crew Neck Pleated Short Sleeve Casual Shirts",
        purchasedAt: moment().format(),
        clickUrl:
          "https://roselinlin.com/collections/weekly-new-in/products/casual-long-sleeve-letter-shirts-tops"
      }
    };
  }
};
</script>

<!-- eslint-disable -->
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Baloo+Chettan+2:400,500|Roboto&display=swap");

#app {
  font-family: 'Baloo Chettan 2', sans-serif;
}

#sidebar {
  width: 12rem;
  height: 100%;
  overflow-y: scroll;
  background-color: #f4f6f9;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 2rem;
}

#main-content {
  margin-left: 16rem;
  width: calc(100% - 16rem);
}

a {
  color: #333;
  text-decoration: none;
  transition: 0.4s all;

  &:hover {
    color: #3a87f7;
  }
}

p, span {
  color: #9ea4af;
}

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0-modified | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* make sure to set some focus styles for accessibility */
:focus {
    outline: 0;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    -moz-appearance: none;
}

input[type=search] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
}

textarea {
    overflow: auto;
    vertical-align: top;
    resize: vertical;
}

/**
 * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.
 */

audio,
canvas,
video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    max-width: 100%;
}

/**
 * Prevent modern browsers from displaying `audio` without controls.
 * Remove excess height in iOS 5 devices.
 */

audio:not([controls]) {
    display: none;
    height: 0;
}

/**
 * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.
 * Known issue: no IE 6 support.
 */

[hidden] {
    display: none;
}

/**
 * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using
 *    `em` units.
 * 2. Prevent iOS text size adjust after orientation change, without disabling
 *    user zoom.
 */

html {
    font-size: 100%; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    -ms-text-size-adjust: 100%; /* 2 */
}

/**
 * Address `outline` inconsistency between Chrome and other browsers.
 */

a:focus {
    outline: thin dotted;
}

/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */

a:active,
a:hover {
    outline: 0;
}

/**
 * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.
 * 2. Improve image quality when scaled in IE 7.
 */

img {
    border: 0; /* 1 */
    -ms-interpolation-mode: bicubic; /* 2 */
}

/**
 * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.
 */

figure {
    margin: 0;
}

/**
 * Correct margin displayed oddly in IE 6/7.
 */

form {
    margin: 0;
}

/**
 * Define consistent border, margin, and padding.
 */

fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct color not being inherited in IE 6/7/8/9.
 * 2. Correct text not wrapping in Firefox 3.
 * 3. Correct alignment displayed oddly in IE 6/7.
 */

legend {
    border: 0; /* 1 */
    padding: 0;
    white-space: normal; /* 2 */
    *margin-left: -7px; /* 3 */
}

/**
 * 1. Correct font size not being inherited in all browsers.
 * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,
 *    and Chrome.
 * 3. Improve appearance and consistency in all browsers.
 */

button,
input,
select,
textarea {
    font-size: 100%; /* 1 */
    margin: 0; /* 2 */
    vertical-align: baseline; /* 3 */
    *vertical-align: middle; /* 3 */
}

/**
 * Address Firefox 3+ setting `line-height` on `input` using `!important` in
 * the UA stylesheet.
 */

button,
input {
    line-height: normal;
}

/**
 * Address inconsistent `text-transform` inheritance for `button` and `select`.
 * All other form control elements do not inherit `text-transform` values.
 * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.
 * Correct `select` style inheritance in Firefox 4+ and Opera.
 */

button,
select {
    text-transform: none;
}

/**
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
 *    and `video` controls.
 * 2. Correct inability to style clickable `input` types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    `input` and others.
 * 4. Remove inner spacing in IE 7 without affecting normal text inputs.
 *    Known issue: inner spacing remains in IE 6.
 */

button,
html input[type="button"], /* 1 */
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button; /* 2 */
    cursor: pointer; /* 3 */
    *overflow: visible;  /* 4 */
}

/**
 * Re-set default cursor for disabled elements.
 */

button[disabled],
html input[disabled] {
    cursor: default;
}

/**
 * 1. Address box sizing set to content-box in IE 8/9.
 * 2. Remove excess padding in IE 8/9.
 * 3. Remove excess padding in IE 7.
 *    Known issue: excess padding remains in IE 6.
 */

input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
    *height: 13px; /* 3 */
    *width: 13px; /* 3 */
}

/**
 * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.
 * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome
 *    (include `-moz` to future-proof).
 */

input[type="search"] {
    -webkit-appearance: textfield; /* 1 */
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box; /* 2 */
    box-sizing: content-box;
}

/**
 * Remove inner padding and search cancel button in Safari 5 and Chrome
 * on OS X.
 */

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

/**
 * Remove inner padding and border in Firefox 3+.
 */

button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}

/**
 * 1. Remove default vertical scrollbar in IE 6/7/8/9.
 * 2. Improve readability and alignment in all browsers.
 */

textarea {
    overflow: auto; /* 1 */
    vertical-align: top; /* 2 */
}

/**
 * Remove most spacing between table cells.
 */

table {
    border-collapse: collapse;
    border-spacing: 0;
}

html,
button,
input,
select,
textarea {
    color: #222;
}


::-moz-selection {
    background: #b3d4fc;
    text-shadow: none;
}

::selection {
    background: #b3d4fc;
    text-shadow: none;
}

img {
    vertical-align: middle;
}

fieldset {
    border: 0;
    margin: 0;
    padding: 0;
}

textarea {
    resize: vertical;
}

.chromeframe {
    margin: 0.2em 0;
    background: #ccc;
    color: #000;
    padding: 0.2em 0;
}

/* PrismJS 1.14.0
http://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+abap+actionscript+ada+apacheconf+apl+applescript+c+arff+asciidoc+asm6502+aspnet+autohotkey+autoit+bash+basic+batch+bison+brainfuck+bro+cpp+csharp+arduino+coffeescript+clojure+ruby+csp+css-extras+d+dart+diff+django+docker+eiffel+elixir+elm+markup-templating+erlang+fsharp+flow+fortran+gedcom+gherkin+git+glsl+go+graphql+groovy+haml+handlebars+haskell+haxe+http+hpkp+hsts+ichigojam+icon+inform7+ini+io+j+java+jolie+json+julia+keyman+kotlin+latex+less+liquid+lisp+livescript+lolcode+lua+makefile+markdown+erb+matlab+mel+mizar+monkey+n4js+nasm+nginx+nim+nix+nsis+objectivec+ocaml+opencl+oz+parigp+parser+pascal+perl+php+php-extras+sql+powershell+processing+prolog+properties+protobuf+pug+puppet+pure+python+q+qore+r+jsx+typescript+renpy+reason+rest+rip+roboconf+crystal+rust+sas+sass+scss+scala+scheme+smalltalk+smarty+plsql+soy+stylus+swift+tcl+textile+twig+tsx+vbnet+velocity+verilog+vhdl+vim+visual-basic+wasm+wiki+xeora+xojo+yaml&plugins=line-numbers+toolbar+show-language */
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

/*
* Dracula Theme for Prism.JS
*
* @author Gustavo Costa
* e-mail: gusbemacbe@gmail.com
*
* @contributor Jon Leopard
* e-mail: jonlprd@gmail.com
*
* @license MIT 2016-2018
*/

pre::-webkit-scrollbar {
  width: 14px;
}

pre::-webkit-scrollbar-track {
  background-color: #6272a4;
  border-radius: 0px;
}

pre::-webkit-scrollbar-thumb {
  background-color: #bd93f9;
  border-radius: 0px;
}

code[class*="language-"],
pre[class*="language-"] {
  color: #ccc;
  background: rgb(40, 41, 54);
  text-shadow: none;
  font-family: PT Mono, Consolas, Monaco, "Andale Mono", "Ubuntu Mono",
    monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection {
  text-shadow: none;
  background-color: #5a5f80;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
  text-shadow: none;
  background-color: #5a5f80;
}

@media print {
  code[class*="language-"],
  pre[class*="language-"] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*="language-"] {
  background: rgba(40, 41, 54, 1) !important;
  border-radius: 0.5em;
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  height: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: rgba(40, 41, 54, 1);
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 4px 7px;
  border-radius: 0.3em;
  white-space: normal;
}

.limit-300
{
  height: 300px !important;
}

.limit-400
{
  height: 400px !important;
}

.limit-500
{
  height: 500px !important;
}

.limit-600
{
  height: 600px !important;
}

.limit-700
{
  height: 700px !important;
}

.limit-800
{
  height: 800px !important;
}

.token.comment {
  color: rgba(98, 114, 164, 1);
}

.token.prolog {
  color: rgba(207, 207, 194, 1);
}

.token.tag {
  color: rgba(220, 104, 170, 1);
}

.token.entity {
  color: rgba(139, 233, 253, 1);
}

.token.atrule {
  color: rgba(98, 239, 117, 1);
}

.token.url {
  color: rgba(102, 217, 239, 1);
}

.token.selector {
  color: rgba(207, 207, 194, 1);
}

.token.string {
  color: rgba(241, 250, 140, 1);
}

.token.property {
  color: rgba(255, 184, 108, 1);
}

.token.important {
  color: rgba(255, 121, 198, 1);
  font-weight: bold;
}

.token.punctuation {
  color: white;
}

.token.number {
  color: rgba(189, 147, 249, 1);
}

.token.function {
  color: rgba(80, 250, 123, 1);
}

.token.class-name {
  color: rgba(255, 184, 108, 1);
}

.token.keyword {
  color: rgba(255, 121, 198, 1);
}

.token.boolean {
  color: rgba(255, 184, 108, 1);
}

.token.operator {
  color: rgba(139, 233, 253, 1);
}

.token.char {
  color: rgba(255, 135, 157, 1);
}

.token.regex {
  color: rgba(80, 250, 123, 1);
}

.token.variable {
  color: rgba(80, 250, 123, 1);
}

.token.constant {
  color: rgba(255, 184, 108, 1);
}

.token.symbol {
  color: rgba(255, 184, 108, 1);
}

.token.builtin {
  color: rgba(255, 121, 198, 1);
}

.token.attr-value {
  color: #7ec699;
}

.token.deleted {
  color: #e2777a;
}

.token.namespace {
  color: #e2777a;
}

.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token {
  color: #ff79c6;
}

.language-cpp .token.string {
  color: #8be9fd;
}

.language-c .token.string {
  color: #8be9fd;
}

.language-css .token.selector {
  color: rgba(80, 250, 123, 1);
}

.language-css .token.property {
  color: rgba(255, 184, 108, 1);
}

.language-java span.token.class-name {
  color: #8be9fd;
}

.language-java .token.class-name {
  color: #8be9fd;
}

.language-markup .token.attr-value {
  color: rgba(102, 217, 239, 1);
}

.language-markup .token.tag {
  color: rgba(80, 250, 123, 1);
}

.language-objectivec .token.property {
  color: #66d9ef;
}

.language-objectivec .token.string {
  color: #50fa7b;
}

.language-php .token.boolean {
  color: #8be9fd;
}

.language-php .token.function {
  color: #ff79c6;
}

.language-php .token.keyword {
  color: #66d9ef;
}

.language-ruby .token.symbol {
  color: #8be9fd;
}

.language-ruby .token.class-name {
  color: #cfcfc2;
}

pre.line-numbers {
  position: relative;
  padding-left: 3.8em;
  counter-reset: linenumber;
}

pre.line-numbers > code {
  position: relative;
  white-space: inherit;
}

.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  top: 0;
  font-size: 100%;
  left: -3.8em;
  width: 3em; /* works for line-numbers below 1000 lines */
  letter-spacing: -1px;
  border-right: 1px solid #999;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.line-numbers-rows > span {
  pointer-events: none;
  display: block;
  counter-increment: linenumber;
}

.line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}

div.code-toolbar {
  position: relative;
}

div.code-toolbar > .toolbar {
  position: absolute;
  top: 0.3em;
  right: 0.2em;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
}

div.code-toolbar:hover > .toolbar {
  opacity: 1;
}

div.code-toolbar > .toolbar .toolbar-item {
  display: inline-block;
  padding-right: 20px;
}

div.code-toolbar > .toolbar a {
  cursor: pointer;
}

div.code-toolbar > .toolbar button {
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  -webkit-user-select: none; /* for button */
  -moz-user-select: none;
  -ms-user-select: none;
}

div.code-toolbar > .toolbar a,
div.code-toolbar > .toolbar button,
div.code-toolbar > .toolbar span {
  color: #ccc;
  font-size: 0.8em;
  padding: 0.5em;
  background: rgba(98, 114, 164, 1);
  border-radius: 0.5em;
}

div.code-toolbar > .toolbar a:hover,
div.code-toolbar > .toolbar a:focus,
div.code-toolbar > .toolbar button:hover,
div.code-toolbar > .toolbar button:focus,
div.code-toolbar > .toolbar span:hover,
div.code-toolbar > .toolbar span:focus {
  color: inherit;
  text-decoration: none;
  background-color: var(--verde);
}
</style>
<!-- eslint-enable -->
