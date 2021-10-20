import Layout from '@/layout'

export const {{kebabCase name}}Routes = [
  {
    path: '/{{kebabCase name}}',
    name: '{{pascalCase name}}',
    component: Layout,
    isGroup: true,
    meta: { title: '{{pascalCase name}}' },
    children: [
    ]
  }
]
