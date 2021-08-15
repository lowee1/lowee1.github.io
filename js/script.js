function scrollToMain() {
  var main = document.querySelector("main");
  var footer = document.querySelector("footer");
  var header = document.querySelector("header");
  var name_div = document.querySelector("#name_div");
  var name_header = document.querySelector("#name_header");
  var arrow = document.querySelector("#arrow");
  main.style.display = "flex";
  footer.style.display = "flex";
  header.style.height = "5vh";
  header.style.justifyContent = "flex-end";
  header.style.opacity = "0.7";
  header.style.boxShadow = "2px 5px 10px #680c8e";
  name_div.style.width = "10%";
  arrow.style.display = "none";
  jQuery("#name_header").fitText(0.3);

  var boxes = document.querySelectorAll(".boxes");
  6;
  boxes.forEach((box) => {
    var waypoint = new Waypoint({
      element: box,
      handler: function (direction) {
        if (direction == "down") {
          box.classList.remove("boxes");
          box.classList.add("boxes_expanded");

          var desc_cont = box.querySelector(".box_description_container");
          console.log(box);
          desc_cont.classList.remove("hidden");
          desc_cont.classList.add("expanded");

          var img_cont = box.querySelector(".image_container");
          img_cont.classList.remove("image_expanded");
          img_cont.classList.add("image_contracted");
        }
      },
      offset: "150%",
    });
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  jQuery("#name_header").fitText(0.4);
  window.scrollTo({ top: 0 });
});
