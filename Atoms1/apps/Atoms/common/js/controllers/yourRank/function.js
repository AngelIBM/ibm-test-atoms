
$(document).ready(function() {
	init_yourRank();
});

function init_yourRank() {
	rank_js = true;
	$.when(get_Data(rank_Json)).then(function(topRank) {
		$.when(get_Data(myRank_Json)).then(function(myRank) {
			fillData(topRank, myRank);
		});
	});
}

// jsons are defined in global>init.js

function fillData(topRank, myRank) {
	rank_buffer = "";
	rank_myData = $("#myData").clone();
	rank_header = $("#rank_header").clone();
	for (var i = 0; i < topRank.length; i++) {
		rank_buffer = rank_buffer
				+ '<div class="row"><div class="col-xs-2 text-center NoPaddingLR">'
				+ '<span class="title5"><strong>'
				+ topRank[i].Rank
				+ '</strong></span></div>'
				+ '<div class="col-xs-7 text-left NoPaddingLR"><span class="title5">'
				+ topRank[i].Name
				+ '</span></div>'
				+ '<div class="col-xs-3 text center NoPaddingLR"><span class="title5 AppColor">'
				+ topRank[i].Score + '</span></div></div>'
	}
	$("#container")
			.replaceWith(
					'<div class="row" style="padding:7%; padding-top:0px;" id="container"></div>');
	displayData(myRank);
}

function displayData(myRank) {
	$("#container").append(rank_header);
	$("#container").append(rank_buffer);
	$("#container").append(rank_myData);
	$("#myRank").text(myRank[0].Rank);
	$("#myRankNumber").text(myRank[0].Rank + "/58");
	$("#myName").text(myRank[0].Name);
	$("#myScore").text(myRank[0].Score);
}