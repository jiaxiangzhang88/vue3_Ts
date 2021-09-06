export const contentTableConfig = {
  showIndexColumn: false,
  showSelectColumn: false,
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minwidth: '100' },
    { prop: 'type', label: '类型', minwidth: '60' },
    { prop: 'url', label: '菜单url', minwidth: '100' },
    { prop: 'icon', label: '菜单icon', minwidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minwidth: '220',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minwidth: '220',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFoot: false
}
