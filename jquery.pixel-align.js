(function($) {
  $.pixelAlignSvgs = function() {
    $.each($("svg"), function() {
      this.style.left = "0";
      this.style.right = "0";
      var position = this.getScreenCTM();
      var left = -position.e % 1;
      var top = -position.f % 1;
      if (!(left || top)) { return; }
      this.style.position = "relative";
      if (left) { this.style.left = left + "px"; }
      if (top) { this.style.top = top + "px"; }
    });
    window.onresize = $.pixelAlignSvgs
  };
})(jQuery);
