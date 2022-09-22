window.addEventListener('load', function () {

    //get the images
    var ul = document.getElementById('ul');
    //get the picture location
    var windowW = document.documentElement.clientWidth - 340;
    var windowH = document.documentElement.clientHeight - 191;
    //start the arry
    for (var i = 1; i < 50; i++) {
        //make the li
        var li = document.createElement('div');
        //add to ul's child elements
        ul.appendChild(li);
    }

    //Get all the li
    var allLi = ul.children;
    //遍历
    for (var j = 0; j < allLi.length; j++) {
        // get number from 1 to 50
        var i = Math.floor(Math.random() * 50) + 1;  
        //取出单个li
        var li = allLi[j];
        //get random position
        li.style.left = parseInt(Math.random() * windowW) + 'px';
        li.style.top = parseInt(Math.random() * windowH) + 'px';
        //get random angle
        // li.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
         li.className = 'son';
         li.style.backgroundImage = "url('./img/" + i + ".jpg')";

         console.log("i");
        //监听点击事件
        //li.addEventListener('click',function(){
        //for(var i=0;i<allLi.length;i++){
        //	allLi[i].className = '';
        //}
        //this.className = 'checked';
        //});
    }


    //mouse dragging effect
    function dragFn(dragObj, parent) {
        $(dragObj).mousedown(function (e) {
            var _this = $(this)
            var container_h = $(parent)[0].offsetHeight
            container_w = $(parent)[0].offsetWidth
            drag_h = $(this)[0].offsetHeight
            drag_w = $(this)[0].offsetWidth
            var dragX = e.clientX - $(this)[0].offsetLeft
            var dragY = e.clientY - $(this)[0].offsetTop

            // 当前拖拽对象层级优先
            $(this).css('z-index', '9').siblings().css('z-index', '1')

            $(document).mousemove(function (e) {
                var l = e.clientX - dragX
                var t = e.clientY - dragY
                if (l < 0) {
                    l = 0
                } else if (l > container_w - drag_w) {
                    l = container_w - drag_w
                }
                if (t < 0) {
                    t = 0
                } else if (t > container_h - drag_h) {
                    t = container_h - drag_h
                }
                _this.css({
                    left: l + 'px',
                    top: t + 'px',
                })
            })
        })
        $(document).mouseup(function () {
            $(this).off('mousemove')
        })
    }
    dragFn('.son', '.container')
})

var a1 = ['Tom.jpg','Dick2.jpg','Harry.jpg','Bill.jpg'];
var images = a1.slice();
while(images.length){
  rnd = Math.floor(Math.random() * images.length);
  console.log(images[rnd]);
  images[rnd] = '';
  images = images.filter(a=>{return a});
}
console.log(a1);