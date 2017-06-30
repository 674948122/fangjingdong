;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconfonticonfont10shanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M867.578862 523.160786c-6.211703 6.211703-16.906454 5.680559-23.767468-1.180455L349.926822 28.095759c-6.859796-6.859796-7.392158-17.554547-1.180455-23.76625 6.208048-6.208048 16.901581-5.675686 23.761377 1.18411l493.884572 493.884572C873.255767 506.259205 873.788129 516.952738 867.578862 523.160786L867.578862 523.160786zM867.319382 500.835691c6.211703 6.211703 5.680559 16.905236-1.180455 23.76625L372.254354 1018.486513c-6.861014 6.861014-17.554547 7.392158-23.76625 1.180455-6.208048-6.208048-5.676904-16.900363 1.18411-23.762595l493.884572-493.884572C850.4178 495.158786 861.111334 494.627643 867.319382 500.835691L867.319382 500.835691zM867.319382 500.835691"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M741.238 996.68l2.819-2.819v-42.919l-440.657-440.657 440.657-440.675v-42.919l-2.819-2.819-486.455 486.455z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
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

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)