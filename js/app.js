// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['bar']});
google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(assist);
    google.charts.setOnLoadCallback(springResult);
    google.charts.setOnLoadCallback(numberOfGirls);
    google.charts.setOnLoadCallback(satisfaction);
    google.charts.setOnLoadCallback(teacher);
    google.charts.setOnLoadCallback(jedi);
    google.charts.setOnLoadCallback(achievement);
    google.charts.setOnLoadCallback(net);

    function assist() {
        var data = google.visualization.arrayToDataTable([
          ['Semana', 'Asistencia'],
          [ 1,      58],
          [ 2,      58],
          [ 3,     49],
          [ 4,      53],
          [ 5,      50],
          [ 6,    60]
        ]);

        var options = {
          title: 'Asistencia semanal',
          hAxis: {title: 'Semana', minValue: 0, maxValue: 6},
          vAxis: {title: 'Asistencia', minValue: 0, maxValue: 65},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('contenedor'));
        chart.draw(data, options);
      }

      function numberOfGirls() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Activas', 'Desertoras'],
          ['S1',  140,      4],
          ['S2',  127,      6],
          ['S3',  106,       1],
          ['S4',  97,      5]
        ]);

        var options = {
          title: '',
          curveType: '',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.AreaChart(document.getElementsByClassName('contenedor-data2')[0]);
        chart.draw(data, options);
      }

      function springResult() {
        var data = google.visualization.arrayToDataTable([
          ['', 'Técnico', 'HSE'],
          ['S1', 1000, 400],
          ['S2', 1170, 460],
          ['S3', 660, 1120],
          ['S4', 1030, 540]
        ]);

        var options = {
          chart: {
            title: '',
            subtitle: '',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('cont'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
      };

      function satisfaction(){
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['2004',  1000],
          ['2005',  1170],
          ['2006',  660],
          ['2007',  1030]
        ]);

        var options = {
          title: '',
          curveType: 'function',
          legend: { position: 'none' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('graph1'));
        chart.draw(data, options);
      }

      function teacher(){
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['2004',  1000],
          ['2005',  1170],
          ['2006',  660],
          ['2007',  1030]
        ]);

        var options = {
          title: '',
          curveType: 'function',
          legend: { position: 'none' }
        };

        var chart = new google.visualization.LineChart(document.getElementsByClassName('graph-left2')[1]);
        chart.draw(data, options);
      }

      function jedi(){
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['2004',  1000],
          ['2005',  1170],
          ['2006',  660],
          ['2007',  1030]
        ]);

        var options = {
          title: '',
          curveType: 'function',
          legend: { position: 'none' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('graph2'));
        chart.draw(data, options);
      }

      function achievement() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['2004',  1000],
          ['2005',  1170],
          ['2006',  660],
          ['2007',  1030]
        ]);

        var options = {
          title: '',
          curveType: 'function',
          legend: { position: 'none' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('graph3'));
        chart.draw(data, options);
      };

      function net() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['2004',  1000],
          ['2005',  1170],
          ['2006',  660],
          ['2007',  1030]
        ]);

        var options = {
          title: '',
          curveType: 'function',
          legend: { position: 'none' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('graph4'));
        chart.draw(data, options);
      }

// Puedes hacer uso de la base de datos a través de la variable `data`
//console.log(data);
//------------------------------------------------------------------------------tabs
var mostrarOcultar = function(e){
  //console.log(e.target.dataset.tabSeleccionado);//entrega el string de el tab tabSeleccionado
  var tabSeleccionado = e.target.dataset.tabSeleccionado;
    //creo mis variables para no tener que escribir document.getElementById en cada seccion
  var resumen= document.getElementById('overview');
  var estudiantes= document.getElementById('students');
  var staff= document.getElementById('staff');
  if(tabSeleccionado === 'tabResumen'){
    console.log('holo resumen'); //ocultar estudiantes y staff y mostrar resumen
      //oculto estudiantes y staff
    estudiantes.style.display='none';
    staff.style.display='none';
      //muestro resumen
    resumen.style.display= 'block'


  }else if(tabSeleccionado==='tabEstudiantes'){
    console.log('holo estudiantes'); //ocultar resumen y staff y mostrar estudiantes
    //oculto resumen y staff
  resumen.style.display='none';
  staff.style.display='none';
    //muestro estudiantes
  estudiantes.style.display= 'block'
  }else if(tabSeleccionado==='tabStaff'){
    console.log('holo staff');//mostrar staff y ocultar resumen y alumnos
    //oculto resumen y alumnos
  estudiantes.style.display='none';
  resumen.style.display='none';
    //muestro staff
  staff.style.display= 'block'
  }

}
var cargarPagina = function(){/*carga todos los eventos una sola vez cuando cargas la pagina */
  var resumen= document.getElementById('overview');
  var estudiantes= document.getElementById('students');
  var staff= document.getElementById('staff');
  var elementosTab = document.getElementsByClassName('tab')
  //muestro solo resumen cuando cargue la pagina
  resumen.style.display='block';
  estudiantes.style.display='none';
  staff.style.display= 'none'
  for(var i = 0; i< elementosTab.length; i++){
    elementosTab[i].addEventListener('click', mostrarOcultar);
  }
}
cargarPagina ();
//-------------------------------------------------------menu profile
