var arr = new Array();
for (var i = 1; i < 50; i++) {
  arr.push(i);
}
// console.log(arr)
var getRandom = function (arr) {
  var len = arr.length;
  var result = [];
  //随机索引数
  var r;
  arr.sort(function () {
    return 0.5 - Math.random();
  });
  result = arr;

  console.log(result);
};
console.log(getRandom(arr));

window.addEventListener("load", function () {
  //get the images
  var ul = document.getElementById("ul");
  //get the picture location
  var windowW = document.documentElement.clientWidth - 340;
  var windowH = document.documentElement.clientHeight - 191;
  //start the arry
  for (var i = 1; i < 35; i++) {
    //make the li
    var li = document.createElement("div");
    //add to ul's child elements
    ul.appendChild(li);
    console.log("Pic: " + li);
  }

  //Get all the li
  var allLi = ul.children;

  for (var j = 0; j < allLi.length; j++) {
    // get number from 1 to 50
    //取出单个li
    var li = allLi[j];
    //get random position
    li.style.left = parseInt(Math.random() * windowW) + "px";
    li.style.top = parseInt(Math.random() * windowH) + "px";
    //get random angle
    // li.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
    li.className = "son";
    li.style.backgroundImage = "url('./img/grid/" + arr[j] + ".jpg')";
    //监听点击事件
    // li.addEventListener('click',function(){
    // for(var i=0;i<allLi.length;i++){
    // 	allLi[i].className = '';
    // }
    // this.className = 'checked';
    // });
  }

  //mouse dragging effect
  function dragFn(dragObj, parent) {
    $(dragObj).mousedown(function (e) {
      var _this = $(this);
      var container_h = $(parent)[0].offsetHeight;
      container_w = $(parent)[0].offsetWidth;
      drag_h = $(this)[0].offsetHeight;
      drag_w = $(this)[0].offsetWidth;
      var dragX = e.clientX - $(this)[0].offsetLeft;
      var dragY = e.clientY - $(this)[0].offsetTop;

      // 当前拖拽对象层级优先
      $(this).css("z-index", "9").siblings().css("z-index", "1");

      $(document).mousemove(function (e) {
        var l = e.clientX - dragX;
        var t = e.clientY - dragY;
        if (l < 0) {
          l = 0;
        } else if (l > container_w - drag_w) {
          l = container_w - drag_w;
        }
        if (t < 0) {
          t = 0;
        } else if (t > container_h - drag_h) {
          t = container_h - drag_h;
        }
        _this.css({
          left: l + "px",
          top: t + "px",
        });
      }
      
      );
    });
    $(document).mouseup(function () {
      $(this).off("mousemove");
    });
  }
  dragFn(".son", ".container");
  $(".son").click(function () {
    //  var pattern = /img/(.*).jpg/,;
    var url = $(this).attr("style");
    var matchReg = /img\/(.*)(?=\.jpg)/;
    url = url.match(matchReg);
    var id = url[1];
    $("#h1")
      .show(500)
      .replaceWith("<h1 id='h1'>" + imgName[id] + "</h1>");
  });
});

//screenshot on Canvas
const a = navigator.mediaDevices.getDisplayMedia;

const takeScreenShot = async() => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
        video:{mediaSource:'screen'}
    });

    const track = stream.getVideoTracks()[0];
    const image = new ImageCapture(track);
    const bitmap = await image.grabeFrame();

    track.stop();
    const canvas = document.getElementById('screenshot');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;

    const context = canvas.getContext('2d');
    context.drawImage(bitmap,0,0,790,bitmap.height/2);
    const img = canvas.toDataURL();
const res = await fetch(img);
const buff = await res.arrayBuffer();

const file = [
    new File([buff],'phone_${newData()}.jpg',{
        type:'image/jpeg'
    })
];
return file;
};

const button = document.getElementById('btn').onclick = () => a ? takeScreenShot() : {};

