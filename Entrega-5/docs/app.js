// 1. Seleccionamos todos los elementos que tengan la clase 'oculto-al-scroll'
const elementosOcultos = document.querySelectorAll('.oculto-al-scroll');

// 2. Creamos el "vigilante" (Intersection Observer)
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        // Si el elemento entra en la pantalla del usuario...
        if (entrada.isIntersecting) {
            // Le agregamos la clase 'aparecer' para que el CSS haga la animación
            entrada.target.classList.add('aparecer');
            
            // (Opcional) Si queremos que la animación ocurra solo una vez y se quede ahí,
            // dejamos que el vigilante deje de mirarlo:
            observador.unobserve(entrada.target);
        }
    });
}, {
    // Configuración: El 0.2 significa que la animación arrancará cuando 
    // al menos el 20% del elemento sea visible en la pantalla.
    threshold: 0.2 
});

// 3. Le decimos al vigilante que comience a observar cada elemento que encontramos
elementosOcultos.forEach((elemento) => {
    observador.observe(elemento);
});
