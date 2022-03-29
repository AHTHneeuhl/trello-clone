import { useDragLayer } from "react-dnd";
import { useAppState } from "./state/AppStateContext";
import { Column } from "./Column";
import { CustomDragLayerContainer } from "./styles";

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <Column
        id={draggedItem.id}
        text={draggedItem.text}
        // ...
      />
    </CustomDragLayerContainer>
  ) : null;
};
