package br.edu.ifpb.dac.eliana.projetobordado;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import br.edu.ifpb.dac.eliana.projetobordado.controller.BordadoController;
import br.edu.ifpb.dac.eliana.projetobordado.controller.LinhaController;

@SpringBootApplication
@EnableWebMvc
public class ProjetoBordadoApplication implements CommandLineRunner{

	@Autowired
	private LinhaController linhaCon;
	@Autowired
	private BordadoController bordadoController;
		
	public static void main(String[] args) {
		SpringApplication.run(ProjetoBordadoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
			
		// Esta dando erro de tranzação, pois a conexão com o banco finaliza 
		//apois terminar as consusltas com a linhas 
			
		/**
		bordadoController.bordadoSave("Logo do IFPB, frente");
		Bordado bordado1 =bordadoController.getEmbroidery("Logo do IFPB, frente");
		bordadoController.addLinha(312, bordado1);
		bordadoController.addLinha(262, bordado1);
		
		bordadoController.bordadoSave("site do IFPB, costa");
		Bordado bordado2 =bordadoController.getEmbroidery("site do IFPB, costa");
		bordadoController.addLinha(312, bordado2);
		
		bordadoController.bordadoSave("Bandeira da Paraiba, manga esquerda");
		Bordado bordado3 =bordadoController.getEmbroidery("site do IFPB, costa");
		bordadoController.addLinha(312, bordado3);
		bordadoController.addLinha(253, bordado3);
		bordadoController.addLinha(299, bordado3);
		
		bordadoController.bordadoSave("Bandeira de Monteiro, manga direita");
		Bordado bordado4 =bordadoController.getEmbroidery("site do IFPB, costa");
		bordadoController.addLinha(312, bordado4);
		bordadoController.addLinha(253, bordado4);
		bordadoController.addLinha(299, bordado4);
		 **/

	}

}
