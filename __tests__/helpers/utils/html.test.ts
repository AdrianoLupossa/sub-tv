import { JSDOM } from 'jsdom'
import { getArrayFromNodeList, getElementFromDOM } from '../../../ts/helpers/utils/index'

describe('Testing HTML utils', () => {
  const fakeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <p class="my-class">Lorem ipsum dolor.</p>
  <p class="my-class">Asperiores, laborum, quia.</p>
  <p class="my-class">Deleniti, neque, obcaecati.</p>
  <p class="my-class">Est, perspiciatis, excepturi?</p>
  <p class="my-class">Hic, pariatur, atque.</p>
  <p class="my-class">Dicta, veritatis, libero.</p>
  <p class="my-class">Vero, dignissimos, saepe.</p>
  <p class="my-class">Veritatis, fuga dignissimos.</p>
  <p class="my-class">Nemo, natus, recusandae?</p>
  <p class="my-class">Odit nisi, sint!</p>
</body>
</html>`

  const dom = new JSDOM(fakeHTML)

  describe('Function getElementFromDOM', () => {
    const listOfElements = getElementFromDOM(dom, '.my-class')
    test('Should return the 10 elements', () => {
      expect(listOfElements.length).toBe(10)
    })
  })

  describe('Function getArrayFromNodeList', () => {
    const listOfElements = getElementFromDOM(dom, '.my-class')
    const arrayOfElements = getArrayFromNodeList(listOfElements)

    test('Should an array', () => {
      expect(typeof arrayOfElements === typeof []).toBeTruthy()
    })
    test('Should return the same quantity of elements', () => {
      expect(listOfElements.length === arrayOfElements.length).toBeTruthy()
    })
  })
})
