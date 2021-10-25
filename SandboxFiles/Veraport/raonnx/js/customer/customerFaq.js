/*
 * File Name : customerFaq.js 
 * Description : 자주하는 질문
 * Author : meesy
 * Updated : 2016.05.18
 */
var customerFaq = {};

/**
 * 탭 변경
 */
customerFaq.viewTab = function(category1) {
    $("#category1").attr("value", category1);
    customerFaq.viewTabAjax({
	"category1" : category1,
	"subject" : $("#searchSubject").val(),
	"pageNum" : 1
    });
};

/**
 * 최초 로딩시 전체 게시물 출력
 */
customerFaq.viewTabAjax = function(param) {
    $.ajax({
	type : "post",
	dataType : "json",
	url : "/customer/faqView",
	data : {
	    "category1" : param.category1,
	    "subject" : param.subject,
	    "pageNum" : param.pageNum
	},
	error : function(xhr, status, error) {
	    alert('오류가 발생했습니다.');
	    if(typeof(Visitor) != 'undefined'){
	    	_mTrace("오류가 발생했습니다.","E","F");
	    }
	},
	success : function(data) {
	    customerFaq.viewTabCallBack(data);
	}
    });
};

/**
 * 최초 로딩시 전체 게시물 출력 콜백
 */
customerFaq.viewTabCallBack = function(data) {
    var category1 = $("#category1").val();
    var searchSubject = $("#searchSubject").val();

    if (category1 == "") {
		category1 = "all";
    }

    var contentLength = data.pageInfo.data.length;
    var pageInfoData = data.pageInfo.data;

    var startPage = parseInt(data.startPage);
    var totPage = parseInt(data.totPageCnt);
    var currPage = parseInt(data.currPage);
    var endPage = parseInt(data.endPage);
    var prevPage = 10;
    var nextPage = 10;
    var tmpPage = parseInt(data.currPage / 10);

    if (tmpPage < 1) {
		nextPage = 11;
		prevPage = currPage;
    } else {
		if (data.currPage % 10 == 0) {
			nextPage = data.currPage + 1;
			tmpPage = tmpPage - 1;
		} else {
			nextPage = nextPage * (tmpPage + 1) + 1;
		}
		prevPage = prevPage * (tmpPage - 1) + 1;
    }

    if (nextPage > totPage) {
		nextPage = currPage;
    }

    document.getElementById("tabcont_" + category1).innerHTML = "";

    var innerHtml = "";
    innerHtml += '<span class="result_total">총 <strong class="g_point_01">' + data.pageInfo.page.totalCount + '</strong>건</span><!-- 자주찾는질문답변 -->';
    innerHtml += '<div class="js_faq_conts">';

    if (contentLength > 0) {
		innerHtml += '<ul class="qna_list">';
		for (var i = 0; i < contentLength; i++) {
			var subject = pageInfoData[i].boardVO.subject;
			if (searchSubject != "") {
			subject = subject.replace(searchSubject,
				"<em class='g_point_01'>" + searchSubject + "</em>");
			}

			innerHtml += '<li onclick="customerFaq.liClick(this)">';
			innerHtml += '<div class="tit js_qtitle">';
			innerHtml += '<span class="sort">'
				+ pageInfoData[i].boardVO.category1Name + '</span>';
			innerHtml += '<a href="#none" class="qst"><strong>Q(질문)</strong>'
				+ subject + '</a>';
			innerHtml += '</div>';
			innerHtml += '<div class="cont js_acont" style="display: none;">';
			innerHtml += '<span class="answer"><strong>A(답변)</strong>'
				+ pageInfoData[i].boardVO.content + '</span>';
			innerHtml += '</div>';
			innerHtml += '</li>';
		}
		innerHtml += '</ul>';
    } else {
		innerHtml += '<div class="no_result_txt">';
		innerHtml += '<p>검색결과가 없습니다.</p>';
		innerHtml += '</div>';
    }

    innerHtml += '</div><!-- //자주찾는질문답변 -->';
    innerHtml += '<div class="paging_nav"><!-- 페이징 -->';

    // 이전 페이지가 존재한다면
    if (prevPage < currPage && 10 < currPage) {
		innerHtml += '<a class="first" title="맨 앞으로" href="#none"';

		if (currPage > 1) {
			innerHtml += 'onclick="customerFaq.goPage(1);"';
		}

		innerHtml += '>맨 앞으로</a><a class="prev" title="이전 10 페이지 전으로 이동" href="#none"';
		innerHtml += ' onclick="customerFaq.goPage(' + prevPage + ')" ';
		innerHtml += '>이전 10 페이지 전으로 이동</a>';
    }

    innerHtml += '<div class="numbers">';

    for (var i = startPage; i <= endPage; i++) {
		if (currPage == i) {
			innerHtml += '<a href="#none" class="on">' + i + '</a>';
		} else {
			innerHtml += '<a href="#none" onclick="customerFaq.goPage(' + i + ')">' + i + '</a>';
		}
    }

    innerHtml += '</div>';

    // 이후 페이지가 존재한다면
    if (nextPage > currPage) {
		innerHtml += '<a class="next" title="다음 10 페이지 후로 이동" href="#none"';
		innerHtml += ' onclick="customerFaq.goPage(' + nextPage + ')" ';
		innerHtml += '>다음 10 페이지 후로 이동</a><a class="last" title="맨 끝으로" href="#none"';

		// 현재페이지가 맨 끝페이지일경우 onclick 비활성화
		if (totPage > currPage) {
			innerHtml += 'onclick="customerFaq.goPage(' + totPage + ')"';
		}

		innerHtml += '>맨 끝으로</a>';
    }

    innerHtml += ' </div><!-- //페이징 --> ';

    document.getElementById("tabcont_" + category1).innerHTML = innerHtml;
};

/**
 * 페이지 이동
 */
customerFaq.goPage = function(pageNum) {
    customerFaq.viewTabAjax({
	"category1" : $("#category1").val(),
	"subject" : $("#searchSubject").val(),
	"pageNum" : pageNum
    });
};

/**
 * 카테고리 클릭 이벤트
 */
customerFaq.liClick = function(obj) {
    if ($(obj).attr("class") != null
	    && $(obj).attr("class").indexOf("on") != -1) {
		// 접기
		$(obj).removeClass("on");
		$(obj).find(".cont.js_acont").attr("style", "display:none;");
    } else {
		// 펼치기
		var liEl = $(obj).parent().find("li.on");

		for (var i = 0; i < liEl.length; i++) {
			$(liEl).removeClass("on");
			$(liEl).find(".cont.js_acont").attr("style", "display:none;");
		}

		$(obj).addClass("on");
		$(obj).find(".cont.js_acont").attr("style", "display:block;");
    }
};

$(document).ready(function() {

    $('body').on('selectstart', function(event) {
		return false;
    });
    $('body').on('dragstart', function(event) {
		return false;
    });

    // 최초 로딩시 전체 게시물 출력
    customerFaq.viewTabAjax({
		"category1" : "",
		"subject" : "",
		"pageNum" : 1
    });

    // 검색버튼 클릭 이벤트
    $("#searchBtn").click(function(e) {
		if ($("#searchSubject").val().length < 2) {
			alert("2자이상 입력하세요.");
			if(typeof(Visitor) != 'undefined'){
		    	_mTrace("2자이상 입력하세요.","U","N");
		    }
		}
		customerFaq.viewTabAjax({
			"category1" : $("#category1").val(),
			"subject" : $("#searchSubject").val(),
			"pageNum" : 1
		});
    });
    // 검색키보드 입력 이벤트
    $("#searchSubject").keypress(function(e) {
		if (event.keyCode == 13) {
			if ($("#searchSubject").val().length < 2) {
			alert("2자이상 입력하세요.");
			if(typeof(Visitor) != 'undefined'){
		    	_mTrace("2자이상 입력하세요.","U","N");
		    }
			}
			customerFaq.viewTabAjax({
			"category1" : $("#category1").val(),
			"subject" : $("#searchSubject").val(),
			"pageNum" : 1
			});
		}
    });

    // 인기검색어 클릭 이벤트 초기화
    $("#popularDl").find("a").each(function() {
		var obj = this;
		$(obj).click(function(e) {
			$("#searchSubject").val($(e.target).text());
			customerFaq.viewTabAjax({
			"category1" : $("#category1").val(),
			"subject" : $("#searchSubject").val(),
			"pageNum" : 1
			});
		});
    });

});
