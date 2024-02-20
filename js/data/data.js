const data = {
    tasks:[
        {
            title: 'Reikia pasidaryti arbatos',
            description: 'Reikia butu slapia ir silta',
            status:'todo',
        }, 
        {
            title: 'Reikia pasidaryti arbatos',
            description: 'Reikia butu slapia ir silta',
            status:'in-progress',
        }, 
        {
            title: 'Reikia pasidaryti arbatos',
            description: 'Reikia butu slapia ir silta',
            status:'in-progres',
        }, 
        {
            title: 'Reikia pasidaryti arbatos',
            description: 'Reikia butu slapia ir silta',
            status:'todo',
        }, 
    ],
    columns:[
        {
            title: 'Task ready',
            status: 'todo',
        }, 
        {
            title: 'In progress',
            status: 'in progress',
        },
        {
            title: 'Needs review',
            status: 'review',
        },
        {
            title: 'Done',
            status: 'done',
        }
    ]
    
};

export{data}