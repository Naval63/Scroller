document.addEventListener('DOMContentLoaded', function() {
    // console.log('hello world');
    
    const scroller = new Scroller('#root');
    
    document.addEventListener('mousewheel', scroller.listenScroll)
})
