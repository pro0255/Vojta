import { GeneralAgentImpl } from '@/components/Chat/domain/agent/GeneralAgent'
import { Agent } from '@/components/Chat/domain/agent/types'
import { MessageType } from '@/components/Chat/types'

const NOT_IMPLEMENTED = new Error('Implement that method!')

export class AIAgent extends GeneralAgentImpl implements Agent {
  public ask = (value: MessageType['text']) => {
    throw NOT_IMPLEMENTED
  }
}
