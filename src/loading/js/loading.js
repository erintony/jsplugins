/**
 * Created by Erin on 2017/12/3.
 *
 * 加载框组件
 */

!function ($) {

    var Loading = function (options) {
        this.createDom(options);
    }

    //版本号
    Loading.VERSION = '0.0.1';

    //默认参数
    Loading.DEFAULTS = {
        type: 'multiple', //支持pulse  multiple  triangle  加载类型
        title: '数据加载中...', //标题
    }


    Loading.prototype.start = function (options) {
        if ($('body').find('#' + options.elementId).length > 0) {
            return;
        }

        this.createDom(options);
    }

    Loading.prototype.stop = function (options) {
        $('body').find('#' + options.elementId).remove();
    }

    Loading.prototype.createDom = function (options) {
        var type = '';

        switch (options.type) {
            case 'pluse' :
                type = 'loading-ball-clip-rotate-pluse';
                break;
            case 'multiple' :
                type = 'loading-ball-clip-rotate-multiple';
                break;
            case 'triangle' :
                type = 'loading-ball-triangle-path';
                break;
            default :
                type = 'loading-ball-clip-rotate-pulse';
        }

        var html = '<div class="loading-float" id="' + options.elementId + '">'
            + '<div class="loading-inner">'
            + '<div class="loading-container">'
            + '<div class="loading-ball ' + type + '">'
            + '<div></div>'
            + '<div></div>'
            + (options.type == 'triangle' ? '<div></div>' : '')
            + '</div>'
            + '</div>'
            + '</div>'
            + '<div class="loading-title">'
            + '<span>' + options.title + '</span>'
            + '</div>'

            + '</div>';

        $('body').append(html);
    }

    //创建插件
    function Plugin(options) {
        var elementId = '';
        if ($('body').find('loading-float').length > 0) {
            elementId = $('body').find('.loading-float').attr('id');
        } else {
            elementId = 'Loading_' + Math.round(Math.random() * 100000);
        }

        //合并参数
        var opts = $.extend(true, {}, Loading.DEFAULTS, {elementId: elementId}, typeof options === 'object' ? options : {});

        if (typeof options == 'string' && options == 'stop') {
            $('body').find('#' + elementId).remove();
        } else if ($('body').find('loading-float').length < 1) {
            new Loading(opts);
        }

    }

    $.fn.Loading = Plugin;
    $.fn.Loading.Constructor = Loading;

}(jQuery)