
	// json url   change this when web service is online
	var myScore_Json="data/MyScore.json";
	var challenges_Json="data/Challenges.json";
	var globalScore_Json="data/Score.json";
	var rank_Json="data/Rank.json";
	var myRank_Json="data/myRank.json";
	
	//Navigation variables
	var currentView="";
	var lastView="";
	var prevView=[];
	var currentChallenge;
	
	//used for only load the js controllers once
	var index_js=false,
		challenge_js=false,
		badges_js=false,
		category_js=false,
		rank_js=false,
		categoryMenu_js=false,
		challengeMenu_js=false,
		menu_js=false,
		status_js=false,
		crop_js=false;
	
	// used to init a controller when the view is set again
	var recall;
	
	var img_uri;