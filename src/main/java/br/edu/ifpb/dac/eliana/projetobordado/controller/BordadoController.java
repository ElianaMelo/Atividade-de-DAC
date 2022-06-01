package br.edu.ifpb.dac.eliana.projetobordado.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.dac.eliana.projetobordado.dto.BordadoDTO;
import br.edu.ifpb.dac.eliana.projetobordado.model.Bordado;
import br.edu.ifpb.dac.eliana.projetobordado.model.Linha;
import br.edu.ifpb.dac.eliana.projetobordado.servico.BordadoService;
import br.edu.ifpb.dac.eliana.projetobordado.servico.LinhaService;

@RestController
@RequestMapping("/projetobordado/bordado")
public class BordadoController {
	
	
	@Autowired
	private BordadoService bodadoService;
	@Autowired
	private LinhaService linhaService;
	
	
	@PostMapping
	public ResponseEntity<Object> bordadoSave(@RequestBody BordadoDTO dto) {
		try {
			Bordado bordadoSalvo = bodadoService.saveEmbroidery(dto.toModel());
			return new ResponseEntity<Object>(bordadoSalvo.toDto(), HttpStatus.CREATED);
		
		}catch (Exception e){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	@PutMapping("/{idBordado}/{codigoLinha}")
	public void addLinha(@PathVariable("idBordado") Long idBordado, @PathVariable("codigoLinha") int codigoLinha){
		try {
			Linha linha = linhaService.getLineCode(codigoLinha);
			Bordado bordado = bodadoService.getEmbroideryId(idBordado);
			bordado.addLinha(linha);
			bodadoService.updateEmbroidery(idBordado, bordado);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	//falta fazer
	public void getLines(String nomeBorda) {
		Set<Linha> linhas = bodadoService.getLines(nomeBorda);
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
	// falta fazer
	public void deleteLines(Linha linha, Bordado bordado) {
		try {
			bodadoService.deleteLines(linha, bordado);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public Bordado getEmbroidery(String nome) {
		return bodadoService.getEmbroideryName(nome);
	}
	
	@GetMapping
	public ResponseEntity<Iterable<Bordado>> getEmbroiderys(){
		Iterable<Bordado> bordados = bodadoService.getEmbroiderys();
		return ResponseEntity.ok(bordados);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity updateEmbroidery(@PathVariable("id") Long idBordadoAntgo,@RequestBody BordadoDTO dto) {
		
		try {
			dto.setIdBordado(idBordadoAntgo);
			Bordado bordadoAtualisado = bodadoService.updateEmbroidery(idBordadoAntgo, dto.toModel());
			
			return ResponseEntity.ok(bordadoAtualisado.toDto());
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
