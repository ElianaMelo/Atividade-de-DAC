package br.edu.ifpb.dac.eliana.projetobordado.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.dac.eliana.projetobordado.model.Bordado;
import br.edu.ifpb.dac.eliana.projetobordado.model.Linha;
import br.edu.ifpb.dac.eliana.projetobordado.model.dto.BordadoDTO;
import br.edu.ifpb.dac.eliana.projetobordado.model.servico.BordadoService;
import br.edu.ifpb.dac.eliana.projetobordado.model.servico.ConverterService;
import br.edu.ifpb.dac.eliana.projetobordado.model.servico.LinhaService;

@RestController
@RequestMapping("/projetobordado/bordado/")
public class BordadoController {
	
	
	@Autowired
	private BordadoService bodadoService;
	@Autowired
	private LinhaService linhaService;
	@Autowired
	private ConverterService converterService;
	
	
	@PostMapping
	public ResponseEntity bordadoSave(@RequestBody BordadoDTO dto) {
		try {
			
			Bordado bordado = converterService.dtoToBordado(dto);
			bordado = bodadoService.saveEmbroidery(bordado);
			dto = converterService.bordadoToDTO(bordado);
		
			return new ResponseEntity(dto, HttpStatus.CREATED);
		
		}catch (Exception e){
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	// nome ou objeto do bordado???
	public void addLinha(int corLinha, Bordado bordado){
		Linha linha = linhaService.getLine(corLinha);
		
		try {
			bodadoService.addLines(linha, bordado);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void getLines(String nomeBorda) {
		List<Linha> linhas = bodadoService.getLines(nomeBorda);
		for(Linha linha: linhas) {
			System.out.println(linha);
		}
	}
	// falta fazer
	public boolean updateLinhadeBordado(Bordado bordado,Linha linhaNova) {
		try {
			 return bodadoService.updateLineBordado(bordado, linhaNova);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public void deleteLines(Linha linha, Bordado bordado) {
		try {
			bodadoService.deleteLines(linha, bordado);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public Bordado getEmbroidery(String nome) {
		
		return bodadoService.getEmbroidery(nome);
	}
	
	public void getEmbroiderys(){
		Iterable<Bordado> bordados = bodadoService.getEmbroiderys();
		
		for(Bordado bordado: bordados){
			System.out.println(bordado);
		}
	}
	
	@PutMapping("{id}")
	public ResponseEntity updateEmbroidery(@PathVariable("id") Long idBordadoAntgo,BordadoDTO dto) {
		
		try {
			dto.setIdBordado(idBordadoAntgo);
			Bordado bordadoNovo = converterService.dtoToBordado(dto);
			bordadoNovo = bodadoService.updateEmbroidery(idBordadoAntgo, bordadoNovo);
			dto = converterService.bordadoToDTO(bordadoNovo);
			
			return ResponseEntity.ok(dto);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return ResponseEntity.badRequest().body(e.getMessage()) ;
		}
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity deleteEmbroider(@PathVariable("id") Long idBordado) {
		try {
			bodadoService.deleteEmbroidery(idBordado);
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}catch(Exception e){
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	
	
	
	
	

}
