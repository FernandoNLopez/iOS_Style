import { create } from 'zustand';
import {immer} from "zustand/middleware/immer";
import {INITIAL_Z_INDEX, WINDOW_CONFIG} from "#constants/index.js";

/*
  Creamos un store global usando Zustand.
  - create(): crea el hook del store.
  - immer(): middleware que permite mutar el estado directamente(como si fuera mutable), pero internamente mantiene la inmutabilidad.
*/


/* set --> ESTADO INICIAL.*/
const useWindowStore = create(immer((set) => (
    {
        /* windows: Objeto que contiene todas las ventanas disponibles en la app. Se inicializa desde una constante externa para mantener el store limpio y desacoplado de la configuración. */
    windows: WINDOW_CONFIG,
        /* nextZIndex:Lleva el control del siguiente z-index disponible. Cada vez que una ventana se abre o se enfoca, se le asigna este valor y luego se incrementa. */
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) => set((state) => {

        /* Obtenemos la ventana específica usando su clave. */
        const win = state.windows[windowKey];

        win.isOpen = true;                                      // Marcamos la ventana como abierta. Para que inicie el render del componente.
        win.zIndex = state.nextZIndex;                          // Le asignamos el z-index más alto disponiblepara que se muestre por encima del resto.
        win.data = data ?? win.data;                            // Si se pasa data, la usamos.Si no, mantenemos la data anterior (nullish coalescing ??).
        state.nextZIndex++;                                     // Incrementamos el contador global de zIndex. Así evitamos colisiones entre ventanas.

    }),
    closeWindow: (windowKey) => set((state) => {

        /* Obtenemos la ventana que queremos cerrar. */
        const win = state.windows[windowKey];

        win.isOpen = false;                                     // Marcamos la ventana como cerrada.
        win.zIndex = INITIAL_Z_INDEX                            // Reseteamos su zIndex al valor inicial.
        win.data = null;                                        // Limpiamos cualquier dato asociado a la ventana.

    }),
    focusWindow: (windowKey) => set((state) => {

        /* Obtenemos la ventana que queremos priorizar visualmente. */
        const win = state.windows[windowKey];

        win.zIndex = state.nextZIndex++;                       // Le asignamos el siguiente zIndex disponible. Asignamos el valor actual y luego incrementamos.
    })
    })),
);

export default useWindowStore;

