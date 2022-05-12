package br.edu.ifpb.dac.eliana.projetobordado.model.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifpb.dac.eliana.projetobordado.model.Linha;
import br.edu.ifpb.dac.eliana.projetobordado.model.repository.LinhaRepository;

@Service
public class LinhaService {

	@Autowired
	private LinhaRepository repositoryLine;

	public Linha saveLine(Linha linha) throws Exception{
		
		if(existLine(linha)) {
			 throw new Exception("Esta linha já existe");
		}else{
			return repositoryLine.save(linha);
		}
	}

	public Linha getLine(int codigoCor) {
		return repositoryLine.findBycodigoCor(codigoCor);
	}
	
	public Iterable<Linha> getLines() {
		return repositoryLine.findAll();
	}
	
	public Linha updateLine(Long idLinhaAntiga,Linha linhaNova) throws Exception {
		Linha linAntigo = repositoryLine.findByidLinha(idLinhaAntiga);
		if(linAntigo == null) {
			throw new Exception();
		}else{
			linAntigo.setCodigoCor(linhaNova.getCodigoCor());
			linAntigo.setNomeCor(linhaNova.getNomeCor());
			deleteLine(linhaNova.getIdLinha());
			
			return saveLine(linAntigo);
		}
	}

	public void deleteLine(Long idLinha) {
		repositoryLine.deleteById(idLinha);
	}
	
	private boolean existLine(Linha linha) {
		Linha lin =	repositoryLine.findBycodigoCor(linha.getCodigoCor());
		if(lin == null) {
			return false;
		}else {
			return true;
		}
	}

}
