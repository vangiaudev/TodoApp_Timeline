import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import SampletasksButton from "./SampleTasksButton";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header
        title="QUẢN LÝ CÔNG VIỆC"
      />

      <Section
        title="Thêm mới"
        body={<Form />}
        extraContent={<SampletasksButton />}
      />

      <Section
        title="Tìm kiếm"
        body={<Search />}
      />

      <Section
        title="Danh sách các công việc"
        body={<TaskList />}
        extraContent={<Buttons />}
      />
    </Container>
  );
};

export default TasksPage;