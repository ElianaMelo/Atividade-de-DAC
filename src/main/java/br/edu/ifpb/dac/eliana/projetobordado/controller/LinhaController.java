package br.edu.ifpb.dac.eliana.projetobordado.controller;

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

import br.edu.ifpb.dac.eliana.projetobordado.NotFoundException;
import br.edu.ifpb.dac.eliana.projetobordado.dto.LinhaDTO;
import br.edu.ifpb.dac.eliana.projetobordado.model.Linha;
import br.edu.ifpb.dac.eliana.projetobordado.servico.LinhaService;

@RestController
@RequestMapping("/projetobordado/linha")
public class LinhaController {

	@Autowired
	private LinhaService linhaService;

	@PostMapping
	public ResponseEntity<Object> saveLinha(@RequestBody LinhaDTO dto) {
		try {
			Linha linhaSave = linhaService.saveLine(dto.toModel());
			return new ResponseEntity<Object>(linhaSave.toDto(), HttpStatus.CREATED);

		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@GetMapping("/{codigoCor}")
	public ResponseEntity<Object> getLinha(@PathVariable("codigoCor") int codigoCor) {
		try {
			Linha linha = linhaService.getLine(codigoCor);
			return ResponseEntity.ok(linha.toDto());
			
		}catch(Exception e){
			if(e instanceof NotFoundException) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
			}
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@GetMapping
	public ResponseEntity<Iterable<Linha>> getLinhas() {
		Iterable<Linha> linhas = linhaService.getLines();
		return ResponseEntity.ok(linhas);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> updateLinha(@PathVariable("id") Long id, @RequestBody LinhaDTO dto) {
		try {
			dto.setIdLinha(id);
			Linha linhaUpdate = linhaService.updateLine(id, dto.toModel());
			return ResponseEntity.ok(linhaUpdate.toDto());
		} catch (Exception e) {
			if(e instanceof NotFoundException) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
			}
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteLinha(@PathVariable("id") Long codigoLinha) {
		try {
			linhaService.deleteLine(codigoLinha);
			return new ResponseEntity<Object>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

}
