package br.edu.ifpb.dac.eliana.projetobordado.model.servico;

import org.springframework.stereotype.Service;

import br.edu.ifpb.dac.eliana.projetobordado.model.Bordado;
import br.edu.ifpb.dac.eliana.projetobordado.model.Linha;
import br.edu.ifpb.dac.eliana.projetobordado.model.dto.BordadoDTO;
import br.edu.ifpb.dac.eliana.projetobordado.model.dto.LinhaDTO;

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
	
	public Linha dtoToLinha(LinhaDTO dto) {
		Linha linha = new Linha();
		linha.setNomeCor(dto.getNomeCor());
		linha.setCodigoCor(dto.getCodigoCor());
		return linha;
	}
	
	public LinhaDTO linhaToDTO(Linha linha) {
		LinhaDTO dto = new LinhaDTO();
		dto.setNomeCor(linha.getNomeCor());
		dto.setCodigoCor(linha.getCodigoCor());
		return dto;
	}

}
