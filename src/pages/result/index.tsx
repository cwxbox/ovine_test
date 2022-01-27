/**
 * 自定义页面
 * ----
 * 体验在线编辑页面
 */

import { toast , Button } from 'amis'

import React from 'react'
import styled from 'styled-components'

import { app } from '@core/app'
import { Amis } from '@core/components/amis/schema'
import { useImmer } from '@core/utils/hooks'
import { getStore, setStore } from '@core/utils/store'
import { deserialize, serialize } from '@core/utils/tool'

const storeKey = 'schemaStore'

const defaultSchema = {
  type: 'page',
  title: '点击 "路由标签" 上的编辑图标，可体验在线编辑页面效果～',
  body: {
    type: 'alert',
    body: '只有保存后才能看到页面效果。目前只能体验，等完成所有功能后，将可用于生产环境。',
    level: 'success',
  },
}

type State = {
  schema: any
}

const initState = () => {
  return {
    schema: deserialize(getStore<string>(storeKey)) || defaultSchema,
  }
}

export const StyledResult = styled.div`
  .action-edit {
    position: fixed;
    bottom: 40px;
    right: 40px;
    button {
      width: 40px;
      height: 40px;
      min-width: unset;
      border-radius: 100%;
      padding: 0;
    }
    .icon-edit {
      width: 1.5em;
      height: 1.5em;
      top: 0.125em;
      left: 0.05em;
      position: relative;
      fill: currentColor;
    }
  }
`

export default () => {
  const [state] = useImmer<State>(initState)
  const { schema } = state

  const goEditorPage = () => {
    if (app.theme.getName() === 'dark') {
      toast.info('编辑器对 “暗黑主题” 暂不支持，请切换为其他主题再尝试编辑！')
      return
    }
    setStore(storeKey, serialize(schema))
    app.routerHistory.push('/editor')
  }

  return (
    <StyledResult>
      {schema && <Amis schema={schema} />}
      <div className="action-edit">
        <Button
          iconOnly
          theme={app.theme.getName()}
          level="danger"
          placement="top"
          tooltip="编辑schema"
          onClick={goEditorPage}
        >
          <i className="fa fa-edit" />
        </Button>
      </div>
    </StyledResult>
  )
}
