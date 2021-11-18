export interface ProcessMethodAndIngredient {
  id: number;
  title: string;
  type: string;
  isClicked?: number[];
  handleClickId?(id: number): void;
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
  clickedId: number[];
  handleClickId?(id: number): void;
  isIngredientClicked: boolean;
  handleIngredientClick: React.MouseEventHandler<HTMLDivElement>;
  handleRemoveIdAll: React.MouseEventHandler<HTMLDivElement>;
}
