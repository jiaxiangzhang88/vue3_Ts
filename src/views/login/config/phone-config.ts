//编写规则
export const rules = {
  name: [
    {
      required: true,
      message: '手机号是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[1][3,4,5,7,8,9][0-9]{9}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '验证码是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^\d{6}$/,
      message: '请正确输入六位验证码',
      trigger: 'blur'
    }
  ]
}
