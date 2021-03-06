              //Executes your code when the DOM is ready.  Acts the same as $(document).ready().
              $(function() {
                  // Calls the selectBoxIt method on your HTML select box and updates the showEffect option
                  var toc = $("#toc").tocify({ showAndHide: false, selectors: "h3,h4,h5,h6", scrollTo: 110, smoothScroll: true, theme: "none", extendPage: false}).data("toc-tocify");

                  // Sets the showEffect, scrollTo, and smoothScroll options
                  toc.setOptions({ highlightOnScroll: false });

              });