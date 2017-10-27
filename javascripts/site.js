function shrinkHeader() {
  window.addEventListener("scroll", function(e) {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        blogTitle = document.getElementsByClassName("blog-title")[0],
        blogTitleFirstLine = document.getElementsByClassName(
      "blog-title-first-line"
    )[0];
    if (distanceY < 57) {
      var titleSizeOffset = 87 - distanceY;
      blogTitle.setAttribute(
        "style",
        "font-size:" +
        titleSizeOffset +
        "px; line-height:" +
        titleSizeOffset +
        "px;"
      );
    } else {
      blogTitle.setAttribute("style", "font-size: 30px; line-height: 27px;");
    }
  });
}
window.onload = shrinkHeader();

$(document).ready(function() {
  $(".fadeIn").each(function() {
    var src = $(this).data("src");
    if (src) {
      var img = new Image();
      img.style.display = "none";
      img.onload = function() {
        $(this).fadeIn(1000);
      };
      $(this).append(img);
      img.src = src;
    }
  });
});
