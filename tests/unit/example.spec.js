function add(num1,num2){
  return num1+num2
}
describe('开课吧加法测试组',()=>{
  it('一个测试用例，测试数字相加',()=>{
    expect(add(1,3)).toBe(4)
  });
  it('一个测试用例，测试数字和字符串相加',()=>{
    expect(add(1,'a')).toBe('1a')
  });
  // it('一个测试用例，测试数字相加',()=>{
  //   expect(add(1,'4')).toBe(5)
  // });
})