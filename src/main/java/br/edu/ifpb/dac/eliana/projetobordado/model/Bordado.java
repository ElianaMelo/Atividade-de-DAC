package br.edu.ifpb.dac.eliana.projetobordado.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

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

import br.edu.ifpb.dac.eliana.projetobordado.dto.BordadoDTO;

@Entity
@Table(name="bordados")
public class Bordado implements IModel<BordadoDTO>{
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="bordado_id")
	private Long idBordado;
	private String nome;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	
	private Set<Linha> linhas = new HashSet<>();
	
	public Bordado(Long idBordado, String nome) {
		this.idBordado = idBordado;
		this.nome = nome;
	}
	
	public Bordado() {
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
	public Set<Linha> getLinhas() {
		return linhas;
	}
	public void setLinhas(Set<Linha> linhas) {
		this.linhas = linhas;
	}

	public void addLinha(Linha linha) {
		this.linhas.add(linha);
	}
	
	public void deleteLinha(Linha linha) {
		this.linhas.remove(linha);
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

	@Override
	public BordadoDTO toDto() {
		return new BordadoDTO(this.idBordado, this.nome);
	}
	
	

}
