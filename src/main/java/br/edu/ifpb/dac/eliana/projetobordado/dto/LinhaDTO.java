package br.edu.ifpb.dac.eliana.projetobordado.dto;

import br.edu.ifpb.dac.eliana.projetobordado.model.Linha;

public class LinhaDTO implements IDto<Linha>{

	private Long idLinha;
	private String nomeCor;
	private int codigoCor;
	
	public LinhaDTO(String nomeCor,int codigoCor){
		this.nomeCor = nomeCor;
		this.codigoCor = codigoCor;
	}
	
	public LinhaDTO(Long idLinha, String nomeCor,int codigoCor){
		this.idLinha = idLinha;
		this.nomeCor = nomeCor;
		this.codigoCor = codigoCor;
	}
	
	public LinhaDTO() {
		// TODO Auto-generated constructor stub
	}
	
	public Long getIdLinha() {
		return idLinha;
	}
	public void setIdLinha(Long idLinha) {
		this.idLinha = idLinha;
	}
	public String getNomeCor() {
		return nomeCor;
	}
	public void setNomeCor(String nomeCor) {
		this.nomeCor = nomeCor;
	}
	public int getCodigoCor() {
		return codigoCor;
	}
	public void setCodigoCor(int codigoCor) {
		this.codigoCor = codigoCor;
	}

	@Override
	public Linha toModel() {
		return new Linha(this.idLinha, this.nomeCor, this.codigoCor);
	}
	
}
