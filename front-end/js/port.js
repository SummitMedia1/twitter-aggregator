 $(document).ready(function(){
$('.slider').slider();

$('.parallax').parallax();

 $('#content').pushpin({
      top: 0,
      bottom: 1000,
      offset: 0
    });
 $(".fadein").hide();

var options = [
      {selector: '.showNav', offset: 0, callback: function(el) {
      	 $(".fadein").fadeIn(500);
      }}, {selector: '.advancedrow', offset: 200, callback: function(el) {
         Materialize.showStaggeredList($(el));
      }}  
    ];
    Materialize.scrollFire(options);
});

 // Chart Stuff

var myChart = document.getElementById('myChart').getContext('2d');
        var myChart2 = document.getElementById('myChart2').getContext('2d');
        var myChart3 = document.getElementById('myChart3').getContext('2d');
        var myChart4 = document.getElementById('myChart4').getContext('2d');
        var myChart5 = document.getElementById('myChart5').getContext('2d');
        var myChart6 = document.getElementById('myChart6').getContext('2d');

        // Global Options

        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';

        var coloPopChart = new Chart(myChart, {
            type:'pie',
            data:{
              labels:['Male','Female', 'Unidentified'],
              datasets:[{
                label:'Tweets',
                data:[
                    2,
                    3,
                    1,
                
                  ],
                  backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 132, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)'

                  ],
                  borderWidth:1,
                  borderColor:'#777',
                  hoverBorderWidth:3,
                  hoverBorderColor:'#000'
               }]
            },
            options:{
              title:{
                display:true,
                text:'Male || Female || Unidentified ',
                fontSize:25
              },
              legend:{
                display:false,
                position:'right',
                labels:{
                  fontColor:'#000'
                }
              },
              layout:{
                padding:{
                  left:50,
                  right:0,
                  bottom:0,
                  top:0
                }
              },
              tooltips:{
                enabled:true
              }
            }

        });

        var coloPopChart = new Chart(myChart2, {
            type:'pie',
            data:{
              labels:['Positive', 'Negative', 'Neutral'],
              datasets:[{
                label:'Tweets',
                data:[
                    600158,
                    416427,
                    325078,
                  ],
                  backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 132, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)'

                  ],
                  borderWidth:1,
                  borderColor:'#777',
                  hoverBorderWidth:3,
                  hoverBorderColor:'#000'
               }]
            },
            options:{
              title:{
                display:true,
                text:'Positive || Negative || Neutral ',
                fontSize:25
              },
              legend:{
                display:false,
                position:'right',
                labels:{
                  fontColor:'#000'
                }
              },
              layout:{
                padding:{
                  left:50,
                  right:0,
                  bottom:0,
                  top:0
                }
              },
              tooltips:{
                enabled:true
              }
            }

        });

        var coloPopChart = new Chart(myChart3, {
            type:'horizontalBar',
            data:{
              labels:['Total Tweets', '', '', 'Criteria in Text'],
              datasets:[{
                label:'Tweets',
                data:[
                    600158,
                    0,
                    0,
                    143986,
                  ],
                  backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 132, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)'

                  ],
                  borderWidth:1,
                  borderColor:'#777',
                  hoverBorderWidth:3,
                  hoverBorderColor:'#000'
               }]
            },
            options:{
              title:{
                display:true,
                text:'Total Tweets',
                fontSize:25
              },
              legend:{
                display:false,
                position:'right',
                labels:{
                  fontColor:'#000'
                }
              },
              layout:{
                padding:{
                  left:50,
                  right:0,
                  bottom:0,
                  top:0
                }
              },
              tooltips:{
                enabled:true
              }
            }

        });

        var coloPopChart = new Chart(myChart4, {
            type:'doughnut',
            data:{
              labels:['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Thornton'],
              datasets:[{
                label:'Population',
                data:[
                    600158,
                    416427,
                    325078,
                    143986,
                    142980,
                    118772
                  ],
                  backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 132, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)'

                  ],
                  borderWidth:1,
                  borderColor:'#777',
                  hoverBorderWidth:3,
                  hoverBorderColor:'#000'
               }]
            },
            options:{
              title:{
                display:true,
                text:'Largest Cities In Colorado',
                fontSize:25
              },
              legend:{
                display:false,
                position:'right',
                labels:{
                  fontColor:'#000'
                }
              },
              layout:{
                padding:{
                  left:50,
                  right:0,
                  bottom:0,
                  top:0
                }
              },
              tooltips:{
                enabled:true
              }
            }

        });

        var coloPopChart = new Chart(myChart5, {
            type:'doughnut',
            data:{
              labels:['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Thornton'],
              datasets:[{
                label:'Population',
                data:[
                    600158,
                    416427,
                    325078,
                    143986,
                    142980,
                    118772
                  ],
                  backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 132, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)'

                  ],
                  borderWidth:1,
                  borderColor:'#777',
                  hoverBorderWidth:3,
                  hoverBorderColor:'#000'
               }]
            },
            options:{
              title:{
                display:true,
                text:'Largest Cities In Colorado',
                fontSize:25
              },
              legend:{
                display:false,
                position:'right',
                labels:{
                  fontColor:'#000'
                }
              },
              layout:{
                padding:{
                  left:50,
                  right:0,
                  bottom:0,
                  top:0
                }
              },
              tooltips:{
                enabled:true
              }
            }

        });

        var coloPopChart = new Chart(myChart6, {
            type:'doughnut',
            data:{
              labels:['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Thornton'],
              datasets:[{
                label:'Population',
                data:[
                    600158,
                    416427,
                    325078,
                    143986,
                    142980,
                    118772
                  ],
                  backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 132, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)'

                  ],
                  borderWidth:1,
                  borderColor:'#777',
                  hoverBorderWidth:3,
                  hoverBorderColor:'#000'
               }]
            },
            options:{
              title:{
                display:true,
                text:'Largest Cities In Colorado',
                fontSize:25
              },
              legend:{
                display:false,
                position:'right',
                labels:{
                  fontColor:'#000'
                }
              },
              layout:{
                padding:{
                  left:50,
                  right:0,
                  bottom:0,
                  top:0
                }
              },
              tooltips:{
                enabled:true
              }
            }

        });

  