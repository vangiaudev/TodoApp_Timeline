import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Wrapper } from "./styled";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    const styles ={margin: "12px"}
    return (
        <Container>
            <Header
                title="Chi tiết công việc"
            />
            <div style={styles}
                className="fb-share-button"
                data-href="https://vangiaurecca.github.io/TodoApp_Timeline/wKALyiV8WJIsR-KHsuzCP"
                data-layout="box_count"
                data-size="large"
            >
                <a
                    target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvangiaurecca.github.io%2FTodoApp_Timeline%2F&amp;src=sdkpreparse" 
                    className="fb-xfbml-parse-ignore">
                    Chia sẻ</a></div>
            <Section
                title={task ? task.content : "Không tìm thấy công việc😟"}
                body={!!task && (
                    <>
                        <Wrapper>
                            <strong>Hoàn thành:</strong> {task.done ? "Yes" : "No"}
                        </Wrapper>
                    </>
                )}
            />
        </Container>
    );
};

export default TaskPage;