package br.edu.ifpb.dac.eliana.projetobordado.servico;

import org.springframework.stereotype.Service;

import br.edu.ifpb.dac.eliana.projetobordado.dto.BordadoDTO;
import br.edu.ifpb.dac.eliana.projetobordado.dto.LinhaDTO;
import br.edu.ifpb.dac.eliana.projetobordado.model.Bordado;
import br.edu.ifpb.dac.eliana.projetobordado.model.Linha;

@Service
public class ConverterService {
	
	public Bordado dtoToBordado(BordadoDTO dto) {
		Bordado bordado = new Bordado();
		bordado.setNome(dto.getNome());
		return bordado;
	}
	
	public BordadoDTO bordadoToDTO(Bordado bordado) {
		BordadoDTO dto = new BordadoDTO();
		dto.setNome(bordado.getNome());
		return dto;
	}
	
}
