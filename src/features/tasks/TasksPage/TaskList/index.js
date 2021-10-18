import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { Link, useLocation } from "react-router-dom";
import searchQueryParamName from "../Search/searchQueryParamName";
import { toTask } from "../../../../routes";
import './timeline.css'

import { VerticalTimeline,VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import DoneIcon from '@material-ui/icons/Done';
import StarsIcon from '@material-ui/icons/Stars';

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    return (
            <VerticalTimeline>
            {tasks.map(task => (
                <VerticalTimelineElement 
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={task.time}
                        icon={task.done ? <DoneIcon/> : <WorkIcon />}
                        iconStyle={{ background: 'rgb(33, 150, 343)', color: '#fff' }}
                    >
                        
                        <StyledLink style={{ fontWeight: 'bold', textShadow:'1px 2px 2px black'}}  as={Link} to={toTask({ id: task.id })}>{task.content}</StyledLink>
                        <p></p>
                        <span style={{ color: '#000', fontWeight: 'bold' }}>Trạng thái công việc</span>
                            &nbsp;
                        <Button
                            toggleDone
                            onClick={() => dispatch(toggleTaskDone(task.id))}
                        >
                            {task.done ? "✓" : "X"}
                        </Button>
                        <p></p>
                        <span style={{ color: '#000', fontWeight: 'bold' }}>Xóa</span>
                            &nbsp;
                        <Button
                            remove
                            onClick={() => dispatch(removeTask(task.id))}
                        >
                        &#128465;
                        </Button>

                    </VerticalTimelineElement>
            ))}
             <VerticalTimelineElement icon={<StarsIcon/>}
                    iconStyle={{ background: 'rgba(0, 202, 0, 0.947)', color: '#fff' }}>
            </VerticalTimelineElement>
                           
            </VerticalTimeline>
    );
};

export default TaskList;