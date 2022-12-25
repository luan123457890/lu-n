var settings={particles:{length:1e4,duration:4,velocity:80,effect:-1.3,size:8}};!function()
{for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)
window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],
window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];
window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n)
{var o=new Date().getTime(),s=Math.max(0,16-(o-t)),r=window.setTimeout(function(){e(o+s)},s);return t=o+s,r}),
window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();
var Point=function(){function t(t,e){this.x=void 0!==t?t:0,this.y=void 0!==e?e:0}return t.prototype.clone=function()
{return new t(this.x,this.y)},t.prototype.length=function(t){return void 0===t?Math.sqrt(this.x*this.x+this.y*this.y):(this.normalize(),this.x*=t,this.y*=t,this)},
t.prototype.normalize=function(){var t=this.length();return this.x/=t,this.y/=t,this},t}(),Particle=function()
{function t(){this.position=new Point,this.velocity=new Point,this.acceleration=new Point,this.age=0}return t.prototype.initialize=function(t,e,n,o)
{this.position.x=t,this.position.y=e,this.velocity.x=n,this.velocity.y=o,this.acceleration.x=n*settings.particles.effect,this.acceleration.y=o*settings.particles.effect,this.age=0},
t.prototype.update=function(t){this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.velocity.x+=this.acceleration.x*t,this.velocity.y+=this.acceleration.y*t,this.age+=t},
t.prototype.draw=function(t,e){var n,o=e.width*(n=this.age/settings.particles.duration,--n*n*n+1);t.globalAlpha=1-this.age/settings.particles.duration,t.drawImage(e,this.position.x-o/2,this.position.y-o/2,o,o)},t}(),
ParticlePool=function(){var t,e=0,n=0,o=settings.particles.duration;function s(e){t=Array(e);for(var n=0;n<t.length;n++)t[n]=new Particle}return s.prototype.add=function(o,s,r,a){t[n].initialize(o,s,r,a),++n==t.length&&(n=0),e==n&&e++,e==t.length&&(e=0)},
s.prototype.update=function(s){var r;if(e<n)for(r=e;r<n;r++)t[r].update(s);if(n<e){for(r=e;r<t.length;r++)t[r].update(s);
for(r=0;r<n;r++)t[r].update(s)}for(;t[e].age>=o&&e!=n;)++e==t.length&&(e=0)},s.prototype.draw=function(o,s){if(e<n)for(i=e;i<n;i++)t[i].draw(o,s);
if(n<e){for(i=e;i<t.length;i++)t[i].draw(o,s);for(i=0;i<n;i++)t[i].draw(o,s)}},s}();!function(t){var e,n=t.getContext("2d"),o=new ParticlePool(settings.particles.length),s=settings.particles.length/settings.particles.duration;
function r(t){return new Point(160*Math.pow(Math.sin(t),3),130*Math.cos(t)-50*Math.cos(2*t)-20*Math.cos(3*t)-10*Math.cos(4*t)+25)}
var a=function(){var t=document.createElement("canvas"),e=t.getContext("2d");
function n(t){var e=r(t);return e.x=settings.particles.size/2+e.x*settings.particles.size/350,e.y=settings.particles.size/2-e.y*settings.particles.size/350,e}t.width=settings.particles.size,t.height=settings.particles.size,e.beginPath();var o=-Math.PI,s=n(o);
for(e.moveTo(s.x,s.y);o<Math.PI;)o+=.01,s=n(o),e.lineTo(s.x,s.y);e.closePath(),e.fillStyle="#FF9900",e.fill();var a=new Image;return a.src=t.toDataURL(),a}();
function c(){t.width=t.clientWidth,t.height=t.clientHeight}window.onresize=c,setTimeout(function(){c(),function c(){requestAnimationFrame(c);var l=new Date().getTime()/1e3,h=l-(e||l);e=l,n.clearRect(0,0,t.width,t.height);
for(var u=s*h,p=0;p<u;p++){var f=r(Math.PI-2*Math.PI*Math.random()),g=f.clone().length(settings.particles.velocity);o.add(t.width/2+f.x,t.height/2-f.y,g.x,-g.y)}o.update(h),o.draw(n,a)}()},10)}(document.getElementById("pinkboard"));