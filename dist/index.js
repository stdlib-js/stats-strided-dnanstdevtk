"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var i=n(function(w,u){
var k=require('@stdlib/stats-strided-dnanvariancetk/dist').ndarray,p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,a,t,f){return p(k(e,r,a,t,f))}u.exports=x
});var d=n(function(z,v){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=i();function l(e,r,a,t){return m(e,r,a,t,j(e,t))}v.exports=l
});var c=n(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),_=i();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),s,y=O(E(__dirname,"./native.js"));b(y)?s=g:s=y;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
