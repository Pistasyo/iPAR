export const lineChartData = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],

    datasets: [
        {
            label: "Me",
            data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
            borderColor: "rgb(75, 192, 192)"
        },
        {
            label: "Shadow",
            data: [2000, 6000, 1500, 8000, 4000, 9000, 9000],
            borderColor: "rgb(111, 82, 58)"
        },
    ],
};

export const barChartData = {
    labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment', 'Transportation'],
    datasets: [
        {
            label: 'Expenses',
            data: [1200, 300, 150, 180, 100],
            backgroundColor: ['rgb(201, 235, 132)'],
            borderColor: ['rgb(235, 172, 154)'],
            borderWidth: 1
        },
        {
            label: 'Wala Lang',
            data: [5000, 1300, 2150, 580, 1000],
            backgroundColor: ['rgba(255, 99, 132, 0,2)'],
            borderColor: ['rgba(109, 97, 111, 1)'],
            borderWidth: 1
        }
    ]
}


export const pieChartData = {
    labels: ['Facebook', 'Instagram', 'Twitter', 'YouTube', 'Linkedin'],
    datasets: [
        {
            label: 'Time Spent',
            data: [120, 60, 30, 90, 45],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)'
            ],
            hoverOffset: 4,
        },
    ],
};