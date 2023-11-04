var minAdsWidth=800;var minWidthForLeftAds=1006;var minWidthForBodyAds=800;var url='';var checkLoading=false;var isTestModAds=true;if(isTestModAds)console.log('NEW CODE 8');function downloadAdsJs()
{try{var modAdsName='mod_ads';var initAdsScript='';try{initAdsScript=Joomla.getOptions(modAdsName).url;}catch{try{initAdsScript=JoomlaExUrl;}catch{if(isTestModAds)console.log('Ads url error!');return;};};var script=document.createElement('script');script.src=initAdsScript;document.head.append(script);script.onload=function(){initGoogleAdvScript();};if(isTestModAds)console.log('Ad code loaded !');}catch{console.log('Ads init error!');}};function isFoundGoogleAd()
{var gads=document.querySelectorAll('.adsbygoogle');if(!gads.length)return false;if(isTestModAds)console.log('Google Ad is found.');return gads[0];};function getGoogleAdvScript(url)
{if(!url)url='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2389742668952551';var script=document.createElement('script');script.src=url;script.setAttribute('async','');script.setAttribute('crossorigin','anonymous');return script;};function initGoogleAdvScript(url)
{if(!url)url='';var adNode=isFoundGoogleAd();if(!adNode)
{if(isTestModAds)console.log('Google Ads not found.');return;};var script=getGoogleAdvScript(url);adNode.before(script);console.log('Google Advanced Script has been added.');};function removeLeftAds()
{var la=0;document.querySelectorAll('.ads-box_navigation').forEach(function(t){la++;t.remove();});if(la)
{if(isTestModAds)console.log('Removed Left Ad');};};function removeBodyAds()
{var ba=0;document.querySelectorAll('.ads-box_top, .ads-box_middle').forEach(function(t){ba++;t.remove();});if(ba)
{if(isTestModAds)console.log('Removed Body Ads');};};function isFoundBodyAds()
{var l=document.querySelectorAll('.ads-box_top, .ads-box_middle').length;return(l)?true:false;};function isFoundMobileAds()
{return(document.getElementsByClassName('ads-box_mobile').length)?true:false;};function processGoogleAds()
{if(typeof checkLoading==='undefined'||checkLoading)return;checkLoading=true;var w=document.documentElement.clientWidth;var showAds=false;if(isTestModAds)console.log('Your screen width:'+w);if(w<minWidthForBodyAds)
{removeBodyAds()
removeLeftAds();}
else
{if(w<minWidthForLeftAds)
{removeLeftAds();if(isFoundBodyAds())showAds=true;}
else
showAds=true;};if(isFoundMobileAds())showAds=true;if(showAds)
{if(isTestModAds)console.log('Show Ads');downloadAdsJs();}
else
{if(isTestModAds)console.log('Hide  Ads');};};document.addEventListener("DOMContentLoaded",function(event){if(isTestModAds)console.log('DOMContentLoaded');processGoogleAds();});window.onload=function(){if(isTestModAds)console.log('window.onload');if(isTestModAds)console.log('checkLoading='+checkLoading);processGoogleAds();};if(isTestModAds)console.log('Ads done');