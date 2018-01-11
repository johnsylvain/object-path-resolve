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

  it('should be able to use bracket notation to resolve object', () => {
    const obj = {
      'test-prop': {
        'test-array': [
          'one', 'two', 'three'
        ]
      } 
    }

    expect(resolve(obj, '["test-prop"]["test-array"][2]')).toBe('three')
  })

  it('should ignore inner quotes', () => {
    const obj = {
      'test-"prop"-value': {
        'test-array': [
          'one', 'two', 'three'
        ]
      }
    }

    expect(resolve(obj, '["test-"prop"-value"]["test-array"][2]')).toBe('three')
    expect(resolve(obj, '[test-"prop"-value]["test-array"][2]')).toBe('three')
  })

  it('should not mutate original object', () => {
    const obj = {
      param: 'test'
    }

    const _ = resolve(obj, 'param')

    expect(obj).toBe(obj)
  })
})
