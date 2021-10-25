if (!window.location.origin) {
  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

var _Delfino_Base = window.location.origin + "/wizvera/delfino";
var _Delfino_Svc  = window.location.origin + "/wizvera/delfino/svc";
var _Delfino_Down = _Delfino_Base + "/down";
//_Delfino_Down = "http://help.wizvera.com/svc/wizvera/delfino_test";
//if (window.location.protocol.toLowerCase()=="https:") _Delfino_Down = "https://help.wizvera.com/svc/wizvera/delfino_test";

var _Delfino_SystemMode = "test"; //"dev", "test", "real"
var _Delfino_SystemLang = "KOR";  //"KOR", "ENG", "CHN", "JPN", "VNM"
var _Delfino_ModuleType = "";     //"G2", "G3", "G4"
if (typeof _SITE_SystemMode != "undefined") _Delfino_SystemMode = _SITE_SystemMode;
if (typeof _SITE_SystemLang != "undefined") _Delfino_SystemLang = _SITE_SystemLang;
if (typeof _SITE_ModuleType != "undefined") _Delfino_ModuleType = _SITE_ModuleType;

var DelfinoConfig = {
    multiDomain : "", //".wizvera.com",
    uiType : "", //"senior",

    version : { //설치버전
        WinIE   : "3,3,2,0",
        WinMoz  : "3.3.2.0",
        Mac     : "3.3.2.0",
        Linux   : "3.3.2.0"
    },
    version_update : { //업데이트버전: 설치페이지에서 Delfino.setVersion()사용
        WinIE   : "3,4,1,3",
        WinMoz  : "3.4.1.3",
        Mac     : "3.4.1.3",
        Linux   : "3.4.1.3"
    },
    version_g3 : { //V3 URL 핸들러
        WinIE   : "3,3,1,0",
        WinMoz  : "3,3,2,0",
        Mac     : "3,3,2,0",
        Linux   : "3,3,2,0"
    },
    version_update_g3 : {  //G3 업데이트버전: 설치페이지에서 Delfino.setVersion()사용
        WinIE   : "3,4,1,3",
        WinMoz  : "3.4.1.3",
        Mac     : "3.4.1.3",
        Linux   : "3.4.1.3"
    },
    mimeType : { //object MimeType
        WinIE   : "CLSID:BAE6E050-BFA0-4bea-B62D-2D9F75E51084",
        WinMoz  : "application/x-dolphinobj",
        Mac     : "application/x-dolphinobj",
        Linux   : "application/x-dolphinobj"
    },
    installPage : { //설치페이지
        WinIE   : _Delfino_Base + "/install20/install.html?sys=WinIE",
        WinMoz  : _Delfino_Base + "/install20/install.html?sys=WinMoz",
        Mac     : _Delfino_Base + "/install20/install.html?sys=Mac",
        Linux   : _Delfino_Base + "/install20/install.html?sys=Linux",
        iOS     : _Delfino_Base + "/install20/install.html?sys=iOS",
        Android : _Delfino_Base + "/install20/install.html?sys=Android"
    },
/*    installPage : { //설치페이지_Veraport 통합설치페이지 이동
        WinIE   : _Delfino_Base + "/../veraport/install20/install_sample.html?sys=WinIE",
        WinMoz  : _Delfino_Base + "/../veraport/install20/install_sample.html?sys=WinMoz",
        Mac     : _Delfino_Base + "/../veraport/install20/install_sample.html?sys=Mac",
        Linux   : _Delfino_Base + "/../veraport/install20/install_sample.html?sys=Linux",
        iOS     : _Delfino_Base + "/install20/install.html?sys=iOS",
        Android : _Delfino_Base + "/install20/install.html?sys=Android"
    },*/
    installPage_vp : { //통합설치페이지
        WinIE   : _Delfino_Base + "/../veraport/install20/cert_install.html?P_name=Delfino",
        WinMoz  : _Delfino_Base + "/../veraport/install20/cert_install.html?P_name=Delfino",
        Mac     : _Delfino_Base + "/../veraport/install20/cert_install.html?P_name=Delfino",
        Linux   : _Delfino_Base + "/../veraport/install20/cert_install.html?P_name=Delfino",
        iOS     : _Delfino_Base + "/install20/install.html?sys=iOS",
        Android : _Delfino_Base + "/install20/install.html?sys=Android"
    },
    installPage_g3 : {
        url : _Delfino_Base + "/install20/install.html?P_name=Delfino&module=G3&url=close",
        width : 800,
        height : 600
    },
    installPkg : { //다운로드 모듈
        Cab32   : _Delfino_Down + "/delfino.cab",
        Cab64   : _Delfino_Down + "/delfino-x64.cab",
        Win32   : _Delfino_Down + "/delfino.exe",
        Win64   : _Delfino_Down + "/delfino-x64.exe",

        Cab32_sha2   : _Delfino_Down + "/delfino-sha2.cab",
        Cab64_sha2   : _Delfino_Down + "/delfino-x64-sha2.cab",
        Win32_sha2   : _Delfino_Down + "/delfino-sha2.exe",
        Win64_sha2   : _Delfino_Down + "/delfino-x64-sha2.exe",

        Mac32   : _Delfino_Down + "/delfino.pkg",
        Mac64   : _Delfino_Down + "/delfino.pkg",
        Dev32   : _Delfino_Down + "/delfino_i386.deb",
        Dev64   : _Delfino_Down + "/delfino_amd64.deb",
        Rpm32   : _Delfino_Down + "/delfino.i386.rpm",
        Rpm64   : _Delfino_Down + "/delfino.x86_64.rpm",

        iOS     : "https://itunes.apple.com/kr/app/delpino/id664995020?mt=8&uo=4",
        Android : "market://details?id=com.wizvera.dolphin"
    },
    installPkg_g3 : { //다운로드 모듈
        Cab32   : "",
        Cab64   : "",
        Win32   : _Delfino_Down + "/delfino-g3.exe",
        Win64   : _Delfino_Down + "/delfino-g3.exe",

        Win32_sha2   : _Delfino_Down + "/delfino-g3-sha2.exe",
        Win64_sha2   : _Delfino_Down + "/delfino-g3-sha2.exe",

        Mac32   : _Delfino_Down + "/delfino-g3.pkg",
        Mac64   : _Delfino_Down + "/delfino-g3.pkg",
        Dev32   : _Delfino_Down + "/delfino-g3_i386.deb",
        Dev64   : _Delfino_Down + "/delfino-g3_amd64.deb",
        Rpm32   : _Delfino_Down + "/delfino-g3.i386.rpm",
        Rpm64   : _Delfino_Down + "/delfino-g3.x86_64.rpm",

        iOS     : "https://itunes.apple.com/kr/app/delpino/id664995020?mt=8&uo=4",
        Android : "market://details?id=com.wizvera.dolphin"
    },

    /** 로고이미지 URL 설정: size(428x81) */
    logoImageUrl :        _Delfino_Base + "/sitelogo/delfino_logo.html",
    logoImageUrl_428x81 : _Delfino_Base + "/sitelogo/delfino_logo_428x81.html",
    logoImageUrl_html5  : {
        desktop : _Delfino_Base + "/sitelogo/delfino_logo_428x81.png", //428x81
        tablet  : _Delfino_Base + "/sitelogo/delfino_logo_tablet.png",	 //420x32
        mobile  : _Delfino_Base + "/sitelogo/delfino_logo_mobile.png"   //600x32
    },

    /** 전자서명 타이틀 이미지 URL 설정: size(428x50) **/
    confirmSignTitleImageUrl : _Delfino_Base + "/sitelogo/delfino_logo_confirm_sign.html",
    confirmSignTitleImageUrl_html5  : {
        desktop : _Delfino_Base + "/sitelogo/delfino_logo_confirm_sign.png", //428x50
        tablet  : _Delfino_Base + "/sitelogo/delfino_logo_confirm_sign_tablet.png", //420x32
        mobile  : _Delfino_Base + "/sitelogo/delfino_logo_confirm_sign_mobile.png"  //600x32
    },

    /** 가져오기 / 내보내기 URL 설정: size(360x223) */
    exportImageUrl : _Delfino_Base + "/sitelogo/export_cert.html",
    importImageUrl : _Delfino_Base + "/sitelogo/import_cert.html",

    /** 미설치시 설치확인(confirm)을 위한 메시지 ""일경우 메시지 없이 설치페이지로 이동함 */
    installMessage : {
        NO      : "공인인증 거래가 지원되지 않는 환경에서 접속하셨습니다.",
        PC      : "공인인증프로그램을 설치하셔야만 이용이 가능한 서비스입니다.\n[확인]을 선택하시면 설치페이지로 연결됩니다.",
        Mobile  : "전용 브라우저를 사용하여야만 이용이 가능한 서비스입니다.\n[승인]을 선택하시면 전용 브라우저가 실행(설치)됩니다."
    },

    /** 인증서 선택창에서 저장매체 캐쉬 설정(필요시 하단에서 도메인별로 설정) */
    cacheCertStore :  false,

    /** 인증서 선택창에서 저장매체 enable/disable(BROWSER|FIND_CERT|EA|LOCAL_DISK|REMOVABLE_DISK|TOKEN|HSM|PHONE|USIM|SWHSM)*/
    //certStoreFilter : "",
    certStoreFilter : "LOCAL_DISK|REMOVABLE_DISK|TOKEN|HSM|SWHSM",
    prepareCertStore : "",
    disableCertStore : "",

    disableExpireFilter : true,  //만료된 인증서 보이기
    disableExpireWarn   : false, //만료된 인증서 경고툴팁 안보이기

    /** 인증서 선택창에서 인증서 필터링 위한 인증서 발급자 DN 설정.
     * '|'로 구분하여 여러개를 설정. */
    issuerCertFilter : ""
                        +"CN=yessignCA Class 1,OU=AccreditedCA,O=yessign,C=kr|"
                        +"CN=yessignCA Class 2,OU=AccreditedCA,O=yessign,C=kr|"
                        +"CN=SignKorea CA2,OU=AccreditedCA,O=SignKorea,C=KR|"
                        +"CN=SignKorea CA3,OU=AccreditedCA,O=SignKorea,C=KR|"
                        +"CN=signGATE CA4,OU=AccreditedCA,O=KICA,C=KR|"
                        +"CN=signGATE CA5,OU=AccreditedCA,O=KICA,C=KR|"
                        +"CN=CrossCertCA2,OU=AccreditedCA,O=CrossCert,C=KR|"
                        +"CN=CrossCertCA3,OU=AccreditedCA,O=CrossCert,C=KR|"
                        +"CN=TradeSignCA2,OU=AccreditedCA,O=TradeSign,C=KR|"
                        +"CN=TradeSignCA3,OU=AccreditedCA,O=TradeSign,C=KR|"
                        +"CN=INIPASS CA,OU=AccreditedCA,O=INIPASS,C=KR|"
                        ,

    issuerCertFilter_test : ""
                        +"CN=yessignCA-Test Class 2,OU=AccreditedCA,O=yessign,C=kr|"
                        +"CN=yessignCA-Test Class 3,OU=AccreditedCA,O=yessign,C=kr|"
						+"CN=yessignCA-Test Class 4,OU=AccreditedCA,O=yessign,C=kr|"
                        +"CN=SignKorea Test CA3,OU=AccreditedCA,O=SignKorea,C=KR|"
						+"CN=SignKorea Test CA4,OU=AccreditedCA,O=SignKorea,C=KR|"
                        +"CN=signGATE FTCA04,OU=AccreditedCA,O=KICA,C=KR|"
                        +"CN=signGATE FTCA05,OU=AccreditedCA,O=KICA,C=KR|"
						+"CN=signGATE FTCA06,OU=AccreditedCA,O=KICA,C=KR|"
                        +"CN=CrossCertTestCA3,OU=AccreditedCA,O=CrossCert,C=KR|"
                        +"CN=CrossCertTestCA4,OU=AccreditedCA,O=CrossCert,C=KR|"
                        +"CN=TestTradeSignCA,OU=AccreditedCA,O=TradeSign,C=KR|"
                        +"CN=INIPASS TEST CA 2,OU=AccreditedCA,O=INIPASS,C=KR|"                        
                        
                        ,


    /** 인증서 선택창에서 인증서 필터링 위한 인증서 정책 OID 설정.
     * '|'로 구분하여 여러개를 설정. */
    policyOidCertFilter : ""
                        //상호연동(10)
                        +"1.2.410.200005.1.1.1|"     //금결원,   개인, 상호연동
                        +"1.2.410.200005.1.1.5|"     //금결원,   법인, 상호연동
                        //+"1.2.410.200005.1.1.1.1|" //금결원,   개인, 상호연동-보안매체용-PC에서는 설정할필요없음
                        //+"1.2.410.200005.1.1.5.1|" //금결원,   법인, 상호연동-보안매체용-PC에서는 설정할필요없음
                        +"1.2.410.200004.5.1.1.5|"   //코스콤,   개인, 상호연동
                        +"1.2.410.200004.5.1.1.7|"   //코스콤,   법인, 상호연동
                        +"1.2.410.200004.5.2.1.2|"   //정보인증, 개인, 상호연동
                        +"1.2.410.200004.5.2.1.1|"   //정보인증, 법인, 상호연동
                        +"1.2.410.200004.5.4.1.1|"   //전자인증, 개인, 상호연동
                        +"1.2.410.200004.5.4.1.2|"   //전자인증, 법인, 상호연동
                        +"1.2.410.200012.1.1.1|"     //무역정보, 개인, 상호연동
                        +"1.2.410.200012.1.1.3|"     //무역정보, 법인, 상호연동
                        +"1.2.410.200004.5.5.1.1|"	 //이니텍,  개인, 상호연동
                        +"1.2.410.200004.5.5.1.2|"	 //이니텍,  법인, 상호연동

                        //은행,보험,카드,민원(2)
                        +"1.2.410.200005.1.1.4|"     //금결원,   개인, 용도제한(은행/보험/카드/민원)
                        +"1.2.410.200005.1.1.2|"     //금결원,   법인, 용도제한(은행/보험/카드/민원)
                        //+"1.2.410.200005.1.1.4.1|" //금결원,   개인, 용도제한(은행/보험/카드/민원)-보안매체용-PC에서는 설정할필요없음
                        //+"1.2.410.200005.1.1.2.1|" //금결원,   법인, 용도제한(은행/보험/카드/민원)-보안매체용-PC에서는 설정할필요없음

                        //은행(4)
                        +"1.2.410.200005.1.1.6.1|"   //금결원,   법인, 용도제한(기업뱅킹)
                        +"1.2.410.200004.5.2.1.7.1|" //정보인증, 개인, 용도제한(은행/보험)
                        +"1.2.410.200004.5.4.1.101|" //전자인증, 개인, 용도제한(은행/보험)
                        +"1.2.410.200012.1.1.101|"   //무역정보, 법인, 용도제한(은행/보험/민원) *별도협의필요*

                        //카드(7)
                        +"1.2.410.200004.5.1.1.9.2|" //코스콤,   개인, 용도제한(카드)
                        +"1.2.410.200004.5.2.1.7.3|" //정보인증, 개인, 용도제한(카드)
                        +"1.2.410.200004.5.2.1.7.1|" //정보인증, 개인, 용도제한(은행/보험)
                        +"1.2.410.200004.5.4.1.103|" //전자인증, 개인, 용도제한(카드)
                        //+"1.2.410.200012.1.1.105|"   //무역정보, 개인, 용도제한(카드) *별도협의필요*
                        //+"1.2.410.200012.1.1.103|"   //무역정보, 개인, 용도제한(증권/카드) *별도협의필요*
                        //+"1.2.410.200004.5.1.1.12.908|" //코스콤, 법인, 용도제한(신한카드세금계산서결제전용)

                        //보험(4)
                        +"1.2.410.200004.5.1.1.9|"   //코스콤,   개인, 용도제한(증권/보험/민원)
                        +"1.2.410.200004.5.2.1.7.1|" //정보인증, 개인, 용도제한(은행/보험)
                        +"1.2.410.200004.5.4.1.101|" //전자인증, 개인, 용도제한(은행/보험)
                        //+"1.2.410.200012.1.1.101|"   //무역정보, 법인, 용도제한(은행/보험/민원) *별도협의필요*

                        //증권(4)
                        +"1.2.410.200004.5.1.1.9|"   //코스콤,   개인, 용도제한(증권/보험/민원)
                        +"1.2.410.200004.5.2.1.7.2|" //정보인증, 개인, 용도제한(증권)
                        +"1.2.410.200004.5.4.1.102|" //전자인증, 개인, 용도제한(증권)
                        //+"1.2.410.200012.1.1.103|"   //무역정보, 개인, 용도제한(증권/카드) *별도협의필요*

                        //기타(4)
                        +"1.2.410.200004.5.2.1.5001|"  //정보인증, 법인, 용도제한(세금계산서-국세청)
                        +"1.2.410.200004.5.2.1.6.257|" //정보인증, 법인, 용도제한(세금계산서-일반)
                        +"1.2.410.200004.5.4.1.104|"   //전자인증, 개인, 용도제한(민원)
                        +"1.2.410.200005.1.1.6.8|"     //금결원,   법인, 용도제한(세금계산서)
                        //+"1.2.410.200004.5.5.1.4.2|"   //이니텍,   법인, 용도제한(세금계산서)
             
                        ,

    //real ca
    yessignCaHost : "203.233.91.71",
    yessignCaPort : 4512,
    crosscertCaHost : "211.192.169.90",
    crosscertCaPort : 4512,
    signkoreaCaHost : "210.207.195.100",
    signkoreaCaPort : 4099,
    kicaCaHost : "211.35.96.43",
    kicaCaPort : 4502,
	yessignWebCmpUrl : "https://www.yessign.or.kr:4512/cmp",

    //test ca
    yessignCaHost_test : "203.233.91.231",    //금융결제원
    yessignCaPort_test : 4512,
    crosscertCaHost_test : "211.180.234.201", //전자인증
    crosscertCaPort_test : 4512,
    signkoreaCaHost_test : "211.175.81.101",  //코스콤
    signkoreaCaPort_test : 4099,
    kicaCaHost_test : "211.35.96.115",        //정보인증
    kicaCaPort_test : 4502,
	yessignWebCmpUrl_test : "https://fidoweb.yessign.or.kr:4512/cmp",

    hsmUsingDrivers : "XecureHSM:1.0.0.0",//"XecureHSM:1.0.0.0|Vid_04e8&Pid_0007"
    enableHsmGuide : true,
    forceScreenKeyboard: false,

    passwordError: false,
    passwordCounter : "5",
    closeOnError: false,
    enableCheckVid : true,
    installError: true,
    changePasswordPolicy : "v1",

    //insideIframe : true, //iframe 안에서 로드 될 경우 이 값이 true이면 top disable 됨.
    useDelfinoSession : false,  //나중에 사용위함.
    useBrowserCookie : true,    //서명시 브라우저의 DELFINO 쿠키값 전달 여부

    stringsDelimiter : ":",
    multiSignDelimiter : "|",
    nonceUrl : _Delfino_Svc + "/delfino_nonce.jsp",
    nonce : null ,
    nonceKeyName : "delfinoNonce",

    //useNonceOption : true,
    serverTimeUrl : _Delfino_Svc + "/delfino_serverTime.jsp",

    mobileUrlHandlerType : true,
    mobileCloseHtml : _Delfino_Base + "/mobile_close.html", //frame환경에서 ios용 close.html
    processingImageUrl : _Delfino_Base + "/sitelogo/delfino_processing.gif",
    mobileUrlHandlerServerUrl : _Delfino_Svc + "/secureDataHandler.jsp",
    mobileProviderName : "wizvera", //"kbstar"

    //urlHanlderServerUrl : _Delfino_Svc + "/delfino_handler.jsp",
    handlerBlankUrl : _Delfino_Base + "/handler_blank.html", //iframe용 src페이지(IE 6전용)

    sitename : "WIZVERA(위즈베라)",
    useRecentModule : false, //최근 setModule로 설정한 module사용

    //서명시 서명데이터에 certStoreType을 추가
    //addCertStoreType : true,

    //인증서 발급/갱신시 내부에서 결과 message를 alert 할지 여부, 미설정시 alert함.
    //alertCmpComplete : false,

end : "end"};

DelfinoConfig.version_g2 = DelfinoConfig.version;
DelfinoConfig.installPkg_g2 = DelfinoConfig.installPkg;

//DelfinoConfig.outputEncoding = "hex"; //base64, hex

//버튼 색상 및 스타일 설정
DelfinoConfig.style_DEF = {
    button   : { backgroundColor:"#1d79d3", backgroundColorSelected:"#054d94", fontColor:"#ffffff", fontColorSelected:"#ffffff", borderColor:"#075fb5", borderColorSelected:"#003399" },
    tab      : { backgroundColor:"#1d79d3", fontColor:"#ffffff", borderColor:"#075fb5"},
    keyboard : { type:0, logoUrl:_Delfino_Base + "/sitelogo/keyboard_logo.html", disableEffect:"true", enableDummy:"true"}
};
DelfinoConfig.style_RED = {
    button   : { backgroundColor:"#c74445", backgroundColorSelected:"#a41c1d", fontColor:"#ffffff", fontColorSelected:"#d269a", borderColor:"#c1272d", borderColorSelected:"#9b0d0f" },
    tab      : { backgroundColor:"#c74445", fontColor:"#ffffff", borderColor:"#c1272d"},
    keyboard : { type:1, logoUrl:_Delfino_Base + "/sitelogo/keyboard_logo.html", disableEffect:"true", enableDummy:"true"}
};
DelfinoConfig.style = DelfinoConfig.style_DEF;
//DelfinoConfig.style = DelfinoConfig.style_RED;

//windows NT 6.1 이상만 sha2 설치
/*if(!navigator.userAgent.match(/NT 5./i) && !navigator.userAgent.match(/NT 6.0/i)) {
    DelfinoConfig.installPkg.Cab32 = DelfinoConfig.installPkg.Cab32_sha2;
    DelfinoConfig.installPkg.Cab64 = DelfinoConfig.installPkg.Cab64_sha2;
    DelfinoConfig.installPkg.Win32 = DelfinoConfig.installPkg.Win32_sha2;
    DelfinoConfig.installPkg.Win64 = DelfinoConfig.installPkg.Win64_sha2;

    DelfinoConfig.installPkg_g3.Win32 = DelfinoConfig.installPkg_g3.Win32_sha2;
    DelfinoConfig.installPkg_g3.Win64 = DelfinoConfig.installPkg_g3.Win64_sha2;
}*/

//G4설정
DelfinoConfig.g4 = {};
//DelfinoConfig.g4.signServerUrl = "https://sign.wizvera.com/delfino4html/web";
//DelfinoConfig.g4.signServerUrl = "https://www.opencert.co.kr/delfino4html/web";
DelfinoConfig.g4.signServerUrl = window.location.origin + "/wizvera/delfino4html/web";
//DelfinoConfig.g4.signServerUrl = window.location.origin + "/wizvera/delfino4html";

//DelfinoConfig.g4.needKey = true; //v4046(2017.04.19 이후 릴리즈)가 아닐 경우 해당 옵션 true 필요(false가 기본값)
//DelfinoConfig.g4.enableRotationOnTablet = true; ///true 값일 경우 : 태블릿 모드일 때 가로 금지 안함.
//DelfinoConfig.g4.useJSON = true; //G4서버와 통신시에 contentType으로 JSON 객체 사용.(false가 기본값, 이전과 같은 동작임)

//DelfinoConfig.g4.enablePreload = true; //iframe 미리 로드 (해당 값 없을 경우 false 기본값)
DelfinoConfig.g4.enableOpencertServer = false;
if (_Delfino_SystemMode == "test" || _Delfino_SystemMode == "dev") DelfinoConfig.g4.enableOpencertServer = false;

//OpenCert V2 활성화. 
DelfinoConfig.g4.opencert = {
	enable: false
};

/** 인증서 선택창에서 저장매체 enable/disable(BROWSER|FIND_CERT|EA|LOCAL_DISK|TOKEN|HSM|PHONE|USIM|SWHSM)*/
DelfinoConfig.g4.certStoreFilter = "BROWSER|FIND_CERT|LOCAL_DISK";
DelfinoConfig.g4.prepareCertStore = DelfinoConfig.prepareCertStore; //"USIM|SWHSM";

//DelfinoConfig.g4.certStoreTypeBrowserToLocalDisk = true; //default(BROWSER), true(LOCAL_DISK) KB
//DelfinoConfig.g4.certStoreTypeOnesignToPhone = true; //default(EA), true(PHONE) KB

DelfinoConfig.g4.checkedSaveCertInBrowser = true;
DelfinoConfig.g4.insertViewportTag = true;

DelfinoConfig.g4.certConverter = {
    Win     : _Delfino_Down + "/certconverter/CertConverter.exe",
    Mac     : _Delfino_Down + "/certconverter/CertConverter.dmg",
    Linux32 : _Delfino_Down + "/certconverter/CertConverter_32.tgz",
    Linux64 : _Delfino_Down + "/certconverter/CertConverter_64.tgz"
};

DelfinoConfig.g4.popupHelp = {
    url    : "", //"https://obank.kbstar.com/quics?page=C039183",
    width  : 700,
    height : 560
};

DelfinoConfig.g4.roamingImage = {
    desktopExport : _Delfino_Base + "/sitelogo/cert_export_roaming_x1.png",        // 270 x 130
    desktopImport : _Delfino_Base + "/sitelogo/cert_import_roaming_x1.png",        // 270 x 130
    tabletExport  : _Delfino_Base + "/sitelogo/cert_export_roaming_x2_tablet.png", // 760 x 400
    tabletImport  : _Delfino_Base + "/sitelogo/cert_import_roaming_x2_tablet.png", // 760 x 400
    mobileExport  : _Delfino_Base + "/sitelogo/cert_export_roaming_x2_mobile.png", // 300 x 150
    mobileImport  : _Delfino_Base + "/sitelogo/cert_import_roaming_x2_mobile.png"  // 300 x 150
};

//G4 저장매체 표시 옵션
//DelfinoConfig.g4.uiType = "default"; //간편인증제외
DelfinoConfig.g4.uiType = "smart";   //간편인증포함
//DelfinoConfig.g4.uiType = "none";    //무설치버전UI
//DelfinoConfig.g4.manageButton = true; //서명창 인증서리스트 왼쪽 하단에 인증서 관리 버튼 나타남.

DelfinoConfig.g4.oneSignServiceUrl = "https://rs.wizvera.com/relayServer/delfino/sign.do";
DelfinoConfig.g4.bioHelp = {
    url    : "https://demo.wizvera.com/delfino4html/html5/app_help/index.html",
    width  : 550,
    height : 600,
    apps   :
    {
        "DelfinoG5" : {
            title : "G5 전자서명기",
            iconUrl  : _Delfino_Base + "/sitelogo/G5_app_icon.png"
        }
    }
};
/*
DelfinoConfig.g4.secureKeyboard={
	name : "touchennxkey",
	src : "/TouchEn/cmn/TouchEnNx.js",
	enableOS : "WINDOWS|MAC|LINUX"
};
*/

//인증서 가져오기 스킴 및 패키지 url 설정. 2017/04/24이전 릴리즈는 onesign, com.wizvera.onesign이 기본값.
//DelfinoConfig.g4.certCopyScheme = "wizvera-certcopy";
//DelfinoConfig.g4.certCopyPackageUrl = "com.wizvera.certcopy";

//인증서로밍: 가져오기/내보내기
DelfinoConfig.certRelay = {
     provider : "wizveraV2",
     providerUrl : _Delfino_Svc + "/delfino_certRelay.jsp"
};
//DelfinoConfig.certRelay.providerUrl = "https://trs.wizvera.com/certRelay/certMove.do"; //WIZVERA default

//휴대폰 가져오기/내보내기 설정
DelfinoConfig.transferInfo = {
    provider : "crosscert",
    host : "211.192.169.44",
    port : 443,
    csrKey : "1892D918",
    importInfoUrl : _Delfino_Base + "/sitelogo/delfino_import.png",
    exportInfoUrl : _Delfino_Base + "/sitelogo/delfino_export.png"
};

DelfinoConfig.langUrl = {
    koreanUrl : _Delfino_Base + "/lang/delfino_lang_korean.js?20160205",
    englishUrl :_Delfino_Base + "/lang/delfino_lang_english.js?20160205",
    chaneseUrl :_Delfino_Base + "/lang/delfino_lang_chinese.js?20160205",
    japaneseUrl :_Delfino_Base + "/lang/delfino_lang_japanese.js?20160205",
    vietnameseUrl :_Delfino_Base + "/lang/delfino_lang_vietnamese.js?20160205"
};
DelfinoConfig.langUrl_b64 = {
    koreanUrl : _Delfino_Base + "/lang/delfino_lang_korean_b64.js?20160205",
    englishUrl :_Delfino_Base + "/lang/delfino_lang_english_b64.js?20160205",
    chaneseUrl :_Delfino_Base + "/lang/delfino_lang_chinese_b64.js?20160205",
    japaneseUrl :_Delfino_Base + "/lang/delfino_lang_japanese_b64.js?20160205",
    vietnameseUrl :_Delfino_Base + "/lang/delfino_lang_vietnamese_b64.js?20160205"
};
DelfinoConfig.lang = _Delfino_SystemLang;
DelfinoConfig.langUrl = DelfinoConfig.langUrl_b64;

var ubikeyConfig = {
    enable: "true",
    download: "https://ibs.kfcc.co.kr/common/infovine/download.html",
    version: "1,4,0,1",
    download_x64: "https://ibs.kfcc.co.kr/common/infovine/download.html",
    version_x64: "1,4,0,1",
    update: "KBSTAR_WIZVERA|NULL",
    securekeyboard: "WIZVERA|AHNLABST" //"WIZVERA|SOFTCAMP"
};
//ubikeyConfig.enable = "false";

var ubikeyConfigMac = {
    enable: "true",
    download: "http://test.ubikey.co.kr/infovine/mac/1002/download.html",
    version: "v.1,0,0,2",
    update: "KBSTAR_WIZVERA|NULL",
    securekeyboard: ""//WIZVERA|AHNLABST"
};
//ubikeyConfigMac.enable = "false";

var ubikeyConfigLinux = {
    enable: "true",
    download: "http://demo.wizvera.com/down/infovine/download_linux.html",
    version: "1,0,0,1",
    update: "KBSTAR_WIZVERA|NULL",
    securekeyboard: ""//WIZVERA|AHNLABST"
};
//ubikeyConfigLinux.enable = "false";

var mobisignConfig = {
    enable:     "true",
    download:   "http://www.mobisign.kr/mobisigndll.htm",
    //download: "http://demo.wizvera.com/down/lumensoft/mobisign.html",
    version:    "5,0,3,8",
    sitecode:   "5020004",
    aclist:     "34;yessignCA;1.2.410.200005.1.1.1;yessignCA;1.2.410.200005.1.1.5;yessignCA;1.2.410.200005.1.1.4;yessignCA;1.2.410.200005.1.1.2;yessignCA;1.2.410.200005.1.1.6.1;yessignCA Class 1;1.2.410.200005.1.1.1;yessignCA Class 1;1.2.410.200005.1.1.5;yessignCA Class 1;1.2.410.200005.1.1.4;yessignCA Class 1;1.2.410.200005.1.1.2;yessignCA Class 1;1.2.410.200005.1.1.6.1;signGATE CA;1.2.410.200004.5.2.1.2;signGATE CA;1.2.410.200004.5.2.1.1;signGATE CA;1.2.410.200004.5.2.1.7.1;signGATE CA4;1.2.410.200004.5.2.1.2;signGATE CA4;1.2.410.200004.5.2.1.1;signGATE CA4;1.2.410.200004.5.2.1.7.1;SignKorea CA;1.2.410.200004.5.1.1.5;SignKorea CA;1.2.410.200004.5.1.1.7;SignKorea CA2;1.2.410.200004.5.1.1.5;SignKorea CA2;1.2.410.200004.5.1.1.7;NCASign CA;1.2.410.200004.5.3.1.2;NCASign CA;1.2.410.200004.5.3.1.9;CrossCert Certificate Authority;1.2.410.200004.5.4.1.1;CrossCert Certificate Authority;1.2.410.200004.5.4.1.2;CrossCert Certificate Authority;1.2.410.200004.5.4.1.101;CrossCertCA2;1.2.410.200004.5.4.1.1;CrossCertCA2;1.2.410.200004.5.4.1.2;CrossCertCA2;1.2.410.200004.5.4.1.101;TradeSignCA;1.2.410.200012.1.1.1;TradeSignCA;1.2.410.200012.1.1.3;TradeSignCA;1.2.410.200012.1.1.101;TradeSignCA2;1.2.410.200012.1.1.1;TradeSignCA2;1.2.410.200012.1.1.3;TradeSignCA2;1.2.410.200012.1.1.101;",
    aclist_test:"42;yessignCA-TEST;1.2.410.200005.1.1.1;yessignCA-TEST;1.2.410.200005.1.1.2;yessignCA-TEST;1.2.410.200005.1.1.4;yessignCA-TEST;1.2.410.200005.1.1.6.1;SignGateFTCA CA;1.2.410.200004.2.201;SignGateFTCA CA;1.2.410.200004.5.2.1.7.1;signGATE FTCA02;1.2.410.200004.2.201;signGATE FTCA02;1.2.410.200004.5.2.1.7.1;signGATE FTCA02;1.2.410.200004.2.202;SignKorea Test CA;1.2.410.200004.5.1.1.7;SignKorea Test CA;1.2.410.200004.5.1.1.5;NCATESTSign;1.2.410.200004.5.3.1.2;NCATESTSign;1.2.410.200004.5.3.1.9;CrossCertCA-Test2;1.2.410.200004.5.4.1.1;CrossCertCA-Test2;1.2.410.200004.5.4.1.2;CrossCertCA-Test2;1.2.410.200004.5.4.1.101;TestTradeSignCA;1.2.410.200012.1.1.3;TestTradeSignCA;1.2.410.200012.1.1.1;TestTradeSignCA;1.2.410.200012.1.1.101;yessignCA-Test Class 0;1.2.410.200005.1.1.1;yessignCA-Test Class 0;1.2.410.200005.1.1.2;yessignCA-Test Class 0;1.2.410.200005.1.1.4;yessignCA-Test Class 0;1.2.410.200005.1.1.5;yessignCA-Test Class 0;1.2.410.200005.1.1.6.1;yessignCA-Test Class 0;1.2.410.200005.1.1.6.8;yessignCA-Test Class 1;1.2.410.200005.1.1.1;yessignCA-Test Class 1;1.2.410.200005.1.1.2;yessignCA-Test Class 1;1.2.410.200005.1.1.4;yessignCA-Test Class 1;1.2.410.200005.1.1.5;yessignCA-Test Class 1;1.2.410.200005.1.1.6.1;yessignCA-Test Class 1;1.2.410.200005.1.1.6.8;signGATE FTCA04;1.2.410.200004.2.201;signGATE FTCA04;1.2.410.200004.5.2.1.7.1;signGATE FTCA04;1.2.410.200004.2.202;SignKorea Test CA2;1.2.410.200004.5.1.1.7;SignKorea Test CA2;1.2.410.200004.5.1.1.5;CrossCertTestCA2;1.2.410.200004.5.4.1.1;CrossCertTestCA2;1.2.410.200004.5.4.1.2;CrossCertTestCA2;1.2.410.200004.5.4.1.101;TradeSignCA2009Test2;1.2.410.200012.1.1.3;TradeSignCA2009Test2;1.2.410.200012.1.1.1;TradeSignCA2009Test2;1.2.410.200012.1.1.101;"
};
//mobisignConfig.enable = "false";

DelfinoConfig.smartone = {
    enable:      true,
    version:     "1,0,0,5",
    download:    "https://dev.smart-one.co.kr/smartone/dn/popup.html",
    host :       "api.smart-one.co.kr",
    port:         443,
    siteCode:    "065004"
};
DelfinoConfig.smartone.enable = false;

//ax-plugin:  scsk, touchenkey, kings, npkcx, aos
//non-plugin: scsk, touchennxkey, astx(nve), nosk(npkfx), kos

var secureKeyboardConfig = {
    enable:     true,
    toggle:     true,
    showMessage: true,
    //product:    "touchennxkey,scsk"
	//kos siteCode 기본:0 , 삼성화재:0x0d01
    product:    "touchennxkey",
    option : {
    	kos : {siteCode : 0x0d01}
    }
};

//스마트인증
DelfinoConfig.usim = {
    usingDrivers : "USIM_0001|USIM_0002",
    certSelector : "mobile",
    displayDataAtMobile : false,
    siteDomain : "www.wizvera.com",
    disableInHSM : false,
    raon : { download: "http://www.usimcert.com/popup/pop_install.php", siteCode : "900000000", displayDataAtMobile : false },
    dream : { download: "http://ids.smartcert.kr", host : "center.smartcert.kr", port : "443", displayDataAtMobile : true }
};

//위즈베라 세이프하드 , 금결원 안전디스크 중 order 번호가 낮은 쪽이 메뉴 위쪽에 뜸(인덱스가 없거나 같으면 세이프하드가 위쪽에 뜸)
//위즈베라 세이프하드
DelfinoConfig.safehard = {
    order: 1,
    version:  "1,0,1,5",
    download: "http://download.safehard.co.kr/install/install.html",
    downloadNormal: "http://download.safehard.co.kr/install/install_normal.html",
    cloudUrl: "http://cloud.safehard.co.kr/safeHardRelayServer/safeHardReq.do",
    secureKeyboardConfig : secureKeyboardConfig
};

//금결원 안전디스크
/* DelfinoConfig.secureDisk = {
    order: 2,
    enable:   true,
    version:  "1.5.2",
    download: "https://www.dgb.co.kr/cms/sdz/disk_guide.html"
}; */

//EA
DelfinoConfig.EA = {
    enable: false
};

DelfinoConfig.myPassword = {
 enable: false
};

//개발모드  설정
if (_Delfino_SystemMode == "test" || _Delfino_SystemMode == "dev" ) {
    DelfinoConfig.issuerCertFilter += DelfinoConfig.issuerCertFilter_test;
    DelfinoConfig.yessignCaHost = DelfinoConfig.yessignCaHost_test;
    DelfinoConfig.yessignCaPort = DelfinoConfig.yessignCaPort_test;
    DelfinoConfig.crosscertCaPort = DelfinoConfig.crosscertCaPort_test;
    DelfinoConfig.crosscertCaHost = DelfinoConfig.crosscertCaHost_test;
    DelfinoConfig.signkoreaCaHost = DelfinoConfig.signkoreaCaHost_test;
    DelfinoConfig.signkoreaCaPort = DelfinoConfig.signkoreaCaPort_test;
    DelfinoConfig.kicaCaHost = DelfinoConfig.kicaCaHost_test;
    DelfinoConfig.kicaCaPort = DelfinoConfig.kicaCaPort_test;
    mobisignConfig.aclist = mobisignConfig.aclist_test;
	DelfinoConfig.yessignWebCmpUrl = DelfinoConfig.yessignWebCmpUrl_test;
}
//alert(_Delfino_SystemMode + "\n" + DelfinoConfig.issuerCertFilter);

//if (document.location.hostname.indexOf("obiz.kbstar.com") >= 0) DelfinoConfig.cacheCertStore = true; //KB:기업:저장매체캐쉬
//if (typeof _SITE_SiteName != "undefined" && _SITE_SiteName == "osenior") DelfinoConfig.uiType = "senior"; //KB:시니어뱅킹

//모바일 구분(iOS, Android)
if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {

}
else if(navigator.userAgent.match(/Android/i)){
    DelfinoConfig.installMessage.Mobile = "전용 브라우저를 사용하여야만 이용이 가능한 서비스입니다.\n[확인]을 선택하시면 전용 브라우저가 실행(설치)됩니다.";
}

//다국어 적용
if (_Delfino_SystemLang == "ENG") {
    DelfinoConfig.installPage.WinIE = _Delfino_Base + "/install20/install.html?lang=ENG";
    DelfinoConfig.installPage.WinMoz = DelfinoConfig.installPage.WinIE;
    DelfinoConfig.installPage.Mac = DelfinoConfig.installPage.WinIE;
    DelfinoConfig.installPage.Linux = DelfinoConfig.installPage.WinIE;
    DelfinoConfig.installMessage.NO = "Certification in an environment that does not support transactions have access.";
    DelfinoConfig.installMessage.PC = "This service is available only after installation of the security program. Selecting \n[Confirm] will connect you to the installation page.";
    DelfinoConfig.installMessage.Mobile = "This service is available only when using a dedicated browser. Selecting \n[Approve] will open (install) the browser.";
    if(navigator.userAgent.match(/Android/i))
        DelfinoConfig.installMessage.Mobile = "This service is available only when using a dedicated browser. Selecting \n[Confirm] will open (install) the browser.";
} else if (_Delfino_SystemLang == "CHN") {
    DelfinoConfig.installPage.WinIE = _Delfino_Base + "/install20/install.html?lang=CHN";
    DelfinoConfig.installPage.WinMoz = DelfinoConfig.installPage.WinIE;
    DelfinoConfig.installPage.Mac = DelfinoConfig.installPage.WinIE;
    DelfinoConfig.installPage.Linux = DelfinoConfig.installPage.WinIE;
    DelfinoConfig.installMessage.NO = "Certification in an environment that does not support transactions have access.";
    DelfinoConfig.installMessage.PC = "安装安全程序后方可使用的服务。\n点击[确认]，则将进入安装页面。";
    DelfinoConfig.installMessage.Mobile = "使用专用浏览器方可使用的服务。\n点击[批准]，则将运行（安装）专用浏览器。";
    if(navigator.userAgent.match(/Android/i))
        DelfinoConfig.installMessage.Mobile = "使用专用浏览器方可使用的服务。\n点击[确认]，则将运行（安装）专用浏览器。";
} else if (_Delfino_SystemLang == "JPN") {
    DelfinoConfig.installPage.WinIE = _Delfino_Base + "/install20/install.html?lang=JPN";
    DelfinoConfig.installPage.WinMoz = DelfinoConfig.installPage.WinIE;
    DelfinoConfig.installPage.Mac = DelfinoConfig.installPage.WinIE;
    DelfinoConfig.installPage.Linux = DelfinoConfig.installPage.WinIE;
    DelfinoConfig.installMessage.NO = "Certification in an environment that does not support transactions have access.";
    DelfinoConfig.installMessage.PC = "セキュリティプログラムをインストールしなければ、ご利用できないサービスです。\n[確認]を選択すると、インストールページにアクセスされます。";
    DelfinoConfig.installMessage.Mobile = "専用ブラウザをご利用しなければ、ご利用できないサービスです。\n[承認]を選択すると、専用ブラウザが実行(インストール)されます。";
    if(navigator.userAgent.match(/Android/i))
        DelfinoConfig.installMessage.Mobile = "専用ブラウザをご利用しなければ、ご利用できないサービスです。\n[確認]を選択すると、専用ブラウザが実行(インストール)されます。";
} else if (_Delfino_SystemLang == "VNM") {
    DelfinoConfig.installPage.WinIE = _Delfino_Base + "/install20/install.html?lang=VNM";
    DelfinoConfig.installPage.WinMoz = DelfinoConfig.installPage.WinIE;
    DelfinoConfig.installPage.Mac = DelfinoConfig.installPage.WinIE;
    DelfinoConfig.installPage.Linux = DelfinoConfig.installPage.WinIE;
    DelfinoConfig.installMessage.NO = "Certification in an environment that does not support transactions have access.";
    DelfinoConfig.installMessage.PC = "Dịch vụ này chỉ có sau khi cài đặt của chương trình bảo mật. Lựa chọn \n[Xác nhận] sẽ kết nối bạn đến trang cài đặt.";
    DelfinoConfig.installMessage.Mobile = "Dịch vụ này hiện có sẵn chỉ khi sử dụng một trình duyệt chuyên dụng. Lựa chọn \n[Phê duyệt] sẽ mở (cài đặt) của trình duyệt.";
    if(navigator.userAgent.match(/Android/i))
        DelfinoConfig.installMessage.Mobile = "Dịch vụ này hiện có sẵn chỉ khi sử dụng một trình duyệt chuyên dụng. Lựa chọn \n[Xác nhận] sẽ mở (cài đặt) của trình duyệt.";
}

// 2018.07.18 oid 및 ou 값 구분으로 인증서 내보내기 및 복사 방지 옵션
DelfinoConfig.g4.notAllowedExportFilter = "1.2.410.200005.1.1.1|1.2.410.200005.1.1.5";
DelfinoConfig.g4.allowedExportBySubjectFilter = {
    "1.2.410.200005.1.1.1" : "personal",
    "1.2.410.200005.1.1.5" : "corporation4EC"
};

// 모바일, 태블릿에서 area 태그로 웹접근성 적용여부
DelfinoConfig.g4.useMapOnKeyboard = true;


//웹접근성 인증서 가져오기/내보내기 관련 설정 추가 _ 20180828
DelfinoConfig.g4.ariaLabelAuthCode = {
	import: '인증서 가져오기 이미지 설명입니다 내용은 직접입력하세요',
    export: '인증서 내보내기 이미지 설명이라네 내용은 직접입력하시게나'
}

/*
 *  WizIN-Delfino 동작방식 설정
 * - G2: plug-in, G3: handler, G4: html5
 * - 접속브라우저 확인 후 최종값이 문자열로 설정됨
 * - 외부에서 _SITE_ModuleType(_Delfino_ModuleType)값이 설정되어 있을 경우 업무 설정값을 우선으로 사용됨
*/
if (_Delfino_ModuleType != "") {
    DelfinoConfig.module = _Delfino_ModuleType;
} else {
    DelfinoConfig.module = {};
    DelfinoConfig.module.all = "G3,G4";
    //DelfinoConfig.module.all = "G4";

    DelfinoConfig.module.win32 = {};
    //DelfinoConfig.module.win32.all = "G3";
    //DelfinoConfig.module.win32.edge = "G3";
    //DelfinoConfig.module.win32.chrome = "G3";
    //DelfinoConfig.module.win32.firefox = "G3";
    //DelfinoConfig.module.win32.opera = "G3";
    //DelfinoConfig.module.win32.safari = "G3";
    //DelfinoConfig.module.win32.msie = "G2";
    //DelfinoConfig.module.win32.msie06 = "G2";
    //DelfinoConfig.module.win32.msie07 = "G2";
    //DelfinoConfig.module.win32.msie08 = "G2";
    //DelfinoConfig.module.win32.msie09 = "G2";
    //DelfinoConfig.module.win32.msie10 = "G2";
    //DelfinoConfig.module.win32.msie11 = "G3";

    DelfinoConfig.module.win64 = {};
    //DelfinoConfig.module.win64.all = "G3";
    //DelfinoConfig.module.win64.edge = "G3";
    //DelfinoConfig.module.win64.chrome = "G3";
    //DelfinoConfig.module.win64.firefox = "G3";

    DelfinoConfig.module.mac = {};
    //DelfinoConfig.module.mac.all = "G4";
    //DelfinoConfig.module.mac.chrome = "G4";
    //DelfinoConfig.module.mac.firefox = "G4";
    //DelfinoConfig.module.mac.opera = "G4";
    //DelfinoConfig.module.mac.safari = "G4";

    DelfinoConfig.module.linux = {};
    //DelfinoConfig.module.linux.all = "G4";
    //DelfinoConfig.module.linux.chrome = "G4";
    //DelfinoConfig.module.linux.firefox = "G4";
    //DelfinoConfig.module.linux.opera = "G4";

    DelfinoConfig.module.mobile = {};
    DelfinoConfig.module.mobile.all = "G4";
}
	//DelfinoConfig.myPassword = {enable: true};

/* //WIZVERA_TEST_START
if (typeof DelfinoConfig.module != "string") {
    if (document.location.hostname.indexOf("demo.wizvera.com")  >= 0) DelfinoConfig.module.all = "G2,G4";
    if (document.location.hostname.indexOf("help2.wizvera.com") >= 0) DelfinoConfig.module.all = "G2,G4";
    if (document.location.hostname.indexOf("ts2.wizvera.com")   >= 0) DelfinoConfig.module.all = "G2,G4";
    if (document.location.hostname.indexOf("test2.wizvera.com") >= 0) DelfinoConfig.module.all = "G2,G4";

    if (document.location.hostname.indexOf("demo2.wizvera.com") >= 0) DelfinoConfig.module.all = "G3,G4";
    if (document.location.hostname.indexOf("help.wizvera.com")  >= 0) DelfinoConfig.module.all = "G3,G4";
    if (document.location.hostname.indexOf("ts.wizvera.com")    >= 0) DelfinoConfig.module.all = "G3,G4";
    if (document.location.hostname.indexOf("test.wizvera.com")  >= 0) DelfinoConfig.module.all = "G3,G4";

    if (document.location.hostname.indexOf("mts.wizvera.com")   >= 0) DelfinoConfig.module.all = "G4,G3";
    if (document.location.hostname.indexOf("mts2.wizvera.com")  >= 0) DelfinoConfig.module.all = "G4,G2";
}
//DelfinoConfig.license = "";
//WIZVERA_TEST_END */