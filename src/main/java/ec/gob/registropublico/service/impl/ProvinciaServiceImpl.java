package ec.gob.registropublico.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ec.gob.registropublico.model.Provincia;
import ec.gob.registropublico.repo.IProvinciaRepo;
import ec.gob.registropublico.service.IProvinciaService;

@Service 
public class ProvinciaServiceImpl implements IProvinciaService{

	@Autowired
	private IProvinciaRepo repo; //Acceso a la base de Datos mediante @Autowired trae una instanacia // new  IPacienteRepo 
	
	
	@Override
	public Provincia registrar(Provincia obj) {
		// TODO Auto-generated method stub
		return repo.save(obj);
	}

	@Override
	public Provincia modificar(Provincia obj) {
		// TODO Auto-generated method stub
		return repo.save(obj);
	}

	@Override
	public List<Provincia> lista() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Provincia listarPorId(Integer id) {
		// TODO Auto-generated method stub
		Optional<Provincia>  op = repo.findById(id);
		return op.isPresent() ? op.get() : new Provincia();
	}

	@Override
	public boolean eliminar(Integer id) {
		repo.deleteById(id);
		return true;
	}

}
