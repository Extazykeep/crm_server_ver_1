import express from 'express';
import { faker } from '@faker-js/faker';
import { formatMainTask } from './utils.js';
/* import { clientTasks, clients } from './data.js'; */
const port = 5000;
const app = express();
const currentDate = new Date();

let clientTasks = [
    /*  {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        name: 'Some Project',
        id: 'ProjectSample',
        progress: 25,
        type: 'project',
        displayOrder: 3,
    }, */
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            2,
            12,
            28
        ),
        name: 'Позвонить клиенту',
        id: 'Task 0',
        progress: 45,
        dependencies: ['1'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            4,
            0,
            0
        ),
        name: 'Уточнить время доставки',
        id: 'Task 1',
        progress: 25,
        dependencies: ['1'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            8,
            0,
            0
        ),
        name: 'Оформить заявку',
        id: 'Task 2',
        progress: 10,
        dependencies: ['2'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            9,
            0,
            0
        ),
        name: 'Перезвонить клиенту',
        id: 'Task 3',
        progress: 2,
        dependencies: ['2'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
        name: 'Review',
        id: 'Task 4',
        type: 'task',
        progress: 70,
        dependencies: ['3'],
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            2,
            12,
            28
        ),
        name: 'Позвонить клиенту',
        id: 'Task 0',
        progress: 45,
        dependencies: ['4'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 3),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            4,
            0,
            0
        ),
        name: 'Уточнить время доставки',
        id: 'Task 1',
        progress: 25,
        dependencies: ['5'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            8,
            0,
            0
        ),
        name: 'Оформить заявку',
        id: 'Task 2',
        progress: 10,
        dependencies: ['6'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            9,
            0,
            0
        ),
        name: 'Перезвонить клиенту',
        id: 'Task 3',
        progress: 2,
        dependencies: ['7'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
        name: 'Review',
        id: 'Task 4',
        type: 'task',
        progress: 70,
        dependencies: ['8'],
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            2,
            12,
            28
        ),
        name: 'Позвонить клиенту',
        id: 'Task 0',
        progress: 45,
        dependencies: ['10'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            4,
            0,
            0
        ),
        name: 'Уточнить время доставки',
        id: 'Task 1',
        progress: 25,
        dependencies: ['11'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            8,
            0,
            0
        ),
        name: 'Оформить заявку',
        id: 'Task 2',
        progress: 10,
        dependencies: ['12'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            9,
            0,
            0
        ),
        name: 'Перезвонить клиенту',
        id: 'Task 3',
        progress: 2,
        dependencies: ['13'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
        name: 'Review',
        id: 'Task 4',
        type: 'task',
        progress: 70,
        dependencies: ['14'],
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            2,
            12,
            28
        ),
        name: 'Позвонить клиенту',
        id: 'Task 0',
        progress: 45,
        dependencies: ['15'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            4,
            0,
            0
        ),
        name: 'Уточнить время доставки',
        id: 'Task 1',
        progress: 25,
        dependencies: ['16'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            8,
            0,
            0
        ),
        name: 'Оформить заявку',
        id: 'Task 2',
        progress: 10,
        dependencies: ['16'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            9,
            0,
            0
        ),
        name: 'Перезвонить клиенту',
        id: 'Task 3',
        progress: 2,
        dependencies: ['17'],
        type: 'task',
        project: 'ProjectSample',
        displayOrder: 3,
    },
    {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
        name: 'Review',
        id: 'Task 4',
        type: 'task',
        progress: 70,
        dependencies: ['17'],
        project: 'ProjectSample',
        displayOrder: 3,
    },
];
let clients = [
    {
        id: '1',
        title: 'CDD1049',
        amount: 30.5,
        customer: 'Ekaterina Tankova',
        date: '2022-06-19',
        status: 'Pending',
        statusId: 1,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '2',
        title: 'CDD1048',
        amount: 25.1,
        customer: 'Cao Yu',
        date: '2022-06-18',
        status: 'Delivered',
        statusId: 1,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '3',
        title: 'CDD1047',
        amount: 10.99,
        customer: 'Alexa Richardson',
        date: '2022-05-12',
        status: 'Refunded',
        statusId: 1,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '4',
        title: 'CDD1046',
        amount: 96.43,
        customer: 'Anje Keizer',
        date: '2022-06-18',
        status: 'Pending',
        statusId: 2,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '5',
        title: 'CDD1045',
        amount: 32.54,
        customer: 'Clarke Gillebert',
        date: '2022-06-22',
        status: 'Delivered',
        statusId: 2,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '6',
        title: 'CDD1044',
        amount: 16.76,
        customer: 'Adam Denisov',
        date: '2022-06-05',
        status: 'Delivered',
        statusId: 3,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '7',
        title: 'CDD1049',
        amount: 30.5,
        customer: 'Ekaterina Tankova',
        date: '2022-06-11',
        status: 'Pending',
        statusId: 3,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '8',
        title: 'CDD1048',
        amount: 25.1,
        customer: 'Cao Denisov',
        date: '2022-06-12',
        status: 'Delivered',
        statusId: 4,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '9',
        title: 'CDD1047',
        amount: 10.99,
        customer: 'Ekaterina Richardson',
        date: '2022-06-25',
        status: 'Refunded',
        statusId: 2,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '10',
        title: 'CDD1046',
        amount: 96.43,
        customer: 'Clarke Keizer',
        date: '2022-06-17',
        status: 'Pending',
        statusId: 4,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '11',
        title: 'CDD1045',
        amount: 32.54,
        customer: 'Adam Gillebert',
        date: '2022-06-22',
        status: 'Delivered',
        statusId: 5,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '12',
        title: 'CDD1044',
        amount: 16.76,
        customer: 'Anje Denisov',
        date: '2022-06-27',
        status: 'Delivered',
        statusId: 6,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '13',
        title: 'CDD1049',
        amount: 30.5,
        customer: 'Ekaterina Tankova',
        date: '2022-06-19',
        status: 'Pending',
        statusId: 1,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '14',
        title: 'CDD1048',
        amount: 25.1,
        customer: 'Cao Yu',
        date: '2022-06-18',
        status: 'Delivered',
        statusId: 1,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '15',
        title: 'CDD1047',
        amount: 10.99,
        customer: 'Alexa Richardson',
        date: '2022-05-12',
        status: 'Refunded',
        statusId: 1,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '16',
        title: 'CDD1046',
        amount: 96.43,
        customer: 'Anje Keizer',
        date: '2022-06-18',
        status: 'Pending',
        statusId: 2,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '17',
        title: 'CDD1045',
        amount: 32.54,
        customer: 'Clarke Gillebert',
        date: '2022-06-22',
        status: 'Delivered',
        statusId: 2,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '18',
        title: 'CDD1044',
        amount: 16.76,
        customer: 'Adam Denisov',
        date: '2022-06-05',
        status: 'Delivered',
        statusId: 3,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '19',
        title: 'CDD1049',
        amount: 30.5,
        customer: 'Ekaterina Tankova',
        date: '2022-06-11',
        status: 'Pending',
        statusId: 3,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '20',
        title: 'CDD1048',
        amount: 25.1,
        customer: 'Cao Denisov',
        date: '2022-06-12',
        status: 'Delivered',
        statusId: 4,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '21',
        title: 'CDD1047',
        amount: 10.99,
        customer: 'Ekaterina Richardson',
        date: '2022-06-25',
        status: 'Refunded',
        statusId: 2,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '22',
        title: 'CDD1046',
        amount: 96.43,
        customer: 'Clarke Keizer',
        date: '2022-06-17',
        status: 'Pending',
        statusId: 4,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '23',
        title: 'CDD1045',
        amount: 32.54,
        customer: 'Adam Gillebert',
        date: '2022-06-22',
        status: 'Delivered',
        statusId: 5,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
    {
        id: '24',
        title: 'CDD1044',
        amount: 16.76,
        customer: 'Anje Denisov',
        date: '2022-06-27',
        status: 'Delivered',
        statusId: 6,
        email: faker.internet.email(),
        phone: faker.phone.number(),
    },
];
let leads = [
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'Active',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '1',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'Active',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '1',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'inActive',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '2',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'inActive',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '2',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'Active',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '3',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'Active',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '4',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'inActive',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '5',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'inActive',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '6',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'Active',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '7',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'Active',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '7',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'inActive',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '8',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'inActive',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '8',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'Active',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '9',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'Active',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '10',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'inActive',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '11',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'inActive',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '15',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'Active',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '15',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'Active',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '16',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'inActive',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '16',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'inActive',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '17',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'Active',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '18',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'inActive',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '2',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'Active',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '3',
    },
    {
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        date: '2022-06-19',
        status: 'inActive',
        product: faker.commerce.product(),
        phone: faker.phone.number(),
        relatedClientId: '1',
    },
];
let usersData = [
    { user: { email: 'kek@gmail.com', password: '123' }, token: '1a2b3c' },
    { user: { email: 'lol@gmail.com', password: '321' }, token: '1q2w3e' },
];
const notifications = [
    { id: '1', message: 'Выгулять собаку', status: 'not done' },
    { id: '2', message: 'Выгулять кота', status: 'done' },
    { id: '3', message: 'Выгулять кролика', status: 'not done' },
];

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );

    next();
});

app.use(express.json());

app.get('/clients', (req, res) => {
    if (req.headers.cookie.split(';')[0].includes('jwt')) {
        res.send(JSON.stringify(clients));
    } else {
        res.status(403).send('not enough rights');
    }
});

app.get('/notifications', (req, res) => {
    res.send(JSON.stringify(notifications));
});

app.get('/alltasks', (req, res) => {
    if (req.headers.cookie.split(';')[0].includes('jwt')) {
        res.send(JSON.stringify(clientTasks));
    } else {
        res.status(403).send('not enough rights');
    }
});

app.get('/tasks/:id', (req, res) => {
    const mainTaskFormed = formatMainTask(
        clients.find((client) => {
            return client.id === req.params.id;
        })
    );
    let currentTasks = clientTasks.filter(
        (task) => task.dependencies[0] === req.params.id
    );
    let result = currentTasks.length
        ? JSON.stringify([mainTaskFormed, ...currentTasks])
        : JSON.stringify({ message: 'No tasks for this client anymore' });

    res.send(result);
});

app.get('/clientleads/:id', (req, res) => {
    const { id } = req.params;
    let result = leads.filter((lead) => {
        return lead.relatedClientId === id;
    });
    res.send(result);
});

app.post('/tasktimes/:id', (req, res) => {
    const newClientTasks = clientTasks.map((item) => {
        return item.id === req.body.id ? { ...item, ...req.body } : item;
    });
    clientTasks = newClientTasks;
    res.send('1');
});

app.post('/clients/:id', (req, res) => {
    const { id, field, newValue, newPosition } = req.body;
    const updatedClients = clients.map((client) => {
        return client.id === id ? { ...client, [field]: newValue } : client;
    });
    clients = updatedClients;
    setTimeout(() => {
        res.send('1');
    }, 500);
});

app.post('/login', (req, res) => {
    const { email, password, withToken } = req.body;

    const userExists = usersData.find(({ user }) => {
        return user.email === email && user.password === password;
    });
    if (userExists && !withToken) {
        console.log('no token');
        res.cookie('isAuth', true, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            path: '/',
            domain: 'localhost',
        });
        res.send(JSON.stringify({ userName: userExists.user.email }));
        return;
    }
    if (userExists && withToken) {
        console.log('token');
        res.cookie('jwt_token', userExists.token, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            path: '/',
            domain: 'localhost',
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
        });
        res.cookie('isAuth', true, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            path: '/',
            domain: 'localhost',
        });
        res.send(JSON.stringify({ userName: userExists.user.email }));
    } else {
        res.status(500).send('Something broke!');
    }
    /* const { id, field, newValue, newPosition } = req.body;
       setTimeout(() => {
        res.send('1');
    }, 500); */
});

app.post('/logout', (req, res) => {
    const { email } = req.body;
    const userExists = usersData.find(({ user }) => {
        return user.email === email;
    });
    if (userExists) {
        res.clearCookie('isAuth');
        res.clearCookie('jwt_token');
        res.send('1');
    } else {
        res.status(500).send('Something broke!');
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`);
});
