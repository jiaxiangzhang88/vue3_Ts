//编写规则
export const rules = {
  name: [
    {
      required: true,
      message: '用户名是必填内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{3,10}$/,
      message: '用户名必须是3~10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必填内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,18}$/,
      message: '密码长度6-18位,类型:数字和英文',
      trigger: 'blur'
    }
  ]
}
