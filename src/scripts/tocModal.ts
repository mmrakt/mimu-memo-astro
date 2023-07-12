import tocbot from 'tocbot'

import { POST_DETAIL_CONTENT_SELECTOR } from '../config'

const tocModal = () => {
  const isOpenClass = 'isOpen'
  const TOC_MODAL_SELECTOR = 'js-toc-modal'
  const TOC_TOGGLE_BUTTON_SELECTOR = 'js-toc-toggle-button'

  const modal = document.querySelector(`[data-selector=${TOC_MODAL_SELECTOR}]`)
  const button = document.querySelector(
    `[data-selector=${TOC_TOGGLE_BUTTON_SELECTOR}]`
  )
  // MEMO: アンカーリンクで見出しが固定ヘッダーに隠れてしまうため padding-topで調整
  tocbot.init({
    tocSelector: '[data-selector=js-toc-body-sp]',
    contentSelector: `[data-selector=${POST_DETAIL_CONTENT_SELECTOR}]`,
    headingSelector: 'h1, h2, h3',
    onClick: () => {
      closeModal()
    },
  })

  const tocLinks = document.querySelectorAll('.toc-link')
  const NO_SMOOTH_SCROLL = 'no-smooth-scroll'
  tocLinks.forEach((link) => {
    if (!link.classList.contains(NO_SMOOTH_SCROLL)) {
      link.classList.add(NO_SMOOTH_SCROLL)
    }
  })

  button?.addEventListener('click', (event) => {
    if (modal?.classList.contains(isOpenClass)) {
      closeModal()
    } else {
      openModal()
    }

    document.body.addEventListener(
      'click',
      { handleEvent: closeModalByOutside },
      true
    )
  })

  const openModal = () => {
    modal?.classList.add(isOpenClass)
    button?.classList.add(isOpenClass)
  }
  const closeModal = () => {
    modal?.classList.remove(isOpenClass)
    button?.classList.remove(isOpenClass)
  }

  function closeModalByOutside(event: Event): void {
    const target = event.target as HTMLDivElement
    if (target.closest(`[data-selector=${TOC_MODAL_SELECTOR}]`) === null) {
      closeModal()
      event.stopPropagation() // button要素のイベント発火の抑制
      document.body.removeEventListener('click', this, true)
    }
  }
}

export default tocModal
