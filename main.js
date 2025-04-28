$(document).ready(function() {
  $.getJSON('dados.json', function(data) {
    $('#nome').text(data.nome);
    $('#titulo').text(data.titulo);

    $('#contato').append(`<li>Telefone: ${data.contato.telefone}</li>`);
    $('#contato').append(`<li>Email: ${data.contato.email}</li>`);
    $('#contato').append(`<li>Cidade: ${data.contato.cidade}</li>`);
    $('#contato').append(`<li><a href="${data.contato.linkedin}" target="_blank">LinkedIn</a></li>`);
    $('#contato').append(`<li><a href="${data.contato.github}" target="_blank">GitHub</a></li>`);

    data.skills.forEach(skill => {
      $('#skills').append(`<li class="list-inline-item badge bg-primary m-1">${skill}</li>`);
    });

    data.idiomas.forEach(idioma => {
      $('#idiomas').append(`<li>${idioma}</li>`);
    });

    $('#resumo').text(data.resumo);

    data.experiencia.forEach(exp => {
      $('#experiencia').append(`<li><strong>${exp.periodo}</strong> - ${exp.empresa} - ${exp.cargo}</li>`);
    });

    data.atividades.forEach(atividade => {
      $('#atividades').append(`<li>${atividade}</li>`);
    });

    data.formacao.forEach(formacao => {
      $('#formacao').append(`<li>${formacao}</li>`);
    });

    data.projetos.forEach(proj => {
      $('#projetos').append(`<li><a href="${proj.link}" target="_blank">${proj.titulo}</a></li>`);
    });
  });
});
