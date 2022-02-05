$(document).ready(function(){
    
    // change the id and name of radio button groups in different rows
    let countId = 4
    let countRowRadioOptions = 2

    function makeCopy(element) {
        element.find(".form-check-input1").attr("id", "flexRadioDefault" + countId)
        element.find(".form-check-input1").attr("name", "rowRadioOptions" + countRowRadioOptions)
        element.find(".form-check-label1").attr("for", "flexRadioDefault" + countId)
        countId++
        element.find(".form-check-input2").attr("id", "flexRadioDefault" + countId)
        element.find(".form-check-input2").attr("name", "rowRadioOptions" + countRowRadioOptions)
        element.find(".form-check-label2").attr("for", "flexRadioDefault" + countId)
        countId++
        element.find(".form-check-input3").attr("id", "flexRadioDefault" + countId)
        element.find(".form-check-input3").attr("name", "rowRadioOptions" + countRowRadioOptions)
        element.find(".form-check-label3").attr("for", "flexRadioDefault" + countId)
        countId++
        countRowRadioOptions++
        return element
    }

    // add an empty row
    let detachedElem;
    
    $(document).on('click', '.c-add-row', function(){
        console.log(detachedElem)
        let temp
        if (detachedElem) {
            temp = makeCopy($(detachedElem).last().clone())
        } else {
            temp = makeCopy($(".c-row").last().clone())
        }
        temp.find(".input-box").val("")
        temp.find("input:radio").prop('checked', false)
        temp.find(".input-box").prop("disabled", false)
        temp.prependTo("tbody")
        numberHandling()
    });

    // delete a row
    $(document).on('click', '.c-delete', function(){
        detachedElem = $(this).parents().eq(1).detach()
        numberHandling()
        console.log(detachedElem)
    });

    // clone a row
    $(document).on('click', '.c-clone', function(){
        let clonedElement = makeCopy($(this).parents().eq(1).clone())
        $(this).parents().eq(1).after(clonedElement)
        numberHandling()
    });

    
    // enable/disable input box based o radio button value
    $(document).on('click', '.form-check-input', function(){
        let radioValue = $(this).val()
        if (radioValue === "confirmed") {
            $(this).parents().eq(2).find(".input-box").prop("disabled", true)
        } else {
            $(this).parents().eq(2).find(".input-box").prop("disabled", false)
        }
        numberHandling()
    });

    // change the number information below the table
    function numberHandling() {
        $(".all-rows span")
        .text($(".tbody").children().length)
        $(".not-confirmed-rows span")
        .text($(".form-check-input[value=confirmed]").length - $(".form-check-input[value=confirmed]:checked").length)
    }
});