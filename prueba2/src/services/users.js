const getUsers = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    return await data.json();
};

const Tasks = {
    getUsers
};

export default Tasks;