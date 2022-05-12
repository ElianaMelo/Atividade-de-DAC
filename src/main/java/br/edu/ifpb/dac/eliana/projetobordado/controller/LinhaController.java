package br.edu.ifpb.dac.eliana.projetobordado.controller;

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

import br.edu.ifpb.dac.eliana.projetobordado.model.Linha;
import br.edu.ifpb.dac.eliana.projetobordado.model.dto.LinhaDTO;
import br.edu.ifpb.dac.eliana.projetobordado.model.servico.ConverterService;
import br.edu.ifpb.dac.eliana.projetobordado.model.servico.LinhaService;

@RestController
@RequestMapping("/projetobordado/linha")
public class LinhaController {
	
	@Autowired
	private LinhaService linhaService;
	@Autowired
	private ConverterService converterService;
	
	@PostMapping
	public ResponseEntity saveLinha(@RequestBody LinhaDTO dto) {
		try {
			Linha linha = converterService.dtoToLinha(dto);
			linha = linhaService.saveLine(linha);
			dto = converterService.linhaToDTO(linha);
			
			return new ResponseEntity(dto,HttpStatus.CREATED);
			
		} catch (Exception e) {
			
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	
	public Linha  getLinha(int codigoCor) {
		return linhaService.getLine(codigoCor);
	}
	
	public void getLinhas() {
		Iterable<Linha> linhas = linhaService.getLines();
		
		for( Linha li:linhas) {
			System.out.println(li.toString());
		}
	}
	
	@PutMapping("{id}")
	public ResponseEntity updateLinha(@PathVariable("id") Long idLinha, LinhaDTO dto) {
		try {
			dto.setIdLinha(idLinha);
			Linha linha = converterService.dtoToLinha(dto);
			linha = linhaService.updateLine(idLinha,linha);
			dto = converterService.linhaToDTO(linha);
			
			return ResponseEntity.ok(dto);
		} catch (Exception e) {
			
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	@DeleteMapping("id")
	public ResponseEntity deleteLinha(@PathVariable("id") int codigoLinha) {
		try {
			linhaService.deleteLine(getLinha(codigoLinha).getIdLinha());
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}catch(Exception e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	
	

}
