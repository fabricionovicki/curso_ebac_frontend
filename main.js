$(document).ready(function() {
    $('#form').submit(function(event) {
        event.preventDefault();

        var texto_tarefa = $('#texto-tarefa').val();

        if (texto_tarefa.trim() !== "") {
            var item_tarefa = $('<li><span>' + texto_tarefa + '</span> <input type="checkbox" class="checkbox-tarefa"> <button class="btn-apagar">Apagar</button></li>');
            $('#lista-tarefas').append(item_tarefa);
            $('#texto-tarefa').val('');
        }
    });

    $(document).on('click', '.btn-apagar', function() {
        var checkbox = $(this).siblings('.checkbox-tarefa');
        if (checkbox.prop('checked')) {
            $(this).parent().remove();
        }
    });

    $(document).on('click', '.checkbox-tarefa', function() {
        var span = $(this).siblings('span');
        if ($(this).prop('checked')) {
            span.addClass('completed');
        } else {
            span.removeClass('completed');
        }
    });
});