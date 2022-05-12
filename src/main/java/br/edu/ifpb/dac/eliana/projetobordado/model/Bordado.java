package br.edu.ifpb.dac.eliana.projetobordado.model;

import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="bordados")
public class Bordado {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="bordado_id")
	private Long idBordado;
	private String nome;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	
	private List<Linha> linhas;
	
	
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
	public List<Linha> getLinhas() {
		return linhas;
	}
	public void setLinhas(List<Linha> linhas) {
		this.linhas = linhas;
	}
	
	
	@Override
	public int hashCode() {
		return Objects.hash(linhas, nome);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Bordado other = (Bordado) obj;
		return Objects.equals(linhas, other.linhas) && Objects.equals(nome, other.nome);
	}
	@Override
	public String toString() {
		return "Bordado [nome=" + nome + ", linhas=" + linhas + "]";
	}
	
	

}
