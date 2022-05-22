package br.edu.ifpb.dac.eliana.projetobordado.servico;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifpb.dac.eliana.projetobordado.model.Bordado;
import br.edu.ifpb.dac.eliana.projetobordado.model.Linha;
import br.edu.ifpb.dac.eliana.projetobordado.repository.BordadoRepository;

@Service
public class BordadoService {
	
	@Autowired
	private BordadoRepository repositoryEmbroidery;
	
	public Bordado saveEmbroidery(Bordado bordado) {
		return repositoryEmbroidery.save(bordado);
	}
	
	public Bordado getEmbroideryName(String nome){
		return repositoryEmbroidery.findBynome(nome);
	}
	
	public Bordado getEmbroideryId(Long idBordado){
		return repositoryEmbroidery.findByidBordado(idBordado);
	}
	
	public Iterable<Bordado> getEmbroiderys(){
		return repositoryEmbroidery.findAll();
	}
	
	
	//pensar se vai passar o objeto linha ou vai passa o id !!!
	public Boolean addLines(Linha linha, Bordado bordado) throws Exception {
		bordado.addLinha(linha);
		if(updateEmbroidery(bordado.getIdBordado(), bordado) == null) {
			throw new Exception("Linha Nao adiciona");
		}	
		return true;
	}
	
	public Set<Linha> getLines(String nomeBordado){
		Bordado emb = getEmbroideryName(nomeBordado);
		return emb.getLinhas();
	}
	
	public Linha getLineEmbroidery(String nomeBordado, int codigoCor){
		Bordado emb = getEmbroideryName(nomeBordado);
		Set<Linha> linhas = emb.getLinhas();
		for(Linha linha:linhas) {
			if(linha.getCodigoCor() == codigoCor) {
				return linha;
			}
		}
		return null;
	}
	
	// editar linhas do bordado !!!
	public boolean updateLineBordado(Bordado bordado,Linha linhaNova) throws Exception{
		Linha linhaAntiga = getLineEmbroidery(bordado.getNome(), linhaNova.getCodigoCor());
		
		if(linhaAntiga ==null) {
			throw new Exception("Linha nao existe");
		}else {
			linhaAntiga.setNomeCor(linhaNova.getNomeCor());
			linhaAntiga.setCodigoCor(linhaNova.getCodigoCor());
			addLines(linhaAntiga, bordado);
			updateEmbroidery(bordado.getIdBordado(), bordado);
			return true;
		}
		
	}
	
	public void deleteLines(Linha linha, Bordado bordado) throws Exception  {
		Set<Linha> lines = getLines(bordado.getNome());
		for(Linha lin: lines) {
			if(lin.equals(linha)) {
				lines.remove(lin);
				bordado.setLinhas(lines);
				updateEmbroidery(bordado.getIdBordado(), bordado);
				
			}else {
				throw new Exception("Linha nao encontrada");
			}
		}
		
	}
	
	public Bordado updateEmbroidery(Long idBordadoAntgo,Bordado bordadoNovo) throws Exception {
		Bordado brddAntigo = repositoryEmbroidery.findByidBordado(idBordadoAntgo);
		
		if(brddAntigo == null) {
			throw new Exception("Bordado nao existe");
		
		}else {
			brddAntigo.setNome(bordadoNovo.getNome());
			brddAntigo.setLinhas(bordadoNovo.getLinhas());
			
			return saveEmbroidery(brddAntigo);
		}
	}
	
	public void deleteEmbroidery(Long idBordado) {
		repositoryEmbroidery.deleteById(idBordado);
	}
	

}
