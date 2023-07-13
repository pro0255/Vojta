import { Entity } from '@/constants/entities/Entity'
import { InteractiveItemProps } from '@/components/DesignSystem/Blocks/InteractiveItem'

export class Factory {
  public static interactiveItemsProps = (
    entity: Entity
  ): InteractiveItemProps => {
    return {
      link: entity.webLink,
      text: entity.abbreviatedName,
      thumbnailLink: entity.getImage(),
    }
  }
}
