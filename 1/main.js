$(document).ready(function(){
    let countId = 4
    let countRowRadioOptions = 2

    function makeCopy(element, countId, countRowRadioOptions) {
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


    $(".c-add-row").click(() => {
        let temp = makeCopy($(".c-row").last().clone(), countId ,countRowRadioOptions)
        temp.prependTo("tbody")
    })

    $(document).on('click', '.c-delete', function(){
        $(this).parents().eq(1).remove()
    });

    $(document).on('click', '.c-clone', function(){
        let clonedElement = makeCopy($(this).parents().eq(1).clone(), countId, countRowRadioOptions)
        $(this).parents().eq(1).after(clonedElement)
    });

});