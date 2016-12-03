;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-erweima" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M195.984115 197.031469l142.16179 0 0 142.160767-142.16179 0 0-142.160767Z"  ></path>'+
      ''+
      '<path d="M685.854095 197.031469l142.16179 0 0 142.160767-142.16179 0 0-142.160767Z"  ></path>'+
      ''+
      '<path d="M195.984115 684.154895l142.16179 0 0 142.203746-142.16179 0 0-142.203746Z"  ></path>'+
      ''+
      '<path d="M866.42159 547.486212l106.065687 0 0 106.065687-106.065687 0 0-106.065687Z"  ></path>'+
      ''+
      '<path d="M760.357949 653.5519l106.063641 0 0 106.063641-106.063641 0 0-106.063641Z"  ></path>'+
      ''+
      '<path d="M866.42159 759.615541l106.065687 0 0 106.065687-106.065687 0 0-106.065687Z"  ></path>'+
      ''+
      '<path d="M760.357949 898.463865l212.130352 0 0 70.01461-212.130352 0 0-70.01461Z"  ></path>'+
      ''+
      '<path d="M541.425681 759.615541 680.840918 759.615541 680.840918 828.539306 610.305445 828.539306 610.305445 968.478476 541.425681 968.478476Z"  ></path>'+
      ''+
      '<path d="M541.425681 547.486212 541.425681 724.088396 610.305445 724.088396 610.305445 616.408955 750.28657 616.408955 750.28657 547.486212Z"  ></path>'+
      ''+
      '<path d="M482.573295 483.621673 51.511699 483.621673 51.511699 52.559053l431.061596 0L482.573295 483.621673zM436.537819 98.595552 97.547175 98.595552l0 338.990644 338.990644 0L436.537819 98.595552z"  ></path>'+
      ''+
      '<path d="M972.487278 483.621673 541.425681 483.621673 541.425681 52.559053l431.061596 0L972.487278 483.621673zM926.450778 98.595552l-338.990644 0 0 338.990644 338.990644 0L926.450778 98.595552z"  ></path>'+
      ''+
      '<path d="M482.573295 970.789101 51.511699 970.789101 51.511699 539.727505l431.061596 0L482.573295 970.789101zM436.537819 585.761957 97.547175 585.761957l0 338.990644 338.990644 0L436.537819 585.761957z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shangjiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M410.520722 408.724659l-204.604476-0.206587 306.69787-306.688839L819.825631 408.824001l-204.393374 0.110631-0.054187 511.524737-204.653019 0.572347L410.520722 408.724659 410.520722 408.724659 410.520722 408.724659zM410.520722 408.724659"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-iconfontduihua" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M361.16569 895.704009c-10.086729 0-19.068288-4.139274-25.295106-11.668761-5.421476-6.551206-11.07422-18.625196-7.189749-39.058574l19.268856-102.004185c0.962931-5.096065 0.010233-9.771551-2.675946-13.012362-2.578732-3.113921-6.525624-4.847401-11.411911-4.847401L140.466172 725.112726c-35.292807 0-60.901045-26.806529-60.901045-64.009849L79.565127 171.491793c0-35.111682 23.90034-57.685817 60.901045-57.685817l769.856789 0c38.759769 0 64.59518 23.109324 64.59518 57.685817l0 489.61006c0 35.985586-28.256554 64.009849-64.59518 64.009849L656.142911 725.111702c-19.195178 0-50.563606 10.17985-67.138096 21.656229L390.379035 885.120976C380.288213 892.118344 370.475729 895.704009 361.16569 895.704009L361.16569 895.704009zM140.466172 155.997913c-17.216103 0-18.710131 8.879228-18.710131 15.493879l0 489.61006c0 6.16849 3.168156 19.761066 18.710131 19.761066l193.395662 0c17.800411 0 34.227546 7.877411 45.050032 20.954241 10.975982 13.248745 15.340383 31.266098 11.957333 49.097208l-17.511839 92.777033L564.078099 710.581778c23.762193-16.489556 64.196091-29.719882 92.063789-29.719882l254.181073 0c12.041244 0 22.402219-8.067746 22.402219-19.761066L932.72518 171.491793c0-3.497661-1.281179-15.493879-22.402219-15.493879L140.466172 155.997913 140.466172 155.997913z"  ></path>'+
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
