export const contentTableConfig = {
  showIndexColumn: true,
  showSelectColumn: true,
  title: '用户列表',
  propList: [
    { prop: 'name', label: '用户名', minwidth: '100' },
    { prop: 'realname', label: '真实姓名', minwidth: '100' },
    { prop: 'cellphone', label: '手机号码', minwidth: '100' },
    { prop: 'enable', label: '状态', minwidth: '50', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minwidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minwidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
