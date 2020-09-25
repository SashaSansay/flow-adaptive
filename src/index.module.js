class FlowAdaptive {
  constructor(settings) {
    this.defaultSettings = {
      maximum: 9999,
      minimum: 859,
      maxFont: 9999,
      minFont: 1,
      minWidth: 0,
      maxWidth: 9999,
      fontRatio: 35,
      breakPoints: [],
    }

    this.settings = { ...this.defaultSettings, ...settings }

    if (typeof window === 'undefined') return

    window.addEventListener('resize', () => this.handleResize())
    this.handleResize()
  }

  handleResize() {
    const { settings, defaultSettings, settings: { breakPoints } } = this
    const elw = document.body ? document.body.clientWidth : window.innerWidth

    // eslint-disable-next-line max-len, arrow-body-style
    const currentBreakPoint = breakPoints.find((breakPoint) => {
      // eslint-disable-next-line max-len
      return elw >= (breakPoint.minWidth || defaultSettings.minWidth)
        && elw <= (breakPoint.maxWidth || defaultSettings.maxWidth)
    })

    const {
      fontRatio,
      maxFont,
      minFont,
      minWidth,
      maxWidth,
    } = currentBreakPoint || settings

    const resMaxWidth = (maxWidth || defaultSettings.maxWidth)
    const resMinWidth = (minWidth || defaultSettings.minWidth)
    // eslint-disable-next-line no-nested-ternary
    const width = elw > resMaxWidth
      ? resMaxWidth
      : elw < resMinWidth
        ? resMinWidth
        : elw

    const resMaxFont = (maxFont || defaultSettings.maxFont)
    const resMinFont = (minFont || defaultSettings.minFont)
    const resFontRatio = (fontRatio || defaultSettings.fontRatio)

    const fontBase = width / (typeof resFontRatio === 'function' ? resFontRatio() : resFontRatio)
    // eslint-disable-next-line no-nested-ternary
    const fontSize = fontBase > resMaxFont
      ? resMaxFont
      : fontBase < resMinFont
        ? resMinFont
        : fontBase

    document.documentElement.style.fontSize = `${fontSize}px`
  }
}

export default FlowAdaptive
