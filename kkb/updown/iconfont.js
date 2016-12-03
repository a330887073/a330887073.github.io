;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-msnui-pc" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M898.196 110.331h-771.82c-35.52 0-64.318 28.767-64.318 64.318v514.515c0 35.522 28.798 64.319 64.318 64.319h321.592v96.478h-160.797c-17.743 0-32.16 14.415-32.16 32.159v32.155h514.548v-32.155c0-17.744-14.415-32.159-32.16-32.159h-160.796v-96.478h321.592c35.52 0 64.319-28.797 64.319-64.319v-514.515c0-35.551-28.799-64.318-64.319-64.318zM480.127 689.165c0-17.744 14.414-32.158 32.159-32.158 17.743 0 32.158 14.414 32.158 32.158 0 17.777-14.415 32.192-32.158 32.192-17.743-0.001-32.159-14.415-32.159-32.192zM126.375 624.846v-450.197h771.82v450.197h-771.82z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-asmkticon0163" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 345.6c-10.88 0-19.2 8.32-19.2 19.2l0 96c0 10.88 8.32 19.2 19.2 19.2s19.2-8.32 19.2-19.2L531.2 364.8C531.2 353.92 522.88 345.6 512 345.6z"  ></path>'+
      ''+
      '<path d="M531.2 192.64 531.2 128c0-10.88-8.32-19.2-19.2-19.2s-19.2 8.32-19.2 19.2l0 64.64C378.24 202.88 288 298.88 288 416l0 256c0 123.52 100.48 224 224 224l0 0c123.52 0 224-100.48 224-224L736 416C736 298.88 645.76 202.88 531.2 192.64zM697.6 672c0 102.4-83.2 185.6-185.6 185.6s-185.6-83.2-185.6-185.6L326.4 416c0-102.4 83.2-185.6 185.6-185.6 102.4 0 185.6 83.2 185.6 185.6L697.6 672z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icon04" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M931.454746 742.411717c0 6.460132-2.583848 10.892071-7.658424 13.472849l-400.313292 215.569684-1.940189 0c-1.290389 1.291412-3.227508 1.938142-5.811356 1.938142s-4.524037-0.64673-5.814426-1.938142l-1.848091 0-400.311245-215.569684c-5.167696-2.580778-7.751544-7.012717-7.751544-13.472849l0-461.863113 0-1.939165c0-1.200338 0.645706-2.582825 1.937119-3.874237l0-1.940189 3.876284-3.874237 1.939165-1.939165 400.311245-215.474516c5.170766-1.200338 10.245342-1.200338 15.414061 0l400.313292 215.566614 1.938142 1.940189 3.876284 3.875261 0 1.938142 1.845021 3.783163 0 1.939165L931.456792 742.411717 931.454746 742.411717zM130.827139 732.816175l369.492332 200.157669 0-427.260014-369.492332-200.157669L130.827139 732.816175 130.827139 732.816175zM148.176272 280.548604l367.555214 198.218504 367.55419-198.218504L515.730463 82.328054 148.176272 280.548604 148.176272 280.548604zM900.63481 732.816175l0-427.260014-369.493356 200.157669 0 427.260014L900.63481 732.816175 900.63481 732.816175z"  ></path>'+
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
