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
          title: 'Age vs. Weight comparison',
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
console.log(data);
