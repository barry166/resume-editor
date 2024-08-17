export interface BasicComponentProps {
  value: any
  onChange: (value: any) => void
}

export interface ItemWithId {
  id: string;
}

export interface RenderItemProps<T> {
  item: T;
  isEditing: boolean;
  setEditing: (id: string | null) => void;
}