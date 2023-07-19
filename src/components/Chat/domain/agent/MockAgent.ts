import { MessageType } from '@/components/Chat/types'
import { Agent } from '@/components/Chat/domain/agent/types'
import { GeneralAgentImpl } from '@/components/Chat/domain/agent/GeneralAgent'
import { faker } from '@faker-js/faker'

export class MockAgent extends GeneralAgentImpl implements Agent {
  public ask = (value: MessageType['text']) => {
    console.log('asking')

    return new Promise(resolve => {
      setTimeout(() => resolve(faker.lorem.text()), 2000)
    })
  }
}
