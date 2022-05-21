package br.edu.ifpb.dac.eliana.projetobordado.repository;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ifpb.dac.eliana.projetobordado.model.Bordado;

@Repository
public interface BordadoRepository extends JpaRepository<Bordado, Long> {

	Pageable firstPageWithTwoElements = PageRequest.of(0, 2);
	List<Bordado> findAllByNome(String nome, Pageable firstPageWithTwoElements);
	
	Bordado findBynome(String nome);
	Bordado findByidBordado(Long idBordado);
	
	
	
}
