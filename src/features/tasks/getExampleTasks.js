export const getExampleTasks = async () => {
    const response = await fetch("/TodoApp_Timeline/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};
