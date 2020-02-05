const getList = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await data.json();
};

const TasksList = {
    getList
};

export default TasksList;