package br.edu.ifpb.dac.eliana.projetobordado.model.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ifpb.dac.eliana.projetobordado.model.Linha;

@Repository
public interface LinhaRepository extends JpaRepository<Linha, Long>{

	Pageable firstPageWithTwoElements = PageRequest.of(0, 2);
	List<Linha> findAllBynomeCor(String nome, Pageable firstPageWithTwoElements);
	
	Linha findBycodigoCor(int codigoCor);
	Linha findByidLinha(Long id_linha);
	
}
