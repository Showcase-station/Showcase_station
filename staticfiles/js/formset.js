document.getElementById('add-education').addEventListener('click', function () {
    cloneMore('.education-form:last', 'educations');
});

document.getElementById('add-certificate').addEventListener('click', function () {
    cloneMore('.certificate-form:last', 'certificates');
});

document.getElementById('add-project').addEventListener('click', function () {
    cloneMore('.project-form:last', 'projects');
});

function cloneMore(selector, prefix) {
    var newElement = $(selector).clone(true);
    var total = $('#id_' + prefix + '-TOTAL_FORMS').val();
    newElement.find(':input').each(function () {
        var name = $(this).attr('name').replace('-' + (total - 1) + '-', '-' + total + '-');
        var id = 'id_' + name;
        $(this).attr({ 'name': name, 'id': id }).val('').removeAttr('checked');
    });
    newElement.find('label').each(function () {
        var newFor = $(this).attr('for').replace('-' + (total - 1) + '-', '-' + total + '-');
        $(this).attr('for', newFor);
    });
    total++;
    $('#id_' + prefix + '-TOTAL_FORMS').val(total);
    $(selector).after(newElement);
}
