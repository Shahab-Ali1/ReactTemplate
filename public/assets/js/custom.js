// show password on eye icon click
$( ".enter-icon" ).click(function() {
    $(this).children().toggleClass("fa-eye fa-eye-slash");
    var input = $(".enter-input");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});

$( ".confirm-icon" ).click(function() {
    $(this).children().toggleClass("fa-eye fa-eye-slash");
    var input = $(".confirm-input");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});  
  
// show password on eye icon click
$( ".current-icon" ).click(function() {
    $(this).children().toggleClass("fa-eye fa-eye-slash");
    var input = $(".current-input");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});

$('.mark-read').click(function(){
  if($(this).html()=="Mark as Unread"){
      $(this).html("Mark as Read");
      $(this).closest('div.notification-card').toggleClass('blue-card');
  }
  else{
      $(this).html("Mark as Unread");
      $(this).closest('div.notification-card').toggleClass('blue-card');
  }
});

$(document).ready(function() {
  var animation = bodymovin.loadAnimation({
      container: document.getElementById('loti-1'),
      path: '../../assets/images/question.json',
      renderer: 'svg',
      loop: true,
      autoplay: true
  });
});

 $(document).ready(function() {
  var animation = bodymovin.loadAnimation({
      container: document.getElementById('loti-2'),
      path: '../../assets/images/check.json',
      renderer: 'svg',
      loop: true,
      autoplay: true
  });
});

 $(document).ready(function() {
  var animation = bodymovin.loadAnimation({
      container: document.getElementById('loti-3'),
      path: '../../assets/images/question.json',
      renderer: 'svg',
      loop: true,
      autoplay: true
  });
});

 $(document).ready(function() {
  var animation = bodymovin.loadAnimation({
      container: document.getElementById('loti-4'),
      path: '../../assets/images/check.json',
      renderer: 'svg',
      loop: true,
      autoplay: true
  });
});

 $(document).ready(function() {
  var animation = bodymovin.loadAnimation({
      container: document.getElementById('loti-5'),
      path: '../../assets/images/question.json',
      renderer: 'svg',
      loop: true,
      autoplay: true
  });
});

 $(document).ready(function() {
  var animation = bodymovin.loadAnimation({
      container: document.getElementById('loti-6'),
      path: '../../assets/images/check.json',
      renderer: 'svg',
      loop: true,
      autoplay: true
  });
});

 $(document).ready(function() {
  var animation = bodymovin.loadAnimation({
      container: document.getElementById('loti-7'),
      path: '../../assets/images/check.json',
      renderer: 'svg',
      loop: true,
      autoplay: true
  });
});

 $(document).ready(function() {
  var animation = bodymovin.loadAnimation({
      container: document.getElementById('loti-8'),
      path: '../../assets/images/check.json',
      renderer: 'svg',
      loop: true,
      autoplay: true
  });
});

 $(document).ready(function() {
  var animation = bodymovin.loadAnimation({
      container: document.getElementById('loti-9'),
      path: '../../assets/images/check.json',
      renderer: 'svg',
      loop: true,
      autoplay: true
  });
});

var sidebarToggle = document.getElementsByClassName("sidebar-toggle");
var sidebar = document.getElementsByClassName("sidebar")[0];

sidebarToggle[0].addEventListener("click", sidebarCollapsed);

function sidebarCollapsed() {
  sidebar.classList.toggle("collapsed");
  if(sidebar.classList.contains("collapsed")){
    document.querySelector(".main-body").style.marginLeft = "60px";
  }
  else{
    document.querySelector(".main-body").style.marginLeft = "240px";
  }
}

$(document).on('resize, ready', function() {
  // Add class if screen size equals
  var $window = $(window); 
  function resize() {
     if ($window.width() < 992) {
       $('.sidebar').addClass('collapsed');
       $('.main-body').css('marginLeft', '60px');
      }
      else{
        $('.sidebar').removeClass('collapsed');
        $('.main-body').css('marginLeft', '260px');
     }
   }
   $window.resize(resize).trigger('resize');
 });

const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['5 Days', '10 Days', '15 Days', '20 Days', '25 Days', '30 Days'],
      datasets: [{
        label: 'My First Dataset',
        data: [2, 2.4, 2, 3, 2, 5, 4, 3, 2.8],
        fill: true,
        borderColor: '#358BD8',
        backgroundColor: "rgb(53 139 216 / 20%)",
        tension: 0.1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
const ctx2 = document.getElementById('myChart2');
  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['5 Days', '10 Days', '15 Days', '20 Days', '25 Days', '30 Days'],
      datasets: [{
        label: 'My First Dataset',
        data: [2, 2.4, 2, 3, 2, 5, 4, 3, 2.8],
        fill: true,
        borderColor: '#F92726',
        backgroundColor: "rgb(249 39 38 / 20%)",
        tension: 0.1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

// const SimpleScrollbar = require('simple-scrollbar');
// require('simple-scrollbar/simple-scrollbar.css');
var el = document.querySelector('.sidebar');
  SimpleScrollbar.initEl(el);
var el1 = document.querySelector('.notifications-list');
  SimpleScrollbar.initEl(el1);
//   $breadcrumb-divider: quote(">");