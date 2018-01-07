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

  it('should resolve array paths', () => {
    const obj = {
      a: [
        { b: 'c1' },
        { b: 'c2' }
      ]
    }

    expect(resolve(obj, 'a[0].b')).toBe(obj.a[0].b)
  })
})