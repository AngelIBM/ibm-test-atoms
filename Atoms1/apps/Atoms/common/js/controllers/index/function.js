

	$(document).ready(function() {
		init_index();
	});
	
	 function init_index(){
		 index_js=true;
		 $.when(get_Data(myScore_Json)).then(function(score_data){
				$("#my_Complete").text(score_data[0].Completed);
				$("#my_Score").text(score_data[0].Score);
				$("#my_Rank").text(score_data[0].Rank);
		 });
		 $.when(get_Data("")).then(function(data){
			 alert("ok: "+data[0].id+" Name:"+data[0].Name)
		 })
	 }


	