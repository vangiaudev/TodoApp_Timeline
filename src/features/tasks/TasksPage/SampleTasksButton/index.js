import { ButtonAdditional, ButtonsDiv } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const SampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    return (
        <ButtonsDiv>
        </ButtonsDiv>
    );
};

export default SampleTasksButton;
