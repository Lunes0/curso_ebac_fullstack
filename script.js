$(document).ready(function() {
	const listaTarefas = [];
	$('#form-add-tarefas').on('submit', function(e) {
		e.preventDefault();
		const addTarefa = $('#input-add-tarefas').val();
		
		listaTarefas.push(addTarefa);
		
		let taskCount = listaTarefas.length;
		
		const tarefa = (`<li>
				<input type="checkbox" id="checkbox-tarefa-${taskCount}"><label for="checkbox-tarefa-${taskCount}">${addTarefa}</label></li>`);
		
		$(tarefa).appendTo('#lista-tarefas');

		$('#input-add-tarefas').val('');

		$(`#checkbox-tarefa-${taskCount}`).on('change', function() {
			$(this).closest('li').toggleClass('tarefa-concluida');
		});
	});
});
