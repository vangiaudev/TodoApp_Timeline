import { useSelector, useDispatch } from "react-redux";
import {
    selectIsEveryTaskDone,
    selectAreTasksNotEmpty,
    setAllDone,
} from "../../tasksSlice";
import { ButtonsDiv, ButtonAdditional } from "../Button";

const Buttons = () => {
    const areTasksNotEmpty = useSelector(selectAreTasksNotEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const dispatch = useDispatch();

    return (
        <ButtonsDiv>
            {areTasksNotEmpty && (
                <>
  
                    <ButtonAdditional
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Đánh dấu hoàn thành tất cả
                    </ButtonAdditional>
                </>
            )}
        </ButtonsDiv>
    );
};

export default Buttons;