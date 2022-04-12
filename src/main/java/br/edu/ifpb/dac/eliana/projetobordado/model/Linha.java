package br.edu.ifpb.dac.eliana.projetobordado.model;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="linhas")
public class Linha {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="linha_id")
	private Long idLinha;
	private String nomeCor;
	private int codigoCor;
	
	public Linha(String nomeCor, int codigoCor) {
		this.nomeCor = nomeCor;
		this.codigoCor = codigoCor;
	}
	
	public Linha() {
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
	public int hashCode() {
		return Objects.hash(codigoCor, nomeCor);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Linha other = (Linha) obj;
		return Objects.equals(codigoCor, other.codigoCor) && Objects.equals(nomeCor, other.nomeCor);
	}
	
	@Override
	public String toString() {
		return "Linha [nomeCor=" + nomeCor + ", codigoCor=" + codigoCor + "]";
	}
	
	
	

}
