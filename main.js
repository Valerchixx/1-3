let userTable = document.getElementById('userTable');


function DataTable(config, data) {
  let Table = document.createElement('table');
  Table.classList.add('table')
  let thead = document.createElement('thead')
  let Row = document.createElement('tr');

  Table.appendChild(thead);
  thead.appendChild(Row);

  for(let i = 0;i < config.columns.length;i++){
      let cellTH = document.createElement('th');
      cellTH.innerHTML = config.columns[i].title;
      Row.appendChild(cellTH);
      cellTH.classList.add('Th')
    }

  let tbody = document.createElement('tbody');

  Table.insertAdjacentElement('beforeend', tbody);

  for(i = 0; i < data.length;i++){
    let Rows = document.createElement('tr');
    Rows.classList.add('rows')
    for(j = 0;j < Object.keys(data[i]).length;j++){
      let cell = document.createElement('td');
      cell.innerHTML = Object.values(data[i])[j];
      Rows.appendChild(cell);
      cell.classList.add('bord')
    }
    tbody.appendChild(Rows)
  }
userTable.appendChild(Table)
}

 
const config1 = {
   parent: '#usersTable',
   columns: [
     {title: '№', value: 'id'},
     {title: 'Имя', value: 'name'},
     {title: 'Фамилия', value: 'surname'},
     {title: 'Возраст', value: 'age'},
   ]
};
 
const users = [
   {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
   {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
];
 
DataTable(config1,users)