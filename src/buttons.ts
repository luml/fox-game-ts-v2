import { ICONS } from './constants'

const toggleHighlighted = (icon: number, show: boolean) =>
  (document.querySelector(`.${ICONS[icon]}-icon`) as Element).classList.toggle(
    'highlighted',
    show
  )

export default function initButtons(hanleUserAction: any) {
  let selectedIcon = 0
  // make icon can loop around no matter which button you clicked
  function buttonClick(obj: { target: any }): void {
    if (obj.target.classList.contains('left-btn')) {
      toggleHighlighted(selectedIcon, false)
      selectedIcon = (2 + selectedIcon) % ICONS.length
      toggleHighlighted(selectedIcon, true)
    } else if (obj.target.classList.contains('right-btn')) {
      toggleHighlighted(selectedIcon, false)
      selectedIcon = (1 + selectedIcon) % ICONS.length
      toggleHighlighted(selectedIcon, true)
    } else {
      hanleUserAction(ICONS[selectedIcon])
    }
  }

  ;(document.querySelector('.buttons') as Element).addEventListener(
    'click',
    buttonClick
  )
}
