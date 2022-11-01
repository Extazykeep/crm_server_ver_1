export const formatMainTask = (task) => {
    const newMainTask = {};
    const currentDate = new Date();
    newMainTask.name = task.customer;
    newMainTask.id = task.id;
    newMainTask.progress = 25;
    newMainTask.displayOrder = 1;
    newMainTask.project = 'project';
    newMainTask.start = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    );
    newMainTask.end = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        15
    );
    return newMainTask;
};
