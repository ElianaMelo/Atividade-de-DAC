package br.edu.ifpb.dac.eliana.projetobordado.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifpb.dac.eliana.projetobordado.NotFoundException;
import br.edu.ifpb.dac.eliana.projetobordado.model.Linha;
import br.edu.ifpb.dac.eliana.projetobordado.repository.LinhaRepository;

@Service
public class LinhaService {

	@Autowired
	private LinhaRepository repositoryLine;

	public Linha saveLine(Linha linha) throws Exception {

		if (existLine(linha.getCodigoCor())) {
			throw new Exception("Esta linha já existe");
		} else {
			return repositoryLine.save(linha);
		}
	}

	public Linha getLine(int codigoCor) throws NotFoundException {
		Linha linha = repositoryLine.findBycodigoCor(codigoCor);
		if(linha == null) {
			 throw new NotFoundException("Linha nao encontrada");
		}
		return linha;
	}

	public Iterable<Linha> getLines() {
		return repositoryLine.findAll();
	}

	public Linha updateLine(Long idLinhaAntiga, Linha linhaNova) throws Exception {
		Linha linAntigo = repositoryLine.findByidLinha(idLinhaAntiga);
		if (linAntigo == null) {
			throw new NotFoundException("Linha nao encontrada");
		}

		linAntigo.setCodigoCor(linhaNova.getCodigoCor());
		linAntigo.setNomeCor(linhaNova.getNomeCor());

		return saveLine(linAntigo);
	}
	
	//Lancar excecao
	public void deleteLine(Long idLinha) {
		repositoryLine.deleteById(idLinha);
	}

	private boolean existLine(int codigoCor) {
		Linha lin = repositoryLine.findBycodigoCor(codigoCor);
		return lin != null;
	}

}
