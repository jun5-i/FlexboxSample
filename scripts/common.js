$(function() {
    window.common = {};
    var common = window.common;
    
    /**
     * 要素をアコーディオンさせる処理。
     * @param {jQuery} $triggerElem トリガーとなる要素を示すjQueryオブジェクト.  
     */
    common.accordion = function ($triggerElem) {
        $($triggerElem.data('accordion').targetElement).toggleClass('is-expand');
        $triggerElem.toggleClass('is-active');
    };
});