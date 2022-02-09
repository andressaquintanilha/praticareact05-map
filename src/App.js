import React, { Component } from "react";

class praticareact05 extends Component {
  state = {
    funcionarios: [
      {
        nome: "Vanessa",
        bancoParaPagamento: "Nubank",
        cargo: "Desenvolvedora Front End Junior",
        salario: "R$ 2.500,00 reais"
      },
      {
        nome: "Willian",
        bancoParaPagamento: "Itau",
        cargo: "Suporte de Informática",
        salario: "R$ 1.800,00 reais"
      },
      {
        nome: "Mariana",
        bancoParaPagamento: "Bradesco",
        cargo: "Estagiária de Scrum Master",
        salario: "R$ 1.100,00 reais"
      },
      {
        nome: "Aurelio",
        bancoParaPagamento: "Santander",
        cargo: "Desenvolvedor FullStack Junior",
        salario: "R$ 2.800,00 reais"
      },
      {
        nome: "Juliana",
        bancoParaPagamento: "Santander",
        cargo: "Analista de Negócios",
        salario: "R$ 2.500,00 reais"
      },
      {
        nome: "Melissa",
        bancoParaPagamento: "Banco do Brasil",
        cargo: "Relacionamento com o Cliente",
        salario: "R$ 2.200,00 reais"
      },
      {
        nome: "Matheus",
        bancoParaPagamento: "Nubank",
        cargo: "Estagiário de Product Owner",
        salario: "R$ 1.100,00 reais"
      },
      {
        nome: "Tatiana",
        bancoParaPagamento: "Caixa Economica Federal",
        cargo: "Desenvolvedora FullStack Junior",
        salario: "R$ 2.800,00 reais"
      },
      {
        nome: "Richard",
        bancoParaPagamento: "Nubank",
        cargo: "Desenvolvedor Back End Junior",
        salario: "R$ 2.500,00 reais"
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>Quadro de Pagamento dos Funcionários da Empresa</h1>
        <h2> • Maria das Tech •</h2>
        {this.state.funcionarios.map((item) => (
          <div>
            <p>Nome: {item.nome}</p>
            <p>Banco para pagamento: {item.bancoParaPagamento}</p>
            <p>Cargo em que atua: {item.cargo}</p>
            <p>Salário recebido: {item.salario}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default praticareact05;
