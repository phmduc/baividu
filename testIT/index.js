const list = [
  {
    questId: 1,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum nisl. ",
  },
  {
    questId: 2,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum nisl. ",
  },
  {
    questId: 3,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum nisl. ",
  },
  {
    questId: 4,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum nisl. ",
  },
  {
    questId: 5,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum nisl. ",
  },
  {
    questId: 6,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum nisl. ",
  },
  {
    questId: 7,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum nisl. ",
  },
  {
    questId: 8,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum nisl. ",
  },
  {
    questId: 9,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum nisl. ",
  },
  {
    questId: 10,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id rutrum nisl. ",
  },
];

$(document).ready(function () {
  $(".playbutton").click(() => {
    $(".video").html(
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/nVgsLncoMIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    );
  });
  $(".playbutton").click(() => {
    $(".video").html(
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/nVgsLncoMIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    );
  });
  let range = 10;
  let currentSlide;
  $(".currentRange").css("--percent", `${range}%`);

  $(".questWrap .quest").each((index, elem) => {
    $(elem)
      .find(".form-check input")
      .click(() => {
        console.log(range);
        if (range < 100) {
          range = range + (1 / $(".questWrap .quest").length) * 100;
          $(".currentRange").css("--percent", `${range}%`);
        }

        $(elem).removeClass("show");
        $($(".questWrap .quest").eq(index + 1)).addClass("show");
      });
  });
  $(".prev").click(() => {
    $(".questWrap .quest").each((index, elem) => {
      if ($(elem).hasClass("show") && index > 0) {
        $(elem).removeClass("show");
        $($(".questWrap .quest").eq(index - 1)).addClass("show");
        range = (index / $(".questWrap .quest").length) * 100;
        $(".currentRange").css("--percent", `${range}%`);
      }
    });
  });
});
