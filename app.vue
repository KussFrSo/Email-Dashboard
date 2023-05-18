<template>
  <div class="flex">
    <Sidebar />
    <InboxMessage :class="[emailOpen && isMobileOrTablet ? 'hidden' : '']"/>
    <div
      v-if="emailOpen"
      class="h-screen relative md:w-full w-screen transition border-l border-zinc-800">
      <InboxDetailsHead/>

      <div class="px-10 py-7 border-b border-zinc-800">
        <!-- Detalles -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-3">
          <div class="flex items-center gap-5">
            <img
              src="https://randomuser.me/api/portraits/med/men/81.jpg"
              alt="user image"
              class="obj-cover rounded-full w-10 h-10 ring-1 ring-zinc-700/10" />
            <div>
              <p class="text-sm -mb-1">Marc Franch</p>
              <a class="text-xs text-zinc-500" href="mailto:marc.franch@wheelhub.es"
                >marc.franch@wheelhub.es</a
              >
            </div>
          </div>
          <div>
            <span class="text-xs text-zinc-500 font-medium">10:17 PM (3hr ago)</span>
          </div>
        </div>
        <!-- Mensaje -->
        <h2 class="mt-10 font-medium">Entrevista - WheelHub</h2>
        <div class="text-zinc-400 text-sm mt-5 space-y-3">
          <p>Hola Marc, como estas?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, a adipisci
            sequi vitae provident nisi eaque dolore tenetur rem vel perferendis quae earum
            laudantium, ipsum eius? Reiciendis dolore molestiae atque.
          </p>
        </div>

        <div class="flex itmes-center justify-between text-sm text-zinc-200 mt-10">
          <p>WheelHub</p>
          <a class="underline underline-offset-2" href="www.wheelhub.es">www.wheelhub.es</a>
        </div>

        <!-- Opciones -->
        <div class="absolute bottom-0 left-0 w-full bg-zinc-900/50 px-7 h-12 flex items-center justify-between">
            <div class="flex items-center gap-5">
              <button class="text-sm flex items-center gap-2">
                <Icon name="solar:reply-bold-duotone" size="20"/>
                Reply
              </button>
              <button class="text-sm flex items-center gap-2">
                <Icon name="solar:forward-bold-duotone" size="20"/>
                Forward
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const emailOpen = useState('emailOpen', () => false); // Estado global para acceder desde otros componentes
  const { isMobileOrTablet } = useDevice();

  useHead({
    bodyAttrs: {
      class: 'bg-zinc-950 text-zinc-50 min-h-screen',
    },
  });

</script>
