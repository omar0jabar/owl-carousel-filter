$(document).ready(function () {


    $(".jo-owl-filter").each(function () {

        var joFilterClass = $(this).find(".jo-owl-carousel").attr("class");

        var joOwlFilter = "";
        $(this).find(".jo-cats .jo-cat").each(function () {
            var catId = $(this).attr("id");

            if (catId != "cat-0") {
                var joFilter = "<div class='" + joFilterClass + "' id='" + catId + "'>";

                $(this).parents(".jo-owl-filter").find(".jo-owl-carousel .item").each(function () {


                    if (catId == $(this).data("cat")) {
                        joFilter += $(this).prop("outerHTML");
                    }
                });

                joFilter += "</div>"

                joOwlFilter += joFilter;
            }

        })

        $(this).find(".jo-carousel-box").append(joOwlFilter);
        $(this).find(".jo-owl-carousel").eq(0).addClass("show");

        var parent = $(this);

        $(this).find(".jo-cats .jo-cat").click(function (e) {
            e.preventDefault();
            var idCat = $(this).attr("id");
            parent.find(".jo-cats .jo-cat").removeClass("selected");
            $(this).addClass("selected");
            parent.find(".jo-owl-carousel").removeClass("show");

            parent.find(".jo-owl-carousel#" + idCat).addClass("show");


        });



    })

    $(".jo-owl-filter .owl-carousel.jo-owl-carousel.owl-1").owlCarousel({
        margin: 15,
        items: 4
    });

    $(".jo-owl-filter .owl-carousel.jo-owl-carousel.owl-2").owlCarousel({
        margin: 15,
        item: 3
    });


});
