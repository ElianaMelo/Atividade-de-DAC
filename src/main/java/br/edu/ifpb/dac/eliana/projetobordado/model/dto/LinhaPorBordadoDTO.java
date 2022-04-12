package br.edu.ifpb.dac.eliana.projetobordado.model.dto;

import java.util.List;

public class LinhaPorBordadoDTO {
	
	private BordadoDTO bordado;
	private List<LinhaDTO> linhas;
	
	public BordadoDTO getBordado() {
		return bordado;
	}
	public void setBordado(BordadoDTO bordado) {
		this.bordado = bordado;
	}
	public List<LinhaDTO> getLinhas() {
		return linhas;
	}
	public void setLinhas(List<LinhaDTO> linhas) {
		this.linhas = linhas;
	}

}
