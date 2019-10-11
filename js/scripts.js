$(function(){
    $("#glitch-img").mgGlitch({
    destroy:false,
    glitch:true,
    scale:false,
    blend:true,
    blendModeType:'hue',
    glitch1TimeMin: 500,
    glitch1TimeMax: 100,
    glitch2TimeMin:100,
    glitch2TimeMax:100,
    });
});
$("#left").hide();
$("#right").hide();
$(".half-circle-small-left").hover(
    function(){
        $("#left").show();
    },
    function(){
        $("#left").hide();
    }
)
$(".half-circle-small-right").hover(
    function(){
        $("#right").show();
    },
    function(){
        $("#right").hide();
    }
)


