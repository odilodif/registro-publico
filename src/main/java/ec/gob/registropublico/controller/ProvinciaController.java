package ec.gob.registropublico.controller;

import java.util.List;

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

import ec.gob.registropublico.exceptions.ModeloNotFoundExeption;
import ec.gob.registropublico.model.Provincia;
import ec.gob.registropublico.service.IProvinciaService;

@RestController // Le vamos indicar a spring que este es un servicio RestController Rutas manejo
// // de Rutas
@RequestMapping("/provincias") // Un nombre en particular con anotacion RequesteMaping 
public class ProvinciaController {
	
	@Autowired
	private IProvinciaService service;
	
	@GetMapping
	public ResponseEntity<List<Provincia>> listar() {
		List<Provincia> lista = service.lista();
		return new ResponseEntity<List<Provincia>>(lista, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Provincia> listarPorId(@PathVariable("id") Integer id) {

		Provincia obj = service.listarPorId(id);

		if (obj.getIdProvincia() == null) {
			throw new ModeloNotFoundExeption("ID NO ENCONTRADO: " + id);

		} else {

		}

		return new ResponseEntity<Provincia>(obj, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Provincia> registrar(@RequestBody Provincia obj) {

		Provincia pac = service.registrar(obj);
		return new ResponseEntity<Provincia>(pac, HttpStatus.CREATED);
	}

	
	@PutMapping
	public ResponseEntity<Provincia> modificar(@RequestBody Provincia obj) {

		Provincia paciente = service.modificar(obj);
		return new ResponseEntity<Provincia>(paciente, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> eliminar(@PathVariable("id") Integer id) { // Retorna Vacio al poner Object
																				// //ResponseEntity<Object>
		service.eliminar(id);
		return new ResponseEntity<Object>(HttpStatus.NO_CONTENT);
	}


}
