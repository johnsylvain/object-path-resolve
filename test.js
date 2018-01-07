import resolve from './index.js'

describe('object-resolve', () => {

  it('should resolve nested paths', () => {
    const obj = {
      a: {
        b: 'value'
      }
    }

    expect(resolve(obj, 'a.b')).toBe(obj.a.b)
  })
})