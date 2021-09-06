export const contentTableConfig = {
  showIndexColumn: true,
  showSelectColumn: true,
  title: '用户列表',
  propList: [
    { prop: 'name', label: '角色名', minwidth: '100' },
    { prop: 'intro', label: '权限介绍', minwidth: '100' },
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
