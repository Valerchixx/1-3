let userTable = document.getElementById('userTable');

function DataTable(config, data) {
  let table = document.createElement('table');
  table.classList.add('table')
  let tHead = document.createElement('thead')
  let row = document.createElement('tr');

  table.appendChild(tHead);
  tHead.appendChild(row);

  for(let i = 0; i < config.columns.length; i++){
      let cellTh = document.createElement('th');
      cellTh.innerHTML = config.columns[i].title;
      row.appendChild(cellTh);
      cellTh.classList.add('Th')
    }

  let tBody = document.createElement('tbody');

  table.insertAdjacentElement('beforeend', tBody);

  for(i = 0; i < data.length;i++){
    let rows = document.createElement('tr');
    rows.classList.add('rows')
    for(j = 0;j < Object.keys(data[i]).length;j++){
      let cell = document.createElement('td');
      cell.innerHTML = Object.values(data[i])[j];
      rows.appendChild(cell);
      cell.classList.add('bord')
    }
    tBody.appendChild(rows)
  }
userTable.appendChild(table)
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
