function loading(){

var tl=gsap.timeline()

tl.to('#yellow1',{
    top:'-100%',
    delay:0.5,
    duration:0.7,
    ease:'expo.out'
})

tl.from('#yellow2',{
    top:'100%',
    delay:0.5,
    duration:0.7,
    ease:'expo.out'
},'anim')

tl.to('#loader h1',{
    delay:0.6,
    color:'black',
    duration:0.7,
},'anim')

tl.to('#loader',{
    opacity:0
})

tl.to('#loader',{
    display:'none'
})

tl.from('#nav svg,#nav h3',{
    y:-100,
    opacity:0,
    stagger:0.1
})

tl.from(".footdetail",{
    scale:0,
    opacity:0
})

tl.to(".footdetail",{
    y:35,
    repeat:-1,
    duration:1,
    yoyo:true
})

}

loading()

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
        // lerp:0.02
        });
        
        document.querySelector('.footdetail').addEventListener('click',()=>{
            scroll.scrollTo(0)
        })
        
        var page2 = document.querySelector('#page2')
        var elems = document.querySelectorAll('.elem')
        
        elems.forEach(function(ele){
            ele.addEventListener('mouseenter', function(){
                var bgimg = ele.getAttribute('data-img')
                page2.style.backgroundImage = `url(${bgimg})`
            })
        })
}

loco()