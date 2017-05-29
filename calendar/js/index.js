/**
 * Created by Erin on 2017/5/28.
 */
//import {$,jQuery} from 'jquery';
require( "./jQuery.calendar");

$("#trigger").calendar({
    container: "#trigger",
    width: "100%",
    onSelectDate: function(_date) {
        console.log(_date + " clicked. you can do something when the day selected.");
    },
});