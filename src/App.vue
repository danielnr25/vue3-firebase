<script setup>
  import {ref} from 'vue';

  const todos = ref([
    {id:1, title:"APRENDIENDO VUE3", description:"EN EL TALLER DE ISI 1"},
    {id:2, title:"APRENDIENDO REACT", description:"EN EL TALLER DE ISI 2"},
    {id:3, title:"APRENDIENDO JAVASCRIPT", description:"EN EL TALLER DE ISI 3"},
  ]);

</script>

<template>
  <div class="mx-auto max-w-7xl">
    <!-- TITULO -->
    <div class="py-8">
      <h1 class="text-center text-2xl font-bold uppercase text-blue-800"> Taller de Vue3 con Firebase</h1>
    </div>

    <!-- FORMULARIO -->
    <div class="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8">
      <div class="mt-2 sm:mx-auto sm:w-full sm:max-w-sm shadow-lg px-4 py-4 rounded-md">
        <form class="space-y-6">

          <div>
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
            <div class="mt-2">
              <input id="name" name="name" type="text" autocomplete="text" required class="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
    
          <div>
            <div class="flex items-center justify-between">
              <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Descripción</label>
            </div>
            <div class="mt-2">
              <textarea id="description" name="description" rows="3" class="block w-full rounded-md px-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </textarea>
            </div>
          </div>
    
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
          </div>
        </form>
    
        
      </div>
    </div>

    <!-- LISTADO DE LA BASE -->
    <div class="bg-white py-14 sm:py-14">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Listado de apps
          </h2>
        </div>
        <div
          class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <article
             v-for="todo in todos"
            class="flex max-w-xl flex-col items-start justify-between shadow-xl p-6 rounded-lg transition-colors duration-200 ease-in-out transform"
           
          >
            <div class="group relative">
              <h3
                class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
              >
                <p
                  class="block transition-colors duration-200"
            
                >
                {{ todo.title }}
                </p>
              </h3>
              <p class="mt-5 text-sm leading-6 text-gray-600">
               {{ todo.description }}
              </p>
            </div>
            <div class="relative mt-8 flex items-center justify-between gap-x-28">
              <!-- Checkbox para marcar como completado -->
              <div class="flex items-center gap-x-2">
                <input

                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span class="text-sm font-medium leading-6 text-gray-900">Completado</span>
              </div>
            
              <!-- Botón para eliminar el todo -->
              <button
 
                type="submit"
                class="flex justify-center w-24 rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Eliminar
              </button>
            </div>
            
          </article>
        </div>
      </div>
    </div>


  </div>
</template>


<style>

</style>