/**
 * Created by Erin on 2017/5/28.
 */
//import $ from 'jquery';
require( "./jQuery.calendar");

$("#trigger").calendar({
    container: "#trigger",
    width: "100%",
    onSelectDate: function(_$dom, _date) {
        $(".day").removeClass("current");
        _$dom.addClass("current");
        console.log(_date + " clicked. you can do something when the day selected.");
    },
});