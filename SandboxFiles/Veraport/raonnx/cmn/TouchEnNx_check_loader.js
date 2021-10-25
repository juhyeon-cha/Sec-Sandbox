/****************************************************
TouchEnNx_loader.js
****************************************************
| Version     작성자        수정일        변경사항 
 ---------  -------  -----------  ----------    
| v1.0.0.4    허혜림    2018.01.09
| v1.0.0.3    허혜림    2018.01.03      
| v1.0.0.2    허혜림    2017.12.26      
| v1.0.0.1    백서린    2017.01.20      최초

****************************************************
 Copyright ⒞ RaonSecure Co., Ltd.
 * 본 코드에 대한 모든 권한은 (주)라온시큐어 있으며 동의없이 사용/배포/가공할 수 없습니다.
****************************************************
**/

var TouchEnNx = {
		flag		: false,
		useModule	: "",
		success	:	function(result){
			TouchEnNx.processingbar(false);
			if(result.isvm == "true"){
				//가상화 환경 일 경우
			}
			//20171222 제로데이 Mac모듈 메시지 콜 수정
			if (result.result == "true" || result.success == "true") {
				try{
					if(typeof touchennxfwInfo == "object" && TouchEnNxConfig.use.nxfw){
						if(TOUCHENEX_UTIL.isMac()){
							touchennxfwInterface.CustomEX2("Key_Start",touchennxwebparams_mac);
						}else{
							touchennxfwInterface.CustomEX2("Key_Start",touchennxfwparams);
						}
					}
					if(typeof touchennxwebInfo == "object" && TouchEnNxConfig.use.nxweb){
						if(TOUCHENEX_UTIL.isMac()){
							touchennxwebInterface.CustomEX2("Key_Start",touchennxwebparams_mac); 
						}else{
							touchennxwebInterface.CustomEX2("Key_Start",touchennxwebparams);
						}
					}

					
				}catch(e){
					exlog("_TouchEnNx","TouchEnNx result not true");
				}
			}
		},
		TK_getUrlParameter : function(name) {
		    var value = "";
		    try {
		        var url = document.location.href;
		        var idx = url.indexOf("?");
		        var params = "&"+url.substring(idx+1);
		        idx = params.indexOf("&" + name + "=");
		        if (idx >= 0) value = params.substring(idx+name.length+2);
		        idx = value.indexOf("&");
		        if (idx >= 0) value = value.substring(0, idx);
		        value = decodeURIComponent(value);
		    } catch(err) {
					exlog("_TouchEnNx", "TK_getUrlParameter() exception");
			}
		    return value;
		},
		processingbar	:	function(tmps){
			if(!TouchEnNxConfig.processingbar.use) return;
			if(tmps){
				if(document.body){
					if(document.getElementById("tk_overtopDiv")!=null) return true;
					var div = document.createElement("div");
					div.setAttribute("id", "tk_overtopDiv");
					document.body.appendChild(div);
					var processingbar = '<div id="tk_overdiv" style="z-index:999997;position:fixed; width:100%; height:100%; top:0px; left:0px; background-color: #000000; opacity: 0.3; filter: alpha(opacity=30);">';
					processingbar += '<div style="z-index:9999998;position:fixed;top:50%; height:100%;width:100%;">';
					processingbar += '<div style="margin: 0 auto; padding: 5px; width:150px; vertical-align:middle; font-weight:bold; text-align: center; border-radius:5px;">';
					processingbar += '<img src="'+ TouchEnNxConfig.processingbar.path +'" style="vertical-align:middle"/>';
					processingbar += '</div>';
					processingbar += '</div>';
					processingbar += '</div>';
					document.getElementById("tk_overtopDiv").innerHTML = processingbar;
				}
			}else{
				if(document.getElementById("tk_overtopDiv")!=null)
					document.body.removeChild(document.getElementById("tk_overtopDiv"));
			}
		},
		init : function(){
			var loadmodule = [];
			if(TouchEnNxConfig.use.nxkey && useTouchEnnxKey){
				if(typeof touchenexInfo != "object")	alert("include TouchEnNxKey javascript");
				if(typeof loadmodule[0] != "object")	loadmodule[0] = touchenexInfo;
				else	loadmodule[loadmodule.length] = touchenexInfo;
			}
			if(TouchEnNxConfig.use.nxcr && nxCR_SupportCheck()){
				if(typeof keysharpnxInfo != "object")	alert("include nxcr javascript");
				if(typeof loadmodule[0] != "object")	loadmodule[0] = keysharpnxInfo;
				else	loadmodule[loadmodule.length] = keysharpnxInfo;
			}
			if(TouchEnNxConfig.use.nxweb){
				if(typeof touchennxwebInfo != "object")	alert("include nxweb javascript");
				if(typeof loadmodule[0] != "object")	loadmodule[0] = touchennxwebInfo;
				else	loadmodule[loadmodule.length] = touchennxwebInfo;
			}
			if(TouchEnNxConfig.use.nxfw && !TOUCHENEX_UTIL.isLinux()){
				if(typeof touchennxfwInfo != "object")	alert("include nxfw javascript");
				if(typeof loadmodule[0] != "object")	loadmodule[0] = touchennxfwInfo;
				else	loadmodule[loadmodule.length] = touchennxfwInfo;
			}
			
			var moduleArrary = loadmodule;
			if (typeof TouchEnKey_installpage != "string" && moduleArrary.length > 0 && !TouchEnNx.flag){ // 설치페이지가 아닐 경우 모듈 동작
				TouchEnNx.processingbar(true);
				TouchEnNx.flag = true;
				TOUCHENEX_CHECK.check(moduleArrary, function(currStatus){
					if (currStatus.status) {
						$('.object_status_TouchEn_nxFirewall').html("<span class='install_yes'>설치됨</span>");
						$('.object_download_TouchEn_nxFirewall').hide();
			        } else {
			        	var nxKeyFlag = true;
			        	var nxFwFlag = true;
			        	/** 솔루션 미설치 일 때 설치 페이지 이동*/
						for(i=0; i< loadmodule.length; i++){
							if(!currStatus.info[i].isInstalled){
								if(currStatus.info[i].name.indexOf("TOUCHENEX")>-1){
									nxKeyFlag = false;
								}else if(currStatus.info[i].name.indexOf("TouchEnnxFW")>-1){
									nxFwFlag = false;
								}else{
									return;
								}
							}
						}
						
						if (nxFwFlag) { // 온라인 방화벽 설치
							$('.object_status_TouchEn_nxFirewall').html("<span class='install_yes'>설치됨</span>");
							$('.object_download_TouchEn_nxFirewall').hide();
						}else{
							$('.object_status_TouchEn_nxFirewall').html("<span class='install_no'>미설치</span>");
						}
			        }
					TouchEnNx.processingbar(false);
				});
			}
		}
};


if(typeof jQuery =="function"){
	jQuery(function(){
		if(TouchEnNxConfig.onload){
			 TouchEnNx.init();
		}
	});
}

function Checkmodule(name){
	if(name.indexOf("TOUCHENEX")>-1){
		name = "키보드보안";
	}else if(name.indexOf("KeySharpNX")>-1){
		name = "인증서 복사";
	}else if(name.indexOf("TouchEnnxWEB")>-1){
		name = "웹화면보안"
	}else if(name.indexOf("TouchEnnxFW")>-1){
		name = "온라인 방화벽";
	}else{
		return;
	}
	return name;
}