import { FormElement, FormButton } from "./styled";
import { Input } from "../../Input";
import { useForm } from "./useForm";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";

const Form = () => {
  const {
    newTaskContent,
    setNewTaskContent,
    inputRef,
    focusInput,
  } = useForm();

  const dispatch = useDispatch();

  const onFormSubmit = (event,) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    if (trimmedNewTaskContent) {

      dispatch(addTask({
        content: trimmedNewTaskContent,
        time: date,
        done: false,
        id: nanoid(),
      }));

      setNewTaskContent("");
    };
  };

  return (
    <FormElement onSubmit={onFormSubmit}>
      <Input
        autoFocus
        ref={inputRef}
        value={newTaskContent}
        placeholder="Nhập tên công việc muốn thêm"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />

      <FormButton onClick={focusInput}>Thêm công việc</FormButton>
    </FormElement>
  );
};

export default Form;