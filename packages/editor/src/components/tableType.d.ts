import type { FormConfig } from '@editor/global-types'

import type {  VxeTableDefines,  } from 'vxe-table'


export  interface Columns extends VxeTableDefines.ColumnOptions {
    params?: FormConfig & {
      tips?: string
    }
  }