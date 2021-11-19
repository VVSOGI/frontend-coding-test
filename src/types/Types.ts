export interface ProcessMethodAndIngredient {
  id: number;
  title: string;
  type: string;
  isClicked?: string[];
  handleClickItem?(selectItem: string, itemType: string): void;
}

export interface FilterOnOff {
  isFilterOn: boolean;
}

export interface ClickedType {
  $clickProcessBtn?: string;
  $clickIngredientBtn?: string;
}

export interface ChatType {
  chatType?: boolean;
}

export interface ClickProps {
  isClicked: boolean;
}

export interface RequestApiType {
  amount: number;
  client: string;
  count: number;
  due: string;
  id: number;
  material: string[];
  method: string[];
  status: string;
  title: string;
  docs?: number;
}

export interface RequestCardPropsType {
  props: RequestApiType;
}

export interface RequestMainCardType {
  requestItem: RequestApiType[];
}

export interface FilterSelectZoneType {
  handleProcessClick: React.MouseEventHandler<HTMLDivElement>;
  isProcessClicked: boolean;
  clickedItem: string[];
  handleClickItem?(selectItem: string, itemType: string): void;
  isIngredientClicked: boolean;
  handleIngredientClick: React.MouseEventHandler<HTMLDivElement>;
  handleRemoveIdAll: React.MouseEventHandler<HTMLDivElement>;
  handleConsulting(isSwitchOn?: boolean): void;
  isConsulting: boolean;
}

export interface SwitchOnOffType {
  switchOnOff: boolean;
}

export interface isConsultingType {
  haveConsulting: string;
}

export interface DivideClickItemType {
  processMethod: string[];
  ingredient: string[];
}

export interface ConsultingSwitchPropsType {
  handleConsulting(isSwitchOn?: boolean): void;
  isConsulting: boolean;
}

export interface hiddenComponentOutType {
  handleHiddenComponent(): void;
  hiddenComponentOut: boolean;
}

export interface hiddenComponentOutPropsCSSType {
  hiddenComponentOut: string;
}

export interface NavigationPropsType {
  handleHiddenComponent(): void;
  hiddenComponentOut: boolean;
}

export interface NavigationPropsCSSType {
  barClicked: string;
}
