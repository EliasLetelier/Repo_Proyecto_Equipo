document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. OBSERVADOR DE SCROLL (El Vigilante)
    // ==========================================
    const elementosOcultos = document.querySelectorAll('.oculto-al-scroll');

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('aparecer');
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.15 
    });

    elementosOcultos.forEach((elemento) => {
        observador.observe(elemento);
    });

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
                    legend: {
                        position: 'top',
                        labels: { 
                            font: { family: 'Rajdhani', size: 18, weight: 'bold' }, 
                            color: '#050505' 
                        }
                    },
                    tooltip: {
                        titleFont: { family: 'Rajdhani', size: 16 },
                        bodyFont: { family: 'Rajdhani', size: 14 }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { 
                            display: true, 
                            text: 'Cantidad Total de Faltas', 
                            color: '#050505', 
                            font: { family: 'Bebas Neue', size: 24 } 
                        },
                        ticks: { color: '#050505', font: { family: 'Rajdhani', size: 16, weight: 'bold' } }
                    },
                    x: {
                        ticks: { color: '#050505', font: { family: 'Bebas Neue', size: 20, letterSpacing: 1 } }
                    }
                }
            }
        });
    }
});
