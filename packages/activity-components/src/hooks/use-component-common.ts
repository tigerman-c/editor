import { computed } from 'vue'
import { pickStyle } from '@editor/shared'

const useComponentCommon = (
  props: Readonly<Partial<any & { isEditing: boolean }>>,
) => {
  return computed(() => pickStyle(props))
}

export default useComponentCommon
