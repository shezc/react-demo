module.exports = {
  types: [
    {
      value: '✨ 特性',
      name: ' - 增加新的特性'
    },
    {
      value: '🐛 修复',
      name: ' - 代码缺陷修复'
    },
    {
      value: '🔨 重构',
      name: ' - 项目源码重构'
    },
    {
      value: '🎉 初始',
      name: ' - 初始提交内容'
    },
    {
      value: '💄 界面',
      name: ' - 用户界面变更'
    },
    {
      value: '✏️️️ 格式',
      name: ' - 代码格式修改'
    },
    {
      value: '📝 文档',
      name: ' - 用户文档更新'
    },
    {
      value: '🔥 清理',
      name: ' - 移除无用代码'
    },
    {
      value: '⏪ 回滚',
      name: ' - 项目代码回滚'
    },
    {
      value: '🔀 合并',
      name: ' - 项目分支合并'
    },
    {
      value: '✅ 测试',
      name: ' - 测试代码变更'
    },
    {
      value: '🔧 配置',
      name: ' - 工具配置变动'
    },
    {
      value: '📦 生成',
      name: ' - 更新目标文件'
    }
    /*
    {
      value: ':hankey: 工具',
      name: '💩 更新辅助工具（打包或文档生成）'
    },
    {
      value: ':boom: 突变',
      name: '💥 颠覆性的变更.'
    },
    {
      value: ':ambulance: 热修复',
      name: '🚑 热修复'
    },
    {
      value: ':bulb: 文档源码',
      name: '💡 文档源码修改'
    },
    {
      value: ':construction: 建设中',
      name: '🚧 进行中的修改'
    },
    {
      value: ':art: 代码风格',
      name: '🎨 代码风格修改'
    },
    {
      value: ':rotating_light: 检查错误',
      name: '🚨 修复代码检查问题'
    },
    {
      value: ':truck: 改名',
      name: '🚚 文件移动或改名'
    },
    {
      value: ':ok_hand: 审核错误',
      name: '👌 修复代码审查问题'
    },
    {
      value: ':bookmark: 发布',
      name: '🔖 版本发布'
    },
    {
      value: ':whale: Docker',
      name: '🐳 Docker 配置'
    },
    {
      value: ':green_heart: 持续集成',
      name: '💚 持续集成配置'
    },
    {
      value: ':rocket: 部署',
      name: '🚀 部署相关配置'
    },
    {
      value: ':lock: 安全修复',
      name: '🔒 修复安全问题'
    },
    {
      value: ':heavy_plus_sign: 增加依赖',
      name: '➕ 增加依赖模块'
    },
    {
      value: ':heavy_minus_sign: 移除依赖',
      name: '➖ 移除依赖模块'
    },
    {
      value: ':loud_sound: 增加日志',
      name: '🔊 增加日志'
    },
    {
      value: ':mute: 移除日志',
      name: '🔇 移除日志'
    },
    {
      value: ':globe_with_meridians: 语言',
      name: '🌐 多语言与本地化'
    },
    {
      value: ':alien: 外部接口',
      name: '👽 外部接口变更'
    },
    */
  ],

  // scopes: [
  //   '核算单元维护',
  //   '责任成本编制',
  //   '对上计量工程量台帐',
  //   '完成产值台帐'
  // ],

  messages: {
    type: '请选择提交内容的所属类型:',
    scope: '\n请选择提交内容的所属范围 (可选):',
    customScope: '请指明提交内容的所属范围:',
    subject: '请输入提交内容的标题:\n',
    body: '请输入提交内容的详细描述（可选，使用 “｜” 进行换行:\n',
    breaking: '任何发生了颠覆变化的内容（可选）:\n',
    footer: '任何相关的问题号，例如: #31, #34（可选）:\n',
    confirmCommit: '确认提交上述内容吗？'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],

  subjectLimit: 80
}
