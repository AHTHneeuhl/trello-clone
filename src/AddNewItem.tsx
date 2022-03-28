import { useState } from "react";
import { NewItemForm } from "./NewItemForm";
import { AddItemButton } from "./styles";

type AddItemButtonProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

export const AddNewItem = (props: AddItemButtonProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
