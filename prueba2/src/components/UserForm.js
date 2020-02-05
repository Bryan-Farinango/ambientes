import React from "react";
import Tasks from "../services/users";
import TasksList from "../services/list";
import { Card } from 'antd';
import 'antd/dist/antd.css';

class UserForm extends React.Component{


    state = {

        title: " ",
        completed: " ",
        tasks: [],
        tasksList: []
    }


    handleAddChange = (e) => {
        this.setState({
            title: e.target.value
        })

    }

    async componentDidMount() {
        const tasks = await Tasks.getUsers();
        this.setState((initialState) => {
            return {
                tasks: [
                    ...initialState.tasks,
                    ...tasks
                ]
            }
        })
    }

    //valido si el id del usuario es igual al del todolist
    async handleList(userId) {
        const tasks = await TasksList.getList();

        const userTasks  = [];
            tasks.forEach((task)=>{
            if(task.userId === userId){
                userTasks.push(task);
            }
        })
        console.log(userTasks);

        this.setState((initialState) => {
            return {

                tasksList: userTasks
            }
        })
    }

     //agregar tareas
    handleAddTask = (newTask) => {



        this.setState((currentState) => {
            return{


                tasksList: [
                    ...currentState.tasksList,
                    newTask
                ]



            }
        })

    }



    render() {

        const { tasks, tasksList, titleAdd} = this.state;
        return(
        <div>





                {
                    tasks.map((task) =>

                        <div style={{ background: '#ECECEC', padding: '30px' }}>

                            <Card   style={{ width: 300 }}>
                            {task.id} <br/> {task.name } <br/>{task.username} <br/> {task.email} <br/> {task.phone}
                            <button onClick={() => this.handleList(task.id)}>{this.props.buttonText}</button>

                            <br/>
                            </Card>
                        </div>



                    )

                }




            <ul>
                {

                    tasksList.map((task) =><li>{task.title}</li>)
                }
            </ul>


            <div>
                <ul>
                <input type="text" id="taskInput" onChange={this.handleAddChange} value={titleAdd}/>
                <button onClick={this.handleAddTask}>{this.props.buttonTextAdd}</button>
                </ul>
            </div>



        </div>
        );
    }
}

export default UserForm;