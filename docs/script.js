document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. OBSERVADOR DE SCROLL (El Vigilante Mejorado)
    // ==========================================
    const elementosOcultos = document.querySelectorAll('.oculto-al-scroll');
    
    // Configuramos el observador con un margen para que reaccione antes
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('aparecer');
                // Dejamos de observar una vez que aparece
                observador.unobserve(entrada.target);
            }
        });
    }, { 
        threshold: 0.05, // Se activa cuando solo el 5% del elemento es visible (más fácil de activar)
        rootMargin: "0px 0px -50px 0px" // Le da un pequeño "empujón" visual
    });

    // Pequeño retraso para asegurar que el DOM está listo
    setTimeout(() => {
        elementosOcultos.forEach((elemento) => { 
            observador.observe(elemento); 
        });
        
        // Carga de emergencia: Si estás hasta arriba de la página, muestra los primeros elementos por si acaso
        entradasIniciales = document.querySelectorAll('.seccion-expediente .oculto-al-scroll');
        entradasIniciales.forEach(el => {
            if(el.getBoundingClientRect().top < window.innerHeight) {
                 el.classList.add('aparecer');
            }
        });
    }, 100);

    // ==========================================
    // 2. GRÁFICO INTERACTIVO CHART.JS
    // ==========================================
    const canvasGrafico = document.getElementById('graficoFaltas');
    if (canvasGrafico) {
        const ctx = canvasGrafico.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Temporada 2012 (4 partidos)', 'Temporada 2025 (3 partidos)'],
                datasets: [
                    {
                        label: 'Faltas Univ. de Chile',
                        data: [39, 43],
                        backgroundColor: '#002266', // Azul
                        borderColor: '#050505',
                        borderWidth: 3
                    },
                    {
                        label: 'Faltas Colo-Colo',
                        data: [87, 40],
                        backgroundColor: '#dddddd', // Blanco
                        borderColor: '#050505',
                        borderWidth: 3
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top', labels: { font: { family: 'Rajdhani', size: 18, weight: 'bold' }, color: '#050505' } },
                    tooltip: { titleFont: { family: 'Rajdhani', size: 16 }, bodyFont: { family: 'Rajdhani', size: 14 } }
                },
                scales: {
                    y: { beginAtZero: true, title: { display: true, text: 'Cantidad Total de Faltas', color: '#050505', font: { family: 'Bebas Neue', size: 24 } }, ticks: { color: '#050505', font: { family: 'Rajdhani', size: 16, weight: 'bold' } } },
                    x: { ticks: { color: '#050505', font: { family: 'Bebas Neue', size: 20, letterSpacing: 1 } } }
                }
            }
        });
    }

    // ==========================================
    // 3. FUNCIONES GLOBALES (ACORDEÓN)
    // ==========================================
    const itemsAcordeon = document.querySelectorAll('.item-acordeon');
    itemsAcordeon.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('activo');
        });
    });
});
