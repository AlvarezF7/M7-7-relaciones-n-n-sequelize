document.addEventListener('DOMContentLoaded', () => {
  cargarPeliculas();
  cargarActores();
});

// Cargar todas las películas
async function cargarPeliculas() {
  try {
    const res = await fetch('/pelicula'); 
    const data = await res.json();

    const lista = document.getElementById('listaPeliculas');
    lista.innerHTML = '';

    data.forEach(p => {
      const li = document.createElement('li');
      // Contenedor superior (texto + botón)
      const contenedor = document.createElement('div');
      const texto = document.createElement('span');
        texto.textContent = `${p.titulo} (${p.anio})`;
      const btn = document.createElement('button');
        btn.textContent = 'X';
        btn.classList.add('btn-eliminar');
        btn.onclick = () => eliminarPelicula(p.id);

        contenedor.appendChild(texto);
        contenedor.appendChild(btn);
        li.appendChild(contenedor);

      // Mostrar actores asociados
      if (p.Actors && p.Actors.length > 0) {
        const sub = document.createElement('ul');

        p.Actors.forEach(a => {
          const subLi = document.createElement('li');
          subLi.textContent = a.nombre;
          sub.appendChild(subLi);
        });

        li.appendChild(sub);
      }

      lista.appendChild(li);
    });

  } catch (err) {
    console.error('Error al cargar películas:', err);
  }
}

// Crear nueva película
async function crearPelicula() {
  const tituloInput = document.getElementById('titulo');
  const anioInput = document.getElementById('anio');
  const titulo = tituloInput.value.trim();
  const anio = parseInt(anioInput.value);

  if (!titulo || !anio) {
    alert('Por favor completa todos los campos de la película.');
    return;
  }
  try {
    await fetch('/pelicula', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, anio })
    });
    tituloInput.value = '';
    anioInput.value = '';
    cargarPeliculas();

  } catch (err) {
    console.error('Error al crear película:', err);
  }
}
// Cargar todos los actores
async function cargarActores() {
  try {
    const res = await fetch('/actor');
    const data = await res.json();
    const lista = document.getElementById('listaActores');
    lista.innerHTML = ''; // vacía antes de mostrar
    data.forEach(a => {
      const li = document.createElement('li');
      li.textContent = `${a.nombre} (${a.fecha_nacimiento})`;

      if (a.Peliculas && a.Peliculas.length > 0) {
        const sub = document.createElement('ul');
        a.Peliculas.forEach(p => {
          const subLi = document.createElement('li');
          subLi.textContent = p.titulo;
          sub.appendChild(subLi);
        });
        li.appendChild(sub);
      }
      lista.appendChild(li);
    });

  } catch (err) {
    console.error('Error al cargar actores:', err);
  }
}

// Crear nuevo actor
async function crearActor() {
  const nombreInput = document.getElementById('nombre');
  const fechaInput = document.getElementById('fecha_nacimiento');

  const nombre = nombreInput.value.trim();
  const fecha_nacimiento = fechaInput.value;

  if (!nombre || !fecha_nacimiento) {
    alert('Por favor completa todos los campos del actor.');
    return;
  }

  try {
    await fetch('/actor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, fecha_nacimiento })
    });
    nombreInput.value = '';
    fechaInput.value = '';
     cargarActores();    // Recargar listado
  } catch (err) {
    console.error('Error al crear actor:', err);
  }
}

async function cargarSelects() {
  // Películas
  const resP = await fetch('/pelicula');
  const peliculas = await resP.json();
  const selectP = document.getElementById('selectPelicula');
  selectP.innerHTML = '';
  peliculas.forEach(p => {
    const option = document.createElement('option');
    option.value = p.id;
    option.textContent = p.titulo;
    selectP.appendChild(option);
  });
  // Actores
  const resA = await fetch('/actor');
  const actores = await resA.json();
  const selectA = document.getElementById('selectActor');
  selectA.innerHTML = '';
  actores.forEach(a => {
    const option = document.createElement('option');
    option.value = a.id;
    option.textContent = a.nombre;
    selectA.appendChild(option);
  });
}
// Asignar actor a película
async function asignarActor() {
  const pelicula_id = document.getElementById('selectPelicula').value;
  const actor_id = document.getElementById('selectActor').value;
  await fetch('/asignar-actor', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pelicula_id, actor_id })
  });

  cargarPeliculas();
  cargarActores();
}

//elimina pelicula
async function eliminarPelicula(id) {
  if (!confirm('¿Eliminar esta película?')) return;

  await fetch(`/pelicula/${id}`, {
    method: 'DELETE'
  });
  cargarPeliculas(); // refresca lista
}
// Llamar al cargar página
document.addEventListener('DOMContentLoaded', () => {
  cargarPeliculas();
  cargarActores();
  cargarSelects();
});