const prompt = require('prompt-sync')();
const Celular = require('./celular');



// CRIAR CELULAR
async function criarCelular() {
  const celular = {};
  celular.marca = prompt('Marca: ');
  celular.modelo = prompt('Modelo: ');
  celular.preco = parseFloat(prompt('Preço: '));

  try {
    await Celular.create(celular);
    console.log('Celular criado com sucesso.');
  } catch (error) {
    console.log('Erro ao criar celular:', error);
  }
}



// LISTAR CELULARES
async function listarCelulares() {
  try {
    const celulares = await Celular.findAll();
    console.log('Lista de celulares:');
    celulares.forEach((celular) => {
      console.log(`ID: ${celular.ID}, Marca: ${celular.marca}, Modelo: ${celular.modelo}, Preço: ${celular.preco}`);
    });
  } catch (error) {
    console.log('Erro ao buscar celulares:', error);
  }
}

// BUSCAR CELULARES
async function buscarCelular() {
  const celularID = prompt('ID do celular: ');

  try {
    const celular = await Celular.findByPk(celularID);
    console.log(`ID: ${celular.ID}, Marca: ${celular.marca}, Modelo: ${celular.modelo}, Preço: ${celular.preco}`);
  } catch (error) {
    console.log('Erro ao buscar celular:', error);
  }
}



// ATUALIZAR CELULARES
async function atualizarCelular() {
  const celularID = prompt('ID do celular: ');

  try {
    const celular = await Celular.findByPk(celularID);
    celular.marca = prompt('Marca: ');
    celular.modelo = prompt('Modelo: ');
    celular.preco = parseFloat(prompt('Preço: '));
    await celular.save();
    console.log('Celular atualizado com sucesso.');
  } catch (error) {
    console.log('Erro ao atualizar celular:', error);
  }
}

// DELETAR CELULAR
async function deletarCelular() {
  const celularID = prompt('ID do celular: ');

  try {
    const celular = await Celular.findByPk(celularID);
    await celular.destroy();
    console.log('Celular deletado com sucesso.');
  } catch (error) {
    console.log('Erro ao deletar celular:', error);
  }
}



// MENU DO PROMPT
async function menu() {
    let opcao = -1;
  
    while (opcao !== '0') {
      console.log('\n----- MENU -----');
      console.log('1. Criar celular');
      console.log('2. Listar celulares');
      console.log('3. Buscar celular');
      console.log('4. Atualizar celular');
      console.log('5. Deletar celular');
      console.log('0. Sair');
  
      opcao = prompt('Opção: ');
  
      switch (opcao) {
        case '1':
          await criarCelular();
          break;
        case '2':
          await listarCelulares();
          break;
        case '3':
          await buscarCelular();
          break;
        case '4':
          await atualizarCelular();
          break;
        case '5':
          await deletarCelular();
          break;
        case '0':
          console.log('Saindo...');
          break;
        default:
          console.log('Opção inválida.');
          break;
      }
    }
  }
  
  menu();
  