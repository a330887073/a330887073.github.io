;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-fangzi1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M406.940141 845.503354l-6.215111 0c-52.891152 0-105.782303 0.009051-158.678626-0.005172-26.241293-0.002586-43.605333-18.258747-43.609212-45.977859-0.020687-208.557253-0.014222-183.387798-0.065939-252.493576-0.007758-15.557818 5.484606-27.85099 16.82101-37.61002 90.342141-77.751596 180.626101-155.582061 270.950141-233.354343 18.172121-15.645737 38.098747-15.685818 56.242424-0.065939 90.462384 77.883475 180.874343 155.832889 271.339313 233.711192 11.03903 9.499152 16.518465 21.546667 16.514586 36.66101-0.033616 69.642343-0.011636 45.017212-0.041374 254.113616-0.002586 26.254222-17.711838 44.991354-42.488242 45.008162-53.576404 0.042667-107.145051 0.014222-160.72404 0.014222l-5.253172 0 0-7.149899c0-78.532525 0.012929-86.361212-0.012929-164.892444-0.005172-17.404121-7.769212-29.573172-21.810424-33.786828-3.700364-1.10804-7.709737-1.458424-11.579475-1.463596-49.322667-0.095677-98.646626-0.100848-147.965414-0.04396-21.303596 0.020687-33.419636 13.070222-33.419636 35.772768-0.005172 78.166626 0 85.635879 0 163.805091C406.940141 840.080808 406.940141 842.413253 406.940141 845.503354L406.940141 845.503354z"  ></path>'+
      ''+
      '<path d="M104.651979 442.767515c61.189172-51.121131 122.327919-102.309495 183.475717-153.484929 54.208646-45.359838 108.431515-90.706747 162.607838-136.109253 38.114263-31.948283 84.125737-31.900444 122.307232 0.065939 114.797899 96.124121 214.820202 184.113131 329.402182 280.530747 4.120566 3.466343 7.011556 5.999192 7.011556 5.999192 0.832646 1.123556 5.418667 5.025616 6.140121 6.012121 0.512 0.700768 0.131879-0.10602 2.907798 6.627556l3.81802 9.985293c0.726626 2.881939 1.303273 2.991838 2.344081 10.148202 1.012364 6.944323-0.955475 20.376566-9.82497 35.149576-11.609212 19.340929-60.321616 1.348525-77.062465-12.58796-4.260202-3.546505 0 0-5.378586-4.445091-99.669333-82.37899-189.482667-163.271111-288.691717-246.278465-2.402263-2.007919-4.768323-4.094707-7.316687-5.875071-17.577374-12.273778-35.810263-11.331232-52.871758 2.933657-68.655838 57.38796-137.26901 114.83798-205.897697 172.271192-33.645899 28.152242-66.976323 56.745374-100.992 84.392081-2.514747 2.044121-4.218828 3.236202-7.624404 5.235071-5.710869 3.351273-5.634586 3.816727-11.013172 6.207354-15.462141 6.873212-33.714424 14.334707-50.715152-4.06497-9.509495-10.290424-21.222141-36.570505-3.600808-61.446465"  ></path>'+
      ''+
      '<path d="M929.434848 495.865535"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
