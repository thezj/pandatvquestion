let oldqtext = ""
$('.million-room .million-room-wrap').css({
    'float':'left'
})
$('html').css({'overflow':'hidden'})
$('html').scrollTop(500)
function getQuestion(){
    let qdom = document.querySelector('.question-inner .title')
    if(qdom){
        let qtext = qdom.innerText
        if(qtext != oldqtext){
            console.log(qtext)
            $('.baiduresult').remove()
            $('body').append(`<iframe style='width:826px;height:924px;position:fixed;right:0px;top:0px;z-index:999999' class='baiduresult' src="https://www.baidu.com/s?wd=${qtext}"></iframe>`)
            oldqtext = qtext
        }
    }else{
        console.log('sss')
    }
}
setInterval(getQuestion,100)