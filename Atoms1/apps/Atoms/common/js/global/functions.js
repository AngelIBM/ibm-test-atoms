

	function setView(newView,status,back){
		if(newView==null||newView==""){
			//loadJS(newView,status);
		}else{
		$("#MainPanel").load("views/AllViews/"+newView+".html",function(){
			//lastView=currentView;
			if(!back||back==null){
			prevView.push(currentView);}
			currentView=newView;
			//console.log(prevView);
		});
		loadJS(newView,status);
		
			if(newView=="challenge"){
				$("#MenuPanel").load("views/Menu/challengeMenu.html"); 
				loadJS("challengeMenu",challengeMenu_js);
				//alert("Challenge menu");
			}else{
				if(newView=="crop"){}else{
				$("#MenuPanel").load("views/Menu/menu.html");
				loadJS("menu",menu_js);
				//alert("Main menu");	
				}	
			}}
	}
	
	function loadJS(newView,status){
		if(!status){
			$.getScript("js/controllers/"+newView+"/init.js");
			$.getScript("js/controllers/"+newView+"/bind.js");
			$.getScript("js/controllers/"+newView+"/function.js");
			console.log(">>>Loading "+newView+" for 1st time");
		}else{
			console.log(">>>Reloading "+newView);
			recall = new Function("init_"+newView+"()");//execute the init in the function controller of the view
			recall();  }
	}


	function get_Data(url_json){
		var json_data;
		return $.when( $.getJSON(url_json,function(json){
			  json_data=$.map(json, function(elements) {return elements;})
		   }).done(function() {
			  //console.log("get_Data: Success");
		   }).fail(function( jqxhr, textStatus, error ) {
			  var err = textStatus + ", " + error;
			  console.log( "Request Failed: " + err );
		  })).then(function(){
			  return json_data;
		  })
	}
	
	document.addEventListener("backbutton", onBackKeyDown, false);
	function onBackKeyDown() {
		var prev=prevView.pop();
	   setView(prev,true,true);
	}


