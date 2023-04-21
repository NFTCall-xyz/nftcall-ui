function certikRender() {
  var pid = 'nftcall'
  if (!window.fetchData) return

  fetchData()
    .then(function (data) {
      if (!data) {
        return { template: null, data: null }
      }

      var template = null

      if (localStorage) {
        var cachedVersion = localStorage.getItem('certik.emblem.version')
        var cachedPid = localStorage.getItem('certik.emblem.pid')

        if (cachedVersion === data.version && cachedPid === 'nftcall') {
          template = localStorage.getItem('certik.emblem.template')
        }
      }

      if (!template) {
        return fetchTemplate().then(function (tpl) {
          if (tpl && localStorage && !window.location.host.startsWith('localhost')) {
            localStorage.setItem('certik.emblem.template', tpl)
            localStorage.setItem('certik.emblem.version', data.version)
            localStorage.setItem('certik.emblem.pid', 'nftcall')
          }

          return { template: tpl, data: data }
        })
      }

      return { template: template, data: data }
    })
    .then(function (result) {
      var projectBlock = document.querySelector("[data-id='671fe7a0']")

      if (result.template && result.data) {
        var viewportWidth = projectBlock.parentNode.getBoundingClientRect().width
        var viewportHeight = projectBlock.parentNode.getBoundingClientRect().height
        var scale = viewportWidth / result.data.emblemWidth
        var scaledHeight = result.data.emblemHeight * scale

        // style parent node
        if (scaledHeight > viewportHeight) {
          projectBlock.parentNode.style.height = scaledHeight + 'px'
        }
        if (!['relative', 'absolute'].includes(projectBlock.parentNode.style.position)) {
          projectBlock.parentNode.style.position = 'relative'
        }
        if (!projectBlock.parentNode.style.zIndex) {
          projectBlock.parentNode.style.zIndex = 10
        }

        var template = ejs.render(result.template, result.data)
        var viewport

        if (projectBlock.shadowRoot) {
          viewport = projectBlock.shadowRoot.querySelector('.ctk-view-port')
        } else {
          if (projectBlock.attachShadow) {
            // use shadow dom when possible to isolate context
            var div = document.createElement('div')
            div.classList.add('certik-emblem')
            div.innerHTML = template
            var shadow = projectBlock.attachShadow({ mode: 'open' })
            shadow.appendChild(div)
            appendScriptNodes(div, document.head)
            viewport = shadow.querySelector('.ctk-view-port')
            viewport.style.transform = 'scale(' + scale + ')'
            viewport.style.transformOrigin = 'top left'
          } else {
            // also works for browsers doesn't support shadow dom
            projectBlock.innerHTML = template

            appendScriptNodes(projectBlock, document.head)

            viewport = document.querySelector('.ctk-view-port')
            viewport.style.transform = 'scale(' + scale + ')'
            viewport.style.transformOrigin = 'top left'
          }
        }

        viewport.style.paddingTop = '2px'
        var ctkBlock = viewport.querySelector('.ctk-block')
        ctkBlock.style.margin = '0'
        var ctkCard = viewport.querySelector('.ctk-card')
        ctkCard.style.top = '-138px'
      }

      projectBlock.style.display = 'block'
    })
    .catch(function (err) {
      if (err.message !== 'invalid pid') {
        console.log('emblem error', err)

        // still shows the default text

        var projectBlock = document.querySelector("[data-id='671fe7a0']")

        projectBlock.style.display = 'block'
      }
    })
}

module.exports = {
  certikRender,
}
