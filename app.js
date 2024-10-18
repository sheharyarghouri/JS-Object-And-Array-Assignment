var obj = ["table1", "table2", "table3", "table4"]


let arr = [
    [
        {
            sno: '1',
            model: "Swift",
            price: "250",
            unit: "9",
            total: "2250",
        },
        {
            sno: '2',
            model: "Cultus",
            price: "500",
            unit: "5",
            total: "2500",
        },
        {
            sno: '3',
            model: "Alto",
            price: "250",
            unit: "10",
            total: "2500",
        },
        {
            sno: '4',
            model: "Mehran",
            price: "250",
            unit: "2",
            total: "500",
        }
    ],

    [
        {
            sno: '1',
            model: "Model X",
            price: "250",
            unit: "2",
            total: "500",
        },
        {
            sno: '2',
            model: "Model Y",
            price: "250",
            unit: "1",
            total: "250",
        },
        {
            sno: '3',
            model: "Model s",
            price: "250",
            unit: "7",
            total: "1750",
        },
        {
            sno: '4',
            model: "Cybertruck",
            price: "250",
            unit: "6",
            total: "1500",
        }
    ],

    [
        {
            sno: "1",
            model: "corolla",
            price: "250",
            unit: "3",
            total: "750",
        },
        {
            sno: '2',
            model: "Land Crusier",
            price: "250",
            unit: "10",
            total: "2500",
        },
        {
            sno: '3',
            model: "Prius",
            price: "250",
            unit: "8",
            total: "2000",
        },
        {
            sno: '4',
            model: "Fortuner",
            price: "250",
            unit: "5",
            total: "1250",
        }
    ],

    [
        {
            sno: "1",
            model: "Civic",
            price: "250",
            unit: "1",
            total: "250",
        },
        {
            sno: "2",
            model: "Accord",
            price: "250",
            unit: "3",
            total: "750",
        },
        {
            sno: "3",
            model: "City",
            price: "250",
            unit: "7",
            total: "1750",
        },
        {
            sno: "4",
            model: "Type-R",
            price: "250",
            unit: "4",
            total: "1000",
        }
    ]

];

var rt = document.getElementById(obj[0])


for (var i = 0; i < arr.length; i++) {

    var pl = document.getElementById(obj[i])

    for (var j = 0; j < arr[i].length; j++) {

        pl.innerHTML += `

<tr>
    <td>${arr[i][j].sno}</td>
    <td>${arr[i][j].model}</td>
    <td>${arr[i][j].price}</td>
    <td>${arr[i][j].unit}</td>
    <td>${arr[i][j].total}</td>
</tr>
    
        `}
}
