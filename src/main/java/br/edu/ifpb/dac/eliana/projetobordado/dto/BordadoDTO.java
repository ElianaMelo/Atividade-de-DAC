package br.edu.ifpb.dac.eliana.projetobordado.dto;

import br.edu.ifpb.dac.eliana.projetobordado.model.Bordado;

public class BordadoDTO implements IDto<Bordado> {
	
	private Long idBordado;
	private String nome;
	
	public BordadoDTO(Long idBordado, String nome) {
		this.idBordado = idBordado;
		this.nome = nome;
	}
	
	public BordadoDTO( String nome) {
		this.nome = nome;
	}
	
	public BordadoDTO() {
	}
	
	public Long getIdBordado() {
		return idBordado;
	}
	public void setIdBordado(Long idBordado) {
		this.idBordado = idBordado;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	@Override
	public Bordado toModel() {
		return new Bordado(this.idBordado, this.nome);
	}
	

}
