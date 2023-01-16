
$('document').ready(function(){
    $('.nextBtn').click(function(){
      let current = document.querySelector('.current'); 
      let prev = document.querySelector('.prev'); 
      let next = document.querySelector('.next'); 
      $(current).removeClass('current'); 
      $(prev).removeClass('prev'); 
      $(next).removeClass('next'); 
      
       
      $(current).addClass('prev'); 
      $(prev).addClass('next'); 
      $(next).addClass('current'); 
    })
    
    /
    $('.prevBtn').click(function(){
      
      let current = document.querySelector('.current'); 
      let prev = document.querySelector('.prev'); 
      let next = document.querySelector('.next'); 
      
      
      $(current).removeClass('current'); 
      $(prev).removeClass('prev'); 
      $(next).removeClass('next'); 
      
      
      $(current).addClass('next'); 
      $(prev).addClass('current'); 
      $(next).addClass('prev'); 
    })
  });
  
  Eleve = {
    type: "bar", // Graphique de type bar
    data: {
        labels: ["Français","Anglais","Math","Art","Eps"], 
        datasets: [{
            label: "Bac blanc", 
            data: [14,18,10,19,15],
            backgroundColor: "white", 
            borderColor: "white", 
            },
            {
            label:"Baccalaureat",
            data: [18,5,10,15,14],
            backgroundColor: "grey",
            },
            {
            label:"Rattrapage",
            data:[17,18,12,19,14],
            backgroundColor: "red",
            },
    ]
    },
    }
    context = document.getElementById("myChart")
    let myChart = new Chart(context,Eleve);