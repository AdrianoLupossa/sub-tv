import { JSDOM } from 'jsdom'

export const getElementFromDOM = (dom: JSDOM, selector: string) =>
  dom.window.document.querySelectorAll(selector)

export const getArrayFromNodeList = (nodeList: NodeList) => Array.from(nodeList)
