const words_easy =[
    {word: "After", translate: "після"},
    {word: "Although", translate: "хоча"},
    {word: "Invite", translate: "запросити"},
    {word: "Disobey", translate: "не слухатися"},
    {word: "Airforce", translate: "повітряний флот"},
    {word: "Who", translate: "хто"},
    {word: "Unique", translate: "унікальний"},
    {word: "Composed", translate: "складено"},
    {word: "Hunch", translate: "передчуття"},
    {word: "Pace", translate: "темп"},
];

const words_normal =[
    {word: "Colour", translate: "колір"},
    {word: "Сonflict", translate: "конфлікт"},
    {word: "Complain", translate: "жалітися"},
    {word: "Collapse", translate: "колапс"},
    {word: "Joy", translate: "радість"},
    {word: "Compass", translate: "компас"},
    {word: "Inquiry", translate: "розслідування"},
    {word: "Saving", translate: "збереження"},
    {word: "Sky", translate: "небо"},
    {word: "Red", translate: "червоний"},
];

const words_hard =[
    {word: "Station", translate: "станція"},
    {word: "Searchingly", translate: "пошуково"},
    {word: "Inside", translate: "всередині"},
    {word: "Death", translate: "смерть"},
    {word: "demand", translate: "попит"},
    {word: "Playfully", translate: "грайливо"},
    {word: "Rate", translate: "швидкість"},
    {word: "Provided", translate: "надається"},
    {word: "Youthfully", translate: "по-юнацьки"},
    {word: "always", translate: "завжди"},
];

$(window).on("load", function() {
    $("#true").css("color", "green");
    $("#false").css("color", "red");

    let length = words_normal.length;
    let random = Math.floor(Math.random() * length), count = 1, temp_words = [10], temp_translate = [10];
    let check = 0;

    for(let i = 0; i < length; i++) {
        random = Math.floor(Math.random() * (length - i)) + i;

        temp_words[i] = words_normal[random].word;
        temp_translate[i] = words_normal[random].translate;

        words_normal[random].word = words_normal[i].word;
        words_normal[random].translate = words_normal[i].translate;

        words_normal[i].word = temp_words[i];
        words_normal[i].translate = temp_translate[i];
    }

    $(".container").html( "<h1>" + temp_words[count - 1] + "</h1>");
    $("#right").on("click", function() {
        if(count < 11) {
            count++;
            $("#count").html(count + " / 11");
            $(".container").html( "<h1>" + temp_words[count - 1] + "</h1>");

            if(check == 0) {
                if($("#answer").val() == temp_translate[count - 2]) {
                    $("#true").text(Number($("#true").text()) + 1);
                }
                else {
                    $("#false").text(Number($("#false").text()) + 1);
                }
            }

            let result = Number($("#true").text());
            if(count == 11)
            {
                $(".container").html( "<h1>" + "</h1>");
                alert("You passed the test in English you have" + " " + result + " " + "correct answers");
            }
        }

    });

    $("#left").on("click", function() {
        if(count != 1)
        {
            count--;
            check++;
            $("#count").html(count + " / 11");
            $(".container").html( "<h1>" + temp_words[count - 1] + "</h1>");
            $("answer").val("");
        }
        else { alert("Error"); }
    });

    $("#button_easy").on("click", function() {
        $("#button_easy").attr("disabled", true);
        $("#button_hard").attr("disabled", false);

        for(let i = 0; i < length; i++) {
            random = Math.floor(Math.random() * (length - i)) + i;
    
            temp_words[i] = words_easy[random].word;
            temp_translate[i] = words_easy[random].translate;
    
            words_easy[random].word = words_easy[i].word;
            words_easy[random].translate = words_easy[i].translate;
    
            words_easy[i].word = temp_words[i];
            words_easy[i].translate = temp_translate[i];
        }

    });

    $("#button_hard").on("click", function() {
        $("#button_hard").attr("disabled", true);
        $("#button_easy").attr("disabled", false);

        for(let i = 0; i < length; i++) {
            random = Math.floor(Math.random() * (length - i)) + i;
    
            temp_words[i] = words_hard[random].word;
            temp_translate[i] = words_hard[random].translate;
    
            words_hard[random].word = words_hard[i].word;
            words_hard[random].translate = words_hard[i].translate;
    
            words_hard[i].word = temp_words[i];
            words_hard[i].translate = temp_translate[i];
        }

    });
});
