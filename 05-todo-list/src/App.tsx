import Text from "./components/text";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react"
import CheckIcon from "./assets/icons/Check-Regular.svg?react"
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react"
import PlusIcon from "./assets/icons/Plus-Regular.svg?react"
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import XIcon from "./assets/icons/X-Regular.svg?react"

import Icon from "./components/icon";
import Badge from "./components/badge";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant={"body-md-bold"}>
            Lear o dog para passear
        </Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-pink-dark"/>
        <Icon svg={TrashIcon}/>
        <Icon svg={CheckIcon}/>
        <Icon svg={PencilIcon}/>
        <Icon svg={PlusIcon}/>
        <Icon svg={SpinnerIcon}/>
        <Icon svg={XIcon}/>
      </div>
      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>
    </div>
  )
}