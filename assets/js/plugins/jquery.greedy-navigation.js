/*
GreedyNav.js - https://github.com/lukejacksonn/GreedyNav
Licensed under the MIT license - http://opensource.org/licenses/MIT
Copyright (c) 2015 Luke Jackson
*/
$(document).ready(function(){function e(){n=l.width()-t.width(),i=l.children().length,d=u[i-1],n<d?(l.children().last().prependTo(s),i-=1,e()):n>u[i]&&(s.children().first().appendTo(l),i+=1,e()),t.attr("count",a-i),i===a?t.addClass("hidden"):t.removeClass("hidden")}var n,i,d,o,t=$("nav.greedy-nav .greedy-nav__toggle"),l=$("nav.greedy-nav .visible-links"),s=$("nav.greedy-nav .hidden-links"),a=0,c=0,r=1e3,u=[];l.children().outerWidth(function(e,n){c+=n,a+=1,u.push(c)}),$(window).resize(function(){e()}),t.on("click",function(){s.toggleClass("hidden"),$(this).toggleClass("close"),clearTimeout(o)}),s.on("mouseleave",function(){o=setTimeout(function(){s.addClass("hidden"),t.toggleClass("close")},r)}).on("mouseenter",function(){clearTimeout(o)}),e()});