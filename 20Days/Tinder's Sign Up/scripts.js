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

function setUsername(input) {
    username = input.value;
}

function setBday(input) {
    bday = input.value;
}

function readURL(input){
    if(input.files && input.files[0]){
        var reader = new FileReader();

        reader.onload = function(e){
            $('.img-picker-div').css({'background-image': 'url(\''
                    + e.target.result + '\')'}).addClass('hide-children');
            image = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function refresh(){
    history.go(0);
}

function validateInput(){
    var inputs =
        forms.eq(currentForm).find('input');
    for(var i = 0; i < inputs.length; i++) {
        if(!$inputs[i].val()){
            $(inputs[i]).addClass('is-invalid');
            return false;
        }
        else {
            $(inputs[i]).addClass('is-invalid');
        }
    }
    return true;
}

function showResult() {
    var genderIco = '';
    switch (gender){
        case 'WOMAN':
            genderIco = '<i class="fas fa-venus"></i>';
            break;
        case 'MAN':
            genderIco = '<i class="fas fa-mars"></i>';
            break;
        case 'OTHER':
            genderIco = '<i class="fas fa-transgender-alt"></i>';
            break;
    }

    $(document.body).append(
        '<div class="final-result">' +
        '<h3>Final Results</h3>' +
        '<div class="profile-pic"></div>' +
        '<p class="name">' + username + '</p>' +
        '<span>' + genderIco + ', born on' + bday + '</span>' +
        '<button class="\'btn try-btn\' + '</div>'
    );
    $('.profile-pic').css({
        'background-image':
        'url(\'' + image +' \')'
    });
}