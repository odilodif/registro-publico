package ec.gob.registropublico.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import ec.gob.registropublico.model.Provincia;

;

//@Repository aqui realiza la persistencia con JPA
public interface IProvinciaRepo extends JpaRepository<Provincia, Integer> {
	
}
