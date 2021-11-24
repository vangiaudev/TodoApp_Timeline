import { ButtonAdditional, ButtonsDiv } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const SampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    return (
        <ButtonsDiv>
            <ButtonAdditional
                disabled={loading}
                onClick={() => dispatch(fetchExampleTasks())}>
                {loading
                    ? "Đang tải..."
                    : "Tải xuống dữ liệu mẫu"
                }
            </ButtonAdditional>

        </ButtonsDiv>
    );
};

export default SampleTasksButton;
