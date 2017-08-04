import * as ora from 'ora'

export function spinner(message: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalFunction: () => {} = descriptor.value

    descriptor.value = function(...args: any[]) {
      const spinnerObject = ora()

      spinnerObject.start(message)
      const newFunction = originalFunction.apply(this, args)
      spinnerObject.stopAndPersist()

      return newFunction
    }
  }
}
