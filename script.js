//console.log("Hello JS-1");
//起始 使用javascript用ready  看到$就知道是用jquery
$(document).ready(function () {
            //console.log("ready");
var num=0;
            $("[class]").click(function () {
                console.log("Click!"+num)
            });
            $("[class]").mouseover(function () {
                    console.log("Mouseover!")
                    });
    $("td").click(function(){
$(this).css("background", "gold");
});


            });
        //console.log("Hello JS-2");
        //選擇器練習
        //http://www.bibeault.org/jqia2/chapter2/lab.selectors.html

        // $("[colspan='2']").click(function(){
        //console.log("Click!")
        //});
        //
        // $("[colspan='2']").mouseover(function(){
        //console.log("Mouseover!")
        //});