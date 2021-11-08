		function openTab(evt, tabName) {
		  var i, tabcontent, tablink;
		  tabcontent = document.getElementsByClassName("tabcontent");
		  for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		  }
		  tablink = document.getElementsByClassName("tablink");
		  for (i = 0; i < tablink.length; i++) {
			tablink[i].className = tablink[i].className.replace(" active", "");
		  }
		  document.getElementById(tabName).style.display = "block";
		  evt.currentTarget.className += " active";
		  evt.preventDefault();
		  
		  $.each(sviperSliderList, function(i,v) {
			v.onResize();
		  })
		  //ufarSwiper1.onResize();
		  //ufarSwiper2.onResize();
		  //ufarSwiper3.onResize();
		}

		// Get the element with id="defaultOpen" and click on it
		document.getElementById("defaultOpen").click();
		
		///////////////////////////////////////////////////////
		
		function openTab2(evt, tabName) {
		  var i, tabcontent2, tablink2;
		  tabcontent2 = document.getElementsByClassName("tabcontent2");
		  for (i = 0; i < tabcontent2.length; i++) {
			tabcontent2[i].style.display = "none";
		  }
		  tablink2 = document.getElementsByClassName("tablink2");
		  for (i = 0; i < tablink2.length; i++) {
			tablink2[i].className = tablink2[i].className.replace(" active", "");
		  }
		  document.getElementById(tabName).style.display = "block";
		  evt.currentTarget.className += " active";
		  evt.preventDefault();
		}

		// Get the element with id="defaultOpen2" and click on it
		document.getElementById("defaultOpen2").click();