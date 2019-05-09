var username = "";
    pword = "";
    bday,
    gender = "WOMAN",
    image = "",
    genderButton = $(".btn-gender").get(),
    currentForm = 0,
    forms=$('.scroll-view').find('fieldset'),
    maxForms = forms.length -1,
    backBtn = $('.back-btn'),
    nextBtn = $('.next-btn'),
    scrolling = false;


//set button group

$(".btn-gender").each(function(i){
    $(this).click(() => {
        for (var j = 0; j < genderButtons.length; j++){
    $(genderButtons[j]).removeClass('selected')
        }
        $(this).addClass('selected');
        gender = $(this).text();
    })
});

backBtn.click( ()=> {
    if (scrolling == true || currentForm === 0){
        return;
    }
    currentForm--;
    scrollToCurrent('-=');
});

nextBtn.click(() => {
    if(scrolling == true){
        return;
    }
    if(currentForm === maxForms){
        showResult();
        return;
    }
    if(currentForm === 0){
        nextBtn.text('CONTINUE');
    }
    if(currentForm === maxForms -1){
        nextBtn.text('DONE');
    }
    currentForm++;
    scrollToCurrent('+=');
});

function scrollToCurrent(add){
    scrolling = true;
    console.log('scroll to ' + forms.eq(currentForm).find('h1').text())
        $('scroll-view').stop(true,
            true).delay(200).animate({
            scrollTop: add + forms.eq(currentForm).outerHeight()
       }, 300, 'swing', function (){
    scrolling = false;
    });
    updateProgressBar();
}

function updateProgressBar(){
    $('.progress-bar').css({
        'width': (currentForm + 1) / (maxForms + 1) * 100 + '%'
    });
}