document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // ELEMENTOS DEL PERFIL
    // ==========================================
    const iconPerfil = document.getElementById('icon-perfil');
    const windowPerfil = document.getElementById('window-perfil');
    const btnClosePerfil = document.getElementById('close-perfil');

    // ==========================================
    // ELEMENTOS DE PROYECTOS
    // ==========================================
    const iconProyectos = document.getElementById('icon-proyectos');
    const windowProyectos = document.getElementById('window-proyectos');
    const btnCloseProyectos = document.getElementById('close-proyectos');

    // ==========================================
    // ELEMENTOS DE CONTACTO
    // ==========================================
    const iconContacto = document.getElementById('icon-contacto');
    const windowContacto = document.getElementById('window-contacto');
    const btnCloseContacto = document.getElementById('close-contacto');

    // ==========================================
    // EVENTOS DE CONTACTO
    // ==========================================
    iconContacto.addEventListener('click', () => openWindow(windowContacto));
    btnCloseContacto.addEventListener('click', () => closeWindow(windowContacto));

    // ==========================================
    // ELEMENTOS DE RESUMEN
    // ==========================================
    const iconResumen = document.getElementById('icon-resumen');
    const windowResumen = document.getElementById('window-resumen');
    const btnCloseResumen = document.getElementById('close-resumen');

    // ==========================================
    // EVENTOS DE RESUMEN
    // ==========================================
    iconResumen.addEventListener('click', () => openWindow(windowResumen));
    btnCloseResumen.addEventListener('click', () => closeWindow(windowResumen));

    // ==========================================
    // FUNCIONES GLOBALES
    // ==========================================
    const openWindow = (windowElement) => {
        windowElement.classList.add('active');
    };

    const closeWindow = (windowElement) => {
        windowElement.classList.remove('active');
    };

    // ==========================================
    // EVENTOS
    // ==========================================
    iconPerfil.addEventListener('click', () => openWindow(windowPerfil));
    btnClosePerfil.addEventListener('click', () => closeWindow(windowPerfil));
    
    iconProyectos.addEventListener('click', () => openWindow(windowProyectos));
    btnCloseProyectos.addEventListener('click', () => closeWindow(windowProyectos));

    document.querySelectorAll('.window-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeWindow(overlay);
            }
        });
    });
});