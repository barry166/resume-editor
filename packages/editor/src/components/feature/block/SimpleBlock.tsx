/**
 * 简单快展示：编辑器
 * @returns 
 */

import { BlockProps } from "@resume/shared"
import BlockTitle from "../BlockTitle"

function SimpleBlock(props: BlockProps) {
  return <div>
      <BlockTitle text="自定义内容" />
    
  </div>
}

export default SimpleBlock