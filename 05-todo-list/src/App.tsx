import Text from "./components/text";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react"
import CheckIcon from "./assets/icons/Check-Regular.svg?react"
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react"
import PlusIcon from "./assets/icons/Plus-Regular.svg?react"
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import XIcon from "./assets/icons/X-Regular.svg?react"

import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";
import InputChecbox from "./components/input-checkbox";
import Card from "./components/card";
import Container from "./components/container";
import Skeleton from "./components/skeleton";

export default function App() {
  return (
    <Container>
    <div className="grid gap-10">
      <div className="flex flex-col gap-1">
        <Text variant={"body-md-bold"}>
            Levar o dog para passear
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
      <div>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
      </div>
      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant={"secondary"}/>
        <ButtonIcon icon={TrashIcon} variant={"tertiary"}/>
      </div>
      <div>
        <InputText />
      </div>
      <div>
        <InputChecbox></InputChecbox>
      </div>
      <div>
        <Card size="md">Olá undo</Card>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-6"></Skeleton>
        <Skeleton className="h-6"></Skeleton>
        <Skeleton className="w-96"></Skeleton>
      </div>
    </div>
    </Container>
  )
}