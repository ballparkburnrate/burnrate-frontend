var gauge1 = loadLiquidFillGauge("fillgauge1", 55);
var config1 = liquidFillGaugeDefaultSettings();
config1.circleThickness = 0.4;
config1.circleColor = "#6DA398";
config1.textColor = "#0E5144";
config1.waveTextColor = "#6DA398";
config1.waveColor = "#246D5F";
config1.textVertPosition = 0.52;
config1.waveAnimateTime = 5000;
config1.waveHeight = 0.15;
config1.waveAnimate = false;
config1.waveCount = 2;
config1.waveOffset = 0.25;
config1.textSize = 1.2;
config1.minValue = 30;
config1.maxValue = 150
config1.displayPercent = false;
config1.circleFillGap = 0.2;
config1.valueCountUp = false;
config1.waveRise = false;
config1.waveHeightScaling = false;    

var gauge2= loadLiquidFillGauge("fillgauge2", 28, config2);
var config2 = liquidFillGaugeDefaultSettings();

var gauge3 = loadLiquidFillGauge("fillgauge3", 60.1, config2);
var config3 = liquidFillGaugeDefaultSettings();


function NewValue(){
    if(Math.random() > .5){
        return Math.round(Math.random()*100);
    } else {
        return (Math.random()*100).toFixed(1);
    }
}