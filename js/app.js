// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['bar']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(springResult);

        function springResult() {
        var data = google.visualization.arrayToDataTable([
          ['Spring', 'Técnico', 'HSE'],
          ['1er spring', 1000, 400],
          ['2do spring', 1170, 460],
          ['3er spring', 660, 1120],
          ['4to spring', 1030, 540]
        ]);

        var options = {
          chart: {
            title: 'Promedios de resultados por Spring',
            subtitle: 'Promedios Técnicos y de HSE',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('contenedor'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
        numberOfGirls();
      }

      function numberOfGirls() {
        var data = google.visualization.arrayToDataTable([
          ['Spring', 'Técnico', 'HSE'],
          ['1er spring', 1000, 400],
          ['2do spring', 1170, 460],
          ['3er spring', 660, 1120],
          ['4to spring', 1030, 540]
        ]);

        var options = {
          chart: {
            title: 'Promedios de resultados por Spring',
            subtitle: 'Promedios Técnicos y de HSE',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('cont'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
