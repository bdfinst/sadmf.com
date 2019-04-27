/*!
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
// Copyright (c) 2010 "Cowboy" Ben Alman,
!function(t,g){var u,n=t.jQuery||t.Cowboy||(t.Cowboy={});n.throttle=u=function(i,r,a,c){function t(){function t(){d=+new Date,a.apply(o,e)}function n(){f=g}var o=this,u=+new Date-d,e=arguments;c&&!f&&t(),f&&clearTimeout(f),c===g&&i<u?t():!0!==r&&(f=setTimeout(c?n:t,c===g?i-u:i))}var f,d=0;return"boolean"!=typeof r&&(c=a,a=r,r=g),n.guid&&(t.guid=a.guid=a.guid||n.guid++),t},n.debounce=function(t,n,o){return o===g?u(t,n,!1):u(t,o,!1!==n)}}(this);