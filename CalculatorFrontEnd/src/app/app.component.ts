import { Component } from '@angular/core';
import { CalculadoraService } from './services/calculadora.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.pug',
	styleUrls: ['./app.component.css'],
	providers: [CalculadoraService]
})
export class AppComponent {
	title = 'Calculadora';

	operacao: string = '';
	resultado: string = '';

	constructor(private calculatorService: CalculadoraService) {

	}

	append(element: string) {

		if (this.resultado !== '') {

			this.resultado = '';

			this.calculatorService.isOperator(element)
				.subscribe((processamento) => {

					if (!processamento.isOperator) {

						this.operacao = '';

					}

					this.operacao += element;

				});

		} else {

			this.operacao += element;

		}
	}

	undo() {
		if (this.operacao != '') {
			this.operacao = this.operacao.slice(0, -1)
			this.resultado = '';
		}
	}

	clear() {
		this.operacao = '';
		this.resultado = '';
	}

	evaluate() {

		this.calculatorService.calcular(this.operacao)
			.subscribe((processamento) => {

				if (processamento.resultado === null) {

					alert("Expressão não pode ser resolvida!");

				} else {

					this.resultado = processamento.resultado;

				}

			});
	}

}
