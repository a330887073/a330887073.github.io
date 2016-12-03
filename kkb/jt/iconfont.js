;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M243.523705 648.420239C131.876014 536.795971 131.876014 355.166204 243.523705 243.541934 297.61283 189.426216 369.504161 159.682363 446.002451 159.682363 522.443863 159.682363 594.335196 189.426216 648.42432 243.541934 760.072013 355.166204 760.072013 536.795971 648.42432 648.420239 594.335196 702.479411 522.443863 732.279808 445.945575 732.279808 369.504161 732.279808 297.61283 702.479411 243.523705 648.420239L243.523705 648.420239ZM921.6 881.112172 707.120404 666.628454C821.213768 531.650171 816.151798 330.285414 688.920069 203.054104 621.806331 135.932519 533.875953 102.4 446.002451 102.4 358.072074 102.4 270.141697 135.932519 203.027956 203.054104 68.857348 337.184179 68.857348 554.721449 203.027956 688.908068 270.141697 755.973105 358.072074 789.562173 445.945575 789.562173 524.83266 789.562173 602.809728 761.062359 666.624655 707.116283L881.161129 921.6 921.6 881.112172Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiantouyoujiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M723.696401 533.102744c0.486519-0.973037 1.337926-1.824445 1.702815-2.797482 8.514075-17.757928 5.716593-39.651265-9.365483-53.881934L372.30835 151.307281c-18.730966-17.757928-48.28697-16.906521-66.044898 1.824445-17.757928 18.730966-16.906521 48.28697 1.824445 66.044898l308.452785 291.789524L309.304193 807.012709c-18.609336 17.879558-19.095855 47.435562-1.216296 66.044898 9.122224 9.487112 21.406818 14.352298 33.569783 14.352298 11.676446 0 23.352892-4.378667 32.353486-13.136002l340.563012-328.278418c0.608148-0.608148 0.851408-1.581185 1.581185-2.189334 0.486519-0.486519 0.973037-0.851408 1.581185-1.337926C720.53403 539.670745 721.871956 536.265115 723.696401 533.102744L723.696401 533.102744zM723.696401 533.102744"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-arrowright" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M300.304 490.897c-0.486 0.973-1.338 1.824-1.703 2.797-8.514 17.758-5.717 39.651 9.365 53.882l343.725 325.116c18.731 17.758 48.287 16.907 66.045-1.824s16.907-48.287-1.824-66.045l-308.453-291.79 307.236-296.047c18.609-17.881 19.096-47.436 1.216-66.045-9.122-9.487-21.407-14.351-33.57-14.352-11.676 0-23.353 4.378-32.353 13.137l-340.563 328.278c-0.608 0.608-0.851 1.581-1.581 2.189-0.487 0.487-0.973 0.851-1.581 1.338-2.797 2.797-4.135 6.203-5.959 9.365v0zM300.304 490.897z"  ></path>'+
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
