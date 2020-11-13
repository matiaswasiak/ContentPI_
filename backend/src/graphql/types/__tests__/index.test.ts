import typeDefs from '../index'

describe('#typeDefs', () => {
  it('should match the GraphQl schema', () => {
    expect(typeDefs).toMatchSnapshot()
  })
})
