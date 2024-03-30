<script setup>
  import {ref} from 'vue'
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
    


  </div>
</template>


<style>

</style>